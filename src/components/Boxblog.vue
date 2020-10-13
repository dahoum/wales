<template>
   <div class="box">
       <div class="container">
           <img alt="Main img" src="../assets/Image.png"/>
           <div class="text">
               <h3>02.March.2020 / T.E Shawn / 5m </h3>
               <h1>LEARN ENGINEERING OF REQUIREMENTS FROM SAM SPIEGEL</h1>
               <p>A frequently underappreciated role in the software development process is that of the Product Manager/Owner. Even though it is nominally included in most modern processes, it frequently... </p>
               <div class="links">
                    <div class="button">
                        <a href="#">Read more</a>
                    </div>
                    <div class="social-menu">
                        <ul>
                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
           </div>
       </div>
   </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Boxblog extends Vue {
}
</script>

<style scoped lang="scss">
    @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

    .box {
        width: 60%;
        border-radius: 24px;
        padding: 1rem;
        box-shadow: 10px 10px 33px 0px rgba(0,0,0,0.16);
        margin-top: 8rem;
        margin-left: 3rem;

        img {
            width: 100%;
            height: 100%;
        }

        .container {
            display: flex;
        
        
            h1 {
            font-weight: 500;
            text-align: start;
            margin-left: 2rem;
            margin-top: 2rem;
            }

            h3 {
            font-size: 15px;
            font-weight: 300;
            text-align: start;
            margin-left: 2rem;
            }

            p {
            font-size: 20px;
            font-weight: 300;
            text-align: start;
            margin-left: 2rem;
            margin-top: 1rem;
            }
        }
    }

    .links {
        display: flex;
        margin-top: 1.5rem;
    
      .button {
        height: 2rem;
        width: 9rem;
        text-align: center;
        background-color: #2F4EA8;
        border-radius: 10px;
        cursor: pointer;
        padding-top: 5px;
        transition-duration: 200ms;
        user-select: none;
        margin-top: 1rem;
        margin-left: 2rem;

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
        margin-left: 9rem;

      ul {
        list-style: none;
        display: flex;
        margin-left: 6rem;
        margin-top: 0.7rem;
      }

      li {
        padding: 0.5rem;
        
        .far, .fab {
          color: #2F4EA8;
          font-size: 1.4rem;
        }
      }
    }
  }

</style>