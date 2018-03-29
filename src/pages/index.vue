<template lang="html">
  <Row :gutter="32"  type="flex" justify="center">
    <Col  :xs="24" :sm="15" >
      <div v-if="isLoading" class="spin-container"><Spin size="large" fix></Spin></div>
      <div v-else v-for="i in articles" :key="i.id" class="container" >
          <article class="articles" >
            <header class="article-header">
              <div class="article-title">
                <router-link :to="{ name: 'article', params: { id: i.id }}" class="article-links">
                {{i.title}}
                </router-link>
                </div>
              <div class="article-span">
                <span class="article-date"><Icon type="calendar" size="25"></Icon><span>{{i.updateTime}}</span></span>
                <span class="article-category">
                <Icon type="folder" size="25"> </Icon>
                <span><router-link :to="{  query: { category: i.category.id }}"  class="article-links">
              {{i.category.name}}
              </router-link></span>
              </span>
              </div>
            </header>
            <VueMarkdown :source="i.summary" class="article-summary markdown-body"  v-highlight>
            </VueMarkdown>
            <div class="center"><Button type="primary" @click="viewAll(i.id)">阅读全文</Button></div>
          </article>
      </div>
        <div class="container">
          <Page :total="total" :page-size="5" show-elevator @on-change="changePage" :current="page"></Page>
        </div> 
    </Col>
    <Col  :xs="0" :sm="7">
    <Affix :offset-top="20" >
      <sidebar></sidebar>
    </Affix>
    </Col>
          
  </Row>

 
</template>

<script>
import sidebar from "@/components/sidebar";
import VueMarkdown from 'vue-markdown'

import { api_articles_get } from "@/blog-api/api/blog/index";

export default {
  name: "index",
  components: {
    sidebar,VueMarkdown
  },
  data() {
    return {
      isLoading: true,
      total: 0,
      articles: [],
      page:1
    };
  },

  methods: {
    changePage(index) {
      this.page = index
      let params = this.$route.query
      Object.assign(params,{page:index})
      this.scrollTop()
      this.getData(params)
    },
    viewAll(id) {
      this.$router.push({ name: "article", params: { id: id } });
    },
    scrollTop(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
   async  getData(query){
      this.isLoading = true;
      try {
      const {data} = await api_articles_get({params:query})
      this.total = data.total
      this.articles = data.records;
      this.isLoading = false;
      } catch (error) {
        console.log(error)
      }
    }
},
//刷新或者第一次进入页面
  beforeRouteEnter (to, from, next) {
  next(vm => {
    vm.page = 1
    vm.getData(to.query)
  })
},
//在页面中点击侧边栏
  beforeRouteUpdate (to, from, next) {
    this.scrollTop()
    this.page = 1
    this.getData(to.query)
    next()
  },
  
};
</script>

<style lang="scss" scoped>
.article-date,
.article-category {
  margin: auto 10px;
}
.container {
  background: #fff;
  margin-bottom: 40px;
  padding: 30px;
  border-radius: 5px;
}
.center {
  text-align: center;
}
.articles {
  .article-header {
    margin-bottom: 10px;
    .article-title {
      margin: 10px 0;
      font-size: 36px;
      text-align: center;
    }
    .article-span {
      text-align: center;
    }
  }

  .article-summary {
    margin: 0 0 10px;
    
    font-size: 14px;
  }
  .article-links {
    color: #333;

    &:hover {
      color: #0085a1;
      text-decoration: none;
    }
  }
}

.spin-container {
  height: 100px;
  position: relative;
}
</style>
