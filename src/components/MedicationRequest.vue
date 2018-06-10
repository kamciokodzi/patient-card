<template>
    <div class="col-lg-5 strip_list wow fadeIn animated">
      <small>Authored On: {{authoredOn}} </small>
      <small> Intent: {{intent}} </small>
      <p> Code: {{medicationCode}} </p>
      <h3> {{medicationName}} </h3>
      Status: {{status}}
    </div>
</template>

<script>
  export default {
    props: ['index'],
    data() {
      return{
        id: this.$store.state.requestList[this.index].id,
        authoredOn: this.$store.state.requestList[this.index].authoredOn,
        intent: this.$store.state.requestList[this.index].intent,
        medicationCode: this.$store.state.requestList[this.index].medicationCode,
        medicationName: this.$store.state.requestList[this.index].medicationName,
        status: this.$store.state.requestList[this.index].status,
      }
    }
  }
</script>

<style>
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

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
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
