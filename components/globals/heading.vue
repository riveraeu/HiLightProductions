<template>
  <v-flex text-xs-center class="heading mr-5 ml-5">
    <h3 class="primary--text lato line display-3"> {{ header }}</h3>
    <h3 class="sub-header display-1"> {{ subHeader }}</h3>
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
