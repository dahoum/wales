<template>
<div class="text">
    <img alt="Main img" src="../assets/1.png">
    <h1>Amsterdam Light Festival</h1>
    <h3>A lovely summary of the Nacht Loerrrders—one of the Amsterdam Light Festival artworks by 72andSunny w/ the support and participation of dozens of helpers and 800 schoolchildren.</h3>    
</div>
    <div class="button">
        <a href="#">Read more</a>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Slides extends Vue {
}
</script>


<style scoped lang="scss">
    img {
      width: 100%;
      height: auto;
    }

    .text {
        h1{
            color: white;
            position: absolute;
            font-size: 3rem;
            font-weight: 400;
            margin-top: -25rem;
            margin-left: 2rem;
        }
        h3{
            color: white;
            position: absolute;
            font-weight: 300;
            text-align: left;
            width: 30%;
            margin-top: -20rem;
            margin-left: 2rem;
        }
    }

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
        position: absolute;
        margin-top: -10rem;
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

    // Start media //
    @media (max-width: 992px) {
        .text {
            h1 {
                font-size: 2rem;
                margin-top: -15rem;
            }

            h3 {
                font-size: 1rem;
                margin-top: -11rem;
                width: 20rem;
            }
        }

        .button {
            margin-top: -4rem;

            a{
                font-size: 1rem;
            }
        }
    }

    @media (max-width: 600px) {
        .text {
            h1 {
                font-size: 1rem;
                margin-top: -12rem;
            }

            h3 {
                font-size: 12px;
                margin-top: -9rem;
                width: 20rem;
            }
        }

        .button {
            margin-top: -4rem;
            width: 8rem;

            a{
                font-size: 15px;
            }
        }
    }

    @media (max-width: 420px) {
        .text {
            h1 {
                font-size: 1.5rem;
                margin-top: -10rem;
            }

            h3 {
                font-size: 12px;
                margin-top: -8rem;
                width: 20rem;
            }
        }

        .button {
            margin-top: -3rem;
            width: 6rem;
            height: 1.8rem;

            a{
                font-size: 15px;
            }
        }
    }
</style>