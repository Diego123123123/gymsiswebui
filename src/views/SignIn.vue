<template>
    <v-form
            v-on:submit.prevent="signin">
        <v-text-field
                label="E-mail"
                v-model="email"
                required
        ></v-text-field>

        <v-text-field
                label="Password"
                :type="'password'"
                v-model="password"
                required
        ></v-text-field>
        <v-btn
                color="success"
                type="submit"
        >
            SIGN IN
        </v-btn>
    </v-form>
</template>
<script>
    export default {
        name: "signin",
        data(){
            return {
                name: "",
                lastName: "",
                password: "",
                email: ""
            }
        },
        methods: {
            signin(){
                console.log("wiiii")
                this.$store.dispatch('login', {
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

<style scoped>
    form {
        margin-top: 10%;
        margin-left: 25%;
        width: 50%;
        text-align: center;
    }
</style>

