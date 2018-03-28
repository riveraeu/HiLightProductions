<template>
  <v-toolbar fixed app>
    <v-toolbar-items class="ml-0">
      <v-btn flat to="/" color="grey">
        <v-icon >highlight</v-icon>
        <v-toolbar-title class="impact primary--text">Hi Light Productions</v-toolbar-title>
      </v-btn>
    </v-toolbar-items>
    <v-spacer/></v-spacer>
    <v-toolbar-items class="mr-0">
      <v-btn flat to='/lights/services' color="grey">
        <v-icon left>lightbulb_outline</v-icon>Lights</v-btn>
      <v-btn flat to="/events-productions/gallery" color="grey">
        <v-icon left>wb_incandescent</v-icon>Events & Productions</v-btn>
      <v-btn flat to='/about' color="grey">
        <v-icon left>face</v-icon>About</v-btn>
      <v-btn v-show="showCart" flat to="/lights/rentals/cart">
        <v-badge right overlap>
          <span slot="badge">{{ cartTotal }}</span>
          <v-icon large color="grey">shopping_cart</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    cartTotal () {
      return this.$store.state.cartTotal
    },
    showCart () {
      return this.$store.state.showCart
    }
  }
}
</script>
