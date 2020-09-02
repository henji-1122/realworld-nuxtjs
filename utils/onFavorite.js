/* 点赞|取消点赞 */ 

// 载入点赞和取消点赞的请求方法
import { addFavorite, deleteFavorite } from '@/api/article'

export default async function (article) {
  console.log(article)
  // 点赞请求时不可点击
  article.favoriteDisabled = true
  if (article.favorited) {
    // 取消点赞
    await deleteFavorite(article.slug)
    article.favorited = false
    article.favoritesCount += -1
  } else {
    // 添加点赞
    await addFavorite(article.slug)
    article.favorited = true
    article.favoritesCount += 1
  }
  // 点赞请求结束后可点击
  article.favoriteDisabled = false
}
