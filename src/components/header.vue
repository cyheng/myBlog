<template lang="html">

<header class="header-wrapper">
  <nav class="nav-wrapper">
    <router-link class="nav-link" v-for="(item,index) in links" :key="index"
    :to="item.path">
    {{item.name}}
    </router-link>
    <a class="nav-link" href="https://github.com/cyheng">
      <Icon type="social-github" />
    </a>
  </nav>
    <div class="header-text">
      <h3>DORARO_BLOG</h3>
      <hr>
      <span>{{ this.$route.meta.title }}</span>
    </div>
  </header>
</template>

<script>
import { Icon } from "iview";
export default {
  name: 'blog-head',
  components:{
    Icon
  },
  data(){
    return {
      links:[
        {path:'/',name:'DORARO'},
        {path:'/',name:'主页'},
        {path:'/archives',name:'归档'},
        {path:'/about',name:'关于'},
      ],
      
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper{
  position: relative;
  min-height: 350px;
  background: url(../../static/img/header.png) center center no-repeat;
  background-size: cover;
  margin-bottom: 20px;
}
.nav-wrapper{
  margin-bottom: 20px;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  position: relative;
  line-height: 25px;
  background-color:  rgba(0, 0, 0, 0.3);
  .nav-link{
    opacity: 0.9;
    color:#fff;
    min-height: 60px;
    padding: 30px 20px 25px;
     transition: all ease-in-out 0.3s;
     &:hover {
        background-color: #162438;
        
    }
  }
  .nav-link:first-child{
     position: absolute;
     left: 0;
     @media screen and (max-width: 600px) {
        position: relative;
     }
  }
  .nav-link:last-child{
     position: absolute;
     right: 0;
    @media screen and (max-width: 600px) {
        position: relative;
     }
  }
}
.header-text {
    text-align: center;
    padding-top: 50px;
    color: #fff;
    span {
      padding-bottom: 100px;
      display: block;
      font-size: 24px;
      line-height: 33px;
      font-weight: 300;
      margin: 10px 0 0;
    }
    hr {
      max-width: 100px;
      margin: 15px auto;
      border-color: #fff;
      border: 2px solid;
    }
  }
</style>
