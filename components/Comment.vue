<!--
 * @Author: Wangxc
 * @Date: 2020-08-25
 * @FilePath: \realworld-nuxtjs\src\components\Comment.vue
 * @Description: 发表评论及评论列表组件
-->
<template>
  <div>
    <form class="card comment-form" @submit="postComment">
      <div class="card-block">
        <textarea class="form-control" placeholder="Write a comment..." rows="3"
        v-model="comment"

        ></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">Post Comment</button>
      </div>
    </form>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p
          class="card-text"
        >{{comment.body}}</p>
      </div>
      <div class="card-footer">
        <nuxt-link class="comment-author" :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }">
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <a href class="comment-author">{{comment.author.username}}</a>
        <span class="date-posted">{{comment.createdAt | date('MMM DD, YYYY')}}</span>
        <span class="mod-options" v-if="comment.author.username === user.username">
            <!-- <i class="ion-edit"></i> -->
            <i class="ion-trash-a" @click="deleteComment(comment.id)"></i>
          </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments, postArticleComment, deleteArticleComment } from '@/api/article'
import { mapState } from 'vuex'

export default {
  name: 'Comment',

  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      comments: [], // 文章评论列表
      comment: this.body || ''
    }
  },

  // 通过客户端渲染展示评论列表
  async mounted () {
    const { data } = await getComments(this.article.slug)
    // console.log(data)
    this.comments = data.comments
  },

  computed: {
    ...mapState(['user'])
  },
  
  methods: {
    // 发布评论
    async postComment () {
      const comment = await postArticleComment(this.article.slug, this.comment)
      this.comment = ''
    },

    // 删除评论
    async deleteComment (id) {
      await deleteArticleComment(this.article.slug, id)
      this.comments = this.comments.filter(comment => comment.id !== id)
    }
  }
}
</script>

<style>

</style>