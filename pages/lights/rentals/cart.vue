<template>
  <v-container>
    <v-layout justify-center row wrap text-sm-center>
      <v-flex sm8>
        <p class="primary--text lato display-3 mt-5">Cart</p>
      </v-flex>
    </v-layout>
    <v-layout justify-center class="body-text title" v-if="cartTotal == 0">
      <v-flex class="body-text title" sm2>
        <p class="center">Your cart is empty</p>
      </v-flex>
    </v-layout>
    <div class="cart-row mt-5" v-for="product in cart" :key="product._id">
      <v-layout justify-center row wrap>
        <v-flex xs2>
          <img :src="product.image" alt="">
        </v-flex>
        <v-flex class="grey--text text--darken-1 title ml-5" sm3>
          <p>Item: <span class="body-text">{{ product.title }}</span></p>
          <p>Quantity: <span class="body-text">{{ product.count }}</span></p>
          <p>Price: <span class="body-text">${{ product.price }} per day</span></p>
        </v-flex>
        <v-flex sm2>
          <v-btn color="primary"  @click="removeItem(product)">Remove Item</v-btn>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </div>
    <v-layout class="mt-5 mb-5" justify-center row wrap text-sm-center>
      <v-flex class="checkout" sm3>
        <p class="center grey--text text--darken-1 title mb-5">Your Toal is: <span class="primary--text">${{ totalCost }}</span> per day</p>
        <v-btn color="primary" to="/lights/contact">Checkout</v-btn>
        <v-btn color="secondary" to="/lights/rentals/store">Keep Shopping</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      success: false
    }
  },
  computed: {
    cartTotal () {
      return this.$store.state.rentals.cartTotal
    },
    cart () {
      return this.$store.state.rentals.cart
    },
    totalCost () {
      return Object.values(this.cart)
        .reduce((sum, el) => sum + (el.count * el.price), 0)
        .toFixed(2)
    }
  },
  methods: {
    removeItem (item) {
      this.$store.commit('rentals/removeItem', item)
    }
  }
}
</script>

<style scoped>
@media (max-width:600px) {
  .checkout {
    margin-left: 5%;
    margin-right: 5%;
  }
  .btn {
    display: block;
  }
  .center {
    text-align: center;
  }
}
</style>
