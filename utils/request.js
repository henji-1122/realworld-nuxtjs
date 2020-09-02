/*
   基于axios封装请求模块
*/

// import axios from 'axios'

// const request = axios.create({
//   baseURL: 'https://conduit.productionready.io'
// })

// 请求拦截器
// request.interceptors.request.use(function (config) {
//   // console.log('请求拦截~~')
//   config.headers.Authorization = 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTExMjA1LCJ1c2VybmFtZSI6ImNob25nY2hvbmciLCJleHAiOjE2MDM0NDcyNjN9.APW2QuSFhCsAYt0J14WrNF6a1bJXSSwIR_pJsHmCmrE' // 从store中拿用户token
//   // 返回config请求配置对象
//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });

// 响应拦截器 
// export default request