<template>
  <h1>Hello events</h1>
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
export default class Past extends Vue {}
</script>

<style scoped lang="scss">
  
</style>