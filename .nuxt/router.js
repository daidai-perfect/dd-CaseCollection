import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62038272 = () => interopDefault(import('..\\pages\\border-color.vue' /* webpackChunkName: "pages/border-color" */))
const _b8dc6d16 = () => interopDefault(import('..\\pages\\case.vue' /* webpackChunkName: "pages/case" */))
const _7925e45d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _35c4beac = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _2a54fc4c = () => interopDefault(import('..\\pages\\_lang\\border-color.vue' /* webpackChunkName: "pages/_lang/border-color" */))
const _5cbacf88 = () => interopDefault(import('..\\pages\\_lang\\case.vue' /* webpackChunkName: "pages/_lang/case" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/border-color",
    component: _62038272,
    name: "border-color"
  }, {
    path: "/case",
    component: _b8dc6d16,
    name: "case"
  }, {
    path: "/",
    component: _7925e45d,
    name: "index"
  }, {
    path: "/:lang",
    component: _35c4beac,
    name: "lang"
  }, {
    path: "/:lang/border-color",
    component: _2a54fc4c,
    name: "lang-border-color"
  }, {
    path: "/:lang/case",
    component: _5cbacf88,
    name: "lang-case"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
