<template>
 <div class="Box">
    <div class="title"><v-for>{{title}} </v-for></div>
    <div class="summary"><v-for>{{summary}}</v-for></div>
    <div class="author"><v-for>{{author}}</v-for> / <v-for>{{date}}</v-for> / <v-for>{{readingTime}}</v-for></div>
    <img alt="Main img" src="../assets/Image.png"/>
    <div class="links">
      <div class="button">
        <a href="#">Read more</a>
      </div>
      <div class="social-menu">
        <ul>
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
        </ul>
      </div>
    </div>
 </div>
</template>



<script>
import testFile from 'js-yaml-loader!../../content/test.yaml'

export default {
  created() {
    this.author = testFile.author
    this.title = testFile.title
    this.date = testFile.date
    this.readingTime = testFile.readingTime
    this.summary = testFile.summary
  }
}
</script>



<style scoped lang="scss">
  @import url('https://use.fontawesome.com/releases/v5.7.2/css/all.css');

  .Box {
    width: 26%;
    border-radius: 24px;
    padding: 1rem;
    box-shadow: 10px 10px 33px 0px rgba(0,0,0,0.16);
    margin-top: 8rem;

    img {
      max-width: 100%;
      height: auto;
    }

    .title{
      font-weight: 400;
      font-size: 2rem;
    }

    .author {
      font-size: 15px;
      margin-top: 2rem;
      font-weight: 300;
    }

    .summary {
      font-weight: 300;
      margin-top: 1rem;
    }
  }

  .links {
    display: flex;
    
      .button {
      height: 2rem;
      width: 9rem;
      text-align: center;
      background-color: #2F4EA8;
      border-radius: 10px;
      cursor: pointer;
      padding-top: 5px;
      transition-duration: 200ms;
      user-select: none;
      margin-top: 1rem;
      margin-left: 0.7rem;

      a {
        color:white;
        text-decoration: none;
        font-weight: 300;
        font-size: 17px;

        &:hover {
          color: black;
        }
      }
    }

    .social-menu {

      ul {
        list-style: none;
        display: flex;
        margin-left: 7rem;
        margin-top: 0.7rem;
      }

      li {
        padding: 0.5rem;
        
        .far, .fab {
          color: #2F4EA8;
          font-size: 1.2rem;
        }
      }
    }
  }

  // Start media //
  @media (max-width: 1280px) {
    .links {
      .social-menu {
       margin-right: -3rem;
      }
      .button {
       margin-right: -4rem;
       width: 40%;
      }
    }
  }

  @media (max-width: 992px) {
    .Box {
      width: 60%;
    }
  }

  @media (max-width: 768px) { 
    .Box {
      width: 65%;
    }
    .links {
      .social-menu {
       margin-right: -3rem;
      }
      .button {
       margin-right: -4rem;
       width: 50%;
      }
    }
  }

  @media (max-width: 600px) {
    .Box {
      width: 75%;
    }
    .links {
      .social-menu {
       margin-right: -3rem;
      }
      .button {
       margin-right: -4rem;
       width: 50%;
      }
    }
  }

  @media (max-width: 420px) {
    .Box {
      width: 80%;
    }
    .links {
      .social-menu {
       margin-left: -5rem;
      }
      .button {
       margin-right: 0rem;
       width: 50%;
      }
    }
  }
  
</style>
