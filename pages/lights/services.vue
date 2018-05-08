<template>
  <v-container>
    <v-layout row wrap text-sm-center justify-center>
      <v-flex sm8>
        <p class="primary--text lato line display-3 mt-5">Lighting Services</p>
        <p class="body-text mar-left mar-right">{{text}}</p>
      </v-flex>
    </v-layout>
    <v-layout class="mt-5" row wrap justify-center>
      <v-flex sm4>
        <v-card>
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <div class="primary--text display-1">Full Service</div>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <div class="body-text mar-left mar-right">Small or large events, Hi Light is here to keep it lit. We provide you with the perfect experience for any event.</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mt-2" right color="primary" dark  to="/lights/full-service">
              <v-icon large>build</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm4>
        <v-card color="secondary" class="white--text">
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <div class="display-1">Consultations</div>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <div class="body-text mar-left mar-right white--text">Talk it over with our lighting design profesionals. We will help you plan your event and proivde lighting rentals.</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mt-2" right color="white" dark  to="/lights/consultation">
              <v-icon color="secondary" large>people</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex sm4>
        <v-card color="primary" class="white--text">
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <div class="display-1">Rentals</div>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <div class="body-text mar-left mar-right white--text">We offer rentals for lights, in packages or individualy. View our variety of products and your next party will be crackin.</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mt-2" right color="white" dark  to="/lights/rentals/instructions">
              <v-icon color="primary" large>shopping_cart</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import heading from '~/components/globals/heading.vue'
export default {
  data () {
    return {
      text: 'Hi Light Productions offers a variety of lighting services to fit all of your needs. Want us to do all the work? Take a look at our full service option. Looking for input from a proffesional, our consulting service may be perfect for you. Know what your doing and just need the lights? We offer lighting rentals, including packages and individual lights.'
    }
  },
  components: {
    heading
  }
}
</script>

<style scoped>
.card {
  height: 40vh !important;
}
@media (max-width: 600px) {
  .card {
    height: 50vh !important;;
  }
}
</style>
