<template>
  <Home/>
</template>

<script>
import Home from "./components/Pages/Home/Home.vue"
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

body{
  background:rgb(239, 243, 253)
}

.black-btn{
  display: inline-block;
    background: #000000;
    color: #ffffff;
    padding:15px 40px;
    border-radius: 50px;
    margin-top: 30px;

    box-shadow: 0px 25px 50px rgba(35,57,99,0.5);
}
.heading{
    font-weight: bold;
    font-size: 48px;
    text-align: left;
}
</style>
