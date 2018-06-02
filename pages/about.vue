<template>
  <v-container>
    <v-layout row wrap justify-center>
      <p class="primary--text lato line display-3 mt-5 mb-5">About</p>
    </v-layout>
    <v-layout row wrap>
      <v-flex md7 text-xs-center >
        <div class="body-text mar-left mar-right mb-5"> {{ aboutCompany }}</div>
      </v-flex>
      <v-flex class="mt-5" md5 text-xs-center>
        <v-icon x-large>highlight</v-icon><span class="teko primary--text display-2">Hi Light Productions</span>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex sm5>
        <img src="/images/about/headshot.jpg" alt="headshot">
      </v-flex>
      <v-flex sm7 text-xs-center >
        <p class="sub-header display-1 mt-5">Founder of Hi Light Productions Harrison Moye</p>
        <div class="body-text mar-left mar-right"> {{ aboutHarrison }}</div>
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
      aboutCompany: 'HiLight brings quality production and consulting to events and theatre both big and small. Whether you are in need of equipment for a backyard event or consulting and set up for a large scale production, we’ve got you covered. Currently based out of San Rafael, CA, the goal of HiLight Productions is, to bring thoughtful and affordable production elements to local artists and companies. When art thrives so does the humanity.',
      aboutHarrison: 'After obtaining his certificate in Technical Theater Craft and Design from Pacific Conservatory Theatre. Harrison returned to the North Bay to continue his passion of working in the arts. He gained experience working for different production and theatre companies around The Bay and got to work in places like The Legion of Honor, The Asian Art Museum, Alcatraz, and The Mondavi Center in Davis. He’s excited to bring HiLight to life and bring quality service to the Bay Area!'
    }
  }
}
</script>
