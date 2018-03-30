<template>
  <v-jumbotron :src="'/images/temp-hero-image.jpg'" height="100vh">
    <v-container fill-height>
      <v-layout>
        <v-flex text-xs-center class="mt-5">
          <h3 class="primary--text abril display-3">We Do Lights</h3>
          <h3 class="sub-header display-2">Lets get your next event lit!</h3>
          <v-btn round color="orange" class="mt-4" dark to="/lights/services">Get Started</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
}
</script>
