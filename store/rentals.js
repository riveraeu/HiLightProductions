import Vue from 'vue'
import products from '../static/store.js'

export const state = () => ({
  cartTotal: 0,
  showCart: false,
  cart: {},
  products: products.products
})

export const mutations = {
  setProducts (state, products) {
    state.products = products
  },
  addToCart (state, item) {
    state.cartTotal++
    if (item.title in state.cart) {
      state.cart[item.title].count++
    } else {
      let stateItem = Object.assign({}, item)
      stateItem.count = 1
      state.cart[item.title] = stateItem
    }
  },
  removeItem (state, item) {
    state.cartTotal -= item.count
    Vue.delete(state.cart, item.title)
  },
  showCart (state) {
    if (!state.showCart) {
      state.showCart = true
    }
  }
}

export const actions = {
  showCart ({ commit }) {
    commit('showCart')
  }
}
