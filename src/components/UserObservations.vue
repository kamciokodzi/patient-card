<template>
  <div class="container">
    <h3>Search by date: </h3> 
    <input type="text" class="form-control" v-model="dateInput">
    <div class="row">
      <app-observation v-for="(o,index) in observations" v-bind:key="o.id" v-bind:index="index"></app-observation>
   </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Observation from './Observation.vue'
  export default {
    data () {
      return {
        dateInput: 0,
        sortedObservations: []
      }
    },
    components: {
      appObservation: Observation
    },
    computed: {
      observations(){
        this.sortedObservations=[];
        this.$store.state.observationList.map(x => {
          if (new Date(x.date) > new Date(this.dateInput)) 
            this.sortedObservations.push(x);
        });

        return this.sortedObservations;
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
            var weight = 'No Data';
            var age = 'No Data';
            var pressure = 'No Data';
            currentObservation = res.data.entry[index].resource;
            if("valueQuantity" in currentObservation){
              if(currentObservation.valueQuantity.code == "kg")
                weight = currentObservation.valueQuantity.value;
              else
                age = currentObservation.valueQuantity.value;
            }else if("component" in currentObservation){
                pressure = currentObservation.component[0].valueQuantity.value;
            }
            myObservation = {
              id: currentObservation.id,
              code: currentObservation.code.coding[0].code,
              text: currentObservation.code.coding[0].display,
              date: currentObservation.effectiveDateTime,
              issued: currentObservation.issued,
              status: currentObservation.status,
              pressure: pressure,
              weight: weight,
              age: age
            }
           this.$store.state.observationList.push(myObservation);
          }
        })
    }
  }
</script>


<style>
.form-control{
  width: 400px;
  display: inline-block;
  margin: 10px 10px 10px 10px;
}

h3{
  display: inline-block;
  margin: 10px 10px 10px 10px;
}
</style>
