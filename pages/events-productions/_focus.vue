<template>
  <v-container>
    <v-layout class="pb-5" text-xs-center justify-center row>
      <v-flex md8>
        <p class="primary--text lato line display-3 mt-5">{{eventProd[0].context.custom.title}}</p>
        <div class="body-text mar-left mar-right"> {{eventProd[0].context.custom.description}}</div>
      </v-flex>
    </v-layout>
    <div class="cards">
      <div class="card" v-for="(image, index) in eventProd" :key="index">
        <img v-lazy="image.url" :alt="index" v-on:click="openGallery(index)">
      </div>
      <lightbox :images="eventProd" ref="lightbox" :show-light-box="false" :show-thumbs="false"/>
    </div>
  </v-container>
</template>

<script>
import lightbox from 'vue-image-lightbox'

require('vue-image-lightbox/dist/vue-image-lightbox.min.css')

export default {
  data () {
    return {
      eventProd: []
    }
  },
  components: {
    lightbox
  },
  methods: {
    openGallery (index) {
      this.$refs.lightbox.showImage(index)
    }
  },
  async asyncData ({ app, params }) {
    const res = await app.$axios.$get('api/focus/' + params.focus)
    return {eventProd: res.resources}
  }
}
</script>

<style scoped>
img[lazy=loading] {
  background: url('/loading.gif') no-repeat center center;
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
