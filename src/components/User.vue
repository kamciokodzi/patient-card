<template>
  <div class="container">
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="navbar-brand"> Patient Profile </div>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <router-link tag="li" :to="'/user/' + this.$route.params.id + '/detail'"  activeClass="active"> <a href=""> Profile</a></router-link>
            <router-link tag="li" :to="'/user/' + this.$route.params.id + '/observations'"  activeClass="active"> <a href=""> Observations</a></router-link>
            <router-link tag="li" :to="'/user/' + this.$route.params.id + '/requests'"  activeClass="active"> <a href="">  Medication Requests</a></router-link>
          </ul>
        </div>
      </div>
    </nav>
    <transition name="slide" mode="out-in">
      <div class="container">
        <router-view v-if="this.$route.params.id"></router-view>
      </div>
    </transition>
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

.slide-enter-active{
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active{
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
