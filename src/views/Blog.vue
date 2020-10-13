<template>
  <Boxblog/>
  <Footer/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Boxblog from "@/components/Boxblog.vue"; 
import Footer from "@/components/Footer.vue"; 

@Options({
  components: {
    Boxblog, Footer
  }
})
export default class Blog extends Vue {}
</script>

<style scoped lang="scss">
  
</style>