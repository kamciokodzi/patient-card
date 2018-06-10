<template>
  <div class="row">
    Code: {{code}}
    Text: {{text}}
    Date: {{date}}
    Status: {{status}}
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
      }
    }
  }
</script>