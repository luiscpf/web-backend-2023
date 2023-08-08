<template>
    <div class="vue-tempalte">
        <form>
            <h3>Forgot Password</h3>

            <div class="form-group">
                <label>Unauthorized access!</label>   
                <p>{{ message }}</p>         
            </div>           
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
        message:""        
    };
  },
  created: function () {      
    this.message= this.$route.params.message;
  },
};
</script>