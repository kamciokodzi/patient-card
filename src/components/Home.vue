<template>
  <router-link tag="a" :to="'/user/' + this.id +'/detail'">
    <div class="col-lg-3 strip_list wow fadeIn animated">
      <small>Insurance No. {{insuranceNo}}</small>
      <h3>{{name}} {{surname}}</h3>
      <p>{{country}} {{city}} {{state}} {{postalCode}}</p>
    </div>
  </router-link>
  
</template>


<script>
  export default {
    props: ['index'],
    data() {
      return{
        insuranceNo: this.$store.state.userList[this.index].niu,
        name: this.$store.state.userList[this.index].name,
        surname: this.$store.state.userList[this.index].family,
        city: this.$store.state.userList[this.index].city,
        country: this.$store.state.userList[this.index].country,
        state: this.$store.state.userList[this.index].state,
        postalCode: this.$store.state.userList[this.index].postalCode,
        id: this.$store.state.userList[this.index].id
      }
    }
  }
</script>

<style >
section {
  padding: 40px 0;
}

.container {
  width: 1600px;
}

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
