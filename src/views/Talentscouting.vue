<template>
  <h1>Talent Scouting</h1>
  <h3>Dahoum scouts talent since the .com Bubble of 1995-2001.<br> The talent is scouted through an undiluted 1920s Sam Mussabini/Dr. Theodore Stephanides inspired style of turoring.</h3>
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
  
</style>