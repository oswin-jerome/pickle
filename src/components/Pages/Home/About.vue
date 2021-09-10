<template>
  <div id="about" class="container">
      <div class="row">
          <div class="col-md-6 col-sm-12 w-50 pl-0 m-auto">
              <img id="abt-img" src="@/assets/food2.png" alt="">
          </div>
          <div class="col-md-6 col-sm-12">
              <h1 class="text-center text-md-left">About us</h1>
              <p class="text-center text-md-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, sed malesuada turpis tellus nisi odio justo condimentum iaculis. Praesent commodo lorem eros facilisi sed accumsan mi nulla arcu. Arcu amet, nisi, egestas aliquam aliquam sed. Egestas viverra elementum at lorem facilisis.</p>
          </div>
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

        tl.from("#abt-img",{opacity:0,duration:0.5,scale:0.7});

        var scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                pin: false,   
                start: "top bottom",
                end: "+=1300", 

                scrub: 1, 
                markers:false
                
            }
        });
        scrollTimeline.addLabel("start")
            .to("#abt-img", {rotation:-90,})
    }
}
</script>

<style scoped>
#about{
    min-height:80vh;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* background:red; */
}
    img{
        width: 100%;
        /* margin-left: -30px; */
    }

    #about .row{
        align-items: center;
    }

    h1{
        font-weight: bold;
        font-size: 48px;
    }

    p{
        opacity: 0.6;
        font-size: 14px;
        line-height: 24px;
        margin-top: 20px;
    }

    @media screen and (min-width:700px){
        img{
            width: 80%;
            /* margin-left: -30px; */
        }
    }
</style>