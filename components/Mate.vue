<!--
 * @Author: Wangxc
 * @Date: 2020-08-25
 * @FilePath: \realworld-nuxtjs\src\components\Mate.vue
 * @Description: 文章数据组件
-->
<template>
  <div class="article-meta">
          <nuxt-link :to="{
            name: 'profile',
            params: {
              username: article.author.username
            }
          }">
            <img src="article.author.image" />
          </nuxt-link>
          <div class="info">
            <nuxt-link class="author" :to="{
              name:'profile',params: {
              username: article.author.username
            }
            }">{{article.author.username}}</nuxt-link>
            <span class="date">{{article.createdAt | date('MMM DD, YYYY') }}</span>
          </div>

          <template v-if="user ? user.username !== article.author.username : true">
            <button class="btn btn-sm btn-outline-secondary" :class="{active: article.author.following}" 
            @click="$emit('follow')" :disabled="followDisabled"
            >
              <i class="ion-plus-round"></i>
              &nbsp;
              {{article.author.following ? 'UnFollow' : 'Follow'}} {{ article.author.username }}
              <span class="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button class="btn btn-sm btn-outline-primary" :class="{active: article.favorited}"
            @click="$emit('favorite')" :disabled="articleDisabled"
            >
              <i class="ion-heart"></i>
              &nbsp;
              Favorite Post
              <span class="counter">{{article.favoritesCount}}</span>
            </button>
          </template>

          <template v-else>
            <button class="btn btn-sm btn-outline-secondary" @click="$emit('edit-article')"
            >
              <i class="ion-edit"></i>
              &nbsp;
              Edit Article
            </button>
            &nbsp;
            <button class="btn btn-sm btn-outline-danger" @click="$emit('delete-article')">
              <i class="ion-trash-a"></i>
              &nbsp;
              Delete Article
            </button>
          </template>
          
        </div>
</template>

<script>
import { addFavorite, deleteFavorite } from '@/api/article'
import { mapState } from 'vuex'

export default {
  name: 'Meta',

  props: {
    article: {
      type: Object,
      required: true
    },
    articleDisabled: {
      type: Boolean,
      required: true
    },
    followDisabled: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    ...mapState(['user'])
  }
}
</script>

<style>

</style>