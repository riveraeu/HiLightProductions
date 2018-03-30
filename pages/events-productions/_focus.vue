<template>
  <v-container>
    <v-layout class="pb-5" justify-center row>
      <v-flex xs8>
        <heading :header="eventProduction[0].header" :subHeader="eventProduction[0].subHeader"/>
        <div class="body-text"> {{ eventProduction[1].text }}</div>
      </v-flex>
    </v-layout>
    <div class="cards">
      <div class="card" v-for="(image, index) in images" :key="index">
        <img v-lazy="image.src" :alt="index" v-on:click="openGallery(index)">
      </div>
      <lightbox :images="images" ref="lightbox" :show-light-box="false" :show-thumbs="false"/>
    </div>
  </v-container>
</template>

<script>
import heading from '~/components/globals/heading.vue'
import lightbox from 'vue-image-lightbox'

require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

export default {
  components: {
    heading,
    lightbox
  },
  data () {
    return {
      name: this.$route.params.focus
    }
  },
  methods: {
    openGallery (index) {
      this.$refs.lightbox.showImage(index)
    }
  },
  computed: {
    // this is not going to scale well
    eventProduction () {
      if (this.name === 'heathers') {
        return this.$store.state.eventsProductions.heathers
      } else if (this.name === 'events') {
        return this.$store.state.eventsProductions.events
      } else {
        return this.$store.state.eventsProductions.peterStarcatcher
      }
    },
    images () {
      if (this.name === 'heathers') {
        return this.$store.state.eventsProductions.heatherImages
      } else if (this.name === 'events') {
        return this.$store.state.eventsProductions.eventImages
      } else {
        return this.$store.state.eventsProductions.peterStarcatcherImages
      }
    }
  }
}
</script>

<style scoped>
.cards {
  column-count: 3;
  column-gap: 1em;
}
.card {
  margin: 0 0 1em;
  width: 100%;
  transition: all 100ms ease-in-out;
  display: inline-block;
  cursor: pointer;
}
img {
  display: block;
  width: 100%;
}
</style>
