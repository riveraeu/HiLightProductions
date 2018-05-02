<template>
  <div>
    <heroImage/>
    <productions/>
    <about/>
  </div>
</template>

<script>
import heroImage from '~/components/landing/hero-image.vue'
import productions from '~/components/landing/events-and-productions.vue'
import about from '~/components/landing/about.vue'

export default {
  components: {
    heroImage,
    productions,
    about
  }
}
</script>
