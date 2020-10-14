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
        <div class="up" id="up">
            <i class="fas fa-chevron-up"></i>
        </div>
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
        margin-left: 20rem;
        margin-top: 5rem;
        justify-self: center;
        background: gray;
    }

    .socialmedia h1 {
        font-weight: 300;
        color: black;
        text-align: center;
        margin-top: 1rem;
        font-size: 24px;
    }

    .social-menu {

        ul{
            position: absolute;
            transform: translate(-50%, -50%);
            display: flex;
            margin-top: 3rem;
            margin-left: 47rem;
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
            text-align: center;
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
        margin-top: 7rem;

        .menu, a {
            text-decoration: none;
            color: #707070;
            text-align: start;
            padding-top: 4rem;
            padding-left: 0.5rem;
            font-weight: 300;
            font-size: 20px;

            li {
                padding: 0.5rem;
            }
        }

        hr.two {
            width: 15rem;
            transform: rotate(90deg);
            background:#2F4EA8;
            margin-top: -5rem;
            margin-left: 12rem;
            
        }

        .up {
            position: fixed;
            width: 3rem;
            height: 3rem;
            background-color: transparent;
            right: 5rem;
            border-radius: 100%;
            display: flex;
            animation: pulse 3s infinite;
            cursor: pointer;
            bottom: 2rem;  
            
            i {
                color:black;
                font-size: 2rem;
                margin: auto;
            }
        }  
        
        .contact{
            margin-top: -8rem;
            margin-left: 25rem;

            h1, p {
            font-weight: 300;
            font-size: 20px;
            text-align: start;
            width: 18rem;
            padding-top: 1.5rem;
            color: #707070;
            font-size: 20px;
            }
        }

        hr.three {
            width: 15rem;
            transform: rotate(90deg);
            background: #2F4EA8;
            margin-top: -7rem;
            margin-left: 53rem;
        }

        .mission {
            margin-top: -8rem;
            margin-left: 65rem;

            h1, p {
            font-weight: 300;
            font-size: 20px;
            text-align: start;
            width: 18rem;
            padding-top: 1.5rem;
            color: #707070;
            font-size: 20px;
            }
        }
    }

@keyframes pulse{
    0% {
        box-shadow: 0 0 0 0 #9499F4;
    }
    70% {
        box-shadow: 0 0 0 1rem rgba(253, 87, 191, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(253, 87, 191, 0);
    }
}


</style>