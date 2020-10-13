<template>
  <div class="header">  
      <div id="app">
          <img src="./assets/LOGO.jpg">
      </div>

      <div id="nav">
        <router-link to="/#">HOME</router-link> 
        <router-link to="/#">PAST EVENTS</router-link>
        <router-link to="/#">TALENT SCOUTING</router-link>
        <router-link to="/#">NURSERIES</router-link>
        <router-link to="/Blog">BLOG</router-link>
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
  margin-top: 2rem;

  a {
    font-weight: 400;
    color: #2c3e50;
    padding: 0.3rem;
    margin-left: 6rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: #2F4EA8;
      text-decoration: underline;
    }
  }
}
</style>
