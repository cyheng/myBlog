import instance from './instance';
import { convertRESTAPI } from '../util';

/** 某博文的评论列表(?cid={cid}&limit={limit}) */
function comments_list_get(opts) {
  return instance({
    method: 'get',
    url:  '/comments/list',
    opts: opts
  });
}

/** 侧边栏category */
function category_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/category',
    opts: opts
  });
}

/** 按时间顺序进行归档 */
function api_archives_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/archives',
    opts: opts
  });
}

/** 当前页，每页个数，查询条件 */
function api_articles_get(opts) {
  return instance({
    method: 'get',
    url:  '/api/articles',
    opts: opts
  });
}

/** 单篇文章 */
function api_article_id_get(opts) {
  return instance({
    method: 'get',
    url: convertRESTAPI('/api/articles/{id}', opts),
    opts: opts
  });
}
/** 关于页获取 */
function api_about_get(opts){
  return instance({
    method: 'get',
    url:  '/api/about',
    opts: opts
  });
}
export {
  comments_list_get,
  category_get,
  api_archives_get,
  api_articles_get,
  api_article_id_get,
  api_about_get,
};
