<template>
  <div id="contact" class="container p-0">
      <h1 class="heading">Contact</h1>
      <div class="row">
          <div class="col-6">
              <form action="#">
                  <input type="text" name="name" placeholder="Name" id="">
                  <input type="Email" name="email" placeholder="Email" id="">
                  <!-- <input type="text" name="name" placeholder="Name" id=""> -->
                  <textarea name="message" id="" placeholder="Message" ></textarea>
              </form>
          </div>
          <div class="col-6" id="address">
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              <p>hello@picklestore.in</p>
              <p>pozhiyoor</p>
              <p>hello@picklestore.in</p>
          </div>
      </div>
      <a href="#" class="black-btn">Send</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #contact{
        margin-top:80px;
        height: 60vh;
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
        width: 70%;
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
</style>