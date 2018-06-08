<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex sm8>
        <heading header="Contact" subHeader="Ready to take the next step, lets get in contact"/>
      </v-flex>
    </v-layout>
    <v-layout justify-center row wrap>
      <v-flex class="input" sm4>
        <v-form ref="form" v-model="valid" lazy-validation>
         <v-text-field prepend-icon="face" color="grey" label="Name" v-model="name" :rules="nameRules" required></v-text-field>
         <v-text-field prepend-icon="phone" color="secondary" label="Phone" v-model="phone" :rules="phoneRules" required></v-text-field>
         <v-text-field prepend-icon="email" color="primary" label="E-mail" v-model="email" :rules="emailRules" required></v-text-field>
       </v-form>
     </v-flex>
     <v-flex sm2 class="ml-5">
       <div class="body-text mb-3">Check the boxes below if you would like any addition services.</div>
       <v-checkbox label="sound" v-model="options" color="grey" value="sound" hide-details></v-checkbox>
       <v-checkbox label="camera" v-model="options" color="secondary" value="camera" hide-details></v-checkbox>
       <v-checkbox label="action" v-model="options" color="primary" value="action" hide-details></v-checkbox>
     </v-flex>
     <v-flex class="input" sm6>
       <v-text-field color="grey" name="message" v-model="message" label="Please give us some details about your event" textarea></v-text-field>
     </v-flex>
   </v-layout>
   <v-layout justify-center row wrap>
      <v-btn :disabled="!valid" color="primary" @click="sendMail()">Send</v-btn>
      <v-snackbar :timeout=3000 v-model="snackbar">{{responseMessage}}</v-snackbar>
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
    options: [
      'sound', 'camera', 'action'
    ],
    snackbar: false,
    responseMessage: ''
  }),
  methods: {
    async sendMail () {
      if (this.$refs.form.validate()) {
        const response = await this.$axios.$post('api/mail', {
          name: this.name,
          phone: this.phone,
          email: this.email,
          options: this.options,
          message: this.message
        })
        this.responseMessage = response
        this.snackbar = true
      }
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
  .flex.xs1 {
    flex-basis: 15%;
    max-width: 15%;
  }
}
</style>
