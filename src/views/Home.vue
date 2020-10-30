<template>
  <Slides/>  
  <div class="topic-conrainer">
    <h1>Recent from blog</h1>
  </div>
  <div class="first-row">
    <Box/>
    <Box/>
    <Box/>
  </div>
  <div class="topic-conrainer">
    <h1>Recent from Scratch</h1>
  </div>
  <div class="second-row">
    <Box/>
    <Box/>
  </div>
  <div class="topic-conrainer">
    <h1>Recent from Managing People</h1>
  </div>
   <div class="third-row">
    <Box/>
    <Box/>
  </div>
  <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Slides from "@/components/Slides.vue"; 
import Box from "@/components/Box.vue"; 
import Footer from "@/components/Footer.vue"; 

@Options({
  components: {
    Box, Slides, Footer
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">

  .topic-conrainer {
    width: 30%;
    height: 4rem;
    border-radius: 0px 22px 22px 0px;
    padding: 1rem;
    box-shadow: 10px 10px 33px 0px rgba(0,0,0,0.16);
    margin-bottom: -5rem;
    margin-top: 7rem;

    h1 {
      font-weight: 400;
      font-size: 29px;
    }
  }

  .first-row {
    display: flex;
    justify-content: space-evenly;
  }

  .second-row {
    display: flex;
    align-content: flex-start;

    .Box {
      margin-left: 5rem;
    }
  }

  .third-row {
    display: flex;
    justify-content: flex-end;

    .Box {
      margin-right: 5rem;
    }
  }
</style>