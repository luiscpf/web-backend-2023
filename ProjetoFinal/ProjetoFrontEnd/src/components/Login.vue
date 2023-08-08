<template>
  <div class="vue-tempalte">
    <form @submit.prevent="loginUser">
      <h3>Sign In</h3>

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
        Sign In
      </button>

      <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot-password">Forgot password ?</router-link>
      </p>

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
  //baseURL: "https://dockerexpressjwt.azurewebsites.net",
  baseURL: "http://localhost:8000", //CHANGE FOR THE AZURE ONE
});
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        instance.post("/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            localStorage.setItem("jwt", response.data.token);
            this.$router.push({
              name: "profile",
              params: {
                user: response.data.user,
              },
            });
          })
          .catch((error) => {
            console.log(error);
            this.$router.push({
              name: "unauthorized",
              params: {
                message: error.response.data.message,
              },
            });
          });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>