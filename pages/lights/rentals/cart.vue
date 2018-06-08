<template>
  <v-container>
    <v-layout justify-center row wrap text-sm-center>
      <v-flex sm8>
        <p class="primary--text center lato display-3 mt-5">Cart</p>
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
        <v-flex class="grey--text text--darken-1 title ml-5" sm4>
          <p>Item: <span class="body-text">{{ product.title }}</span></p>
          <p>Quantity: <span class="body-text">{{ product.count }}</span></p>
          <p>Price: <span class="body-text">${{ product.price }} per day</span></p>
        </v-flex>
        <v-flex sm2>
          <v-btn @click="removeItem(product)">Remove Item</v-btn>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
    </div>
    <v-layout class="mt-5" justify-center row wrap text-sm-center>
      <v-flex class="checkout" sm3>
        <p class="center grey--text text--darken-1 title mb-5">Your Toal is: <span class="primary--text">${{ totalCost }}</span> per day</p>
        <v-btn class="align-center-keepShopping" color="primary" to="/lights/rentals/store">Keep Shopping</v-btn>
      </v-flex>
    </v-layout>
    <v-layout v-if="cartTotal != 0" row wrap justify-center>
      <v-flex class="checkout" sm6 text-sm-center>
        <p class="primary--text center lato display-3 mt-5">Checkout</p>
        <p class="body-text">At this point in time we do not accept online payment. Please fill out the form below and a request for your cart items will be sent to Hi Light. We will work to approve your request quickly and contact you about delivery and payment. Thank you for your business and stay Lit!</p>
        <v-form ref="form" v-model="valid" lazy-validation>
         <v-text-field prepend-icon="face" color="grey" label="Name" v-model="name" :rules="nameRules" required></v-text-field>
         <v-text-field prepend-icon="phone" color="secondary" label="Phone" v-model="phone" :rules="phoneRules" required></v-text-field>
         <v-text-field prepend-icon="email" color="primary" label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
        </v-form>
        <v-btn class="align-center-send" :disabled="!valid" color="primary" @click="sendMail()">Send</v-btn>
        <v-snackbar :timeout=3000 v-model="snackbar">{{responseMessage}}</v-snackbar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'Phone number is required'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      snackbar: false,
      responseMessage: ''
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
    },
    async sendMail () {
      if (this.$refs.form.validate()) {
        const response = await this.$axios.$post('api/checkout', {
          name: this.name,
          phone: this.phone,
          email: this.email,
          cart: this.cart,
          cartTotal: this.cartTotal,
          totalCost: this.totalCost
        })
        this.responseMessage = response
        this.snackbar = true
      }
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
  .align-center-keepShopping {
    margin: 0 30%;
  }
  .align-center-send {
    margin: 0 35%;
  }
}
</style>
