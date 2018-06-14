<template>
  <v-jumbotron src="/images/hero-image.jpg">
    <v-container fluid>
      <v-layout justify-start>
        <v-flex sm4>
          <h1 class="primary--text abril display-3 mt-2 ml-5">Hi Light Productions</h1>
        </v-flex>
        <v-flex sm4>

        </v-flex>
        <v-flex sm4>
          <h1 class="sub-header display-2 mt-5 mr-5">Bay Area Event Lighting</h1>
        </v-flex>
      </v-layout>
      <v-layout justify-end>
        <v-flex sm4 text-xs-center>
          <v-btn color="orange" class="" dark to="/lights/services">Get Started</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<style scoped>
.jumbotron {
  height: 50vh !important;
}

</style>
