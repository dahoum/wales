<template>
  <h1>Storytelling w/ Scratch</h1>
  <img src="../assets/storytelling_with_scratch.jpeg" alt="image">
  <h3>Storytelling w/ Scratch is a program developed by Dahoum, the European Forum for Freedom in Education, the Freie Comenius Schule (in Darmstadt), and Else-Marie Rombouts and the Dr. E. Boekmanschool (in Amsterdam). The program is additionally inspired by 72andSunny (Wendy Richardson and Lee Boulton in Amsterdam) and the Amsterdam Light Festival.</h3>
  <h3>The program has dual focus—</h3>
  <ul>
    <li>unlimited real continuum (read more in my article Kids and Talent)</li>
    <li>attractive for girls (so that at least 50% girls participate)</li>
  </ul>
  <h3>And the following principles—</h3>
  <ul>
    <li>creativity before capabilities of technology</li>
    <li>storytelling before interactivity</li>
  </ul>
  <h3>The program runs an 11 weeks pilot at the Freie Comenius Schule in Darmstadt.</h3>
  <h3>After that a (possibly 8 weeks) pilot at the Dr. E. Boekmanschool in Amsterdam will be created.</h3>
  <h3>Each pilot will improve the program.</h3>
  <h3>Eventually the program will be converted as a program to train non-IT teachers, who want to incorporate it in their curriculum.</h3>
  <h3>As of early 2020—both in Germany and in the Netherlands, there is a dire need of proper teaching of IT in the primary schools (ages 8-12).</h3>
  <h3>For more information write to t.e.shaw@dahoum.wales or call +49 151 5 111 26 31.</h3>
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

img {
    width: 60%;
    height: auto;
    margin-top: 1rem;
}

ul {
  li{
  font-weight: 300;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  text-align: start;
  margin-top: 2rem;
  margin-bottom: 2rem;
  }
}


</style>