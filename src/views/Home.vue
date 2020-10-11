<template>
  <img alt="Main img" src="../assets/1.png" />
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
  }
</style>