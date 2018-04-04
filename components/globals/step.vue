<template>
  <v-layout justify-center wrap row class="mt-5">
    <v-flex class="text" sm8>
      <div class="primary--text display-1">{{ title }}</div>
      <div class="body-text">{{ text }}</div>
    </v-flex>
    <v-flex sm1>
      <img :src="icon" :alt="title">
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['icon', 'title', 'text']
}
</script>

<style scoped>
img {
  margin-left: 10%;
}
@media (max-width:600px) {
  .text {
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
  }
  img {
    margin-left: 0;
    margin-top: 5%;
    height: 100px;
  }
}
</style>
