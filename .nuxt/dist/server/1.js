exports.ids = [1];
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=68196226&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('Mate',{attrs:{"article":_vm.article,"articleDisabled":_vm.article.favoriteDisabled,"followDisabled":_vm.article.author.favoriteDisabled},on:{"follow":function($event){return _vm.onFollow(_vm.article.author)},"favorite":function($event){return _vm.onFavorite(_vm.article)},"delete-article":_vm.onDeleteArticle,"edit-article":_vm.onEditArticle}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\">"+(_vm._s(_vm.article.body))+"</div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('Mate',{attrs:{"article":_vm.article,"articleDisabled":_vm.article.favoriteDisabled,"followDisabled":_vm.article.author.favoriteDisabled},on:{"follow":function($event){return _vm.onFollow(_vm.article.author)},"favorite":function($event){return _vm.onFavorite(_vm.article)},"delete-article":_vm.onDeleteArticle,"edit-article":_vm.onEditArticle}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_c('Comment',{attrs:{"article":_vm.article}})],1)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=68196226&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Mate.vue?vue&type=template&id=00e633c0&
var Matevue_type_template_id_00e633c0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_c('nuxt-link',{attrs:{"to":{
          name: 'profile',
          params: {
            username: _vm.article.author.username
          }
        }}},[_c('img',{attrs:{"src":"article.author.image"}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":{
            name:'profile',params: {
            username: _vm.article.author.username
          }
          }}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" "+((_vm.user ? _vm.user.username !== _vm.article.author.username : true)?("<button"+(_vm._ssrAttr("disabled",_vm.followDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{active: _vm.article.author.following}))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n             \n            "+_vm._s(_vm.article.author.following ? 'UnFollow' : 'Follow')+" "+_vm._s(_vm.article.author.username)+"\n            ")+"<span class=\"counter\">(10)</span></button>\n            \n          <button"+(_vm._ssrAttr("disabled",_vm.articleDisabled))+(_vm._ssrClass("btn btn-sm btn-outline-primary",{active: _vm.article.favorited}))+"><i class=\"ion-heart\"></i>\n             \n            Favorite Post\n            <span class=\"counter\">"+_vm._ssrEscape(_vm._s(_vm.article.favoritesCount))+"</span></button>"):("<button class=\"btn btn-sm btn-outline-secondary\"><i class=\"ion-edit\"></i>\n             \n            Edit Article\n          </button>\n           \n          <button class=\"btn btn-sm btn-outline-danger\"><i class=\"ion-trash-a\"></i>\n             \n            Delete Article\n          </button>")))],2)}
var Matevue_type_template_id_00e633c0_staticRenderFns = []


// CONCATENATED MODULE: ./components/Mate.vue?vue&type=template&id=00e633c0&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(28);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Mate.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Matevue_type_script_lang_js_ = ({
  name: 'Meta',
  props: {
    article: {
      type: Object,
      required: true
    },
    articleDisabled: {
      type: Boolean,
      required: true
    },
    followDisabled: {
      type: Boolean,
      required: true
    }
  },
  computed: { ...Object(external_vuex_["mapState"])(['user'])
  }
});
// CONCATENATED MODULE: ./components/Mate.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Matevue_type_script_lang_js_ = (Matevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Mate.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Matevue_type_script_lang_js_,
  Matevue_type_template_id_00e633c0_render,
  Matevue_type_template_id_00e633c0_staticRenderFns,
  false,
  injectStyles,
  null,
  "aaeacce2"
  
)

/* harmony default export */ var Mate = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Comment.vue?vue&type=template&id=1fd9aab5&
var Commentvue_type_template_id_1fd9aab5_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.comment))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape(_vm._s(comment.body))+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":{
        name: 'profile',
        params: {
          username: comment.author.username
        }
      }}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n       \n      <a href class=\"comment-author\">"+_vm._ssrEscape(_vm._s(comment.author.username))+"</a> <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(comment.createdAt,'MMM DD, YYYY')))+"</span> "+((comment.author.username === _vm.user.username)?("<span class=\"mod-options\"><i class=\"ion-trash-a\"></i></span>"):"<!---->"))],2)],2)})],2)}
