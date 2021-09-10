<template>
  <div id="about" class="container">
      <div class="row">
          <div class="col-6">
              <img src="@/assets/food2.png" alt="">
          </div>
          <div class="col-6">
              <h1>About us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, sed malesuada turpis tellus nisi odio justo condimentum iaculis. Praesent commodo lorem eros facilisi sed accumsan mi nulla arcu. Arcu amet, nisi, egestas aliquam aliquam sed. Egestas viverra elementum at lorem facilisis.</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#about{
    height:100vh;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
    img{
        width: 80%;
        margin-left: -30px;
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
</style>