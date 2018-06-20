<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="mt-5">
        <p class="primary--text center abril display-2 mt-5">Icons used on this site:</p>
        <ul>
          <li v-for="image in images">{{image}}</li>
        </ul>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      images: [
        'Freepik from www.flaticon.com ',
        'Smashicons from www.flaticon.com ',
        'Pixel perfect from www.flaticon.com ',
        'monkik perfect from www.flaticon.com '
      ]
    }
  }
}
</script>
