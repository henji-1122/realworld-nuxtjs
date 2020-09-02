<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form @submit="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input type="text" v-model="article.title" class="form-control form-control-lg" placeholder="Article Title" />
              </fieldset>
              <fieldset class="form-group">
                <input type="text" v-model="article.description" class="form-control" placeholder="What's this article about?" />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  v-model="article.body"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input type="text" v-model="article.tags" class="form-control" placeholder="Enter tags" />
                <div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="submit" :disabled="publishing">Publish Article</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createArticle, getArticles, publishArticle, updateArticle } from '@/api/article'

export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: "EditorIndex",

  data () {
    return {
      article: {
        title: '',
        description: '',
        body: '',
        tagList: []
      },
      publishing: false,
      create: true
    }
  },

  methods: {
    onSubmit (event) {
      event.preventDefault()
      // 判断是发布新文章还是更新文章
      this.create === true ? this.publishArticle() : this.updateTheArticle()
    },

    async publishArticle () {
      this.publishing = true
      let article = {}
      // 文章标签处理
      let tags = this.article.tags
      console.log('-----',tags)
      let tagList = []
      if (tags != '') {
        tagList = tags.split(',').map((tag) => tag.trim())
      }
      // 初始化article
      Object.keys(this.article).forEach(key => {
        if (key === 'tags') {
          article['tagList'] = tagList
        } else {
          article[key] = this.article.key
        }
      })

      const { data } = await createArticle(article)
      this.publishing = false
      this.$router.push({
        name: 'article',
        params: {
          slug: data.article.slug
        }
      })
    },

    updateTheArticle () {
      this.publishing = true
      const { data } = updateArticle(this.$router.params.slug, this.article)
      this.publishing = false
      const newArticle = data.article
      this.$router.push({
        name: 'article',
        params: {
          slug: newArticle.slug
        }
      })
    }
  },

  async mounted () {
    // 根据路径中slug获取当前文章属性
    if (this.$route.params.slug) {
      const { data } = await getArticle(this.$toute.params.slug)
      const article = data.article
      console.log(article)

      Object.keys(this.article).forEach(key => {
        if (article[key]) {
          this.article[key] = article[key]
        }
      })
      this.create = false
    }
  }
}
</script>

<style>
</style>