<template>
  <div class="vue-tempalte">
    <form @submit.prevent="registerUser">
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="email"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="password"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign Up
      </button>

      <p class="forgot-password text-right">
        Already registered
        <router-link :to="{ name: 'login' }">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<script>
const axios = require("axios");
const instance = axios.create({
  //baseURL: "https://dockerexpressjwt.azurewebsites.net",
  baseURL: "http://localhost:8000",
});
export default {
  data() {
    return {   
      email: "",
      password: "",
    };
  },
  methods: {
    async registerUser() {
      try {
        instance
          .post("/signup", {            
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("jwt", response.data.token);
            this.$router.push({ name: "profile", params:{
                user: response.data.user}});
          })
          .catch(function (error) {
            console.log(error);
          });
        //let token = response.data.token;
        //if (token) {
        //  localStorage.setItem("jwt", token);
        //this.$router.push("/");
        //swal("Success", "Registration Was successful", "success");
        //} else {
        //swal("Error", "Something Went Wrong", "error");
        //}
      } catch (err) {
        console.log(err);
        //let error = err.response;
        //console.log(error);
        //if (error.status == 409) {
        //swal("Error", error.data.message, "error");
        //} else {
        //swal("Error", error.data.err.message, "error");
        //  }
      }
    },
  },
};
</script>