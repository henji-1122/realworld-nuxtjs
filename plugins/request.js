/*
   基于axios封装请求插件模块
*/

import axios from 'axios'

// 创建请求对象
export const request = axios.create({
  // baseURL: 'https://conduit.productionready.io/'    // 原地址
  baseURL: 'http://realworld.api.fed.lagounews.com'  
})

// 通过插件机制获取到上下文对象(query、params、req、res、app、store...)
// 插件导出函数必须作为default成员
// export default (context) => {
//   console.log(context)
//   // .....
// }
export default ({ store }) => {
  /* 请求拦截器 */ 
  // 任何请求都会经过请求拦截器
  // 我们可以在请求拦截器中做一些公共的业务处理，例如统一设置token
  request.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('请求拦截~~')
    const { user } = store.state
    // 用户存在且有token值
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}` // 从store中拿用户token
    }
    // 返回config请求配置对象
    return config
  }, function (error) {
    // 如果请求失败(此时请求还没有发出去)就会进入这里
    return Promise.reject(error)
  })
}