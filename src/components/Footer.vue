<template>
    <hr class="one">
    <div class="socialmedia">
        <h1>Liked our work? Share it with your friends</h1>
    </div>
    <div class="social-menu">
        <ul>
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
    </div>
    <footer class="copyright">
        <div class="menu">
            <ul>
                <li><a href="#">TERMS & CONDITIONS</a></li>
                <li><a href="#">PRIVACY POLICY</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">TALENT SCOUTING</a></li>
            </ul>
        </div>
        <hr class="two">
        <div class="contact">
            <h1>CONTACT</h1>
            <p>
                For inquiries, please contact —<br>
                T. E. Shaw
                Darmstadt, Germany
                +49 151 5111 26 31
                t.e.shaw@dahoum.wales
            </p>
            <p>
                Dahoum Limited
                Nicolaus Copernicus 44
                BG-1111 Sofia
            </p>
        </div>
        <hr class="three">
        <div class="mission">
            <h1>MISSION</h1>
            <p>Dahoum discovers talent, both undeveloped and lost, and develops it into valuable professionals and sustainable companies through nursery projects.</p>
            <p>&copy; 1982-2021 Dahoum</p>
        </div>
    </footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Footer extends Vue {
}
</script>

<style scoped lang="scss">
    hr.one {
        border: none;
        border-radius: 2px;
        height: 3px;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5rem;
        background: #2F4EA8;
    }

    .socialmedia h1 {
        font-weight: 300;
        color: black;
        margin-top: 1rem;
        font-size: 24px;
    }

    .social-menu {
        display: block;
        margin-left: 45%;
        margin-right: auto;

        ul{
            display: flex;
        }

        ul li {
            list-style: none;
            margin: 0 15px;
        }

        .fab, .far {
            font-size: 25px;
            line-height: 60px;
            transition: .6s;
            color: #2F4EA8;
        }

        a {
            position: relative;
            display: block;
            background-color: transparent;
            transition: 0.5s;
        }

        ul li a:hover {
            transform: translate(0, -10px);
        }
    }

    .copyright {
        width: 100%;
        height: 25rem;        
        background-color: white;
        box-shadow: 0px -1px 48px -2px rgba(0,0,0,0.16);
        margin-top: 4rem;
        display: flex;

        .menu, a {
            text-decoration: none;
            color: #707070;
            text-align: start;
            margin-left: 1.5rem;
            margin-top: 3rem;
            font-weight: 300;
            font-size: 20px;

            li {
                padding: 0.5rem;
                list-style: none;
            }
        }

        hr.two {
            height: 20rem;
            width: 3px;
            transform: rotate(360deg);
            border-radius: 2px;
            border: none;
            margin-left: 12rem;
            margin-top: 3rem;
            background: #2F4EA8;
        } 
        
        .contact {
            margin-left: 5rem;
            margin-top: 3rem;

            h1, p {
            font-weight: 300;
            font-size: 20px;
            text-align: start;
            width: 18rem;
            color: #707070;
            font-size: 20px;
            padding-bottom: 2rem;
            }
        }

        hr.three {
            height: 20rem;
            width: 3px;
            border: none;
            border-radius: 2px;
            margin-left: 12rem;
            margin-top: 3rem;
            background: #2F4EA8;
        }

        .mission {
            margin-left: 5rem;
            margin-top: 3rem;

            h1, p {
            font-weight: 300;
            font-size: 20px;
            text-align: start;
            width: 18rem;
            color: #707070;
            font-size: 20px;
            padding-bottom: 2rem;
            }
        }
    }

    // Start media //
   
   @media (max-width: 1280px) {
       .copyright {

           .menu {
               margin-left: 0rem;
           }
            
            hr.two {
                margin-left: 2rem;
            }    
        }
    }

    @media (max-width: 992px) {
        hr.one {
            width: 70%;
        }

        .social-menu {
            margin-left: 40%;
            margin-right: auto;
        }

        .copyright {
            display: block;
            height: 100%;

            .menu {
                margin-left: 3rem;
                padding-top: 1rem;
            }

            hr.two {
            transform: rotate(90deg);
            margin-top: -8rem;
             margin-left: 12rem;
            }

            .contact {
                margin-top: -8rem;
            }

            hr.three {
            transform: rotate(90deg);
            margin-top: -8rem;
            }

            .mission {
                margin-top: -8rem;
            }
        }  
    }

    @media (max-width: 420px) { 
        hr.one {
            width: 70%;
        }

        .social-menu {
            margin-left: 30%;
            margin-right: auto;
        }

        .socialmedia {
                h1{
                    font-size: 1.5rem;
                    margin-left: 1rem;
                    
                }
            }

        .copyright {
            display: block;
            height: 100%;

            .menu {
                margin-left: 1.6rem;
                padding-top: 1rem;
            }

            hr.two {
            transform: rotate(90deg);
            margin-top: -8rem;
            margin-left: 11rem;
            }

            .contact {
                margin-top: -8rem;
                margin-left: 3rem;
            }

            hr.three {
            transform: rotate(90deg);
            margin-top: -8rem;
            margin-left: 11rem;
            }

            .mission {
                margin-top: -8rem;
                margin-left: 3rem;
            }
        }  
    }
  
</style>