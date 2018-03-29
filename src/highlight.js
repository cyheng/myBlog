import Vue from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css' //样式文件

let Highlight = {}
Highlight.install = function (Vue, options) {
  Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
  })
}


export default Highlight