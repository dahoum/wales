<template>
  <div class="header">  
      <div id="app">
          <img src="./assets/LOGO.jpg">
      </div>

    <div id="nav">
      <router-link to="/about">AMSTERDAM LIGHT FESTIVAL</router-link> 
      <router-link to="/about">ABOUT</router-link>
      <router-link to="/about">TALENT SCOUTING</router-link>
      <router-link to="/about">NURSERIES</router-link>
      <router-link to="/about">BLOG</router-link>
    </div>
  </div>  
  <router-view />
</template>




<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #FAFAFA;
}

.header {
  display: flex;
  flex-direction: row;
}

#nav {
  padding: 30px;

  a {
    font-weight: 400;
    color: #2c3e50;
    padding: 0.3rem;
    margin-left: 4rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
