import { request } from '@/plugins/request'

// 获取文章列表
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params // 用户传入的参数统一接收
  })
}

// 获取用户关注的文章列表
export const getYourFeedArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params
    // 无需在此手动写入token，通过请求插件request的拦截器中统一获取设置
    // headers: {
    //   Authorization: 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTExMjA1LCJ1c2VybmFtZSI6ImNob25nY2hvbmciLCJleHAiOjE2MDM0NDYzMjN9.s25bm8iSucGTvwrrRluWAKwZP9X76nPzIhZYNGdLQtc'
    // }
  })
}

// 添加点赞
export const addFavorite = slug => {  // slug 文章标识(别名路径)
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => { 
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

// 获取文章详情
export const getArticle = slug => { 
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论
export const getComments = slug => { 
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

// 发布对文章的评论
export const postArticleComment = (slug, comment) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: {
      comment: {
        body: comment
      }
    }
  })
}

// 删除对文章的评论
export const deleteArticleComment = (slug, id) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  })
}

// 发表文章
export const createArticle = (article) => {
  return request({
    method:'POST',
    url: '/api/articles',
    data: {article}
  })
}

// 更新文章
export const updateArticle = (slug, article) => {
  return request({
    method:'PUT',
    url: `/api/articles/${slug}`,
    data: {article}
  })
}

// 删除文章
export const deleteArticle = (slug) => {
  return request({
    method:'DELETE',
    url: `/api/articles/${slug}`
  })
}