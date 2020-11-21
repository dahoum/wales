<template>
    <h1>Definition of Talent</h1>
    <h3>“Many children make up, or begin to make up, imaginary languages.,<br> I have been at it since I could write. But I have never stopped…”<br>
        J.R.R. Tolkien</h3>
    <h3>“…at the age of twelve I very randomly picked out the Charmides.<br> I was bowled over by it, I thought it was absolutely wonderful.”<br>
        A. C. Graylin</h3>
    <img src="../assets/DefinitionOfTalent.jpeg" alt="image">
    <h4>David Lean by Stephen M. Silverman p. 20</h4>
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
export default class Talentscouting extends Vue {}
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
}

img {
    width: 40%;
    height: auto;
    margin-top: 1rem;
}

h4 {
  font-weight: 300;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  text-align: start;
  margin-top: 0.5rem;
}
  
</style>