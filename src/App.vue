<template>
  <div class="blog">
    <blog-header></blog-header>
     <router-view></router-view>
    <blog-footer></blog-footer>
    <BackTop></BackTop>
  </div>
</template>

<script>

import BlogFooter from "@/components/footer"
import BlogHeader from "@/components/header"
 import { BackTop } from 'iview';
export default {
  components: {
    BlogHeader,
    BlogFooter,
     BackTop
  },
  
}
</script>

<style lang="scss" scoped>
  .blog{
    background: #efefef;
  }
</style>
