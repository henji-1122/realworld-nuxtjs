import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b6b3c828 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _35715e21 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _78f2ae67 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _3fb0fdb2 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _93ee9736 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _ce517ba2 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _721c7718 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _b6b3c828,
    children: [{
      path: "",
      component: _35715e21,
      name: "home"
    }, {
      path: "/login",
      component: _78f2ae67,
      name: "login"
    }, {
      path: "/register",
      component: _78f2ae67,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _3fb0fdb2,
      name: "profile"
    }, {
      path: "/settings",
      component: _93ee9736,
      name: "settings"
    }, {
      path: "/editor",
      component: _ce517ba2,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _721c7718,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
