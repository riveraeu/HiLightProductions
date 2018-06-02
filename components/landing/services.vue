<template>
  <v-container class="mt-5" fluid>
    <p class="primary--text center lato display-3 mt-5">Services</p>
    <v-layout row wrap text-sm-center justify-center>
      <card icon="/images/lights/full-service/set-up.svg" title="Full Service" text="This is the first set in the lighting design process. Our expert lighting designer will sit down with you and help to plan the perfect event. From theater productions to parties, we have the knowlege and products to wow your guests."/>
      <card icon="/images/lights/consultation/ideas.svg" title="Consultation" text="The next step in this process is the set up. The profesionals at Hi Light will be there to set up for the event and make sure is working smoothly. You dont have to worry with Hi Light, we are here for you."/>
      <card icon="/images/lights/rentals/cart.svg" title="Rentals" text="This is it, the day of the event is here. Now its time to enjoy the lights! Everything will be set up perfectly and we will be there handling all the lights. Your event will be the talk of the town when you."/>
      <!-- <v-flex sm2>
        <v-btn class="mb-5 mt-5" color="primary" to="/lights/services">Get Started</v-btn>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
import card from '~/components/globals/card.vue'
import heading from '~/components/globals/heading.vue'
export default {
  components: {
    card,
    heading
  }
}
</script>
