<template>
  <div>
    <heroImage/>
    <services/>
    <productions/>
    <about/>
  </div>
</template>

<script>
import heroImage from '~/components/landing/hero-image.vue'
import productions from '~/components/landing/events-and-productions.vue'
import about from '~/components/landing/about.vue'
import services from '~/components/landing/services.vue'

export default {
  components: {
    heroImage,
    services,
    productions,
    about
  }
}
</script>
