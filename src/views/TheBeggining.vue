<template>
  <h1>The Beginning</h1>
  <h3>When I was 8—I received my 1st computer—an Apple ][. I wanted to immediately do real stuff—program real games. Nobody helped me and this resulted in a major childhood trauma.
Dahoum specialises in identifying 8+ years old and in nursing them w/ real projects.</h3>
   <router-link to="/">Read the long story in Kids and Talent.</router-link>
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
export default class Nurseries extends Vue {}
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
  margin-bottom: 2rem;
}

a {
  text-decoration: underline;
  font-weight: 300;
  font-size: 1.5rem;
  color: rgb(46, 46, 46);
}


</style>