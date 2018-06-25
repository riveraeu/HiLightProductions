<template>
  <v-jumbotron src="/images/hero-image.jpg">
    <v-container fluid>
      <v-layout justify-end text-xs-center>
        <v-flex sm5>
          <h1 class="primary--text abril display-3 mt-3">Hi Light Productions</h1>
          <h1 class="sub-header display-2">Bay Area Event Lighting</h1>
          <v-btn color="orange" class="mt-3" dark to="/lights/services">Get Started</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<style scoped>
.jumbotron {
  height: 90vh !important;
}

</style>
