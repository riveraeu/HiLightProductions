import Vue from 'vue'

export const state = () => ({
  cartTotal: 0,
  showCart: false,
  cart: {},
  products: [
    {
      title: 'Small Package',
      description: 'This small package of lights, perfect for those chill kick backs and small events.',
      price: '40',
      image: '/images/lights/rentals/store/cube.svg',
      count: 0
    },
    {
      title: 'Medium Package',
      description: 'This medium package is great for those medium size parties.',
      price: '60',
      image: '/images/lights/rentals/store/2cubes.svg',
      count: 0
    },
    {
      title: 'Large Package',
      description: 'This large lighting package is great for those big raggers when everybody shows up.',
      price: '80',
      image: '/images/lights/rentals/store/cubes.svg',
      count: 0
    },
    {
      title: 'Purple Ground Light',
      description: 'This sweat ass purple ground light will produce some pretty chill light.',
      price: '24',
      image: '/images/lights/rentals/store/purple-ground-light.jpg',
      count: 0
    },
    {
      title: 'White Ground Light',
      description: 'This rad white light hangs in the air shinning light down on you from above.',
      price: '17',
      image: '/images/lights/rentals/store/white-ground-light.png',
      count: 0
    },
    {
      title: 'White Hang Light',
      description: 'Similar to the sweet purple ground light this one is white and a little bigger.',
      price: '23',
      image: '/images/lights/rentals/store/white-hang-light.jpg',
      count: 0
    },
    {
      title: 'Ground Light',
      description: 'This small ground light will shoot some strong light out on the dance floor.',
      price: '19',
      image: '/images/lights/rentals/store/ground-light.jpg',
      count: 0
    },
    {
      title: 'Big Purple Hang Light',
      description: 'Wow look at this amazing purple light, you know its going to be a party with this big boy.',
      price: '21',
      image: '/images/lights/rentals/store/big-purple-hang-light.jpg',
      count: 0
    },
    {
      title: 'Purple Light Ball',
      description: 'Its time to get giggy with it, this purple light ball will make the party. Just try not to dance with this thing going.',
      price: '25',
      image: '/images/lights/rentals/store/purple-light-ball.jpg',
      count: 0
    }
  ]
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
