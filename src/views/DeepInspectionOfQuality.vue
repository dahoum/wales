<template>
  <h1>Deep Inspection of Quality</h1>
  <img src="../assets/Quality.jpeg" alt="image">
  <h3>Quality is one of my passions.</h3>
  <h3>The quality of a (software) product can be defined, on a most general level, by—</h3>
  <h3>—fitness for purpose / Does it do what it should?</h3>
  <h3>—robustness / Does it work or break?</h3>
  <h3>—competitiveness / Is it better than the alternatives?</h3>
  <h3>Every person, passionate about a subject, will claim that their subjects is everywhere and in everything. I will not be an exception. Quality begins w/ the first flap of the wings of the butterfly and continues into the fabric of the Universe long after the product has been consumed and discarded or the service received.</h3>
  <h3>One aspect of quality is inspecting it—</h3>
  <h3>—before passing it to the customer / Have the requirements been met?</h3>
  <h3>—after receiving it from the supplier / Accept.</h3>
  <h3>—continuously checking it during operation / Keep an eye on it.</h3>
  <h3>I am starting a series of essays on quality—possibly both in English and in German.</h3>
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

img {
    width: 60%;
    height: auto;
    margin-top: 1rem;
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