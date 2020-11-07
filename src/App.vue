<template>
  <div class="header">  
      <img class="logo" src="./assets/LOGO.jpg">
      <div class="nav">
        <ul>
          <li> <router-link to="/#">HOME</router-link>  
          </li>
          <li> <router-link to="/Past">PAST EVENTS</router-link> 
              <ul>
                    <li><router-link to="/Test">Amsterdam Light Festival</router-link></li>
                    <li><router-link to="/Test">Northwest Tournée 2018</router-link></li>
                    <li><router-link to="/Test">Dahoum in 2019</router-link></li>
                    <li><router-link to="/Test">Northwestern Tournée 2019</router-link></li> 
              </ul>
          </li>
          <li> <router-link to="/Talentscouting">TALENT SCOUTING</router-link> 
              <ul>
                <li><router-link to="/Test">Definition of Talent</router-link></li>
              </ul>
          </li>
          <li> <router-link to="/Nurseries">NURSERIES</router-link> 
              <ul>
                <li><router-link to="/Test">The Beginning</router-link></li>
                <li><router-link to="/Test">Storytelling w/ Scratch</router-link></li>
                <li><router-link to="/Test">Raspberry Pi</router-link></li>
                <li><router-link to="/Test">Scratch</router-link></li>
                <li><router-link to="/Test">Lord of the Flies</router-link></li>
                <li><router-link to="/Test">Deep Inspection of Quality</router-link></li>
                <li><router-link to="/Test">Associated Nurseries</router-link></li>
              </ul>
          </li>
          <li> <router-link to="/Blog">BLOG</router-link> 
          </li>
        </ul>
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
  .logo {
  width: 100%;
  max-width: 400px;
  height: auto;

  }
}

.nav {
  padding: 35px;
  padding-left: 10rem;
  margin-top: 2rem;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
  }

  ul li ul {
    display: flex;
    flex-direction: column;

    li {
      line-height: 35px;
      background-color: white;
      border: 1px solid lightgray;
      box-shadow: 10px 10px 33px 0px rgba(0,0,0,0.10);
      width: 200px;
      height: 40px;
      text-align: left;
      float: left;
      display: none;
      margin-left: 0rem;
      transition: 0.6ms;

      a {
        margin-left: 0rem;
        margin-right: 0.5rem;
        font-size: 14px;
      }
    }
  }

  ul li:hover > ul li {
    display: block;
  }

  a {
    font-weight: 400;
    color: #2c3e50;
    padding: 0.3rem;
    margin-left: auto;
    margin-right: 4rem;
    text-decoration: none;

    &.router-link-exact-active {
      color: #2F4EA8;
      text-decoration: underline;
    }
  }
  }

  // Start media //

  @media (max-width: 1280px) {
       
  }

  @media (max-width: 992px) {
    
  }

  @media (max-width: 600px) { 
      
  }

</style>


