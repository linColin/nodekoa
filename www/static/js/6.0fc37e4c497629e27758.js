webpackJsonp([6],{BokV:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("rVsN"),i=a.n(r),l=a("ZLEe"),s=a.n(l),o=a("3cXf"),n=a.n(o),c={components:{KyeDialog:a("TtmE").a},data:function(){return{kyeDialog:{hasDialog:!1,title:"新增"},filterCondition:{associated_system_id:"",page:1,per_page:10},handleType:"",approvalData:[],page:{total:0,size:10,current:1,sizes:[10,20,50,100]},selectSys:[],defaultRuleForm:"",onEditEmpty:"",ruleForm:{id:0,associated_system_id:"",remark:"",checked:""},rules:{associated_system_id:[{required:!0,message:"请选择系统名称",trigger:"blur"}],approval_flow:[{approval_type:[{required:!0,message:"请选择一级审批",trigger:"blur"}],approval_user_name:[{required:!0,message:"请输入审批人",trigger:"change"}],approval_role_name:[{required:!0,message:"请输入审批人",trigger:"change"}]},{approval_type:[{required:!0,message:"请选择二级审批",trigger:"blur"}],approval_user_name:[{required:!0,message:"请输入审批人",trigger:"change"}],approval_role_name:[{required:!0,message:"请输入审批人",trigger:"change"}]},{approval_type:[{required:!0,message:"请选择三级审批",trigger:"blur"}],approval_user_name:[{required:!0,message:"请输入审批人",trigger:"change"}],approval_role_name:[{required:!0,message:"请输入审批人",trigger:"change"}]},{approval_type:[{required:!0,message:"请选择四级审批",trigger:"blur"}],approval_user_name:[{required:!0,message:"请输入审批人",trigger:"change"}],approval_role_name:[{required:!0,message:"请输入审批人",trigger:"change"}]},{approval_type:[{required:!0,message:"请选择五级审批",trigger:"blur"}],approval_user_name:[{required:!0,message:"请输入审批人",trigger:"change"}],approval_role_name:[{required:!0,message:"请输入审批人",trigger:"change"}]}]},restaurants:{users:[],roles:[]},state4:"",timeout:null}},created:function(){var e=this;this.defaultRuleForm=JSON.parse(n()(this.ruleForm)),this.getSearchData(),this.$API.getConfigurationApprovalSys().then(function(t){200===t.code&&(e.selectSys=t.result)})},computed:{cptPagination:function(){return this.page.total>=10}},methods:{onAdd:function(){this.handleType="ADD",this.ruleForm=JSON.parse(n()(this.defaultRuleForm)),this.onReset("ruleForm"),this.kyeDialog.title="新增审批流程",this.isShowDialog(!0)},isShowDialog:function(e){this.kyeDialog.hasDialog=e},getSearchData:function(){var e=this;this.$API.getConfigurationApprovalList(this.filterCondition).then(function(t){200===t.code&&(e.approvalData=t.result.data,e.page.total=t.result.pagination.total_count)})},handleSizeChange:function(e){e&&(this.filterCondition.per_page=e),this.page.current=this.filterCondition.page=1,this.getSearchData()},handleCurrentPageChange:function(e){this.filterCondition.page=e,this.getSearchData()},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;switch(t.handleType){case"ADD":t.addConfig(t.ruleForm);break;case"EDIT":t.editConfig(t.ruleForm);break;default:console.log(t.handleType,"=====")}})},onAddStep:function(e){if(!(this.ruleForm.approval_flow.length>=5||this.ruleForm.approval_flow.length>e+1)){var t=e+2;this.ruleForm.approval_flow.push({level:t,approval_type:void 0,approval_user_name:"",approval_user_id:void 0,approval_role_id:void 0,approval_role_name:""})}},onDelStep:function(e){this.ruleForm.approval_flow.splice(e,1)},onEdit:function(e){var t=this;this.handleType="EDIT",this.$API.getConfigurationApprovalId({id:e.id}).then(function(e){200===e.code&&(t.ruleForm=e.result,t.kyeDialog.title="修改审批流程",t.isShowDialog(!0))})},onReset:function(e){if(!this.$refs[e])return!1;this.$refs[e].resetFields()},filterKey:function(e,t){var a=this;return e.map(function(e){return a.$utils.checkStep(e[[t]])})},querySearchAsyncUser:function(e,t){var a=this;this.$API.getUserList().then(function(r){var i=r.result.data,l=e?i.filter(a.createStateFilter(e)):i;t(l)})},querySearchAsyncRole:function(e,t){var a=this,r=s()(this.$store.state.roleTypes)[5];this.$API.getRoleList({type:r}).then(function(r){var i=r.result.data,l=e?i.filter(a.createStateFilter(e)):i;t(l)})},createStateFilter:function(e){return function(t){return 0===t.name.toLowerCase().indexOf(e.toLowerCase())}},handleSelect:function(e,t,a){3===a?this.ruleForm.approval_flow[t].approval_role_id=e.id:this.ruleForm.approval_flow[t].approval_user_id=e.id},handleChange:function(e,t){},onDelete:function(e){var t=this;return this.$API.delConfigurationApprovalId(e).then(function(e){return 200===e.code?(t.getSearchData(),i.a.resolve(!0)):i.a.resolve(!1)})},addConfig:function(e){var t=this;this.$API.postConfigurationApproval(e).then(function(e){200===e.code&&(t.getSearchData(),t.isShowDialog(!1),t.$message({message:"操作成功",type:"success"}))})},editConfig:function(e){var t=this;console.log("========",e),this.$API.putConfigurationApprovalId(e.id,e).then(function(e){200===e.code&&(t.getSearchData(),t.isShowDialog(!1),t.$message({message:"操作成功",type:"success"}))})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-box"},[a("top-header",{attrs:{title:"外部用户登录方式配置"}},[a("div",{staticClass:"el-icon-plus",on:{click:e.onAdd}},[e._v("新增")])]),e._v(" "),a("div",{staticClass:"page-container"},[a("div",{staticClass:"table-filters"},[a("div",{staticClass:"filter-item"},[a("p",{staticClass:"item"},[e._v("外部用户名称")]),e._v(" "),a("el-input",{attrs:{clearable:"",size:"small",placeholder:"请输入"},model:{value:e.filterCondition.content,callback:function(t){e.$set(e.filterCondition,"content",t)},expression:"filterCondition.content"}})],1),e._v(" "),a("div",{staticClass:"filter-item"},[a("p",{staticClass:"item"},[e._v("所属部门")]),e._v(" "),a("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.filterCondition.associated_system_id,callback:function(t){e.$set(e.filterCondition,"associated_system_id",t)},expression:"filterCondition.associated_system_id"}},e._l([{name:"不限",id:""}].concat(e.selectSys),function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),a("div",{staticClass:"search-btn"},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:function(t){e.handleSizeChange()}}},[e._v("查询")])],1)]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.approvalData,size:"mini"}},[a("el-table-column",{attrs:{label:"序号",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s((e.page.current-1)*e.page.size+t.$index+1)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"associated_system_name",label:"外部用户名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"associated_system_name",label:"用户数量"}}),e._v(" "),a("el-table-column",{attrs:{prop:"associated_system_name",label:"所属部门"}}),e._v(" "),a("el-table-column",{attrs:{prop:"associated_system_name",label:"登录系统"}}),e._v(" "),a("el-table-column",{attrs:{prop:"associated_system_name",label:"登录方式"}}),e._v(" "),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"90"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){e.onEdit(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"text"}},[a("kye-confirm",{attrs:{label:"删除",title:"删除审批流程配置",content:"确定要删除"+t.row.associated_system_name+"系统审批流程配置？",callback:e.onDelete,"scope-data":t.row}})],1)]}}])})],1),e._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.cptPagination,expression:"cptPagination"}],attrs:{background:"","page-sizes":e.page.sizes,layout:"sizes,prev,pager,next","current-page":e.page.current,total:e.page.total,"prev-text":"上一页","next-text":"下一页"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentPageChange,"update:currentPage":function(t){e.$set(e.page,"current",t)}}})],1),e._v(" "),a("kye-dialog",{attrs:{width:"450px",hasDialog:e.kyeDialog.hasDialog,title:e.kyeDialog.title},on:{"is-show-dialog":e.isShowDialog,reset:function(t){e.onReset("ruleForm")}}},[a("div",{attrs:{slot:"body"},slot:"body"},[a("el-form",{ref:"ruleForm",attrs:{inline:!0,model:e.ruleForm,rules:e.rules}},[a("div",{staticClass:"dialog-tabel-item"},[a("el-form-item",{attrs:{prop:"associated_system_id"}},[a("p",[e._v("所属系统")]),e._v(" "),a("el-input",{attrs:{clearable:"",size:"small",placeholder:"请输入备注"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"remark"}},[a("p",[e._v("所属部门")]),e._v(" "),a("el-input",{attrs:{clearable:"",size:"small",placeholder:"请输入备注"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-tabel-item"},[a("el-form-item",{attrs:{prop:"remark"}},[a("p",[e._v("登录系统")]),e._v(" "),a("el-input",{attrs:{clearable:"",size:"small",placeholder:"请输入备注"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"checked"}},[a("p",[e._v("默认登录方式")]),e._v(" "),a("el-select",{attrs:{size:"small",placeholder:"请选择"},model:{value:e.ruleForm.checked,callback:function(t){e.$set(e.ruleForm,"checked",t)},expression:"ruleForm.checked"}},e._l({2:{name:"手机验证码登录"}},function(e,t){return a("el-option",{key:t,attrs:{value:t+1,label:e.name}})}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-tabel-item"},[a("p",[e._v("备注")]),e._v(" "),a("el-form-item",{staticClass:"disblock",attrs:{size:"small",name:"remark"}},[a("el-input",{staticStyle:{display:"block"},attrs:{type:"textarea",autosize:{minRows:1,maxRows:3},placeholder:"请输入系统备注"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1)],1)])],1),e._v(" "),a("div",{attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.kyeDialog.hasDialog=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("保存")])],1)])],1)},staticRenderFns:[]};var p=a("vSla")(c,u,!1,function(e){a("M2gt")},"data-v-c2144034",null);t.default=p.exports},M2gt:function(e,t){}});
//# sourceMappingURL=6.0fc37e4c497629e27758.js.map