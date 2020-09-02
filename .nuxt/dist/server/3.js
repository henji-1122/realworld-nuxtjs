exports.ids = [3];
exports.modules = {

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getYourFeedArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return deleteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return postArticleComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deleteArticleComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return deleteArticle; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
 // 获取文章列表

const getArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles',
    params // 用户传入的参数统一接收

  });
}; // 获取用户关注的文章列表

const getYourFeedArticles = params => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: '/api/articles/feed',
    params // 无需在此手动写入token，通过请求插件request的拦截器中统一获取设置
    // headers: {
    //   Authorization: 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTExMjA1LCJ1c2VybmFtZSI6ImNob25nY2hvbmciLCJleHAiOjE2MDM0NDYzMjN9.s25bm8iSucGTvwrrRluWAKwZP9X76nPzIhZYNGdLQtc'
    // }

  });
}; // 添加点赞

const addFavorite = slug => {
  // slug 文章标识(别名路径)
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const deleteFavorite = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  });
}; // 获取文章详情

const getArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}`
  });
}; // 获取文章评论

const getComments = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  });
}; // 发布对文章的评论

const postArticleComment = (slug, comment) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: {
      comment: {
        body: comment
      }
    }
  });
}; // 删除对文章的评论

const deleteArticleComment = (slug, id) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  });
}; // 发表文章

const createArticle = article => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'POST',
    url: '/api/articles',
    data: {
      article
    }
  });
}; // 更新文章

const updateArticle = (slug, article) => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'PUT',
    url: `/api/articles/${slug}`,
    data: {
      article
    }
  });
}; // 删除文章

const deleteArticle = slug => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  });
};

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _api_article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* 点赞|取消点赞 */
// 载入点赞和取消点赞的请求方法

/* harmony default export */ __webpack_exports__["a"] = (async function (article) {
  console.log(article); // 点赞请求时不可点击

  article.favoriteDisabled = true;

  if (article.favorited) {
    // 取消点赞
    await Object(_api_article__WEBPACK_IMPORTED_MODULE_0__[/* deleteFavorite */ "e"])(article.slug);
    article.favorited = false;
    article.favoritesCount += -1;
  } else {
    // 添加点赞
    await Object(_api_article__WEBPACK_IMPORTED_MODULE_0__[/* addFavorite */ "a"])(article.slug);
    article.favorited = true;
    article.favoritesCount += 1;
  } // 点赞请求结束后可点击


  article.favoriteDisabled = false;
});

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=816f9ce6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.user.username))+"</h4> <p>"+_vm._ssrEscape(_vm._s(_vm.user.description))+"</p> <button class=\"btn btn-sm btn-outline-secondary action-btn\"><i class=\"ion-plus-round\"></i>\n             \n            Follow Eric Simons\n          </button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{
                path: ("/profile/" + (_vm.user.username))
              },"exact":""}},[_vm._v("My Articles\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                active: _vm.favorites === 'favorites'
              },attrs:{"to":{
                path: ("/profile/" + (_vm.user.username)),
                query: {
                  favorites: 'favorites'
                }
              },"exact":""}},[_vm._v("Favorited Articles")])],1)],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(article){return _c('ArticleList',{key:article.slug,attrs:{"article":article,"btnDisabled":article.favoriteDisabled},on:{"favorite":function($event){return _vm.onFavorite(article)}}})}),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(item){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item",{ active: _vm.page === item }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link",attrs:{"to":{
                  name: 'profile',
                  query: {
                    page: item,
                    favorites: _vm.favorites
                  }
                }}},[_vm._v(_vm._s(item))])],1)}),0)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=816f9ce6&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: ./utils/onFavorite.js
var onFavorite = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleList.vue?vue&type=template&id=69825b7d&
var ArticleListvue_type_template_id_69825b7d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-preview"},[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('next-link',{attrs:{"to":{
      name: 'profile',
      params: {
        username: _vm.article.author.username
      }
    }}},[_c('img',{attrs:{"src":"article.author.image"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('next-link',{staticClass:"author",attrs:{"to":{
        name: 'profile',
        params: {
          username: _vm.article.author.username
        }
      }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.btnDisabled))+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: _vm.article.favorited}))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.article.favoritesCount)+"\n    ")+"</button>")],2),_vm._ssrNode(" "),_c('next-link',{staticClass:"preview-link",attrs:{"to":{
    name: 'article',
    params: {
      slug: _vm.article.slug
    }
  }}},[_c('h1',[_vm._v(_vm._s(_vm.article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])]),_vm._ssrNode(" <ul class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag){return ("<li class=\"tag-default tag-pill tag-outline\">"+_vm._ssrEscape("\n        "+_vm._s(tag)+"\n      ")+"</li>")}))+"</ul>")],2)}
var ArticleListvue_type_template_id_69825b7d_staticRenderFns = []


// CONCATENATED MODULE: ./components/ArticleList.vue?vue&type=template&id=69825b7d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ArticleList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ArticleListvue_type_script_lang_js_ = ({
  name: 'ArticleList',
  props: {
    article: {
      type: Object,
      required: true
    },
    btnDisabled: {
      type: Boolean
    }
  }
});
// CONCATENATED MODULE: ./components/ArticleList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ArticleListvue_type_script_lang_js_ = (ArticleListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ArticleList.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ArticleListvue_type_script_lang_js_,
  ArticleListvue_type_template_id_69825b7d_render,
  ArticleListvue_type_template_id_69825b7d_staticRenderFns,
  false,
  injectStyles,
  null,
  "2562909a"
  
)

/* harmony default export */ var ArticleList = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  middleware: 'authenticated',
  // 路由路由拦中间件
  name: "Profile",

  async asyncData({
    store,
    query
  }) {
    const page = Number.parseInt(query.page) || 1; // 第几页,从地址栏参数中获取

    const limit = 2; // 每页显示2条

    const username = store.state.user.username;
    const params = {
      limit,
      offset: (page - 1) * limit // 分页

    };

    if (query.favorites === 'favorites') {
      params.favorited = username;
    } else {
      params.author = username;
    }

    const {
      data
    } = await Object(api_article["f" /* getArticle */])(params);
    const articles = data.articles;
    const articlesCount = data.articlesCount;
    articles.forEach(article => {
      article.favoriteDisabled = false;
    });
    const result = {
      articles,
      articlesCount,
      page,
      limit,
      favorites: undefined
    };

    if (query.favorites === 'favorites') {
      result.favorites = 'favorites';
    }

    return result;
  },

  computed: { ...Object(external_vuex_["mapState"])(['user']),

    // 通过总页数和每页显示条数，得到页码
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  components: {
    ArticleList: ArticleList
  },

  // 获取用户文章列表
  async mounted() {
    const query = this.$route.query;
    console.log(query);
    const page = Number.parseInt(query.page) || 1;
    const limit = 2;
    const username = this.user.username;
    const params = {
      limit,
      offset: (page - 1) * limit
    };

    if (query.favorites === 'favorites') {
      params.favorited = username;
    } else {
      params.author = username;
    }

    const {
      data
    } = await Object(api_article["f" /* getArticle */])(params);
    const articles = data.articles;
    this.articles = articles;
  },

  methods: {
    onFavorite(article) {
      Object(onFavorite["a" /* default */])(article);
    }

  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/profile/index.vue



function profile_injectStyles (context) {
  
  
}

/* normalize component */

var profile_component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  profile_injectStyles,
  null,
  "0a6b642b"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (profile_component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map