<template>
  <div id="specials" class="container">
      <h1>Our Specials</h1>
      <div class="grid">
          <div class="grid-item" v-for="special in specials" :key="special">
              <img src="@/assets/food3.png" alt="">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime, adipisci nisi illo dicta magni.</p>
          </div>
      </div>
      <a href="#" class="black-btn">View More</a>
  </div>
</template>

<script>
export default {
    data:function(){
        return{
            specials:["Hello","World","World2"]
        }
    }
}
</script>

<style scoped>
    #specials{
        margin-top:40px;
        text-align: center;
        padding: 30px 0px;
    }
    h1{
        font-weight: bold;
        font-size: 48px;
        text-align: left;
    }

    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        margin-top:20px
    }

    .grid-item img{
        width: 100%;
    }

    .grid-item p{
        text-align: center;
        font-size: 14px;
        opacity: 0.6;
    }
    .black-btn{
        margin-top:50px
    }
</style>