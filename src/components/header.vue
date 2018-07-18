<template lang="html">
<div style="min-height: 350px">
  <header class="header">
<nav>
  <router-link to="/" class="nav-links" style="float:left">DORARO</router-link>
  <router-link to="/" class="nav-links">主页</router-link>
  <router-link to="/archives" class="nav-links">归档</router-link>
  <router-link to="/about" class="nav-links">关于</router-link> 
<a class="brand nav-links"href="https://github.com/cyheng">
    <Icon type="social-github"></Icon></a>
</nav>
    <div class="site-heading">
      <h3>RARO_BLOG</h3>
      <hr>
      <span>{{ $route.meta.title }}</span>
    </div>
  </header>
</div>
</template>

<script>
 import { Icon } from 'iview';

export default {
  name: "blog-head",
  components:{
    Icon
  }
};
</script>

<style lang="scss" scoped>
.header {
  background: url(../../static/img/header.png) center center no-repeat;
  background-size: cover;
  text-align: center;
  box-sizing: border-box;
  display: block;
  .brand {
    float: right;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
    img {
      max-width: 25px;
      max-height: 25px;
    }
  }
  nav {
    background-color: rgba(0, 0, 0, 0.3);
    .nav-links {
      font-size: 16px;
      display: inline-block;
      color: #fff;
      padding: 30px 20px 25px;
      margin-right: 10px;
      margin-top: -5px;
      text-transform: uppercase;
      transition: all ease-in-out 0.3s;
      &:hover {
        background-color: #162438;
      }
    }
  }

  .site-heading {
    padding-top: 50px;
    color: #fff;
    span {
      padding-bottom: 100px;
      display: block;
      font-size: 24px;
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
}
</style>
