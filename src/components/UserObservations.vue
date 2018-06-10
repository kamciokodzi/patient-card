<template>
  <div class="row">
    <app-observation v-for="(o,index) in observations" v-bind:key="o.id" v-bind:index="index"></app-observation>
  </div>
</template>

<script>
  import axios from 'axios';
  import Observation from './Observation.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      appObservation: Observation
    },
    computed: {
      observations(){
        return this.$store.state.observationList;
      }
    },
    methods: {
      sortingFun(date1, date2){
        if(date1 > date2) return 1
        else return -1
      }
    },
    created(){
      this.$store.state.observationList = [];
      var index;
      var currentObservation;
      var myObservation;
      axios.get('http://localhost:8080/baseDstu3/Observation?patient=' + this.$route.params.id)
        .then(res => {
          console.log(res);
          for(index=0; index < res.data.entry.length; ++index){
            currentObservation = res.data.entry[index].resource;
            myObservation = {
              id: currentObservation.id,
              code: currentObservation.code.coding[0].code,
              text: currentObservation.code.coding[0].display,
              date: currentObservation.effectiveDateTime,
              issued: currentObservation.issued,
              status: currentObservation.status
            }
           this.$store.state.observationList.push(myObservation);
          }
        })
    }
  }
</script>
