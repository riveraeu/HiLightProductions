<template>
  <v-container grid-list-md>
    <v-layout justify-center text-sm-center row>
      <v-flex sm8>
        <p class="primary--text lato line display-3 mt-5 mb-5">Events and Productions</p>
        <!-- <heading header="Events & Productions" subHeader="Look at all the cool productions and events Hi Light has put on."/> -->
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <overlay v-for="(eventProd, index) in eventsProductions" :key="index" :eventProd="eventProd"/>
    </v-layout>
  </v-container>
</template>

<script>
import heading from '~/components/globals/heading.vue'
import overlay from '~/components/globals/image-overlay.vue'
export default {
  components: {
    heading,
    overlay
  },
  computed: {
    eventsProductions () {
      return this.$store.state.eventsProductions.eventsProds
    }
  }
}
</script>
