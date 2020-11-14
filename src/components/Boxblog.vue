<template>
   <div class="box">
       <div class="container">
           <img alt="Main img" src="../assets/Image.png"/>
           <div class="text">
              <div class="author"><v-for>{{author}}</v-for> / <v-for>{{date}}</v-for> / <v-for>{{readingTime}}</v-for></div>
              <div class="title"><v-for>{{title}}</v-for></div>
              <div class="summary"><v-for>{{summary}}</v-for></div>
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

    .box {
        width: 70%;
        border-radius: 24px;
        padding: 1rem;
        box-shadow: 10px 10px 33px 0px rgba(0,0,0,0.16);
        margin-top: 8rem;
        margin-left: 3rem;

      .container {
        display: flex;

        img {
          width: 100%;
          height: 100%;
        }

        .author {
          font-weight: 300;
          text-align: start;
          margin-left: 2rem;
          margin-top: 1rem;
          font-size: 15px;
        }
        
        .title {
            font-size: 2.5rem;
            font-weight: 400;
            text-align: start;
            margin-left: 2rem;
            margin-top: 2rem;
        }

        .summary {
            font-size: 20px;
            font-weight: 300;
            text-align: start;
            margin-left: 2rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
      }
    }

    .links {
        display: flex;
        margin-top: 1.5rem;
    
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
        margin-left: 2rem;

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
      margin-left: auto;

      ul {
        list-style: none;
        display: flex;
        margin-left: 6rem;
        margin-top: 0.7rem;
      }

      li {
        padding: 0.5rem;
        
        .far, .fab {
          color: #2F4EA8;
          font-size: 1.4rem;
        }
      }
    }
  }

   // Start media //
  @media (max-width: 1080px) {
   .box {
        width: 80%;
        height: 25rem;
       
    }
    .links{
      .button{
        margin-top: -0.5rem;
      }
    }
    .social-menu {
      margin-left: auto;
      margin-top: -1.6rem;
    }
  }

  @media (max-width: 970px) {
    .box{
      width: 60%;
      height: 60%;
      margin-top: 5rem;
      margin-left: auto;
      margin-right: auto;

      .container{
        display: block;

        .author {
          text-align: center;
          margin-left: 0rem;
        }
        
        .title {
            text-align: center;
            margin-left: 0rem;
        }

        .summary {
            text-align: center;
            margin-left: 0rem;
        }
      }
    }
        
    
  }

  @media (max-width: 610px) {
    .box{
      width: 80%;
    } 
    .links{
      .button{
        margin-left: 0rem;
        height: 2.2rem;
      }
    }
    
  }

  @media (max-width: 540px) {
    .links{
      .button{
        margin-left: 0rem;
        margin-right: -3rem;
        width: 7rem;
        height: 2.2rem;
      }
    }
    
  }

  @media (max-width: 440px) {
    .links{
      .button{
        margin-left: 0rem;
        margin-right: -6rem;
        width: 7rem;
        height: 2.2rem;
      }
    }
  }

</style>