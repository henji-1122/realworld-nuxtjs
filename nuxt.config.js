/**
 * Nuxt.js 配置文件
 */

module.exports = {
  // server: {
  //   host: 'localhost', // 0.0.0.0监听所有网卡地址,从公网访问服务器IP也能被监听到 (本地为localhost - 127.0.0.1)
  //   port: 3000
  // },

  router: {
    // 自定义路由表规则
    linkActiveClass: 'active', // 当前路由高亮
    extendRoutes (routes, resolve) {
      // 清除Nuxt.js 基于pages目录默认生成的路由表规则
      // console.log(routes)
      routes.splice(0)

      // 自定义路由表，就不再使用原来的以文件路径为基础的约定式路由
      // 以布局组件为父路由，其他组件为子路由，此时其他组件就可以使用布局组件
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '', // 默认子路由
              name: 'home',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/profile/:username', // 动态路由
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/')
            },
            {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/')
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/')
            }
          ]
        }
      ])
    }
  },

  // 注册插件
  plugins: [
    '~/plugins/request.js',  // 请求插件
    '~/plugins/dayjs.js' // 时间格式化插件
  ]
}