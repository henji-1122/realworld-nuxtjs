/**
 * 路由拦截器，验证是否登录的中间件
 * 需要做验证之后再显示的页面，需要导入此中间件
 */

export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.user) {
    return redirect('/login')
  }
}