<template>
  <v-container>
    <v-layout row class="mt-5">
      <v-flex xs6>
        <img src="/images/about/headshot.jpg" alt="headshot">
      </v-flex>
      <v-flex xs6 text-xs-center >
        <heading header="About" subHeader="Founder of Hi Light Productions Harrison Moye"/>
        <div class="body-text pl-5 pr-5"> {{ text1 }}</div>
      </v-flex>
    </v-layout>
    <v-layout justify-center row class="mt-5">
      <v-flex xs2>
        <img src="/images/about/award.svg" alt="certificate">
      </v-flex>
      <v-flex xs8>
        <div class="body-text pl-5 pr-5"> {{ text2 }}</div>
      </v-flex>
      <v-flex xs2>
        <img src="/images/about/cup.svg" alt="trophy">
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
      text1: 'Heirloom hoodie +1 prism, vexillologist whatever sriracha intelligentsia jianbing XOXO shaman mixtape trust fund palo santo pinterest. Tacos copper mug kinfolk tumblr tofu raclette taxidermy. Post-ironic tattooed etsy man braid. Ramps thundercats bitters 90s schlitz copper mug. Tbh migas freegan artisan, next level taiyaki helvetica vegan tofu intelligentsia raclette. Master cleanse vaporware pinterest, seitan four loko direct trade green juice cloud bread lyft kale chips fashion axe mixtape.',
      text2: 'Lorem ipsum dolor amet next level small batch street art knausgaard mustache wolf taxidermy poutine. Quinoa activated charcoal farm-to-table, ennui fixie franzen cornhole meh try-hard post-ironic before they sold out +1 af pop-up tattooed. Etsy mustache brunch, four loko actually chambray vinyl YOLO fashion axe bicycle rights quinoa slow-carb fingerstache letterpress vape. Selvage bespoke taiyaki, dreamcatcher woke air plant bushwick chillwave hashtag normcore iceland pork belly intelligentsia whatever.'
    }
  }
}
</script>
