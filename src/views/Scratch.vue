<template>
  <h1>Scratch</h1>
  <h3>Scratch is not simply a programming language.,<br>
  Scratch is a concept.<br>
  Or—a number of concepts.<br>
  This page is a bit of a brain dump for them for the moment.</h3>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/Ok6LbV6bqaE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <h3></h3>
  <a href="https://medium.com/@mres/cultivating-creativity-during-the-coronavirus-crisis-fedfca3b6036">https://medium.com/@mres/cultivating-creativity-during-the-coronavirus-crisis-fedfca3b6036</a>
  <h3></h3>
  <a href="https://scratch.mit.edu/users/mres/">https://scratch.mit.edu/users/mres/</a>
  <h3></h3>
  <a href="https://www.ryzerobotics.com/de">Scratch Drone(s)</a>
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