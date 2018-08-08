<template>
  <v-container class="mt-5" fluid>
    <v-layout row wrap>
      <v-flex md6 text-xs-center >
        <p class="primary--text center lato display-2 mt-5">Events & Productions</p>
        <div class="body-text mar-left mar-right"> {{ text }}</div>
        <v-btn class="mt-5 mb-5" to="/events-productions/gallery">View more</v-btn>
      </v-flex>
      <v-flex md6>
        <img src="/images/heathers0.jpg" alt="Heathers Production">
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
  data: () => ({
    text: 'Here you can see some of the productions and events HiLight has already helped come alive. Ranging from shows and stages all around the Bay Area. Get inspired for your next event and see how HiLight and can help you!',
    images: [
      { title: 'Heathers', src: '/images/events-productions/heathers/main.jpg', id: 1 }
    ]
  })
}
</script>
