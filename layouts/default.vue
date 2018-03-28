<template>
  <v-app>
    <navbar/>
    <v-content>
      <nuxt />
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import navbar from '~/components/globals/navbar.vue'
import Footer from '~/components/globals/footer.vue'
export default {
  components: {
    navbar,
    Footer
  }
}
</script>

<style>
a {
  text-decoration: none;
}
img {
  width: 100%;
  height: 100%;
}
.container {
  padding: 0px;
}


.lato {
  font-family: 'Lato', sans-serif;
}
.abril {
  font-family: 'Abril Fatface', cursive;
}
.lobster {
  font-family: 'Lobster', cursive;
}
.impact {
  font-family: Impact, fantasy;
}


.sub-header{
  color: #1DE9B6;
  font-family: 'Lobster', cursive;
}
.body-text {
  font-size: 18px;
  color: #9E9E9E;
  font-family: 'Oxygen', sans-serif;
}

.secondary {
  background-color: #1DE9B6;
}
.secondary--text {
  color: #1DE9B6;
}

.primary {
  background-color: #FF9800;
}

.primary--text {
  color: #FF9800;
}
</style>
