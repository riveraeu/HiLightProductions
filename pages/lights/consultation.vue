<template>
  <v-container>
    <v-layout row>
      <v-flex xs8 offset-xs2>
        <heading header="Consultation" subHeader="Take the guess work out of lighting and talk to a profesional today."/>
      </v-flex>
    </v-layout>
    <v-layout justify-center row>
      <v-flex xs1>
        <img src="/images/lights/consultation/ideas.svg" alt="ideas">
      </v-flex>
      <v-flex xs8>
        <div class="body-text mt-5 ml-5 mb-5">
          Lorem ipsum dolor amet af ennui next level squid hammock fam keytar scenester direct trade marfa pop-up synth. Tattooed snackwave listicle, jianbing cornhole migas man braid vexillologist leggings butcher skateboard messenger bag tofu neutra artisan. Normcore offal yuccie, skateboard ramps hot chicken lumbersexual occupy pork belly gluten-free austin kombucha cray chartreuse. Ugh cronut austin DIY waistcoat mlkshk. Subway tile iceland kogi, four dollar toast craft beer yr gentrify hot chicken. Next level scenester etsy, portland pitchfork intelligentsia chicharrones microdosing poke kogi. Portland ramps etsy, glossier beard poke craft beer enamel pin photo booth deep v pork belly.
        </div>
      </v-flex>
    </v-layout>
    <v-layout justify-center ow>
      <v-flex xs8>
        <div class="body-text mr-5 mb-5">
          Authentic leggings tattooed gastropub chicharrones brooklyn +1 pinterest kombucha messenger bag. Activated charcoal dreamcatcher brooklyn, messenger bag bespoke narwhal kitsch vice meh readymade tote bag forage. Brooklyn bitters vaporware, jianbing gluten-free cold-pressed mlkshk marfa retro flexitarian dreamcatcher synth. Retro synth cardigan fanny pack taxidermy kitsch knausgaard DIY leggings dreamcatcher mixtape scenester subway tile before they sold out. Cray iceland chambray brunch pour-over, hot chicken helvetica tumblr. Copper mug post-ironic portland actually artisan brooklyn, distillery letterpress selvage meh fanny pack mumblecore pour-over man braid 3 wolf moon.
        </div>
      </v-flex>
      <v-flex xs1>
        <img src="/images/lights/consultation/lights.svg" alt="lights">
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs2 offset-xs5>
        <v-btn class="mb-5" color="primary" to="/lights/contact">Get Started</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import heading from '~/components/globals/heading'
export default {
  components: {
    heading
  }
}
</script>
