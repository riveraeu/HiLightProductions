<template>
  <v-container grid-list-md>
    <v-layout justify-center text-sm-center row>
      <v-flex sm8>
        <p class="primary--text lato line display-3 mt-5">Events and Productions</p>
        <p class="body-text mar-left mar-right">{{text}}</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <overlay v-for="(eventProd, index) in gallery" :key="index" :eventProd="eventProd"/>
    </v-layout>
  </v-container>
</template>

<script>
import overlay from '~/components/globals/image-overlay.vue'

export default {
  components: {
    overlay
  },
  data () {
    return {
      text: 'Hashtag helvetica celiac, occupy squid enamel pin vexillologist cardigan poutine taxidermy irony mixtape kitsch cold-pressed. Cornhole pour-over vegan, hoodie humblebrag kombucha disrupt organic typewriter. Fixie yr vaporware irony hella trust fund cred kombucha tilde post-ironic. Synth shabby chic trust fund knausgaard whatever microdosing. Prism tumblr selvage farm-to-table banjo. Post-ironic pour-over direct trade irony, drinking vinegar woke migas knausgaard meditation jianbing schlitz four loko ramps.',
      gallery: []
    }
  },
  async asyncData ({ app }) {
    const res = await app.$axios.$get('api/gallery')
    return {gallery: res.resources}
    /*
    return axios.get('http://localhost:3000/api/gallery')
      .then((res) => {
        return {gallery: res.data.resources}
      })
      .catch((error) => {
        console.log(error)
      })
    */
  }
}
</script>
