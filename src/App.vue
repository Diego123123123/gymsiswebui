<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>MY GYM</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="isUserLoggedIn" class="options">
        <button v-on:click="logout">logout</button>
      </div>
      <div v-if="!isUserLoggedIn" class="isNotLoggedIn">
        <router-link to="/signup">SIGN UP</router-link>
        <router-link to="/signin">SIGN IN</router-link>
      </div>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    logout(){
        console.log(localStorage.getItem("accesstoken") !== null)
        if (localStorage.getItem("accesstoken") !== null) {
            this.isUserLoggedIn = true;
        } else {
            this.isUserLoggedIn = false;
        }
        localStorage.removeItem('accesstoken');
        this.$router.push( {name: "home"} );
        location.reload()
    }
  },
  data () {
    return {
      isUserLoggedIn : localStorage.getItem("accesstoken") !== null
    }
  }
}
</script>
