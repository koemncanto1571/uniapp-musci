(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ 157:
/*!*******************************************************************************************!*\
  !*** C:/Users/86183/Desktop/仿网易云/neteaseMusic/main.js?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/detail.vue */ 158));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 158:
/*!************************************************************************!*\
  !*** C:/Users/86183/Desktop/仿网易云/neteaseMusic/pages/detail/detail.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=3e159eb4&scoped=true& */ 159);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 161);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_id_3e159eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&id=3e159eb4&scoped=true&lang=css& */ 163);
/* harmony import */ var _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e159eb4",
  null,
  false,
  _detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 159:
/*!*******************************************************************************************************************!*\
  !*** C:/Users/86183/Desktop/仿网易云/neteaseMusic/pages/detail/detail.vue?vue&type=template&id=3e159eb4&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=3e159eb4&scoped=true& */ 160);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 160:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86183/Desktop/仿网易云/neteaseMusic/pages/detail/detail.vue?vue&type=template&id=3e159eb4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    musicHead: function() {
      return __webpack_require__.e(/*! import() | components/musicHead/musicHead */ "components/musicHead/musicHead").then(__webpack_require__.bind(null, /*! @/components/musicHead/musicHead.vue */ 173))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.songComment, function(item, index) {
    var $orig = _vm.__get_orig(item)

    var m0 = _vm.formatTime(item.time)
    var m1 = _vm.formatCount(item.likedCount)
    return {
      $orig: $orig,
      m0: m0,
      m1: m1
    }
  })

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 161:
/*!*************************************************************************************************!*\
  !*** C:/Users/86183/Desktop/仿网易云/neteaseMusic/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 162);
/* harmony import */ var _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 162:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86183/Desktop/仿网易云/neteaseMusic/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





































































__webpack_require__(/*! @/common/iconfont.css */ 144);

var _api = __webpack_require__(/*! ../../common/api.js */ 145); //
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
var musicHead = function musicHead() {__webpack_require__.e(/*! require.ensure | components/musicHead/musicHead */ "components/musicHead/musicHead").then((function () {return resolve(__webpack_require__(/*! ../../components/musicHead/musicHead.vue */ 173));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default = { data: function data() {return { songDetail: { al: { picUrl: '' } }, songSimi: [], songComment: [], songLyric: [], lyricIndex: 0, iconPlay: 'icon-zanting', isPlayRotate: true, needleClass: 'detail-play-run2', isloading: true };}, components: { musicHead: musicHead }, onLoad: function onLoad(option) {// console.log(option.songId)
    this.getMusic(option.songId);}, onUnload: function onUnload() {this.cancelLyricIndex();}, onHide: function onHide() {this.cancelLyricIndex();}, methods: { getMusic: function getMusic(songId) {var _this = this;this.$store.commit('NEXT_ID', songId);uni.showLoading({ title: '加载中....' });this.isloading = true;Promise.all([(0, _api.songDetail)(songId), (0, _api.songSimi)(songId), (0, _api.songComment)(songId), (0, _api.songLyric)(songId), (0, _api.songUrl)(songId)]).then(function (res) {if (res[0][1].data.code == '200') {_this.songDetail = res[0][1].data.songs[0];}if (res[1][1].data.code == '200') {_this.songSimi = res[1][1].data.songs; // console.log(res)
        }if (res[2][1].data.code == '200') {_this.songComment = res[2][1].data.hotComments;}if (res[3][1].data.code == '200') {var lyric = res[3][1].data.lrc.lyric; // console.log(lyric)
          var re = /\[([^\]]+)\]([^\[]+)/g; // console.log( lyric.match(re))
          var result = [];lyric.replace(re, function ($0, $1, $2) {result.push({ "time": _this.formatTimeToSec($1), "lyric": $2 });}); // console.log(result)
          _this.songLyric = result;}if (res[4][1].data.code == '200') {_this.bgAudioMannager = uni.getBackgroundAudioManager();_this.bgAudioMannager.title = _this.songDetail.name;







          _this.bgAudioMannager.src = res[4][1].data.data[0].url || '';
          _this.listenLyricIndex();
          _this.bgAudioMannager.onPlay(function () {
            _this.listenLyricIndex();
            _this.iconPlay = 'icon-zanting';
            _this.isPlayRotate = true;
            _this.needleClass = 'detail-play-run3';

            // this.$refs.playState.classList.remove('detail-play-run2-state')
          });
          _this.bgAudioMannager.onPause(function () {
            _this.cancelLyricIndex();
            _this.iconPlay = 'icon-bofang1';
            _this.isPlayRotate = false;
            _this.needleClass = 'detail-play-run2';

            // this.$refs.playState.classList.add('detail-play-run2-state')
            // this.$refs.playState.classList.remove('detail-play-run3-state')
          });
          _this.bgAudioMannager.onEnded(function () {
            _this.getMusic(_this.$store.state.nextId);
          });
        }
        _this.isloading = false;
        uni.hideLoading();
      });
    },
    formatTimeToSec: function formatTimeToSec(val) {
      var arr = val.split(':');
      return (parseFloat(arr[0] * 60) + parseFloat(arr[1])).toFixed(1);
    },
    handleToPlay: function handleToPlay() {
      if (this.bgAudioMannager.paused) {
        this.bgAudioMannager.play();
      } else
      {
        this.bgAudioMannager.pause();
      }
    },
    listenLyricIndex: function listenLyricIndex() {var _this2 = this;
      clearInterval(this.timer);
      this.timer = setInterval(function () {
        for (var i = 0; i < _this2.songLyric.length; i++) {
          if (_this2.bgAudioMannager.currentTime > _this2.songLyric[_this2.songLyric.length - 1].time) {
            _this2.lyricIndex = _this2.songLyric.length - 1;
            break;
          }
          if (_this2.bgAudioMannager.currentTime > _this2.songLyric[i].time && _this2.bgAudioMannager.currentTime < _this2.songLyric[i + 1].time) {
            _this2.lyricIndex = i;
          }
        }
        console.log(_this2.songLyric[_this2.lyricIndex].lyric);
      }, 50);
    },
    cancelLyricIndex: function cancelLyricIndex() {
      clearInterval(this.timer);
    },
    handleToSimi: function handleToSimi(songId) {
      this.getMusic(songId);
    } },

  computed: {
    formatCount: function formatCount() {
      return function (val) {
        if (val >= 10000 && val <= 100000000) {
          val /= 10000;
          return val.toFixed(1) + '万';
        } else
        if (val > 100000000) {
          val /= 100000000;
          return val.toFixed(1) + '亿';
        } else
        {
          return val;
        }
      };
    },
    formatTime: function formatTime() {
      return function (val) {
        var date = new Date(val);
        return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
      };
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 163:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/86183/Desktop/仿网易云/neteaseMusic/pages/detail/detail.vue?vue&type=style&index=0&id=3e159eb4&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&id=3e159eb4&scoped=true&lang=css& */ 164);
/* harmony import */ var _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_SoftMgr_HBuilderX_2_7_14_202006181_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_id_3e159eb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 164:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/86183/Desktop/仿网易云/neteaseMusic/pages/detail/detail.vue?vue&type=style&index=0&id=3e159eb4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[157,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/detail/detail.js.map