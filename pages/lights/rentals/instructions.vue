<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex sm8>
        <heading header="Rentals" subHeader="We have the lights you need to get you next event lit!"/>
      </v-flex>
    </v-layout row>
    <step icon="/images/lights/rentals/cart.svg" title="Shopping" text="Browse our selection of event lights and packages. Packages are perfect for a standard get together, or you can rent indivudial lights for unique ocasions. Once you have chosen your lights, your request will be sent in for approval."/>
    <step icon="/images/lights/rentals/warehouse.svg" title="Pick Up" text="We work hard to approve your request quickly. Once you have been approved you can pick up the lights from our facsiliate, or we may be able to drop off and pick up the lights from your event. Just let us know what works for you."/>
    <step icon="/images/lights/rentals/list.svg" title="Return" text="Once your event is over, you will have x number of days to return the lights to our warehouse. The client is responsible for any damage to the lights. We may even be able to pick up the lights for you."/>
    <v-layout row wrap justify-center>
      <v-flex sm2>
        <v-btn class=" mt-5 mb-5" color="primary" to="/lights/rentals/store">Get Started</v-btn>
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
