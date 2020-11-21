<template>
  <h1>Associated Nurseries</h1>
  <h3>Dahoum cooperates w/ a number of Nurseries. An Nursery is an organisation, which provides the legal and financial framework towards the providers of Nursery Projects one one hand and towards the talent on another.</h3>
  <h2>AuxCode</h2>
  <h3><a href="https://auxcode.com/">AuxCode</a> is based in Sofia and focuses on product development for the FinTech and Automotive sectors across Europe, in Africa, and in North America.</h3>
  <h2>Päivölä</h2>
  <h3><a href="https://www.paivola.fi/fi/">Päivölä</a> is a boarding school about 100 kilometres north of Helsinki w/ a strong focus on Natural Sciences and Mathematics, where we cooperate w/ a Software Lab led by Jesper Hjorth and are supported by Janne Puustelli.</h3>
  <h2>StudioLabs</h2>
  <h3><a href="https://studiolabs.io/">StudioLabs</a> is based in Paris and focuses on accelerated and structured approach to Management and Engineering of Requirements as well as on Rapid Applications Development using React w/ complete project delivery within four weeks or less.</h3>
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

h2{
  font-weight: 400;
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