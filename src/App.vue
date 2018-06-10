<template>
  <div class="row">
    <app-header></app-header>
    <section class="user-list" v-if="isQuerySuccessfull"> 
      <h2 >Result of query</h2>
        <div class="container">
          <div class="row">
            <app-home v-for="(u,index) in users" v-bind:key="u.id" v-bind:index="index"></app-home>
          </div>
        </div>
    </section>
      <app-user v-if="isQuerySuccessfull"></app-user>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import User from './components/User.vue'

import axios from 'axios'

export default {
  data() {
    return {
      isPatientSelected: false
    }
  },
  computed: {
    isQuerySuccessfull() {
      return this.$store.state.isQuerySuccessfull;
    },
    userSelected() {
      return this.$store.state.userSelected;
    },
    users() {
      return this.$store.state.userList;
    }
  },
  name: 'app',
  components: {
    appHeader: Header,
    appHome: Home,
    appUser: User
  }
}
</script>

<style>

.user-list{
  display: inline-block;
}

body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  background-color: rgb(190, 190, 190);
  color: #555;
  font-family: 'Lato', Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 300;
  text-rendering: optimizeLegibility;
}

.row{
  margin: 0 auto;
}


h2 {
  text-transform: uppercase;
  font-size: 260%;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
}

h2:after {
  display: block;
  height: 2px;
  background-color: rgb(52, 139, 221);
  content: "";
  width: 100px;
  margin: 0 auto;
  margin-top: 20px;
}

</style>
