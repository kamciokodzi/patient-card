<template>
  <div class="row">
    <app-header></app-header>
    <!-- <router-view></router-view>
    <button @click="fetchData"> Fetch Data </button>
    <button @click="showData"> Show Data </button>
    <h3 v-for="u in users" :key="u.id">{{u.name}}</h3> -->

  </div>
</template>

<script>
import Header from './components/Header.vue'
import axios from 'axios'

export default {
  data() {
    return {
      users: []
    }
  },
  name: 'app',
  components: {
    appHeader: Header
  },
  methods: {
    fetchData() {
      var index;
      axios.get('http://localhost:8080/baseDstu3/Patient?name=Andre')
        .then(res => {
          for(index=0; index < res.data.entry.length; ++index){
            console.log(res.data.entry[index].resource);
            const myUser = {
              name: res.data.entry[index].resource.birthDate
            };
            this.users.push(myUser)
          }
        })
    },
    showData() {
      console.log(this.users);
    }
  }
}
</script>

<style>

body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html{
  background-color: white;
  color: #555;
  font-family: 'Lato', Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: 300;
  text-rendering: optimizeLegibility;
}

.row{
  margin: 0 auto;
}

</style>
