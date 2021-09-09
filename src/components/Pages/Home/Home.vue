<template>
  <div>
      <NavBar id="nav" />
      <Hero/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import Hero from "./Hero.vue"
export default {
    components:{
        NavBar,
        Hero
    }
}
</script>

<style>
#nav{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
}
</style>