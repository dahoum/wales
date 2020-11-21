<template>
    <h1>Northwest Tournée 2018</h1>
    <h3>2 000+ km, 5 days, 7 cities, 25 meetings w/ customers, partners and friends / Dahoum’s Northwest Tournée 2018-12-03/07</h3>   
    <img src="../assets/Northwest-Tournée-2018.png" alt="image">
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
export default class Talentscouting extends Vue {}
</script>

<style scoped lang="scss">

h1 {
  font-weight: 400;
  font-size: 2.5rem;
  margin-top: 4rem;
}

h3 {
  font-weight: 300;
  font-size: 1.5rem;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  text-align: start;
  margin-top: 2rem;
}

img {
    width: 60%;
    height: auto;
    margin-top: 1rem;
}
  
</style>