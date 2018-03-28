<template>
  <v-container>
    <v-layout row>
      <v-flex xs8 offset-xs2>
        <heading header="Lights" subHeader="We offer a variety of products and services to keep it lit."/>
      </v-flex>
    </v-layout>
    <v-layout class="mt-5" row justify-center>
      <v-flex xs4>
        <v-card height="40vh">
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <div class="primary--text display-1">Full Service</div>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <div class="body-text ml-5 mr-5">Small or large events, Hi Light is here to keep it lit. We provide you with the perfect experience for any event.</div>
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
      <v-flex xs4>
        <v-card height="40vh" color="secondary" class="white--text">
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <div class="display-1">Consultations</div>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <div class="body-text ml-5 mr-5 white--text">Talk it over with our lighting design profesionals. We will help you plan your event and proivde lighting rentals.</div>
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
      <v-flex xs4>
        <v-card height="40vh" color="primary" class="white--text">
          <v-card-title primary-title>
            <v-spacer></v-spacer>
            <div class="display-1">Rentals</div>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <div class="body-text ml-5 mr-5 white--text">We offer rentals for lights, in packages or individualy. View our variety of products and your next party will be crackin.</div>
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
  components: {
    heading
  }
}
</script>
