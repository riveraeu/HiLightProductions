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
      about: 'After obtaining his certificate in Technical Theater Craft and Design from Pacific Conservatory Theatre. Harrison returned to the North Bay to continue his passion for working in the arts. He gained experience working for different production and theatre companies around The Bay and got to work in places like The Legion of Honor, The Asian Art Museum, Alcatraz, and The Mondavi Center in Davis. Currently based out of San Rafael, the goal of Hi Light Productions is, to bring thoughtful and affordable production elements to local artists and companies. When art thrives so does the humanity.'
    }
  }
}
</script>
