<template>
  <v-flex v-on:mouseover="active = true" v-on:mouseleave="active = false" class="box" text-xs-center xs6>
    <nuxt-link :to="'/events-productions/'+path">
      <img :src="image" :alt="path">
      <div v-show="active" class="image-overlay">
        <h3 class="image-title sub-header display-1"> {{ title }}</h3>
      </div>
    </nuxt-link>
  </v-flex>
</template>

<script>
export default {
  props: ['title', 'image', 'path'],
  data () {
    return {
      active: false
    }
  }
}
</script>

<style scoped>
.box {
  position: relative;
}
.image-overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(38, 50, 56, 0.7);
}
.image-title {
  padding: 20% 0;
}
</style>
