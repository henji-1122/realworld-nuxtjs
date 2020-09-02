import Vue from 'vue'
import dayjs from 'dayjs'

// 全局过滤器
// 在组件中使用时：{{ 表达式 | 过滤器(date)}}
Vue.filter('date', (value, format = 'YYYY-MM-DD HH:mm:ss') => { // format默认参数格式
  return dayjs(value).format(format)
})