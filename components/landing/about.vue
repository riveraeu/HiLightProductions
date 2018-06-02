<template>
  <v-container class="mt-5" fluid>
    <v-layout row wrap>
      <v-flex class="vertical-align-2" md6 text-xs-center>
        <v-icon x-large>highlight</v-icon><span class="impact primary--text display-2">Hi Light Productions</span>
      </v-flex>
      <v-flex md6 text-xs-center >
        <p class="primary--text center lato display-3 mt-5">About</p>
        <div class="body-text mar-left mar-right"> {{ about }}</div>
        <!-- <v-btn class="mt-5" color="orange" dark to="/about">Read More</v-btn> -->
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
      about: 'HiLight brings quality production and consulting to events and theatre both big and small. Whether you are in need of equipment for a backyard event or consulting and set up for a large scale production, we’ve got you covered. Currently based out of San Rafael, CA, the goal of HiLight Productions is, to bring thoughtful and affordable production elements to local artists and companies. When art thrives so does the humanity.'
    }
  }
}
</script>
