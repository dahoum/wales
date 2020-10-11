<template>
 <div class="Box">
    <h1>Lorem ipsum dolor sit amet consectetur.</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, aperiam dolorum vero, eum adipisci deleniti vitae necessitatibus aliquid odio exercitationem placeat molestias doloribus! Cumque facere et vel? Libero, esse dolorem!</p>
    <h3>10.02.2020 / T.E. Shawn / 5m</h3>
    <img alt="Main img" src="../assets/Image.png"/>
    <div class="links">
      <div class="button">
        <a href="#">Read more</a>
      </div>
      <div class="social-menu">
        <ul>
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-pinterest-p"></i></a></li>
            <li><a href="#"><i class="far fa-envelope"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
    </div>
    </div>
 </div>
</template>



<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Box extends Vue {
}
</script>



<style scoped lang="scss">
  @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

  .Box {
    width: 26%;
    border-radius: 24px;
    padding: 1rem;
    box-shadow: 10px 10px 33px 0px rgba(0,0,0,0.16);
    margin-top: 8rem;
    margin-left: 3rem;

    h1{
      font-weight: 400;
    }

    h3 {
      font-size: 15px;
      margin-top: 3rem;
      font-weight: 300;
    }

    p {
      font-weight: 300;
      margin-top: 1rem;
    }
  }

  .links {
    display: flex;
    
      .button {
      height: 1.7rem;
      width: 9rem;
      text-align: center;
      background-color: #9499F4;
      border-radius: 10px;
      cursor: pointer;
      padding-top: 5px;
      transition-duration: 200ms;
      user-select: none;
      margin-top: 1rem;
      margin-left: 0.7rem;

      a {
        color:white;
        text-decoration: none;
        font-weight: 300;
        font-size: 17px;

        &:hover {
          color: black;
        }
      }
    }

    .social-menu {

      ul {
        list-style: none;
        display: flex;
        margin-left: 2.5rem;
        margin-top: 0.7rem;
      }

      li {
        padding: 0.5rem;
        
        .far, .fab {
          color: #9499F4;
          font-size: 1.2rem;
        }
      }
    }
  }
</style>
