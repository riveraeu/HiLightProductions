<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs6 text-xs-center >
        <heading header="Events & Productions" subHeader="Check out some of the theater productions and events we have done."/>
        <div class="body-text ml-5 mr-5"> {{ text }}</div>
        <v-btn class="mt-5 mb-5" color="orange" dark to="/events-productions/gallery">View more</v-btn>
      </v-flex>
      <v-flex xs6>
        <img src="/images/events-productions/heathers/heathers0.jpg" alt="Heathers Production">
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
    active: false,
    text: 'Hashtag helvetica celiac, occupy squid enamel pin vexillologist cardigan poutine taxidermy irony mixtape kitsch cold-pressed. Cornhole pour-over vegan, hoodie humblebrag kombucha disrupt organic typewriter. Fixie yr vaporware irony hella trust fund cred kombucha tilde post-ironic. Synth shabby chic trust fund knausgaard whatever microdosing. Prism tumblr selvage farm-to-table banjo. Post-ironic pour-over direct trade irony, drinking vinegar woke migas knausgaard meditation jianbing schlitz four loko ramps.',
    images: [
      { title: 'Heathers', src: '/images/events-productions/heathers/main.jpg', id: 1 }
    ]
  })
}
</script>
