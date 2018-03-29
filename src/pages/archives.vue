<template lang="html">
<div class="timeline">
  <div  v-for="(list,year,index) in archives">
  <div class="container " :class="isLeft(index)"  >
    <div class="content">
      <h1 class="article-year">{{year}}</h1>
       <Timeline>
        <TimelineItem  v-for="i in list" :key="i.id" class="item">
          <article class="article">
         <span class="article-date">{{i.createTime}}</span>
         <router-link :to="{ name: 'article', params: { id: i.id }}" class="article-links">
              <span >{{i.title}}</span>
          </router-link>
          </article>
      </TimelineItem>
      </Timeline>
    </div>
  </div>
  
  </div>
</div>
</template>
<script>
/**
 * TODO: loading 状态添加
 */
import { api_archives_get } from "@/blog-api/api/blog/index";
export default {
  name: "archives",
  components: {},
  data() {
    return {
      archives: {},
      isLoading:true
    };
  },
  beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
    vm.getData()
  })
  },
  methods: {
    isLeft(i) {
      let left = i % 2 === 0;
      return { left: left, right: !left };
    },
    async getData(){
      this.isLoading = true;
      try {
      const {data} = await api_archives_get()
      this.archives = data;
      this.isLoading = false;
      } catch (error) {
        console.log(error)
      }

    }
  }
};
</script>

<style lang="scss" scoped>
.item{
   margin: 10px;
}
.article{
  border-bottom: 1px dashed #ccc;
}
 .article-year{
   margin: 10px;
 }
.article-links {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-left: 15px;
}
/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
}

/* Place the container to the left */
.left {
  left: 0;
  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }
}

/* Place the container to the right */
.right {
  left: 50%;
  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }
  &::after {
    left: -16px;
  }
}

/* The actual content */
.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media all and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>
