<template>
  <v-container>
    <p class="primary--text center abril display-2 mt-5">Full Service</p>
    <v-layout class="mt-5" row wrap text-sm-center justify-center>
      <card icon="/images/lights/full-service/planning.svg" title="Planning" text="This is the first set in the lighting design process. Our expert lighting designer will sit down with you and help to plan the perfect event. From theater productions to parties, we have the knowlege and products to wow your guests."/>
      <card icon="/images/lights/full-service/set-up.svg" title="Set Up" text="The next step in this process is the set up. The profesionals at Hi Light will be there to set up for the event and make sure is working smoothly. You dont have to worry with Hi Light, we are here for you."/>
      <card icon="/images/lights/full-service/enjoy.svg" title="Enjoy" text="This is it, the day of the event is here. Now its time to enjoy the lights! Everything will be set up perfectly and we will be there handling all the lights. Your event will be the talk of the town when you."/>
      <v-flex sm2>
        <v-btn class="mb-5 mt-5" color="primary" to="/lights/contact">Get Started</v-btn>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <p class="primary--text center abril display-2 mt-5">Consultation</p>
    <v-layout justify-center row wrap>
      <v-flex sm1>
        <img src="/images/lights/consultation/ideas.svg" alt="ideas">
      </v-flex>
      <v-flex sm11>
        <div class="text body-text mt-5 ml-5 mb-5">
          Lorem ipsum dolor amet af ennui next level squid hammock fam keytar scenester direct trade marfa pop-up synth. Tattooed snackwave listicle, jianbing cornhole migas man braid vexillologist leggings butcher skateboard messenger bag tofu neutra artisan. Normcore offal yuccie, skateboard ramps hot chicken lumbersexual occupy pork belly gluten-free austin kombucha cray chartreuse. Ugh cronut austin DIY waistcoat mlkshk. Subway tile iceland kogi, four dollar toast craft beer yr gentrify hot chicken. Next level scenester etsy, portland pitchfork intelligentsia chicharrones microdosing poke kogi. Portland ramps etsy, glossier beard poke craft beer enamel pin photo booth deep v pork belly.
        </div>
      </v-flex>
    </v-layout>
    <v-layout justify-center row wrap>
      <v-flex sm11>
        <div class="text body-text mr-5 mb-5">
          Authentic leggings tattooed gastropub chicharrones brooklyn +1 pinterest kombucha messenger bag. Activated charcoal dreamcatcher brooklyn, messenger bag bespoke narwhal kitsch vice meh readymade tote bag forage. Brooklyn bitters vaporware, jianbing gluten-free cold-pressed mlkshk marfa retro flexitarian dreamcatcher synth. Retro synth cardigan fanny pack taxidermy kitsch knausgaard DIY leggings dreamcatcher mixtape scenester subway tile before they sold out. Cray iceland chambray brunch pour-over, hot chicken helvetica tumblr. Copper mug post-ironic portland actually artisan brooklyn, distillery letterpress selvage meh fanny pack mumblecore pour-over man braid 3 wolf moon.
        </div>
      </v-flex>
      <v-flex sm1>
        <img src="/images/lights/consultation/lights.svg" alt="lights">
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-center text-sm-center>
      <v-flex sm2>
        <v-btn class=" mb-5" color="primary" to="/lights/contact">Get Started</v-btn>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <p class="primary--text center abril display-2 mt-5">Rentals</p>
    <v-layout class="mt-5" row wrap text-sm-center justify-center>
      <card icon="/images/lights/rentals/cart.svg" title="Shopping" text="Browse our selection of event lights and packages. Packages are perfect for a standard get together, or you can rent indivudial lights for unique ocasions. Once you have chosen your lights, your request will be sent in for approval."/>
      <card icon="/images/lights/rentals/warehouse.svg" title="Pick Up" text="We work hard to approve your request quickly. Once you have been approved you can pick up the lights from our facsiliate, or we may be able to drop off and pick up the lights from your event. Just let us know what works for you."/>
      <card icon="/images/lights/rentals/list.svg" title="Return" text="Once your event is over, you will have x number of days to return the lights to our warehouse. The client is responsible for any damage to the lights. We may even be able to pick up the lights for you."/>
      <v-flex xs2>
        <v-btn class="mb-5 mt-5" color="primary" to="/lights/rentals/store">Get Started</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import card from '~/components/globals/card.vue'
export default {
  data () {
    return {
      text: 'Hi Light Productions offers a variety of lighting services to fit all of your needs. Want us to do all the work? Take a look at our full service option. Looking for input from a proffesional, our consulting service may be perfect for you. Know what your doing and just need the lights? We offer lighting rentals, including packages and individual lights.'
    }
  },
  components: {
    card
  }
}
</script>
