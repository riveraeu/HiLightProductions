<template>
  <v-jumbotron color="black">
    <v-container>
      <v-layout>
        <v-flex text-xs-center class="mt-5">
          <h1 class="primary--text abril display-3">Hi Light Productions</h1>
          <h1 class="sub-header display-2">Lets get your next event lit!</h1>
          <v-btn round color="orange" class="mt-3" dark to="/lights/services">Get Started</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<style scoped>
.jumbotron {
  height: 50vh !important;
}
@media (max-width: 600px) {
  .jumbotron {
    height: 40vh !important;;
  }
}
</style>
