<template>
  <div class="container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand"> Patient Profile </div>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link tag="li" :to="'/user/' + this.$route.params.id + '/detail'" class="active"> <a href=""> Profile</a></router-link>
            <router-link tag="li" :to="'/user/' + this.$route.params.id + '/observations'" > <a href=""> Observations</a></router-link>
            <router-link tag="li" :to="'/user/' + this.$route.params.id + '/requests'" > <a href="">  Medication Requests</a></router-link>
            <router-link tag="li" :to="'/user/' + this.$route.params.id + '/medications'" > <a href=""> Medication</a></router-link>
          </ul>
        </div>
      </div>
    </nav>
    <router-view v-if="this.$route.params.id"></router-view>
  </div>
  
</template>

<script>
  export default {
    data (){
      return{

      }
    }
  }
</script>

<style>
.nab-bar{
  display: inline-block;
}
</style>
