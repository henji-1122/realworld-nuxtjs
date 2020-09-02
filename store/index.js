const cookieparser = process.server ? require('cookieparser') : undefined  //解析cookie字符串为对象
const Cookie = process.client ? require('js-cookie') : undefined
import { updateUser } from '@/api/user'

// 在服务端渲染期间运行的都是同一个实例
// 为了防止数据冲突，务必把state定义成一个函数，返回数据对象
export const state = () => {
  return {
    // 当前用户登录状态
    user: null
  }
}

export const mutations = {
  // 修改用户状态
  setUser (state, data) {
    state.user = data
  },

  // 更新用户信息
  updateUserInfo (state, payload) {
    state.user = Object.assign({}, state.user, payload)
    if (Cookie) {
      // 客户端操作cookie
      Cookie.set('user', state.user)
    }
  },

  // 清空用户数据
  cleanUser (state) {
    state.user = null
    Cookie.remove('user')
  }
}


export const actions = {
  // nuxtServerInit是一个特殊的action方法
  // 这个action会在服务端渲染期间自动调用(仅在服务端使用)
  // 作用：初始化容器vuex数据，传递数据给客户端使用
  nuxtServerInit ({ commit }, { req }) { // req服务端渲染期间的请求对象
    console.log('nuxtServerInit')
    let user = null

    // 如果请求头中有cookie
    if (req.headers.cookie) {
      // 使用cookieparser把cookie字符串解析成对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('setUser', user)
  },

  async updateUserState ({ commit }, payload) {
    const { data } = await updateUser(payload)
    console.log(data)
    commit('updateUserInfo', data.user)
    return data.user
  }
}