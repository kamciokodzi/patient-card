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
        dateInput: '',
        sortedObservations: []
      }
    },
    components: {
      appObservation: Observation
    },
    computed: {
      observations(){
        this.sortedObservations=[];
        this.$store.state.observationList.sort( (x,y) => {
          return new Date(x.date) - new Date(y.date);
        });
        this.$store.state.observationList.map(x => {
          if (x.date > this.dateInput)
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
            var value = 'No Data';
            var unit = "N/A";
            currentObservation = res.data.entry[index].resource;
            console.log(currentObservation);
            if("valueQuantity" in currentObservation){
              value = currentObservation.valueQuantity.value;
              unit = currentObservation.valueQuantity.unit;
            }else if("component" in currentObservation){
                value = currentObservation.component[0].valueQuantity.value
                + "/" + currentObservation.component[1].valueQuantity.value;
                unit = currentObservation.component[0].valueQuantity.unit;
            }
            myObservation = {
              id: currentObservation.id,
              code: currentObservation.code.coding[0].code,
              text: currentObservation.code.coding[0].display,
              date: currentObservation.effectiveDateTime,
              issued: currentObservation.issued,
              status: currentObservation.status,
              value: value,
              unit: unit
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
