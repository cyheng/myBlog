<template lang="html">
<div class="sidebar container">
  <Row type="flex" justify="center"  >
    <div class="about">
      <h4 class="text-center ">ABOUT</h4>
    <img src="../../static/img/photo.jpg" width="140" height="140" rounded="circle" center alt="author"></img>
    <h5 class="text-center">DORARO</h5>

    <p class="text-center">在校大学生一枚</p>
  </div>
  </Row>
  <Row type="flex" justify="center">
  <ButtonGroup>
       <a class="brand nav-links"href="https://github.com/cyheng">
        <Button type="ghost" icon="social-github"></Button>
       </a> 
        <Tooltip content="doraro1024@gmail.com" placement="top">
          <Button type="ghost" icon="email" 
       data-clipboard-text="doraro1024@gmail.com"
       @click.native="clickEmail" class="email"></Button>
        </Tooltip>
    </ButtonGroup>
  </Row>
  <Row type="flex" justify="center" class="caterogty-list">
  <h4>分类</h4>
    <ul class="nav">
      <div v-if="isLoading" class="spin-container"><Spin size="large" fix></Spin></div>
      <li v-else v-for="i in list" :key="i.id">
          <router-link :to="{ name: 'index', query:  { category: i.id }}" class="tags ">
                  {{i.name}}
          </router-link>
      </li>
    </ul>
  </Row>
</div>
</template>

<script>

import { category_get } from "@/blog-api/api/blog/index";
import Clipboard from 'clipboard';  
export default {
  data() {
    return {
      list: [],
      isLoading: true,
    };
  },
  mounted() {
    category_get().then(({ data }) => {
      this.list = data.records;
      this.isLoading = false
    });
  },
  computed: {},
  methods: {
    clickEmail(){
        var clipboard = new Clipboard('.email');
        clipboard.on('success', e => {  
          this.$Message.success('邮箱已经复制到剪贴板上')
          clipboard.destroy()  
        })  
        clipboard.on('error', e => {  
          this.$Message.warning('该浏览器不支持自动复制')
          clipboard.destroy()  
        }) 
    }
  }
};
</script>

<style lang="scss" scoped>
.spin-container{
  height: 100px;
  position: relative;
}
.caterogty-list {
  margin: 20px;
}
.text-center {
  text-align: center;
}
.container {
  background: #fff;

  margin-bottom: 40px;
  padding: 40px;
  border-radius: 5px;
}
.about {
  margin: 50px 0 20px;
  .about-img {
    border-radius: 50%;
    max-width: 100%;
    height: auto;

    border: 0;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
}
.sidebar {
  max-height: 500px;
  overflow: auto;
  h4 {
    margin-bottom: 20px;
    font-size: 21px;
    font-weight: 300;
    line-height: 1.4;
  }

  .nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    display:inline-block;
    li {
      float: left;
      .tags {
        border-radius: 4px;
        position: relative;
        display: block;
        padding: 15px;
        color: #333;
        font-size: 20px;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
