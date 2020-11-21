<template>
  <h1>Lord of the Flies</h1>
  <h3>People tend to think running a company is difficult.</h3>
  <h3>There is something more difficult, then running the company—running a democracy.</h3>
  <h3>The ultimate challenge is running Lord of the Flies—</h3>
  <h3>—establishing and order out of a group of strangers.</h3>
  <h3>Where there is a group of strangers, you might ask.</h3>
  <h3>One example is the #wirvsvirus hackathon of the German Federal Government, intended to provide solutions to counteract the Corona virus.</h3>
  <h3>Preparatory measures—</h3>
  <a href="https://en.wikipedia.org/wiki/World_café">https://en.wikipedia.org/wiki/World_café</a>
  <h3></h3>
  <a href="https://en.wikipedia.org/wiki/Mastermind_group">https://en.wikipedia.org/wiki/Mastermind_group</a>
  <h3>Eventually—</h3>
  <h3>—presentation of visions and roads</h3>
  <h3>—election.</h3>
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