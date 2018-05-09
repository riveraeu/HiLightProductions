import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _58e6834a = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _4990c9de = () => import('../pages/lights/services.vue' /* webpackChunkName: "pages/lights/services" */).then(m => m.default || m)
const _9f6090ea = () => import('../pages/events-productions/gallery.vue' /* webpackChunkName: "pages/events-productions/gallery" */).then(m => m.default || m)
const _efb3f860 = () => import('../pages/lights/contact.vue' /* webpackChunkName: "pages/lights/contact" */).then(m => m.default || m)
const _11ef3c40 = () => import('../pages/lights/rentals/cart.vue' /* webpackChunkName: "pages/lights/rentals/cart" */).then(m => m.default || m)
const _44cb13d1 = () => import('../pages/lights/rentals/store.vue' /* webpackChunkName: "pages/lights/rentals/store" */).then(m => m.default || m)
const _b28b11a0 = () => import('../pages/events-productions/_focus.vue' /* webpackChunkName: "pages/events-productions/_focus" */).then(m => m.default || m)
const _1976cdc0 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash && document.querySelector(to.hash)) {
        // scroll to anchor by returning the selector
        position = { selector: to.hash }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/about",
			component: _58e6834a,
			name: "about"
		},
		{
			path: "/lights/services",
			component: _4990c9de,
			name: "lights-services"
		},
		{
			path: "/events-productions/gallery",
			component: _9f6090ea,
			name: "events-productions-gallery"
		},
		{
			path: "/lights/contact",
			component: _efb3f860,
			name: "lights-contact"
		},
		{
			path: "/lights/rentals/cart",
			component: _11ef3c40,
			name: "lights-rentals-cart"
		},
		{
			path: "/lights/rentals/store",
			component: _44cb13d1,
			name: "lights-rentals-store"
		},
		{
			path: "/events-productions/:focus?",
			component: _b28b11a0,
			name: "events-productions-focus"
		},
		{
			path: "/",
			component: _1976cdc0,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
