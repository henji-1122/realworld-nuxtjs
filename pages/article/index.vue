<!--
 * Author: Wangxc
 * Date: 2020-08-25
 * Path: \realworld-nuxtjs\src\pages\article\index.vue
 * Description: 文章详情
-->
<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>

        <Mate :article="article" 
        @follow="onFollow(article.author)" 
        @favorite="onFavorite(article)"
        @delete-article="onDeleteArticle"
        @edit-article="onEditArticle"
        :articleDisabled="article.favoriteDisabled" 
        :followDisabled="article.author.favoriteDisabled"
        />

      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12" v-html="article.body"></div>
      </div>

      <hr />
    
      <div class="article-actions">
        <Mate :article="article" 
        @follow="onFollow(article.author)" 
        @favorite="onFavorite(article)"
        @delete-article="onDeleteArticle"
        @edit-article="onEditArticle"
        :articleDisabled="article.favoriteDisabled" 
        :followDisabled="article.author.favoriteDisabled"
        />
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <Comment :article="article" />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
// 引入组件
import Mate from '@/components/Mate.vue'
import Comment from '@/components/Comment.vue'

// 引入接口函数
import { getArticle, deleteArticle } from '@/api/article'
import { follow, unFollow } from '@/api/user'
import favoriteManipulate  from '@/utils/onFavorite'

// 引入插件
import MarkdownIt from 'markdown-it'

export default {
  name: "ArticleIndex",
  async asyncData ({ params }) {
    const { data } = await getArticle(params.slug)
    // console.log(data)
    const { article } = data
    const md = new MarkdownIt()
    article.body = md.render(article.body)
    // 给文章和用户添加属性,在发送请求时禁止点击按钮
    article.favoriteDisabled = false
    article.author.favoriteDisabled = false 
    console.log(article)
    return {
      // article: data.article
      article
    }
  },
  
  components: {
    Mate,
    Comment
  },

  // 设置页面meta 优化SEO
  head() {
    return {
      title: `${this.article.title} - RealWorld`, // title mate
      meta: [
        {
          hid: 'description', //为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为 meta 标签配一个唯一的标识编号
          name: 'description',
          content: this.article.description  // 文章内容
        }
      ]
    }
  },

  mounted () {
  },

  methods: {
    // 关注\取消关注
    onFollow (author) {
      // 关注请求时，禁用按钮
      author.favoriteDisabled = true
      if (author.following) {
        // 取消关注
        console.log('------','unFollow')
        unFollow(author.username)
        author.following = false
      } else {
        // 添加关注
        follow(author.username)
        author.following = true
      }
      author.favoriteDisabled = false
    },

    // 点赞\取消点赞
    onFavorite (article) {
      favoriteManipulate(article)
    },

    // 删除文章
    async onDeleteArticle () {
      await deleteArticle(this.article.slug)
      this.$router.replace({
        path: 'home'
      })
    },

    // 编辑文章
    onEditArticle () {
      this.$router.push({
        path: `/editor/${this.article.slug}`
      })
    }
  }
}
</script>

<style>
</style>