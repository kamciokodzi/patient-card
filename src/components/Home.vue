<template>
  <section class="user-list"> 
    <div class="container">
      <div class="row">
        <h2>Result of query</h2>
        <a href="">
          <div class="col-md-3 strip_list wow fadeIn animated">
            <small>Insurance No. 82313242</small>
            <h3>Mark Buffalo</h3>
            <p>US Kansas 213-322</p>
          </div>
        </a>

        <div class="col-md-3 strip_list wow fadeIn animated">
          <small>Female 26</small>
          <h3>Amanda Bruno</h3>
          <p>US Florida 231-222</p>
        </div>

        <div class="col-md-3 strip_list wow fadeIn animated">
          <small>Female 26</small>
          <h3>Amanda Bruno</h3>
          <p>US Florida 231-222</p>
        </div>
            <div class="col-md-3 strip_list wow fadeIn animated">
          <small>Female 26</small>
          <h3>Amanda Bruno</h3>
          <p>US Florida 231-222</p>
        </div>
            <div class="col-md-3 strip_list wow fadeIn animated">
          <small>Female 26</small>
          <h3>Amanda Bruno</h3>
          <p>US Florida 231-222</p>
        </div>
      </div>
    </div>
  </section>

  
</template>


<style scoped>

section{
  padding: 40px 0;
}

.container{
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

h2{
  text-transform: uppercase;
  font-size: 260%;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 20px;
}

h2:after{
  display: block;
  height: 2px;
  background-color: rgb(52, 139, 221);
  content: "";
  width: 100px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
