<template>
  <v-container>
    <v-layout justify-center row>
      <v-flex sm8>
        <heading header="Events & Productions" subHeader="Look at all the cool productions and events Hi Light has put on."/>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <overlay title="Heathers" image="/images/events-productions/heathers/heathers0.jpg" path="heathers"/>
      <overlay title="Events" image="/images/events-productions/events/events0.jpg" path="events"/>
    </v-layout>
    <v-layout row wrap>
      <overlay title="Peter and the Starcatcher" image="/images/events-productions/peter-starcatcher/peter-starcatcher0.jpg" path="peter-starcatcher"/>
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
  }
}
</script>
