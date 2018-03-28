<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs6>
        <img src="~/assets/images/about/headshot.jpg" alt="headshot">
      </v-flex>
      <v-flex xs6 text-xs-center >
        <heading header="About" subHeader="Founder of Hi Light Productions Harrison Moye"/>
        <div class="body-text ml-5 mr-5"> {{ about }}</div>
        <v-btn class="mt-5" color="orange" dark to="/about">Read More</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import heading from '~/components/globals/heading.vue'
export default {
  components: {
    heading
  },
  data () {
    return {
      about: 'Heirloom hoodie +1 prism, vexillologist whatever sriracha intelligentsia jianbing XOXO shaman mixtape trust fund palo santo pinterest. Tacos copper mug kinfolk tumblr tofu raclette taxidermy. Post-ironic tattooed etsy man braid. Ramps thundercats bitters 90s schlitz copper mug. Tbh migas freegan artisan, next level taiyaki helvetica vegan tofu intelligentsia raclette. Master cleanse vaporware pinterest, seitan four loko direct trade green juice cloud bread lyft kale chips fashion axe mixtape.'
    }
  }
}
</script>
