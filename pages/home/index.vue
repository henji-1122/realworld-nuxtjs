<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">WangXc conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link class="nav-link" :class="{active: tab === 'your_feed'}" exact :to="{
                  name: 'home',
                  query: {
                    tab: 'your_feed'
                  }
                }">Your Feed</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{active: tab === 'global_feed'}" exact :to="{
                  name: 'home'
                }">Global Feed</nuxt-link>
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link class="nav-link" :class="{active: tab === 'tag'}" exact :to="{
                  name: 'home',
                  query: {
                    tab: 'tag',
                    tag: tag
                  }
                }"># {{ tag }}</nuxt-link>
              </li>
            </ul>
          </div>

          <!-- 文章列表 -->
          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link
                :to="{
                name: 'profile',
                params: {username:article.author.username }
                }"
              >
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link
                  class="author"
                  :to="{
                  name: 'profile',
                  params: {username:article.author.username }
                  }"
                >{{article.author.username}}</nuxt-link>
                <span class="date">{{article.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{active: article.favorited}"
                @click="onFavorite(article)"
                :disabled="article.favoriteDisabled"
              >
                <i class="ion-heart"></i>
                {{article.favoritesCount}}
              </button>
            </div>
            <nuxt-link
              class="preview-link"
              :to="{
                name: 'article',
                params: {slug: article.slug }
                }"
            >
              <h1>{{article.title}}</h1>
              <p>{{article.description}}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>

          <!-- 分页 -->
          <nav>
            <ul class="pagination">
              <li
                class="page-item"
                v-for="item in totalPage"
                :key="item"
                :class="{active: item === page}"
              >
                <!-- <a class="page-link" :href="'/?page=' + item">{{item}}</a> -->
                <nuxt-link
                  class="page-link"
                  :to="{
                  name: 'home',
                  query: {
                    page: item,
                    tag: $route.query.tag,
                    tab: tab
                  }
                }"
                >{{item}}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <nuxt-link class="tag-pill tag-default" v-for="item in tags" :key="item" :to="{
                name: 'home',
                query: {
                  tab: 'tag',
                  tag: item
                }
              }">{{item}}</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getArticles, getYourFeedArticles, addFavorite, deleteFavorite } from '@/api/article'
import { getTags } from '@/api/tag'
import favoriteManipulate from '@/utils/onFavorite'

import { mapState } from 'vuex'

export default {
  name: 'HomeIndex',
  async asyncData ({ query }) {
    const page = Number.parseInt(query.page || 1) // 第几页,从地址栏参数中获取
    const limit = 20 // 每页显示几条
    const tab = query.tab || 'global_feed'  // tab标签导航
    const tag = query.tag // 文章标签
    const loadArticles = tab === 'global_feed'
    ? getArticles : getYourFeedArticles
    /*
        // 获取文章列表
        const { data } = await getArticles({
          limit,
          offset: (page - 1) * limit  // 分页
        })
        // console.log(data)

        // 获取文章标签列表
        const { data: tagData } = await getTags()
        // console.log(tagData)
    
         return {
          articles: data.articles,
          articlesCount: data.articlesCount,
          limit,
          page,
          tags: tagData.tags
        }
    
    */
    /* 当多个连续的异步操作之间没有任何依赖，可以优化为并行执行 */
    const [ articleRes, tagRes ] = await Promise.all([
      // 获取文章列表
      loadArticles({
        limit,
        offset: (page - 1) * limit,  // 分页
        tag
      }),
      // 获取文章标签列表
      getTags()
    ])

    const { articles, articlesCount } = articleRes.data
    const { tags } = tagRes.data

    // 给每条文章添加一个属性
    articles.forEach(article => article.favoriteDisabled = false)

    return {
      articles, // 文章列表
      articlesCount, // 文章总数 
      tags, // 标签列表
      limit, // 每页大小
      page, // 页码
      tab, // 选项卡标签导航
      tag // 文章标签
    }
  },
  // query参数的变化不会导致路由组件的重新渲染,需要使用watchQuery监听query的变化
  watchQuery: ['page', 'tag', 'tab'],
  computed: {
    ...mapState(['user']),
    // 分页总数
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },

  methods: {
    onFavorite (article) {
      console.log(article)
      /**
      // 可点击
      article.favoriteDisabled = true
      if (article.favorited) {
        // 取消点赞
        deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        // 添加点赞
        addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      // 不可点击
      article.favoriteDisabled = false
      */

      // 封装公用点赞事件
      favoriteManipulate(article)
    }
  }
}
</script>

<style>
</style>