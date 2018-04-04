<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex sm8>
        <heading header="Full Service" subHeader="Let us take care of all your lighting needs at your next event."/>
      </v-flex>
    </v-layout row wrap>
      <step icon="/images/lights/full-service/planning.svg" title="Planning" text="This is the first set in the lighting design process. Our expert lighting designer will sit down with you and help to plan the perfect event. From theater productions to parties, we have the knowlege and products to wow your guests."/>
      <step icon="/images/lights/full-service/set-up.svg" title="Set Up" text="The next step in this process is the set up. The profesionals at Hi Light will be there to set up for the event and make sure is working smoothly. You dont have to worry with Hi Light, we are here for you."/>
      <step icon="/images/lights/full-service/enjoy.svg" title="Enjoy" text="This is it, the day of the event is here. Now its time to enjoy the lights! Everything will be set up perfectly and we will be there handling all the lights. Your event will be the talk of the town when you."/>
    <v-layout justify-center>
      <v-flex sm2>
        <v-btn class="mb-5 mt-5" color="primary" to="/lights/contact">Get Started</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import heading from '~/components/globals/heading.vue'
import step from '~/components/globals/step.vue'
export default {
  components: {
    heading,
    step
  }
}
</script>

<style scoped>
@media (max-width: 600px) {
  .btn {
    display: block;
  }
}
</style>
