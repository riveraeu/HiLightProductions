<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex sm8>
        <heading header="Contact" subHeader="Ready to take the next step, lets get in contact"/>
      </v-flex>
    </v-layout>
    <v-layout justify-center row wrap>
      <v-flex class="input" sm4>
        <v-form v-model="valid">
         <v-text-field prepend-icon="face" color="grey" label="Name" v-model="name" :rules="nameRules" required></v-text-field>
         <v-text-field prepend-icon="phone" color="secondary" label="Phone" v-model="phone" :rules="phoneRules" required></v-text-field>
         <v-text-field prepend-icon="email" color="primary" label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
       </v-form>
     </v-flex>
     <v-flex sm4 class="ml-5">
       <div class="body-text mb-3">Check the boxes below if you would like any addition services.</div>
       <v-checkbox label="lights" v-model="ex4" color="grey" value="lights" hide-details></v-checkbox>
       <v-checkbox label="camera" v-model="ex4" color="secondary" value="camera" hide-details></v-checkbox>
       <v-checkbox label="action" v-model="ex4" color="primary" value="action" hide-details></v-checkbox>
     </v-flex>
   </v-layout>
   <v-layout row wrap justify-center>
     <v-flex class="input" sm5>
       <v-text-field color="grey" name="message" v-model="message" label="Please give us some details about your event" textarea></v-text-field>
     </v-flex>
   </v-layout>
   <v-layout justify-center row wrap>
     <v-flex sm1>
       <v-btn color="primary" @click="sendMail()">Send</v-btn>
     </v-flex>
   </v-layout>
 </v-container>
</template>

<script>
import heading from '~/components/globals/heading'
export default {
  components: {
    heading
  },
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || 'Name is required'
    ],
    phone: '',
    phoneRules: [
      v => !!v || 'Phone number is required'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    message: '',
    ex4: [
      'lights', 'camera', 'action'
    ]
  }),
  methods: {
    sendMail() {
      var authOptions = {
        method: 'POST',
         url: 'https://hilightproductions.herokuapp.com/send',
         headers: {
             'Access-Control-Allow-Origin': '*'
         },
         data: {
           name: this.name,
           phone: this.phone,
           email: this.email,
           message: this.message
        },
      }
      this.$axios(authOptions).then(response => {
        console.log(response)
      }, response => {
        console.log(response)
      });
    }
  }
}
</script>

<style scoped>
@media (max-width:600px) {
  .input {
    margin-left: 5%;
    margin-right: 5%;
  }
  .btn {
    display: block;
  }
}
</style>
