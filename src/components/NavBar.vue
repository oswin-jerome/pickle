<template>
  <div class="container">
      <nav>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Specials</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
    name:"NavBar"
}
</script>


<style  scoped>
nav{
    /* margin-left: 70px; */
    padding-top: 50px;
}
nav ul{
    margin: 0;
    padding: 0;
}
    nav ul li{
        display: inline-block;

    }

    nav ul li a{
        /* padding:15px 50px; */
        padding-left: 0;
        display: inline-block;
        color: unset;
        text-decoration: none;
        margin: 0px 6px;
    }

    nav ul li a:hover{
        font-weight: 500;
    }
    @media screen and (min-width:700px){
        nav ul li a{
        padding:15px 50px;
        padding-left: 0;

        }
    }
</style>