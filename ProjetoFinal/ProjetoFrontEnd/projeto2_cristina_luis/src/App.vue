<template>
  <NavBar />
  <header>
    
    <div class="full-width-container">
      
      <RouterView />
      
    </div>
  </header>

  <Footer />

</template>


<script setup>

import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';


</script>

<style scoped>
header {
  margin-bottom: 60px; /* Adjust the margin as per your requirement */
}
</style>








