<template>
  <div class="article-preview">
    <div class="article-meta">
      <next-link :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }">
        <img src="article.author.image" />
      </next-link>
      <div class="info">
        <next-link :to="{
          name: 'profile',
          params: {
            username: article.author.username
          }
        }" class="author">{{article.author.username}}</next-link>
        <span class="date">{{article.createAt | date('MMM DD, YYYY')}}</span>
      </div>
      <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{active: article.favorited}"
      @click="$emit('favorite')" :disabled="btnDisabled"
      >
        <i class="ion-heart"></i> {{article.favoritesCount}}
      </button>
    </div>
    <next-link :to="{
      name: 'article',
      params: {
        slug: article.slug
      }
    }" class="preview-link">
      <h1>{{article.title}}</h1>
      <p>{{article.description}}</p>
      <span>Read more...</span>
    </next-link>
    <!-- 标签 -->
    <ul class="tag-list">
        <li class="tag-default tag-pill tag-outline" v-for="tag in article.tagList" :key="tag">
          {{ tag }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  
  props: {
    article: {
      type: Object,
      required: true
    },
    btnDisabled: {
      type: Boolean
    }
  }
}
</script>

<style>
</style>