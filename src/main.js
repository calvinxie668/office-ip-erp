// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import formCreate from "form-create";
// import VueQuillEditor from "vue-quill-editor";
import MyAxios from "@/const/MyAxios";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App";
import "./fonts/iconfont.css";
import axios from "@/const/axios";
import tool from "./const/tool";
// import AppButtonLoading from "@/components/common/AppButtonLoading";
import "./components/common/components"
import "./components/form/components"
// import '../static/jquery-3.2.1.js'

// import '../static/UE/ueditor.config.js'
// import '../static/UE/ueditor.all.min.js'
// import '../static/UE/lang/zh-cn/zh-cn.js'
// import '../static/UE/ueditor.parse.min.js'

Vue.prototype.$axios = axios;
Vue.prototype.$tool = tool;

Vue.use(ElementUI);
// Vue.use(VueQuillEditor);
Vue.use(MyAxios);
Vue.use(formCreate);

const isDebug_mode = process.env.NODE_ENV !== 'production'
Vue.config.debug = isDebug_mode
Vue.config.devtools = isDebug_mode
Vue.config.productionTip = isDebug_mode
// Vue.component("app-button-loading",AppButtonLoading);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  template: "<App/>",
  components: { App }
});
