<template>
  <div>
      <div class="row container m-auto" id="hero">
          <div class="col-6 p-0 m-0">
              <h1 id="heading">
                Freshness <br>
                in every bite
              </h1>
              <p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime atque aspernatur corrupti voluptatum rem.</p>
                <a href="" id="cta">Contact us</a>
          </div>
          <div class="col-6 p-0 m-0 img_cont">
              <img src="@/assets/food1.png" id="food1" alt="">
          </div>
              <img src="@/assets/path1.png" alt="" id="heroPath">
      </div>
  </div>
</template>

<script>
export default {

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
    width: 400px;
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
</style>