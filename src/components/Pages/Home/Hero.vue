<template>
  <div>
      <div class="row container m-auto text-center text-md-left" id="hero">
          <div class="col-md-6 col-sm-12 p-0 m-0">
              <h1 id="heading">
                Freshness <br>
                in every bite
              </h1>
              <p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime atque aspernatur corrupti voluptatum rem.</p>
                <a href="#contact" id="cta">Contact us</a>
          </div>
          <div class="col-md-6 col-sm-12 p-0 m-0 img_cont d-none d-md-block">
              <img src="@/assets/food1.png" id="food1" alt="">
          </div>
              <img src="@/assets/path1.png" class="d-none d-md-block" alt="" id="heroPath">
      </div>
  </div>
</template>

<script>
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
    mounted(){
        var tl = gsap.timeline();

        tl.from("#food1",{opacity:0,duration:0.5,scale:0.7});
        tl.from("#heading",{opacity:0,duration:0.5,ease:"ease-in-out"});
        tl.from("#description",{opacity:0,duration:0.5});
        tl.from("#cta",{opacity:0,duration:0.5});

        var scrollTimeline = gsap.timeline({
            scrollTrigger: {
            trigger: "#food1",
            pin: false,   
            start: "top top",
            end: "+=500", 
            scrub: 1, 
                markers:false

            }
        });
        scrollTimeline.addLabel("start")
            .to("#food1", {rotation:-45,})
    }
}
</script>

<style  scoped>
#hero{
    height: 100vh;
    align-items: center;
}
#heading{
    font-weight: bolder;
    font-size: 62px;
}

#description{
    width: 100%;
    font-size: 14px;
    opacity: 0.6;
}

#cta{
    display: inline-block;
    background: #000000;
    color: #ffffff;
    padding:15px 40px;
    border-radius: 50px;
    margin-top: 30px;
    text-decoration: none;
    box-shadow: 0px 25px 50px rgba(35,57,99,0.5);
}
#heroPath{
    position: absolute;
    top: 0;
    right: 0;
    height: 108vh;
    z-index: -1;
}
#food1{
    width: 80%;
    /* position: absolute;
    top: 0; */
}
.img_cont{
    position: absolute;
    right: 0px;
    /* display: flex;
    justify-content: center; */
    /* background-color: red */
}

@media screen and (min-width:700px){
        #description{
        /* display: block; */
        width: 70%;
        }
    }
</style>