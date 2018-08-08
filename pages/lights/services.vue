<template>
  <v-container>
    <p class="primary--text center abril display-2 mt-5">Full Service</p>
    <v-layout class="mt-5" row wrap text-sm-center justify-center>
      <card icon="/images/lights/full-service/planning.svg" title="Planning" text="This is the first step in the lighting design process. Our expert lighting designer will sit down with you and help to plan the perfect event. From theater productions to parties, we have the knowlege and products to wow your guests."/>
      <card icon="/images/lights/full-service/set-up.svg" title="Set Up" text="The next step in this process is the set up. The profesionals at Hi Light will be there to set up for the event and make sure is working smoothly. You dont have to worry with Hi Light, we are here for you."/>
      <card icon="/images/lights/full-service/enjoy.svg" title="Enjoy" text="This is it, the day of the event is here. Now its time to enjoy the lights! Everything will be set up perfectly and we will be there handling all the lights. Your event will be the talk of the town when you."/>
      <v-btn class="mb-5 mt-5" color="primary" to="/lights/contact">Full Service</v-btn>
    </v-layout>
    <v-divider></v-divider>
    <p class="primary--text center abril display-2 mt-5">Consultation</p>
    <v-layout justify-center row wrap>
      <v-flex xs1>
        <img src="/images/lights/consultation/ideas.svg" alt="ideas">
      </v-flex>
      <v-flex sm10>
        <div class="text-left body-text mt-5 ml-5 mb-5">
          Not sure what you need? Don’t worry we can help. Lighting, Sound, Projection, Staging.
          We can help you figure out exactly what you need, and what you don’t.
          We offer free phone consultations or we can come and help you design on the spot, with your budget in mind.
          We’ll even help you get the equipment and set up if needed. Click the button below to send us an email to get started!
        </div>
      </v-flex>
      <v-flex xs1>
        <img src="/images/lights/consultation/lights.svg" alt="lights">
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center text-sm-center>
      <v-btn class="mt-5 mb-5" color="primary" to="/lights/contact-consultation">Consultation</v-btn>
    </v-layout>
    <v-divider></v-divider>
    <p class="primary--text center abril display-2 mt-5">Rentals</p>
    <v-layout class="mt-5" row wrap text-sm-center justify-center>
      <card icon="/images/lights/rentals/cart.svg" title="Shopping" text="Browse our selection of event lights and packages. Packages are perfect for a standard get together, or you can rent indivudial lights for unique ocasions. Once you have chosen your lights, your request will be sent in for approval."/>
      <card icon="/images/lights/rentals/warehouse.svg" title="Pick Up" text="We work hard to approve your request quickly. Once you have been approved you can pick up the lights from our facsiliate, or we may be able to drop off and pick up the lights from your event. Just let us know what works for you."/>
      <card icon="/images/lights/rentals/list.svg" title="Return" text="Once your event is over, you will have x number of days to return the lights to our warehouse. The client is responsible for any damage to the lights. We may even be able to pick up the lights for you."/>
      <v-btn class="mb-5 mt-5" color="primary" to="/lights/rentals/store">Rentals</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import card from '~/components/globals/card.vue'
export default {
  data () {
    return {
      text: 'Hi Light Productions offers a variety of lighting services to fit all of your needs. Want us to do all the work? Take a look at our full service option. Looking for input from a proffesional, our consulting service may be perfect for you. Know what your doing and just need the lights? We offer lighting rentals, including packages and individual lights.'
    }
  },
  components: {
    card
  }
}
</script>

<style scoped>
@media (max-width: 600px) {
  .text-left {
    margin-right: 24px !important;
  }
  .text-right {
    margin-left: 24px !important;
  }
  .flex.xs1 {
    flex-basis: 15%;
    max-width: 15%;
  }
}
</style>