var Commentvue_type_template_id_1fd9aab5_staticRenderFns = []


// CONCATENATED MODULE: ./components/Comment.vue?vue&type=template&id=1fd9aab5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Comment.vue?vue&type=script&lang=js&
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


/* harmony default export */ var Commentvue_type_script_lang_js_ = ({
  name: 'Comment',
  props: {
    article: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      comments: [],
      // 文章评论列表
      comment: this.body || ''
    };
  },

  // 通过客户端渲染展示评论列表
  async mounted() {
    const {
      data
    } = await Object(api_article["h" /* getComments */])(this.article.slug); // console.log(data)

    this.comments = data.comments;
  },

  computed: { ...Object(external_vuex_["mapState"])(['user'])
  },
  methods: {
    // 发布评论
    async postComment() {
      const comment = await Object(api_article["j" /* postArticleComment */])(this.article.slug, this.comment);
      this.comment = '';
    },

    // 删除评论
    async deleteComment(id) {
      await Object(api_article["d" /* deleteArticleComment */])(this.article.slug, id);
      this.comments = this.comments.filter(comment => comment.id !== id);
    }

  }
});
// CONCATENATED MODULE: ./components/Comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Commentvue_type_script_lang_js_ = (Commentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Comment.vue



function Comment_injectStyles (context) {
  
  
}

/* normalize component */

var Comment_component = Object(componentNormalizer["a" /* default */])(
  components_Commentvue_type_script_lang_js_,
  Commentvue_type_template_id_1fd9aab5_render,
  Commentvue_type_template_id_1fd9aab5_staticRenderFns,
  false,
  Comment_injectStyles,
  null,
  "22ee01c5"
  
)

/* harmony default export */ var Comment = (Comment_component.exports);
// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(9);

// EXTERNAL MODULE: ./utils/onFavorite.js
var onFavorite = __webpack_require__(29);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(27);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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
// 引入组件

 // 引入接口函数



 // 引入插件


/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "ArticleIndex",

  async asyncData({
    params
  }) {
    const {
      data
    } = await Object(api_article["f" /* getArticle */])(params.slug); // console.log(data)

    const {
      article
    } = data;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body); // 给文章和用户添加属性,在发送请求时禁止点击按钮

    article.favoriteDisabled = false;
    article.author.favoriteDisabled = false;
    console.log(article);
    return {
      // article: data.article
      article
    };
  },

  components: {
    Mate: Mate,
    Comment: Comment
  },

  // 设置页面meta 优化SEO
  head() {
    return {
      title: `${this.article.title} - RealWorld`,
      // title mate
      meta: [{
        hid: 'description',
        //为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签而产生重复的现象，建议利用 hid 键为 meta 标签配一个唯一的标识编号
        name: 'description',
        content: this.article.description // 文章内容

      }]
    };
  },

  mounted() {},

  methods: {
    // 关注\取消关注
    onFollow(author) {
      // 关注请求时，禁用按钮
      author.favoriteDisabled = true;

      if (author.following) {
        // 取消关注
        console.log('------', 'unFollow');
        Object(user["d" /* unFollow */])(author.username);
        author.following = false;
      } else {
        // 添加关注
        Object(user["a" /* follow */])(author.username);
        author.following = true;
      }

      author.favoriteDisabled = false;
    },

    // 点赞\取消点赞
    onFavorite(article) {
      Object(onFavorite["a" /* default */])(article);
    },

    // 删除文章
    async onDeleteArticle() {
      await Object(api_article["c" /* deleteArticle */])(this.article.slug);
      this.$router.replace({
        path: 'home'
      });
    },

    // 编辑文章
    onEditArticle() {
      this.$router.push({
        path: `/editor/${this.article.slug}`
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "2047ab38"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map