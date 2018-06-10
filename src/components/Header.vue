<template>
  <header>
    <nav>
      <div class="row">
        <ul class="main-nav">
          <li><a href="">How it works</a></li>
          <li><a href="">Our facilities</a></li>
          <li><a href="">Sing up</a></li>
        </ul>
      </div>
    </nav>
    <div class="hero-text-box">
      <h1>Goodby old paper file. <br> Welcome to online approach.</h1> 
      <div class="main-input-wrap fl-wrap"> 
        <div class="main-search-input-item">
          <input type="text" placeholder="Type a Patient name here" value="">
          <a href="" class="main-search-button btn btn-primary">Search for Patient</a>
        </div>
      </div>
    </div>
  </header>
</template>


<script>
</script>


<style scoped>
header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/header-image.png);
  height: 100vh;
  background-size: cover;
  background-position: center;
}

h1 {
  margin: 0;
  color: whitesmoke;
  font-size: 380%;
  font-weight: 100;
  font-family: "Lato 100";
  text-transform: uppercase;
  letter-spacing: 1px;
  word-spacing: 4px;
}

.row {
  margin-right: 150px;
  padding-top: 45px;
}

.hero-text-box {
  position: absolute;
  top: 50%;
  left: 43%;
  transform: translate(-50%, -50%);
}

.logo {
  height: 100px;
  width: auto;
  float: left;
}

.main-nav {
  float: right;
  list-style: none;
}

.main-nav li {
  display: inline-block;
  margin-left: 60px;
}

.main-nav li a {
  color: white;
  text-transform: uppercase;
  font-size: 120%;
}

.main-input-wrap {
  background: #fff;
  border-radius: 30px;
  margin-top: 50px;
  box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0.3);
}

.fl-wrap {
  float: left;
  width: 100%;
  position: relative;
}

.main-search-input-item {
  float: left;
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  position: relative;
}

.main-search-input-item input:first-child {
  border-radius: 100%;
}

.main-search-input-item input {
  float: left;
  border: none;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  outline: none;
}

.main-search-button {
  position: absolute;
  padding: 13px;
  right: 0px;
  height: 50px;
  width: 200px;
  color: #fff;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
</style>
