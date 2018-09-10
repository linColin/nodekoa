webpackJsonp([15],{Eivk:function(e,t){},e3Ds:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("4YfN"),r=a.n(i),s=a("45w3"),l=a("zAgK"),n=a("TtmE"),o={components:{SystemItem:s.a,FilterTree:l.a,KyeDialog:n.a},data:function(){return{page:{total:0,size:10,current:1,sizes:[10,20,50,100]},tableData:[],currentName:void 0,filterCondition:{employee_code:void 0,user_name:void 0,position:void 0,department_name:void 0},currentKey:null,systems:[],kyeDialog:{hasDialog:!1,title:"新增"},ruleForm:{id:0,associated_system_id:"",remark:"",checked:[],endTime:""},loginType:{1:{name:"账号密码登录"},2:{name:"手机验证码登录"},3:{name:"账号密码或手机验证码登录"},4:{name:"账号密码和手机验证码登录"}},rules:{associated_system_id:[{required:!0,message:"请选择系统名称",trigger:"blur"}],approval_flow:[{approval_type:[{required:!0,message:"请选择一级审批",trigger:"blur"}],approval_user_name:[{required:!0,message:"请输入审批人",trigger:"change"}],approval_role_name:[{required:!0,message:"请输入审批人",trigger:"change"}]}]},pickerOptions:{disabledDate:function(e){return e.getTime()<Date.now()},shortcuts:[{text:"长期有效",onClick:function(e){var t=new Date;t.setTime(t.getTime()+864e9),e.$emit("pick","")}}]}}},created:function(){this.$API.getLoginsetupList().then(function(e){console.log(e)})},methods:{isShowDialog:function(e){this.kyeDialog.hasDialog=e},onAdd:function(){this.isShowDialog(!0)},requestList:function(){var e=this,t=r()({},this.filterCondition,{page:this.page.current,per_page:this.page.size});this.$API.getSystemUsers(this.currentKey,t).then(function(t){var a=t.result||{};e.page.total=a.pagination?a.pagination.total_count:0,e.tableData=a.data||[]})},searchList:function(){if(!this.currentKey)return this.$message({type:"warning",message:"请先选择一个系统!"}),void this.$refs.treeRef.$refs.filterInput.focus();this.page.current=1,this.requestList()},handleSizeChange:function(e){this.page.size=e,this.requestList()},handleCurrentChange:function(e){this.page.current=e,this.requestList()},requestSystemTree:function(){var e=this;this.$API.searchSys({per_page:1e3,page:1}).then(function(t){var a=[{id:-1,name:"基本系统",children:[]},{id:-2,name:"业务系统",children:[]}];((t.result||{}).data||[]).forEach(function(e){1===e.type?a[0].children.push(e):a[1].children.push(e)}),e.systems=a})},handleNodeClick:function(e,t,a){t.isLeaf?(this.filterCondition.employee_code=void 0,this.filterCondition.user_name=void 0,this.filterCondition.position=void 0,this.filterCondition.department_name=void 0,this.currentKey=e.id,this.currentName=e.name,this.page.current=1,this.requestList(),this.$refs.treeRef.$refs.tree.setCurrentKey(e.id)):this.$refs.treeRef.$refs.tree.setCurrentKey(this.currentKey)}},beforeMount:function(){this.requestSystemTree()},onEdit:function(e){}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-box"},[a("top-header",{attrs:{title:"登录方式列表"}},[a("div",{staticClass:"el-icon-plus",on:{click:e.onAdd}},[e._v("新增")])]),e._v(" "),a("div",{staticClass:"page-container"},[a("div",{staticClass:"box-tree"},[a("strong",{staticClass:"box-title"},[e._v("系统列表")]),e._v(" "),a("div",{staticClass:"tree-wraper"},[a("div",{staticClass:"tree-box"},[a("div",{staticClass:"filter-tree-box"},[a("filter-tree",{ref:"treeRef",attrs:{"default-expand-all":!0,data:e.systems,placeholder:"请输入系统名称"},on:{"node-click":e.handleNodeClick}})],1)])])]),e._v(" "),a("div",{staticClass:"box-list"},[a("strong",{staticClass:"box-title"},[e._v("员工列表"),a("span",{directives:[{name:"show",rawName:"v-show",value:e.currentName,expression:"currentName"}]},[e._v(e._s("-  "+e.currentName))])]),e._v(" "),a("div",{staticClass:"user-box"},[a("div",{staticClass:"table-filters"},[a("div",{staticClass:"filter-item"},[a("p",{staticClass:"item"},[e._v("工号")]),e._v(" "),a("el-input",{attrs:{clearable:"",size:"small",placeholder:"请输入"},model:{value:e.filterCondition.employee_code,callback:function(t){e.$set(e.filterCondition,"employee_code",t)},expression:"filterCondition.employee_code"}})],1),e._v(" "),a("div",{staticClass:"filter-item"},[a("p",{staticClass:"item"},[e._v("姓名")]),e._v(" "),a("el-input",{attrs:{clearable:"",size:"small",placeholder:"请输入"},model:{value:e.filterCondition.user_name,callback:function(t){e.$set(e.filterCondition,"user_name",t)},expression:"filterCondition.user_name"}})],1),e._v(" "),a("div",{staticClass:"filter-item"},[a("p",{staticClass:"item"},[e._v("部门")]),e._v(" "),a("el-input",{attrs:{clearable:"",size:"small",placeholder:"请输入"},model:{value:e.filterCondition.department_name,callback:function(t){e.$set(e.filterCondition,"department_name",t)},expression:"filterCondition.department_name"}})],1),e._v(" "),a("div",{staticClass:"search-btn"},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:e.searchList}},[e._v("查询\n            ")])],1)]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"mini"}},[a("el-table-column",{attrs:{type:"index",label:"序号",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s((e.page.current-1)*e.page.size+t.$index+1)+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"employee_code",label:"工号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user_name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"department_name",label:"部门"}}),e._v(" "),a("el-table-column",{attrs:{prop:"department_name",label:"登录方式"}}),e._v(" "),a("el-table-column",{attrs:{prop:"department_name",label:"配置时间"}}),e._v(" "),a("el-table-column",{attrs:{prop:"registered_at",label:"截止时间",width:"125"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(e._f("datetime")(t.row.updated_at))+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){e.onEdit(t.row)}}},[e._v("修改")])]}}])})],1),e._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.page.total>e.page.sizes[0],expression:"page.total > page.sizes[0]"}],attrs:{background:"","page-sizes":e.page.sizes,layout:"sizes,prev,pager,next","current-page":e.page.current,total:e.page.total,"prev-text":"上一页","next-text":"下一页"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.page,"current",t)}}})],1)])]),e._v(" "),a("kye-dialog",{attrs:{width:"450px",hasDialog:e.kyeDialog.hasDialog,title:e.kyeDialog.title},on:{"is-show-dialog":e.isShowDialog,reset:function(t){e.onReset("ruleForm")}}},[a("div",{attrs:{slot:"body"},slot:"body"},[a("el-form",{ref:"ruleForm",attrs:{inline:!0,model:e.ruleForm,rules:e.rules}},[a("div",{staticClass:"dialog-tabel-item"},[a("el-form-item",{attrs:{prop:"associated_system_id"}},[a("p",[e._v("所属系统")]),e._v(" "),a("el-input",{attrs:{clearable:"",size:"small",placeholder:"请输入备注"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"remark"}},[a("p",[e._v("所属部门")]),e._v(" "),a("el-input",{attrs:{clearable:"",size:"small",placeholder:"请输入备注"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-tabel-item"},[a("p",[e._v("截止时间")]),e._v(" "),a("el-form-item",{attrs:{prop:"endTime"}},[a("el-date-picker",{attrs:{size:"small",clearable:!1,type:"date",placeholder:"长期有效","picker-options":e.pickerOptions},model:{value:e.ruleForm.endTime,callback:function(t){e.$set(e.ruleForm,"endTime",t)},expression:"ruleForm.endTime"}},[e._v(">\n            ")])],1)],1),e._v(" "),a("div",{staticClass:"dialog-tabel-item"},[a("el-form-item",{attrs:{prop:"checked"}},[a("p",[e._v("默认登录方式")]),e._v(" "),a("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.ruleForm.checked,callback:function(t){e.$set(e.ruleForm,"checked",t)},expression:"ruleForm.checked"}},e._l(e.loginType,function(e,t){return a("el-option",{key:t,attrs:{value:t+1,label:e.name}})}))],1)],1)])],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.kyeDialog.hasDialog=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("保存")])],1)])],1)},staticRenderFns:[]};var u=a("vSla")(o,c,!1,function(e){a("Eivk")},"data-v-2e7ac145",null);t.default=u.exports}});
//# sourceMappingURL=15.5837406a0bef0c88660d.js.map