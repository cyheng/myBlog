<template>
  <div>
    <Row :gutter="32" type="flex" justify="center">
       <Col  :xs="24" :sm="15" >
      <article class="article">
        <vue-markdown :source=content class="markdown-body">
        </vue-markdown>
      </article>
      </Col>
    </Row>

  </div>

</template>



<script>
import VueMarkdown from 'vue-markdown'
import { api_about_get } from '@/blog-api/api/blog/index'

export default {
  name: 'about',
  components: {
    VueMarkdown
  },
  async mounted() {
    const { data } = await api_about_get()
    this.content = data.data.content
  },
  data() {
    return {
      content: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  font-size: 16px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
  margin-bottom: 40px;
}
</style>
