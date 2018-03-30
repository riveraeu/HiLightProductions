/*
import Vuex from 'vuex'
import Vue from 'vue'
import cosmic from '../plugins/cosmic'

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
      cartTotal: 0,
      showCart: false,
      cart: {}
    },
    mutations: {
      setProducts (state, products) {
        state.products = products
      },
      addToCart (state, item) {
        state.cartTotal++
        if (item.slug in state.cart) {
          state.cart[item.slug].count++
        } else {
          let stateItem = Object.assign({}, item)
          stateItem.count = 1
          state.cart[item.slug] = stateItem
        }
      },
      removeItem (state, item) {
        state.cartTotal -= item.count
        Vue.delete(state.cart, item.slug)
      },
      showCart (state) {
        if (!state.showCart) {
          state.showCart = true
        }
      }
    },
    actions: {
      nuxtServerinit ({ dispatch }, { req }) {
        return dispatch('getProducts')
      },
      getProducts ({ commit, state }) {
        const params = {
          type_slug: 'products'
        }
        return cosmic.getObjectsByType(params).then(data => {
          commit('setProducts', data.objects)
        }).catch(err => {
          console.log(err)
        })
      },
      showCart ({ commit }) {
        commit('showCart')
      }
    },
    getters: {
      products: state => state.products,
      cart: state => state.cart,
      getImages: state => name => {
        if (name === 'heathers') {
          return state.heatherImages
        } else if (name === 'events') {
          return state.eventImages
        } else {
          return state.peterStarcatcherImages
        }
      },
      getEventProduction: state => name => {
        if (name === 'heathers') {
          return state.heathers
        } else if (name === 'events') {
          return state.events
        } else {
          return state.peterStarcatcher
        }
      }
    }
  })
}

export default createStore
*/
