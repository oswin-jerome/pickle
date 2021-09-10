<template>
  <div>
      <NavBar id="nav" />
      <Hero/>
      <About/>
      <Special/>
      <Contact/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import Hero from "./Hero.vue"
import About from "./About.vue"
import Special from "./Special.vue"
import Contact from "./Contact.vue"
export default {
    components:{
        NavBar,
        Hero,
        About,
        Special,
        Contact
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