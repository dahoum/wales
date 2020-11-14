<template>
  <div class="header">  
      <img class="logo" src="./assets/LOGO.jpg">
      <div class="nav">
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <input type="checkbox" class="checker" id="click">
        <ul>
          <li> <router-link to="/#">HOME</router-link>  
          </li>
          <li> <router-link to="/Talentscouting">TALENT SCOUTING</router-link> 
              <ul>
                <li><router-link to="/Test">Definition of Talent</router-link></li>
              </ul>
          </li>
          <li> <router-link to="/Past">PAST EVENTS</router-link> 
              <ul>
                    <li><router-link to="/Test">Amsterdam Light Festival</router-link></li>
                    <li><router-link to="/Test">Northwest Tournée 2018</router-link></li>
                    <li><router-link to="/Test">Dahoum in 2019</router-link></li>
                    <li><router-link to="/Test">Northwestern Tournée 2019</router-link></li> 
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
@import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

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
  padding-left: 8rem;
  margin-top: 2rem;
  z-index: 1;

  .fas{
    display: none;
    position: absolute;
    font-size: 2.5rem;
    top: 3rem;
    cursor: pointer;
    z-index: 1;
  } 

  .checker{
    display: none;
  }

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
      margin-left: 4rem;
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
    margin-left: 4rem;
    margin-right: auto;
    text-decoration: none;

    &.router-link-exact-active {
      color: #2F4EA8;
      text-decoration: underline;
    }
  }
}

  // Start media //

  @media (max-width: 1350px) {
    .nav{
      padding: 35px;
      padding-left: 3rem;
      margin-top: 2rem;
    }    
  }

  @media (max-width: 1224px) {
    .nav{
      padding: 35px;
      padding-left: 0rem;
      margin-top: 2rem;

      a {
      margin-left: 3rem;
      }
    }
  }

  @media (max-width: 1098px) { 

    .nav{
      .fas{
      display: block;
      margin-left: 50vw;
      margin-right: auto;
      }

      ul{
        display: none;
        background-color: whitesmoke;
        font-size: 1rem;
        width: 30%;
        padding-top: 6rem;
        padding-right: auto;
        text-align: start;
        top: 0rem;
        right: 0rem;
        height: 100%;
        border-radius: 1rem;
        transition: all 0.5s ease;

        li{
          padding: 1rem;
          margin-left: -1rem;
        }
      }

      #click:checked ~ ul {
        display: block;
      }

      ul li ul {
        margin-top: 4rem;
        li {
          line-height: 35px;
          width: 250px;
          height: 60px;
          margin-left: -26.4rem;
          text-align: left;
          z-index: 1;
        }
      }
    }
    
  }

  @media (max-width: 880px) { 

    .nav{
      .fas{
      display: block;
      margin-left: 45vw;
      margin-right: auto;
      }
    }
    
    
  }

  @media (max-width: 800px) { 

    .nav{
      .fas{
      display: block;
      margin-left: 33vw;
      margin-right: auto;
      }

      ul{
        display: none;
        background-color: whitesmoke;
        font-size: 1rem;
        width: 40%;
        padding-top: 6rem;
        padding-right: auto;
        text-align: start;
        top: 0rem;
        right: 0rem;
        height: 100%;
        border-radius: 1rem;
        transition: all 0.5s ease;

        li{
          padding: 1rem;
          margin-left: -3rem;
        }
      }
    }
    
  }

  @media (max-width: 640px) { 

    .nav{
      .fas{
      display: block;
      margin-left: 20vw;
      margin-right: auto;
      }
      ul{
        display: none;
        background-color: whitesmoke;
        font-size: 1rem;
        width: 50%;
        padding-top: 6rem;
        padding-right: auto;
        text-align: start;
        top: 0rem;
        right: 0rem;
        height: 100%;
        border-radius: 1rem;
        transition: all 0.5s ease;

        li{
          padding: 1rem;
          margin-left: -3rem;
        }
      }
    }

    
    
  }

  @media (max-width: 550px) { 

    .nav{
      .fas{
      display: block;
      margin-left: 12vw;
      margin-right: auto;
      }
      ul{
        display: none;
        background-color: whitesmoke;
        font-size: 1rem;
        width: 60%;
        padding-top: 6rem;
        padding-right: auto;
        text-align: start;
        top: 0rem;
        right: 0rem;
        height: 100%;
        border-radius: 1rem;
        transition: all 0.5s ease;

        li{
          padding: 1rem;
          margin-left: -3rem;
        }
      }
    }
    
  }
</style>


