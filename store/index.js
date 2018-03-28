import Vuex from 'vuex'
import Vue from 'vue'
import cosmic from '../plugins/cosmic'

const createStore = () => {
  return new Vuex.Store({
    state: {
      products: [],
      cartTotal: 0,
      showCart: false,
      cart: {},
      heathers: [
        {header: 'Heathers', subHeader: 'When pretty girls get ugly, shit goes down.'},
        {text: 'Lorem ipsum dolor amet copper mug 3 wolf moon chartreuse, poutine umami neutra subway tile af asymmetrical meh scenester banh mi try-hard air plant waistcoat. Austin heirloom street art selvage, fingerstache man braid cold-pressed pop-up. Lorem ipsum dolor amet copper mug 3 wolf moon chartreuse, poutine umami neutra subway tile af asymmetrical meh scenester banh mi try-hard air plant waistcoat.'}
      ],
      heatherImages: [
        {src: '/images/events-productions/heathers/heathers0.jpg'},
        {src: '/images/events-productions/heathers/heathers1.jpg'},
        {src: '/images/events-productions/heathers/heathers2.jpg'},
        {src: '/images/events-productions/heathers/heathers3.jpg'},
        {src: '/images/events-productions/heathers/heathers4.jpg'},
        {src: '/images/events-productions/heathers/heathers5.jpg'},
        {src: '/images/events-productions/heathers/heathers6.jpg'},
        {src: '/images/events-productions/heathers/heathers7.jpg'},
        {src: '/images/events-productions/heathers/heathers8.jpg'},
        {src: '/images/events-productions/heathers/heathers9.jpg'},
        {src: '/images/events-productions/heathers/heathers10.jpg'},
        {src: '/images/events-productions/heathers/heathers11.jpg'},
        {src: '/images/events-productions/heathers/heathers12.jpg'},
        {src: '/images/events-productions/heathers/heathers13.jpg'},
        {src: '/images/events-productions/heathers/heathers14.jpg'},
        {src: '/images/events-productions/heathers/heathers15.jpg'},
        {src: '/images/events-productions/heathers/heathers16.jpg'},
        {src: '/images/events-productions/heathers/heathers17.jpg'},
        {src: '/images/events-productions/heathers/heathers18.jpg'},
        {src: '/images/events-productions/heathers/heathers19.jpg'},
        {src: '/images/events-productions/heathers/heathers20.jpg'},
        {src: '/images/events-productions/heathers/heathers21.jpg'},
        {src: '/images/events-productions/heathers/heathers22.jpg'},
        {src: '/images/events-productions/heathers/heathers23.jpg'},
        {src: '/images/events-productions/heathers/heathers24.jpg'},
        {src: '/images/events-productions/heathers/heathers25.jpg'},
        {src: '/images/events-productions/heathers/heathers26.jpg'},
        {src: '/images/events-productions/heathers/heathers27.jpg'},
        {src: '/images/events-productions/heathers/heathers28.jpg'},
        {src: '/images/events-productions/heathers/heathers29.jpg'},
        {src: '/images/events-productions/heathers/heathers30.jpg'},
        {src: '/images/events-productions/heathers/heathers31.jpg'},
        {src: '/images/events-productions/heathers/heathers32.jpg'},
        {src: '/images/events-productions/heathers/heathers33.jpg'}
      ],
      events: [
        {header: 'Events', subHeader: 'We have done some cool events take a look! '},
        {text: 'Lorem ipsum dolor amet copper mug 3 wolf moon chartreuse, poutine umami neutra subway tile af asymmetrical meh scenester banh mi try-hard air plant waistcoat. Austin heirloom street art selvage, fingerstache man braid cold-pressed pop-up.'}
      ],
      eventImages: [
        {src: '/images/events-productions/events/events0.jpg'},
        {src: '/images/events-productions/events/events1.jpg'}
      ],
      peterStarcatcher: [
        {header: 'Peter and the Starcatcher', subHeader: 'Peter pan play I guess im not really sure'},
        {text: 'Lorem ipsum dolor amet copper mug 3 wolf moon chartreuse, poutine umami neutra subway tile af asymmetrical meh scenester banh mi try-hard air plant waistcoat. Austin heirloom street art selvage, fingerstache man braid cold-pressed pop-up.Lorem ipsum dolor amet copper mug 3 wolf moon chartreuse, poutine umami neutra subway tile af asymmetrical meh scenester banh mi try-hard air plant waistcoat.'}
      ],
      peterStarcatcherImages: [
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher0.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher1.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher2.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher3.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher4.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher5.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher6.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher7.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher8.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher9.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher10.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher11.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher12.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher13.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher14.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher15.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher16.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher17.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher18.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher19.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher20.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher21.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher22.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher23.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher24.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher25.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher26.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher27.jpg'},
        {src: '/images/events-productions/peter-starcatcher/peter-starcatcher28.jpg'}
      ]
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
