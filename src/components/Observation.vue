<template>
  <div class="col-lg-5 strip_list wow fadeIn animated">
    <small>{{code}} <br> Date: {{date}}   </small>
    <h3> {{text}} </h3>
    <p> Status: {{status}} </p>
    <p> Age {{age}} </p>
    <p> {{ weight}} kg</p>
    <p> Pressure {{pressure}} mmHg</p>
  </div>
</template>

<script>
  export default {
    props: ['index'],
    data() {
      return{
        id: this.$store.state.observationList[this.index].id,
        code: this.$store.state.observationList[this.index].code,
        text: this.$store.state.observationList[this.index].text,
        date: this.$store.state.observationList[this.index].date,
        issued: this.$store.state.observationList[this.index].issued,
        status: this.$store.state.observationList[this.index].status,
        age: this.$store.state.observationList[this.index].age,
        weight: this.$store.state.observationList[this.index].weight,
        pressure: this.$store.state.observationList[this.index].pressure
      }
    }
  }
</script>

<style scoped>
.strip_list {
  display: inline-block;
  margin: 20px 20px 20px 20px;
  margin-bottom: 25px;
  background-color: #fff;
  padding: 20px 15px 15px 30px;
  border-radius: 5px;
  position: relative;
  -moz-box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
}

.strip_list small {
  color: #999;
  display: block;
  font-weight: 600;
}

.strip_list h3 {
  font-size: 22px;
  font-size: 1.375rem;
  margin-top: 0;
  margin-right: 10px;
}

.strip_list p {
  margin-bottom: 15px;
}
</style>
