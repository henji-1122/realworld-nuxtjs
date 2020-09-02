// 若用户已登录，访问登录或注册页面时直接跳转到首页
export default function ({ store, redirect }) {
  // If the user is authenticated redirect to home page
  if (store.state.user) {
    return redirect('/')
  }
}
