webpackJsonp([5],{"5fgl":function(t,e){},VAuT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("gyMJ"),s={data:function(){return{getRoutePath:"",nav:{},navList:[],user:this.$store.state.userInfo||[],storageList:[]}},beforeMount:function(){var t=this;n.a.getRbacMenu().then(function(e){t.navList=e.result||[],t.navList.push({children:[{name:"修改密码",url:"/account-management/change-password",level:2},{name:"账号密码管理",url:"/account-management/account-setup",level:2},{name:"员工登录方式配置",url:"/account-management/login-setup",level:2},{name:"外部用户登录方式配置",url:"/account-management/other-login-setup",level:2}],code:"7c8c0efd-495e-4c18-8e54-013131a2a620",icon:"default",level:1,name:"用户管理",url:"#"})})},methods:{loginOut:function(){n.a.loginOut().then(function(t){t.code})},handle:function(t){}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"side-wrap"},[a("div",{staticClass:"logo"},[a("div",[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-userSys"}})]),t._v(" "),a("span",[t._v("用户权限管理系统")])])]),t._v(" "),a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:"","default-active":this.$route.path,"background-color":"#06193D","text-color":"#fff","active-text-color":"#fff","unique-opened":""}},[t._l(t.navList,function(e,n){return[e.children?a("el-submenu",{key:n,staticClass:"hasSub",attrs:{index:""+n}},[a("template",{slot:"title"},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-"+("default"!==e.icon?e.icon:"menu")}})]),t._v(" "),a("span",[t._v(t._s(e.name))])]),t._v(" "),t._l(e.children,function(e,s){return a("el-menu-item",{key:n+"-"+(s+1),attrs:{route:"",index:e.url}},[a("template",{slot:"title"},[a("span",[t._v(t._s(e.name))])])],2)})],2):a("el-menu-item",{key:""+n,staticClass:"noSub",attrs:{index:e.url}},[a("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[a("use",{attrs:{"xlink:href":"#icon-"+("default"!==e.icon?e.icon:"menu")}})]),t._v(" "),a("span",[t._v(t._s(e.name))])])]})],2),t._v(" "),a("div",{staticClass:"nav-bottom"},[a("el-dropdown",{staticClass:"nav-dropdown",on:{command:t.loginOut}},[a("div",{staticClass:"el-dropdown-link"},[a("div",{staticClass:"nav-user-head"},[a("img",{attrs:{src:t.user.avatar_url}})]),t._v(" "),a("div",{staticClass:"nav-user-con"},[a("span",{staticClass:"nav-user-name"},[t._v(t._s(t.user.user_name))]),t._v(" "),a("span",{staticClass:"nav-user-position"},[t._v(t._s(t.user.position))])]),t._v(" "),a("i",{staticClass:"nav-icon el-icon-caret-bottom"})]),t._v(" "),a("el-dropdown-menu",{staticStyle:{width:"160px"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"loginOut"}},[t._v("退出")])],1)],1)],1)],1)},staticRenderFns:[]};var o={components:{SideBar:a("vSla")(s,i,!1,function(t){a("s/H9")},"data-v-3cea7247",null).exports,TopHeader:a("Cz8s").a},data:function(){return{dialogTableVisible:!1,keyword:"",isMust:!1}},computed:{user:function(){var t=this.$store.state.common.user;return t.photo="user-avatar.png",t.title=["","中心总监","中心管理层",t.workDuty,"HR管理员","项目管理员"][t.role]||t.workDuty,t}},methods:{close:function(){this.dialogTableVisible=!1},userOperate:function(t){switch(t){case"1":localStorage.removeItem("token"),localStorage.removeItem("user"),this.$store.commit("SET_CHARTDATA",{}),this.$router.push("/login");break;case"0":this.dialogTableVisible=!0;break;case"3":this.$router.push("/personal-data-set")}}},beforeCreate:function(){},created:function(){}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-aside",{attrs:{id:"aside"}},[e("side-bar")],1),this._v(" "),e("el-container",{attrs:{id:"container"}},[e("div",{staticClass:"container"},[e("navigation",[e("router-view")],1)],1)])],1)},staticRenderFns:[]};var l=a("vSla")(o,r,!1,function(t){a("5fgl")},"data-v-15595536",null);e.default=l.exports},"s/H9":function(t,e){}});
//# sourceMappingURL=5.5a648b51328c9e35d25e.js.map