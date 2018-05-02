<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex md6 text-xs-center >
        <heading header="Events & Productions" subHeader="Check out some of the theater productions and events we have done."/>
        <div class="body-text mar-left mar-right"> {{ text }}</div>
        <v-btn class="mt-5 mb-5" color="orange" dark to="/events-productions/gallery">View more</v-btn>
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
    text: 'Hashtag helvetica celiac, occupy squid enamel pin vexillologist cardigan poutine taxidermy irony mixtape kitsch cold-pressed. Cornhole pour-over vegan, hoodie humblebrag kombucha disrupt organic typewriter. Fixie yr vaporware irony hella trust fund cred kombucha tilde post-ironic.',
    images: [
      { title: 'Heathers', src: '/images/events-productions/heathers/main.jpg', id: 1 }
    ]
  })
}
</script>
