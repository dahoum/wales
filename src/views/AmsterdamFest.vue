<template>
    <h1>Amsterdam Light Festival</h1>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/5-i36ODrcLg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
    </iframe>
    <h3>A lovely summary of the Nacht Loerrrders—one of the Amsterdam Light Festival artworks by 72andSunny w/ the support and participation of dozens of helpers and 800 schoolchildren. T. E. Shaw (via Dahoum) supported several of the workshops. Rado Stefan (via AuxCode, who co-sponsored 50% of his time) co-developed the Scratch Mod, used to animate the eyes, following the guidance of Gabor Szalatnyai. The video is (c) 72andSunny and Nacht Loerrrders is (c) Amsterdam Light Festival. There is a post-Festival effort to enable the artwork and derivative works to be implemented elsewhere.</h3>
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
  margin-bottom: 2rem;
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