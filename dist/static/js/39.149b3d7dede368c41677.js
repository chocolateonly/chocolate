webpackJsonp([39],{"2l/l":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Xxa5"),n=a.n(s),i=a("exGp"),o=a.n(i),r=a("gyMJ"),l={data:function(){return{total:0,pageNum:1,pageSize:15,isLoading:!1,tableHeight:window.innerHeight-180,school_type:"",regionData:[],mobileVal:"",regionVal:"",grade_auth:!1,tableHead:[{title:"手机号",prop:"user_name"},{title:"绑定学生姓名",prop:"real_name"},{title:"绑定学生身份证",prop:"idcard"},{title:"绑定时间",prop:"create_time"},{title:"解绑时间",prop:"unbind_time"}],schoolList:[],tableData:[],method_auth:{unbindUser:0,deleteChild:0,getRegion:0},status_auth:{kindergarten_status:0,junior_middle_school_status:0,primary_school_status:0}}},mounted:function(){this.getRegionList(),this.resView()},methods:{handleSizeChange:function(e){this.pageNum=1,this.pageSize=e,this.getListData()},handleCurrentChange:function(e){this.pageNum=e,this.getListData()},phoneOpen:function(e){var t,a=this;this.$prompt("<div>学生姓名："+e.real_name+"</div><div>身份证号："+e.idcard+"</div><div>新绑定手机号：</div>","更换手机号",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^[1][3,4,5,7,8,9][0-9]{9}$/,inputPlaceholder:"请输入新绑定手机号",inputErrorMessage:"手机号格式不正确",dangerouslyUseHTMLString:!0}).then((t=o()(n.a.mark(function t(s){var i,o,l,c=s.value;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i={child_id:e.child_id,user_id:e.user_id,user_name:c,type:e.type},t.next=3,a.axios.post(r._147,i);case 3:o=t.sent,1==(l=o.data).code?(a.$message({showClose:!0,message:"更新成功",type:"success"}),a.getListData()):a.$message({showClose:!0,message:l.msg,type:"error"});case 6:case"end":return t.stop()}},t,a)})),function(e){return t.apply(this,arguments)})).catch(function(){})},searchClick:function(){this.tableData=[],this.pageSize=15,this.pageNum=1,this.getListData()},resView:function(){var e=this;return o()(n.a.mark(function t(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.axios.post(setCompatriotsViewApi);case 2:1==(a=t.sent).data.code&&(e.schoolList=a.data.data.type_list,e.schoolList.forEach(function(t){e.schoolList.length>0&&(e.school_type="1",1==e.schoolList.length&&"1"==t.id?e.school_type="1":1==e.schoolList.length&&"3"==t.id&&(e.school_type="3"))}),e.getListData());case 4:case"end":return t.stop()}},t,e)}))()},getRegionList:function(){var e=this;return o()(n.a.mark(function t(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.axios.post(r._64);case 2:1==(a=t.sent).data.code?e.regionData=a.data.data:e.$message({showClose:!0,message:a.data.msg,type:"error"});case 4:case"end":return t.stop()}},t,e)}))()},getListData:function(){var e=this;return o()(n.a.mark(function t(){var a,s,i;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,a={curr:e.pageNum,pagesize:e.pageSize,region_id:e.regionVal,keyword:e.mobileVal,type:e.school_type},t.next=4,e.axios.post(r._150,a);case 4:s=t.sent,1==(i=s.data).code?(e.tableData=i.data.data,e.total=i.data.total,e.isLoading=!1,i.data.resources.method_auth.map(function(t){t.method_name&&(e.method_auth[t.method_name]=t.exist)}),e.resources=i.data.resources,e.resources.grade_auth&&1==e.resources.grade_auth.grade_status&&(e.grade_auth=!0)):(e.isLoading=!1,e.$message({showClose:!0,message:i.msg,type:"error"}));case 7:case"end":return t.stop()}},t,e)}))()},delBtn:function(e){var t=this;this.$confirm("是否删除该条数据?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(o()(n.a.mark(function a(){var s,i,o;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return s={child_id:e.child_id,type:e.type},a.next=3,t.axios.post(r._151,s);case 3:i=a.sent,1==(o=i.data).code?((t.total-1)%t.pageSize==0&&(t.pageNum=t.pageNum-1),t.getListData(),t.$message({showClose:!0,message:"删除成功",type:"success"})):t.$message({showClose:!0,message:o.msg,type:"error"});case 6:case"end":return a.stop()}},a,t)}))).catch(function(){t.$message({type:"info",message:"已取消删除"})})}}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"userList"},[a("div",{staticClass:"searchA"},[e.grade_auth?a("el-select",{attrs:{placeholder:"选择区县",size:"small",clearable:""},model:{value:e.regionVal,callback:function(t){e.regionVal=t},expression:"regionVal"}},e._l(e.regionData,function(e){return a("el-option",{key:e.id,attrs:{label:e.region_name,value:e.id}})}),1):e._e(),e._v(" "),a("el-select",{attrs:{placeholder:"选择学校类型",size:"small"},model:{value:e.school_type,callback:function(t){e.school_type=t},expression:"school_type"}},e._l(e.schoolList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1),e._v(" "),a("el-input",{attrs:{placeholder:"请输入手机号/身份证号搜索",size:"small",clearable:""},model:{value:e.mobileVal,callback:function(t){e.mobileVal=t},expression:"mobileVal"}}),e._v(" "),a("el-button",{attrs:{size:"small",type:"primary",plain:"",icon:"el-icon-search"},on:{click:e.searchClick}},[e._v("查询")])],1),e._v(" "),a("div",{staticClass:"home_table"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","element-loading-background":"rgba(0, 0, 0, 0.4)",size:"medium","max-height":e.tableHeight}},[e.grade_auth?a("el-table-column",{attrs:{prop:"region_name",label:"区县",width:"100"}}):e._e(),e._v(" "),e._l(e.tableHead,function(e,t){return[a("el-table-column",{key:t,attrs:{prop:e.prop,label:e.title,"show-overflow-tooltip":!0,"min-width":e.minwidth}})]}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"操作",fixed:"right",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.method_auth.unbindUser?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.phoneOpen(t.row)}}},[e._v("修改手机号")]):e._e(),e._v(" "),e.method_auth.deleteChild?a("el-button",{staticStyle:{color:"#ff2b2b"},attrs:{type:"text",size:"small"},on:{click:function(a){return e.delBtn(t.row)}}},[e._v("删除")]):e._e()]}}])})],2),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":e.pageNum,"page-sizes":[15,30,50,100],"page-size":e.pageSize,layout:"prev, pager, next, sizes,total",total:e.total,"hide-on-single-page":e.total<15},on:{"update:currentPage":function(t){e.pageNum=t},"update:current-page":function(t){e.pageNum=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])])},staticRenderFns:[]};var u=a("VU/8")(l,c,!1,function(e){a("E6Lk")},"data-v-32b47546",null);t.default=u.exports},E6Lk:function(e,t){}});
//# sourceMappingURL=39.149b3d7dede368c41677.js.map