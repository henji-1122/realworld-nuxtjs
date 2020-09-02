<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{user.username}}</h4>
            <p>{{user.description}}</p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              Follow Eric Simons
            </button>
          </div>
        </div>
      </div>
    </div>



    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link class="nav-link" :to="{
                  path: `/profile/${user.username}`
                }"
                exact 
                >My Articles
              </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :to="{
                  path: `/profile/${user.username}`,
                  query: {
                    favorites: 'favorites'
                  }
                }"
                exact
                :class="{
                  active: favorites === 'favorites'
                }"
                >Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>

            <ArticleList v-for="article in articles" :article="article" :key="article.slug" 
            @favorite="onFavorite(article)" :btnDisabled="article.favoriteDisabled" />

            <nav>
              <ul class="pagination">
                <li class="page-item" :class="{ active: page === item }"  v-for="item in totalPage" :key="item">
                  <nuxt-link :to="{
                    name: 'profile',
                    query: {
                      page: item,
                      favorites: favorites
                    }
                  }" class="page-link">{{ item }}</nuxt-link>
                </li>
              </ul>
            </nav>
          
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import { getArticle } from '@/api/article'
import favoriteManipulate from '@/utils/onFavorite'

import ArticleList from '@/components/ArticleList.vue'

export default {
  middleware: 'authenticated', // 路由路由拦中间件
  name: "Profile",
  
  async asyncData ({store, query}) {
    const page = Number.parseInt(query.page) || 1 // 第几页,从地址栏参数中获取
    const limit = 2  // 每页显示2条
    const username = store.state.user.username
    const params = {
      limit,
      offset: (page - 1) * limit,  // 分页
    }
    if (query.favorites === 'favorites') {
      params.favorited =  username
    } else {
      params.author = username
    }

    const { data } = await getArticle(params)
    const articles = data.articles
    const articlesCount = data.articlesCount
    articles.forEach(article => {
      article.favoriteDisabled = false
    });
    const result = {
      articles,
      articlesCount,
      page,
      limit,
      favorites: undefined
    }
    if (query.favorites === 'favorites') {
      result.favorites = 'favorites'
    }
    return result
  },

  computed: {
    ...mapState(['user']),
    // 通过总页数和每页显示条数，得到页码
    totalPage () {
      return Math.ceil(this.articlesCount / this.limit)
    }
  },
  
  components: {
    ArticleList
  },

  // 获取用户文章列表
  async mounted() {
    const query = this.$route.query
    console.log(query)
    const page = Number.parseInt(query.page) || 1
    const limit = 2
    const username = this.user.username
    const params = {
      limit,
      offset: (page - 1) * limit
    }
    if (query.favorites === 'favorites') {
      params.favorited =  username
    } else {
      params.author = username
    }

    const { data } = await getArticle(params)
    const articles = data.articles
    this.articles = articles
  },

  methods: {
    onFavorite (article) {
      favoriteManipulate(article)
    }
  }
}
</script>

<style>
</style>