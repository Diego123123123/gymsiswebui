<template>
  <v-form
  v-on:submit.prevent="signup">
    <v-text-field
      label="Name"
      required
      v-model="name"
    ></v-text-field>

    <v-text-field
      label="LastName"
      required
      v-model="lastName"
    ></v-text-field>

    <v-text-field
      label="Password"
      :type="'password'"
      v-model="password"
      required
    ></v-text-field>


    <v-text-field
      label="E-mail"
      v-model="email"
      required
    ></v-text-field>

    <v-btn
      color="success"
      type="submit"
    >
      SIGN UP
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "signup",
  data(){
    return {
      name: "",
      lastName: "",
      password: "",
      email: ""
    }
  },
  methods: {
    signup(){
      this.$store.dispatch('retrieveToken', {
        name: this.name,
        lastName: this.lastName,
        password: this.password,
        email: this.email,
      }).then( response => {
        this.$router.push( {name: "home"} )
          location.reload()
      } ).catch(error  => {
        console.log("error")
      })
    }
  }
}
</script>

<style>
    form {
        margin-top: 10%;
        margin-left: 25%;
        width: 50%;
        text-align: center;
    }
</style>

