<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex md6>
        <img src="/images/about/headshot.jpg" alt="headshot">
      </v-flex>
      <v-flex md6 text-xs-center >
        <heading header="About" subHeader="Founder of Hi Light Productions Harrison Moye"/>
        <div class="body-text mar-left mar-right"> {{ about }}</div>
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
