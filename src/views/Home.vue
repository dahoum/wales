<template>
  <img alt="Main img" src="../assets/1.png" />
  <div class="topic-conrainer">
    <h1>Recent from blog</h1>
  </div>
  <Box/>
  <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Box from "@/components/Box.vue"; 
import Footer from "@/components/Footer.vue"; 

@Options({
  components: {
    Box, Footer
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
  img {
    width: 100%;
    height: 100%;
  }

  .topic-conrainer {
    width: 29%;
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
</style>