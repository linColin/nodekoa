webpackJsonp([12],{CLG5:function(e,t){},o45Q:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("4YfN"),s=a.n(i),l=a("gyMJ"),n={components:{},data:function(){return{page:{total:0,size:10,current:1,sizes:[10,50,100,200]},checkDate:"",filterCondition:{user_name:"",employee_code:"",role_name:""},tableData:[]}},methods:{requestStatisticsList:function(){var e=this;null==this.checkDate&&(this.checkDate="");var t=s()({},this.filterCondition,{start_time:this.checkDate[0],end_time:this.checkDate[1],page:this.page.current,per_page:this.page.size});l.a.getStatisticsPermission(t).then(function(t){if(console.log(t),200===t.code){var a=t.result||{};e.page.total=a.pagination?a.pagination.total_count:0,e.tableData=a.data||[]}else e.$message.error(t.message)})},handleSizeChange:function(e){this.page.size=e,this.requestStatisticsList()},handleCurrentChange:function(e){this.page.current=e,this.requestStatisticsList()}},beforeMount:function(){this.requestStatisticsList()}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"page-container"},[a("div",{staticClass:"table-filters"},[a("div",{staticClass:"filter-item"},[a("p",{staticClass:"item"},[e._v("时间")]),e._v(" "),a("el-date-picker",{attrs:{size:"small",type:"datetimerange",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.checkDate,callback:function(t){e.checkDate=t},expression:"checkDate"}})],1),e._v(" "),a("div",{staticClass:"filter-item"},[a("p",{staticClass:"item"},[e._v("工号")]),e._v(" "),a("el-input",{attrs:{size:"small",placeholder:"请输入"},model:{value:e.filterCondition.employee_code,callback:function(t){e.$set(e.filterCondition,"employee_code",t)},expression:"filterCondition.employee_code"}})],1),e._v(" "),a("div",{staticClass:"filter-item"},[a("p",{staticClass:"item"},[e._v("姓名")]),e._v(" "),a("el-input",{attrs:{size:"small",placeholder:"请输入"},model:{value:e.filterCondition.user_name,callback:function(t){e.$set(e.filterCondition,"user_name",t)},expression:"filterCondition.user_name"}})],1),e._v(" "),a("div",{staticClass:"filter-item"},[a("p",{staticClass:"item"},[e._v("角色名称")]),e._v(" "),a("el-input",{attrs:{size:"small",placeholder:"请输入"},model:{value:e.filterCondition.role_name,callback:function(t){e.$set(e.filterCondition,"role_name",t)},expression:"filterCondition.role_name"}})],1),e._v(" "),a("div",{staticClass:"search-btn"},[a("el-button",{attrs:{type:"primary",size:"small",icon:"el-icon-search"},on:{click:e.requestStatisticsList}},[e._v("查询\n        ")])],1)]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,size:"mini"}},[a("el-table-column",{attrs:{fixed:"",prop:"id",type:"index",label:"序号",width:"60"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user_name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"employee_code",label:"工号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"department_name",label:"部门"}}),e._v(" "),a("el-table-column",{attrs:{prop:"op_type",label:"操作类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{style:{color:"#FFAA00"}},[e._v("\n            "+e._s(e.$utils.checkOPType(t.row.op_type))+"\n          ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"role_name",label:"角色名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"role_department_name",label:"角色所属部门"}}),e._v(" "),a("el-table-column",{attrs:{prop:"created_at",label:"时间",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e._f("datetime")(t.row.created_at))+"\n        ")]}}])})],1),e._v(" "),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.page.total>0,expression:"page.total > 0"}],attrs:{background:"","page-sizes":e.page.sizes,layout:"sizes,prev,pager,next","current-page":e.page.current,total:e.page.total,"prev-text":"上一页","next-text":"下一页"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.page,"current",t)}}})],1)])},staticRenderFns:[]};var o=a("vSla")(n,r,!1,function(e){a("CLG5")},"data-v-5639609f",null);t.default=o.exports}});
//# sourceMappingURL=12.7db6ff575b1cbe04fd55.js.map