webpackJsonp([33],{"4kaK":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Xxa5"),s=a.n(i),r=a("exGp"),n=a.n(r),o=a("gyMJ"),l={data:function(){return{total:0,page:1,pageSize:15,tableHeight:window.innerHeight-180,dialogVisible:!1,title:"",search:{warnType:"",positionId:""},formData:{video:{},image:{}},equipment:[],tableHead:[{title:"序号",prop:"id",minWidth:"120"},{title:"预警来源",prop:"device_name",minWidth:"150"},{title:"预警位置",prop:"position_name",minWidth:"220"},{title:"时间",prop:"create_time",minWidth:"180"},{title:"事件",prop:"warn_type_txt",minWidth:"200"},{title:"预警处理人",prop:"user_name",minWidth:"180"},{title:"处理时间",prop:"update_time",minWidth:"200"},{title:"预警情况",prop:"case_type_txt",minWidth:"100"},{title:"处理结果",prop:"status_txt",minWidth:"100"}],tableData:[],positionData:[],warnTypeData:[],baseUrl:""}},mounted:function(){this.baseUrl="http://xwcs.xyruxue.com/",this.getList(),this.resView()},methods:{serchList:function(){this.page=1,this.pageSize=15,this.getList()},handleSizeChange:function(t){this.page=1,this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.page=t,this.getList()},getList:function(){var t=this;return n()(s.a.mark(function e(){var a,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={page:t.page,pageSize:t.pageSize,positionId:t.search.positionId,warnType:t.search.warnType},e.next=3,t.axios.post(o._2,a);case 3:1==(i=e.sent).data.code?(t.tableData=i.data.data.list.data,t.total=i.data.data.list.total):t.$message({showClose:!0,message:i.data.msg,type:"error"});case 5:case"end":return e.stop()}},e,t)}))()},resView:function(){var t=this;return n()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.axios.post(o._3);case 2:1==(a=e.sent).data.code?(t.positionData=a.data.data.positionData,t.warnTypeData=a.data.data.warnTypeData):t.$message({showClose:!0,message:a.data.msg,type:"error"});case 4:case"end":return e.stop()}},e,t)}))()},check:function(t){this.dialogVisible=!0,this.getInfo(t.id)},getInfo:function(t){var e=this;return n()(s.a.mark(function a(){var i;return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.axios.post(o._1,{id:t});case 2:1==(i=a.sent).data.code?e.formData=i.data.data.info:e.$message({showClose:!0,message:i.data.msg,type:"error"});case 4:case"end":return a.stop()}},a,e)}))()},videoClick:function(t){window.open(t,"_blank")}}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"earlyWarning"},[a("div",{staticClass:"search"},[a("el-cascader",{attrs:{filterable:"",size:"small",options:t.positionData,props:{checkStrictly:!0,value:"id",label:"title",emitPath:!1},clearable:""},model:{value:t.search.positionId,callback:function(e){t.$set(t.search,"positionId",e)},expression:"search.positionId"}}),t._v(" "),a("el-select",{attrs:{clearable:"",size:"small",placeholder:"请选择事件"},model:{value:t.search.warnType,callback:function(e){t.$set(t.search,"warnType",e)},expression:"search.warnType"}},t._l(t.warnTypeData,function(t){return a("el-option",{key:t.dictionary_value,attrs:{label:t.dictionary_name,value:t.dictionary_value}})}),1),t._v(" "),a("el-button",{attrs:{size:"small",type:"primary",plain:"",icon:"el-icon-search"},on:{click:function(e){return t.serchList()}}},[t._v("查询")])],1),t._v(" "),a("div",{staticClass:"home_table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","element-loading-background":"rgba(0, 0, 0, 0.4)","max-height":t.tableHeight,size:"medium"}},[t._l(t.tableHead,function(e,i){return["update_time"==e.prop?a("el-table-column",{key:i,attrs:{prop:e.prop,align:"center",label:e.title,"min-width":e.minWidth,"show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                        "+t._s(1==e.row.status?e.row.update_time:"")+"\n                    ")]}}],null,!0)}):a("el-table-column",{key:i,attrs:{prop:e.prop,align:"center",label:e.title,"min-width":e.minWidth,"show-overflow-tooltip":!0}})]}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作",fixed:"right",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.check(e.row)}}},[t._v("查看")])]}}])})],2)],1),t._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":t.page,"page-sizes":[15,30,50,100],"page-size":t.pageSize,layout:"prev, pager, next, sizes,total",total:t.total,"hide-on-single-page":t.total<15},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],attrs:{title:"查看预警",visible:t.dialogVisible,width:"700px","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-descriptions",{attrs:{column:1}},[a("el-descriptions-item",{attrs:{label:"预警来源"}},[t._v(t._s(t.formData.device_name))]),t._v(" "),a("el-descriptions-item",{attrs:{label:"预警位置"}},[t._v(t._s(t.formData.position_name))]),t._v(" "),a("el-descriptions-item",{attrs:{label:"时间"}},[t._v(t._s(t.formData.create_time))]),t._v(" "),a("el-descriptions-item",{attrs:{label:"事件"}},[t._v(t._s(t.formData.warn_type_txt))]),t._v(" "),a("el-descriptions-item",{attrs:{label:"预警处理人"}},[t._v(t._s(t.formData.user_name))]),t._v(" "),a("el-descriptions-item",{attrs:{label:"处理时间"}},[t._v(t._s(1==t.formData.status?t.formData.update_time:""))]),t._v(" "),a("el-descriptions-item",{attrs:{label:"预警文件"}},[t.formData.image_url?a("el-image",{staticStyle:{width:"100px",height:"100px","margin-right":"5px"},attrs:{src:t.formData.image_url,"preview-src-list":[t.formData.image_url]}}):t._e()],1),t._v(" "),a("el-descriptions-item",{attrs:{label:"预警情况"}},[t._v(t._s(t.formData.case_type_txt))]),t._v(" "),a("el-descriptions-item",{attrs:{label:"预警汇报"}},[t._v(t._s(t.formData.remark))])],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")(l,c,!1,function(t){a("4x2M")},"data-v-44c5456a",null);e.default=p.exports},"4x2M":function(t,e){}});
//# sourceMappingURL=33.620e301a362315de114b.js.map