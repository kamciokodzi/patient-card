<template>
  <div class="container ">
    <div class="panel-heading">
      <h3> {{patient.name}} {{patient.family}}</h3>
      <div class="panel-body">
        <div class="row">
          <table class="table">
            <tbody>
              <tr>
                <td>Gender</td>
                <td>{{ patient.gender}}</td>
              </tr>
              <tr>
                <td>Birth Date</td>
                <td>{{patient.birthDate}}</td>
              </tr>
              <tr>
                <td>National Insurance Number</td>
                <td>{{ patient.niu}}</td>
              </tr>
              <tr>
                <td>City</td>
                <td>{{patient.city}}</td>
              </tr>
               <tr>
                <td>Postal Code</td>
                <td>{{ patient.postalCode}}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{{patient.country}}</td>
              </tr>
              <tr>
                <td>State</td>
                <td>{{ patient.state}}</td>
              </tr>
              <tr>
                <td>Marital Status</td>
                <td>{{patient.maritalStatus}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data () {
      return {
        patient: {}
      }
    },
    created(){
      var currentPatient;
      axios.get('http://localhost:8080/baseDstu3/Patient?_id=' + this.$route.params.id)
        .then(res => {
          console.log(res.data.entry);
          currentPatient = res.data.entry[0].resource;
          const myUser  = {
              id: currentPatient.id,
              birthDate: currentPatient.birthDate,
              city: currentPatient.address[0].city,
              country: currentPatient.address[0].country,
              postalCode: currentPatient.address[0].postalCode,
              state: currentPatient.address[0].state,
              gender: currentPatient.gender,
              maritalStatus: currentPatient.maritalStatus.text,
              family: currentPatient.name[0].family,
              name: currentPatient.name[0].given[0],
              niu: currentPatient.identifier[1].value
            };
            this.patient = myUser;
        })
    }
  }
</script>



<style>


</style>
