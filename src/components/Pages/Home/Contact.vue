<template>
  <div id="contact" class="container p-md-0 p-sm-4">
      <h1 class="heading">Contact</h1>
      <div class="row">
          <div class="col-md-6 col-sm-12">
              <form action="#">
                  <input type="text" name="name" placeholder="Name" id="">
                  <input type="Email" name="email" placeholder="Email" id="">
                  <!-- <input type="text" name="name" placeholder="Name" id=""> -->
                  <textarea name="message" id="" placeholder="Message" ></textarea>
      <a href="#" class="black-btn">Send</a>    
              </form>
          </div>
          <div class="col-md-6 col-sm-12 mt-sm-5 mt-md-0" id="address">
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              <p>hello@picklestore.in</p>
              <p>pozhiyoor</p>
              <p>hello@picklestore.in</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #contact{
        margin-top:80px;
        min-height: 60vh;
        margin-bottom: 30px;
    }
    #address{
        margin-top:20px;
    }
    #address p{
        margin: 3px;
        font-weight: bold;
    }
    .row{
        align-items: center;
    }
    form{
        margin-top: 30px;
    }
    input,textarea{
        display: block;
        width: 100%;
        border: none;
        background: none;
        border-bottom: 2px solid #000;
        padding:10px;
        padding-left: 0;
        margin-top: 20px;
    }

    .black-btn{
        margin: 0;
        margin-top: 50px;
    }

    @media screen and (min-width:700px){
        input,textarea{
        display: block;
        width: 70%;
        }
    }
    
</style>