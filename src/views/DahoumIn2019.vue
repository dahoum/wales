<template>
    <h1>Dahoum in 2019</h1>
    <h3>In 2019 Dahoum will focus on Darmstadt and the region and on the Netherlands. Besides we will remain faithful to Vienna, Prague, Germany (as a whole) and keep our focus on expanding into the UK and Ireland (fun!), France (Paris!), Finnland (Päivölä) and into Switzerland.</h3>
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
    width: 40%;
    height: auto;
    margin-top: 1rem;
}

h4 {
  font-weight: 300;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  text-align: start;
  margin-top: 0.5rem;
}
  
</style>