<template>
  <header>
    <div class="hero-text-box">
      <h1>Goodby old paper file. <br> Welcome to online approach.</h1> 
      <a href="" class="btn btn-primary">Search for Patient</a>
    </div>
  </header>
</template>

<style>

header{
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/header-image.png);
  height: 100vh;
  background-size: cover;
  background-position: center;
}

h1{
  margin: 0;
  color: whitesmoke;
  font-size: 380%;
  font-weight: 100;
  font-family: 'Lato 100';
  text-transform: uppercase;
  letter-spacing: 1px;
  word-spacing: 4px;

}

.hero-text-box{
  position: absolute;
  top: 50%;
  left: 43%;
  transform: translate(-50%, -50%)
}

.btn {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 30px;
  font-weight: 500;
  font-size: 120%;
  background-color: #3498db;
  border-radius: 30px;
}
</style>
