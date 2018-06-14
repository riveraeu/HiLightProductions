<template>
  <v-container grid-list-lg>
    <v-layout row wrap justify-center>
      <v-flex sm8>
        <heading header="Rentals" subHeader="We offer packages to fit your event size, and individual lights"/>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex v-for="product in products" :key="product._id" sm4>
        <product-item :product="product"></product-item>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import productItem from '~/components/rentals/product-item'
import heading from '~/components/globals/heading'
export default {
  components: {
    productItem,
    heading
  },
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.$store.dispatch('rentals/showCart')
  },
  async asyncData ({ app }) {
    const res = await app.$axios.$get('api/rentals')
    return {products: res.resources}
  }
}
</script>
