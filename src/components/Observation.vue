<template>
  <div class="col-lg-5 strip_list wow fadeIn animated">
    <small>{{code}} <br> Date: {{date}}   </small>
    <h3> {{text}} </h3>
    <br>
    <hr>
    <p> Status: {{status}} </p>
    <p> Value: {{value}} </p>
    <p> Unit: {{unit}} </p>
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
        value: this.$store.state.observationList[this.index].value,
        unit: this.$store.state.observationList[this.index].unit
      }
    }
  }
</script>

<style scoped>
.strip_list {
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.15);
}

.strip_list small {
  float: right;
  color: #999;
  font-weight: 600;
}

.strip_list h3 {
  float: left;
  font-size: 22px;
  font-size: 1.375rem;
  margin-top: 0;
  margin-right: 10px;
}

.strip_list p {
  margin-bottom: 15px;
}
</style>
