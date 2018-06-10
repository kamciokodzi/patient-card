<template>
  <div class="row">
    <app-request v-for="(o,index) in requests" v-bind:key="o.id" v-bind:index="index"></app-request>
  </div>
</template>

<script>
  import axios from 'axios';
  import MedicationRequest from './MedicationRequest.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      appRequest: MedicationRequest
    },
    computed: {
      requests(){
        return this.$store.state.requestList;
      }
    },
    created(){
      this.$store.state.requestList = [];
      var index;
      var currentRequest;
      var myRequest;
      axios.get('http://localhost:8080/baseDstu3/MedicationRequest?patient=' + this.$route.params.id)
        .then(res => {
          console.log('asdf')
          console.log(res);
          for(index=0; index < res.data.entry.length; ++index){
            currentRequest = res.data.entry[index].resource;
            myRequest = {
              id: currentRequest.id,
              authoredOn: currentRequest.authoredOn,
              intent: currentRequest.intent,
              medicationCode: currentRequest.medicationCodeableConcept.coding[0].code,
              medicationName: currentRequest.medicationCodeableConcept.coding[0].display,
              status: currentRequest.status
            }
           this.$store.state.requestList.push(myRequest);
          }
        })
    }
  }
</script>
