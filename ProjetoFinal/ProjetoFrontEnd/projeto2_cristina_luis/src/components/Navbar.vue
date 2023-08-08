<template>
  <nav class="navbar navbar-expand-md navbar-dark" style="background-color: #070606">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img class="logo" src="" alt="">Calculator</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarID"
          aria-controls="navbarID" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarID">
        <div class="navbar-nav ml-auto">
          <a class="nav-link active color" aria-current="page" href="#">Home</a>
          <a class="nav-link active color" aria-current="page" href="#">Tickets</a>
          <a class="nav-link active color" aria-current="page" href="#">Reviews</a>
          <a class="nav-link active color" aria-current="page" href="#">B&$ Sangria</a>
          <a class="nav-link active color" aria-current="page" href="#">Cocktails</a>
          <a class="nav-link active" aria-current="page" href="#">
            <button class="btn btn-outline-success align-middle" type="submit">Sign up</button>
          </a>
          <a class="nav-link active" aria-current="page" href="#">
            <button class="btn btn-outline-success align-middle" type="submit">Login</button>
          </a>
          <a v-if="isLoggedIn" class="nav-link active" aria-current="page" href="#">
            <span class="logout-link" style="text-decoration: underline; color: grey;">Logout</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link.active {
  display: flex;
  align-items: center;
}
</style>

<script>
export default {
  data() {
    return {
      isLoggedIn: false, // Set this value based on user login status
    };
  },
};
</script>
