
import { request } from '@/plugins/request'

// 用户登录,返回promise
export const login = data => {
  return request ({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

// 用户注册，返回promise
export const register = data => {
  return request ({
    method: 'POST',
    url: '/api/users',
    data
  })
}

// 关注用户
export const follow = (username) => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}

// 取消关注用户
export const unFollow = (username) => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  })
}


export const getProfile = username => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`
  })
}


// 更新用户资料
export const updateUser = (user) => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data: {
      user
    }
  })
}