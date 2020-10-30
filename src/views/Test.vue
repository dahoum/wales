<template>
  <h1>Hello test</h1>
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
export default class Test extends Vue {}
</script>

<style scoped lang="scss">
  
</style>