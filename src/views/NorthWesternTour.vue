<template>
    <h1>Northwestern Tournée 2019</h1>
    <h3>Darmstadt • Amsterdam • Rotterdam • Moreton/Dorchester • Tremadog/Wales • Dublin • Belfast • London and back / visiting customers and schools for talent / when “everyone leaves” — we go!</h3>
    <img src="../assets/NWT2019.png" alt="image">
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