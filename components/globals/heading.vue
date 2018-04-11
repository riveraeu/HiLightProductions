<template>
  <v-flex text-xs-center class="heading">
    <p class="primary--text lato line display-3"> {{ header }}</p>
    <p class="sub-header display-1"> {{ subHeader }}</p>
  </v-flex>
</template>

<script>
export default {
  props: ['header', 'subHeader']
}
</script>

<style scoped>
.heading {
  padding: 50px 5% 25px 5%;
}
.line{
  border-bottom: 2px solid grey;
}
</style>
