<template>
  <v-container>
    <v-layout justify-center row>
      <v-flex xs8>
        <heading header="Cart" subHeader="Review your cart items and proceed to checkout when ready"/>
      </v-flex>
    </v-layout>
    <div class="cart-row mt-5" v-for="product in cart" :key="product._id">
      <v-layout justify-center row>
        <v-flex xs2>
          <img :src="product.metadata.image.imgix_url" alt="">
        </v-flex>
        <v-flex class="grey--text text--darken-1 title ml-5" xs3>
          <p>Item: <span class="body-text">{{ product.title }}</span></p>
          <p>Quantity: <span class="body-text">{{ product.count }}</span></p>
          <p>Price: <span class="body-text">${{ product.metadata.price }} per day</span></p>
        </v-flex>
        <v-flex xs2>
          <v-btn color="primary"  @click="removeItem(product)">Remove Item</v-btn>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </div>
    <v-layout class="mt-5 mb-5" justify-center row>
      <v-flex xs3>
        <p class="grey--text text--darken-1 title mb-5">Your Toal is: <span class="primary--text">${{ totalCost }}</span> per day</p>
        <v-btn color="primary" to="">Checkout</v-btn>
        <v-btn color="secondary" to="/lights/rentals/store">Keep Shopping</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
import heading from '~/components/globals/heading'
export default {
  components: {
    heading
  },
  data () {
    return {
      success: false
    }
  },
  computed: {
    cart () {
      return this.$store.getters.cart
    },
    totalCost () {
      return Object.values(this.cart)
        .reduce((sum, el) => sum + (el.count * el.metadata.price), 0)
        .toFixed(2)
    }
  },
  methods: {
    removeItem (item) {
      this.$store.commit('removeItem', item)
    },
    checkout () {
      let amount = this.totalCost * 100
      let items = Object.keys(this.cart).map((key, index) => {
        return {
          id: this.cart[key]._id,
          title: this.cart[key].title,
          count: this.cart[key].count,
          slug: this.cart[key].slug
        }
      })
      console.log(items)
      this.$checkout.open({
        amount: amount,
        token: (token) => {
          axios
            .post('/api/charge', {
              token: token.id,
              email: token.email,
              name: token.card.name,
              address: token.card.address_line1,
              city: token.card.address_city,
              amount: amount,
              items: items
            }, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(res => {
              this.success = true
              this.$toast.open({
                message: 'Order placed successfully',
                type: 'is-success'
              })
              this.$store.commit('clearCart')
            }).catch(err => {
              this.submitted = false
              console.log(err)
            })
        }
      })
    }
  }
}
</script>
