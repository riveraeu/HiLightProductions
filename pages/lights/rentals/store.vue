<template>
  <v-container grid-list-lg>
    <v-layout row justify-center>
      <v-flex xs8>
        <heading header="Rentals" subHeader="We offer packages to fit your event size, and individual lights"/>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="product in products" :key="product._id" xs4>
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
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  mounted () {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('showCart')
  }
}
</script>
