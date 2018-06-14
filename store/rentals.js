import Vue from 'vue'

export const state = () => ({
  cartTotal: 0,
  showCart: false,
  cart: {}
})

export const mutations = {
  addToCart (state, item) {
    state.cartTotal++
    if (item.context.custom.title in state.cart) {
      state.cart[item.context.custom.title].context.custom.count++
    } else {
      let stateItem = Object.assign({}, item)
      stateItem.context.custom.count = 1
      state.cart[item.context.custom.title] = stateItem
    }
  },
  removeItem (state, item) {
    state.cartTotal -= item.context.custom.count
    Vue.delete(state.cart, item.context.custom.title)
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
