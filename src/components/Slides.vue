<template>
    <div class="text">
     <h1>Amsterdam Light Festival</h1>
     <h3>A lovely summary of the Nacht Loerrrders—one of the Amsterdam Light Festival artworks by 72andSunny w/ the support and participation of dozens of helpers and 800 schoolchildren.</h3>    
    </div>
    <div class="button">
        <a href="#">Read more</a>
    </div>
 <img alt="Main img" src="../assets/1.png" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class Slides extends Vue {
}
</script>


<style scoped lang="scss">
    img {
        width: 100%;
        height: 100%;
    }

    .text {

        img {
            width: 100%;
            height: 100%;
        }

        h1{
            padding-top: 15rem;
            position: absolute;
            margin-left: 2rem;
            color: white;
            font-size: 3rem;
            font-weight: 400;
            margin-bottom: 10rem;
        }
        h3{
            padding-top: 20rem;
            position: absolute;
            margin-left: 2rem;
            color: white;
            font-weight: 300;
            text-align: left;
            width: 30%;
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
        margin-top: 30rem;
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
</style>