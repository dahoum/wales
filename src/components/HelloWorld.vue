<template>
  <div class="hello">
    <div v-for="section of sections" :key="section">
      {{section}}
    </div>
  </div>
</template>

<script>
import testFile from 'js-yaml-loader!../../content/test.yaml'

export default {
  name: 'HelloWorld',
  props: {
    name: String,
    data: Array
  },
  data() {
    return {
      sections: []
    }
  },
  created() {
    this.sections = testFile.sections
    // triggered before html is rendered
  },
  mounted() {
    // triggered when html is already rendered
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
