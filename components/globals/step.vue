<template>
  <v-layout justify-center row class="mt-5">
    <v-flex xs8>
      <div class="primary--text display-1">{{ title }}</div>
      <div class="body-text">{{ text }}</div>
    </v-flex>
    <v-flex xs1>
      <img class="ml-5" :src="icon" :alt="title">
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['icon', 'title', 'text']
}
</script>
