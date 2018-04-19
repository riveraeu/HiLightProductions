<template>
  <v-container>
    <v-layout class="pb-5" text-xs-center justify-center row>
      <v-flex md8>
        <p class="primary--text lato line display-3 mt-5">{{eventProd.title}}</p>
        <div class="body-text mar-left mar-right"> {{ eventProd.text }}</div>
      </v-flex>
    </v-layout>
    <div class="cards">
      <div class="card" v-for="(image, index) in eventProd.images" :key="index">
        <img v-lazy="image" :alt="index" v-on:click="openGallery(index)">
      </div>
      <lightbox :images="eventProd.images" ref="lightbox" :show-light-box="false" :show-thumbs="false"/>
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
      eventProd: this.$route.params
    }
  },
  methods: {
    openGallery (index) {
      this.$refs.lightbox.showImage(index)
    }
  },
  computed: {
    /* this is not going to scale well
    eventProduction () {
      if (this.name === 'heathers') {
        return this.$store.state.eventsProductions.heathers
      } else if (this.name === 'events') {
        return this.$store.state.eventsProductions.events
      } else if (this.name === 'rose-in-america') {
        return this.$store.state.eventsProductions.roseInAmerica
      } else {
        return this.$store.state.eventsProductions.peterStarcatcher
      }
    },
    images () {
      if (this.name === 'heathers') {
        return this.$store.state.eventsProductions.heatherImages
      } else if (this.name === 'events') {
        return this.$store.state.eventsProductions.eventImages
      } else if (this.name === 'rose-in-america') {
        return this.$store.state.eventsProductions.roseInAmericaImages
      } else {
        return this.$store.state.eventsProductions.peterStarcatcherImages
      }
    }
    */
  }
}
</script>

<style scoped>
img[lazy=loading] {
  background-color: black;
}
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
@media (max-width: 960px) {
  .cards {
    column-count: 2;
  }
}

@media (max-width: 600px) {
  .cards {
    column-count: 1;
  }
  .card {
    margin: 0 0 0;
  }
}
img {
  display: block;
  width: 100%;
}
</style>
