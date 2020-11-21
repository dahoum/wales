<template>
<div class="container">
  <h1>Some of the workshops, tours and event we held in the past years.</h1>
  <router-link to="/AmsterdamFest">Amsterdam Light Festival</router-link>
  <router-link to="/NorthWestTour">Northwest Tournée 2018</router-link>
  <router-link to="/DahoumIn2019">Dahoum in 2019</router-link>
  <router-link to="/NorthWesternTour">Northwestern Tournée 2019</router-link>
</div>
  <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue"; 

@Options({
  components: {
    Footer
  }
})
export default class Past extends Vue {}
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;

    h1 {
      font-weight: 400;
      font-size: 2.5rem;
      margin-top: 3rem;
    }

    a {
      text-decoration: none;
      font-weight: 300;
      font-size: 1.2rem;
      color: rgb(46, 46, 46);
      padding-top: 1rem;
       
    }
  }
</style>