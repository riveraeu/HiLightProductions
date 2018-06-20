<template>
  <v-container class="mt-5" fluid>
    <p class="primary--text center lato display-2 mt-5">Services</p>
    <v-layout row wrap text-sm-center justify-center>
      <card icon="/images/lights/full-service/set-up.svg" title="Full Service" text="Our full-service option takes care of all your lighting needs and more. We work with you to plan the perfect lighting design for your event. Hi-Light also offers additional services such as audio, video, and staging. "/>
      <card icon="/images/lights/consultation/ideas.svg" title="Consultation" text="Have an idea and want to talk it over with a professional, then our consultation service may be just what you're looking for. We sit down with you and give expert advice to achieve a stunning lighting design."/>
      <card icon="/images/lights/rentals/cart.svg" title="Rentals" text="Just need some lights? Hi-Light has got you covered. We offer all the lights you will need to make your event shine! Simply pick out what you want and our team will work quickly to deliver the lights. "/>
      <v-btn class="mb-5 mt-5" color="primary" to="/lights/services">Services</v-btn>
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
