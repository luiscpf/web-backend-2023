<template>
  <div class="vue-tempalte">
    <form @submit.prevent="verifyAccess">
      <h3>Welcome</h3>
      <div class="form-group">
        <label>Full Name</label>
        <p>Id is: {{ id }}</p>
      </div>

      <div class="form-group">
        <label>Email address</label>
        <p>Email is: {{ email }}</p>
      </div>

      <div class="form-group">
        <label>Password</label>
        <p>Password is: {{ password }}</p>
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Get Users
      </button>

      <ul id="example-1">
        <li v-for="user in users" :key="user.id">
          {{ user }}
        </li>
      </ul>

      <div class="social-icons">
        <ul>
          <li>
            <a href="#"><i class="fa fa-google"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
const axios = require("axios");
const instance = axios.create({
  baseURL: "http://localhost:8000",
});
export default {
  data() {
    return {
      id: "",
      email: "",
      password: "",
      users:""
    };
  },
  created: function () { //gets this from the login
    var user = this.$route.params.user;
    this.email = user.email;
    this.password = user.password;
    this.id = user.id;
  },
  methods: {
    async verifyAccess() {
      try {
        var token = localStorage.getItem("jwt");
        instance.get("/users", {
            headers: { Authorization: "Bearer " + token },
          })
          .then((response) => {
            console.log(response.data);
            this.users = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>