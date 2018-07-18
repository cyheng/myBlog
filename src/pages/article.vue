<template>
    <div>
        <Row :gutter="32" type="flex" justify="center" >
            <Col  :xs="24" :sm="15" >
                <article class="article">
                    <header class="article-header">
                        <div class="article-title">
                            {{article.title}}
                        </div>
                        <div class="article-span">
                            <span class="article-date">
                                <Icon type="calendar" size="25"></Icon>
                                <span>{{article.updateTime}}</span>
                            </span>
                            <span class="article-category">
                                <Icon type="folder" size="25"> </Icon>
                                <span>
                                    <router-link :to="{ name:'index', query: { category: category.id }}" class="article-links">
                                        {{category.name}}
                                    </router-link>
                                </span>
                            </span>
                        </div>
                    </header>
                    <VueMarkdown  v-highlight :source="article.content" class="markdown-body"
                     :toc="toc" toc-id="toc" toc-anchor-link-symbol="" toc-class="toc-class">
                    </VueMarkdown>
                </article>
            </Col>
            <Col :xs="0" :sm="7">
             <Affix :offset-top="20" >
                 <div>
                 <aside  class="article-sidebar sticky" v-if="toc" id="toc"></aside>
                <sidebar v-else></sidebar>
                </div>
            </Affix>
            </Col>
        </Row>
    </div>
</template>




<script>
 import { Row,Col,Icon,Affix } from 'iview';
import VueMarkdown from "vue-markdown";
import { api_article_id_get } from "@/blog-api/api/blog/index";
import sidebar from "@/components/sidebar";

export default {
  name: "article-detail",
  components: {
    VueMarkdown,sidebar,Row,Col,Icon,Affix
  },
  data() {
    return {
      isLoading: true,
      article: {},
      toc:true,
      category:{},
    };
  },
  async mounted () {
    await this.getData(this.$route.params.id)
    //文章md渲染 自定义指令v-highlight无效
    let blocks = document.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
  
  },
  methods: {
    async getData(query){
      this.isLoading = true;
      try {
      const {data} = await api_article_id_get({path:{id:query}})
      const {category,...article} = data
      this.article = article;
      this.category = category
      this.toc = data.showToc
      this.isLoading = false;
      } catch (error) {
        this.$Message.fail('获取数据失败!')
        console.log(error)
      }
    }
  },
   
};
</script>
<style lang="scss">
.sidebar-item{
    padding: 40px;
     
    a{
        color: #666;
        font-size: 15px;
    }
}
.toc-class{
    margin: 0;
    padding: 0 2px 5px 10px;
    text-align: left;
    list-style: none;
    font-size: 14px;
    li{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.8;
    }
    a{
            color: #666;
    }
}
.sticky{
   max-height: 500px;
   overflow: auto;
}
</style>

<style lang="scss" scoped>
.article-layout{
    margin: 40px;
}
.article-sidebar {
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  color: #666;
}
.article {
  font-size:16px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 40px;
}
.article-date,
.article-category {
  margin: auto 10px;
}
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
.article-links {
  color: #333;

  &:hover {
    color: #0085a1;
    text-decoration: none;
  }
}


</style>
