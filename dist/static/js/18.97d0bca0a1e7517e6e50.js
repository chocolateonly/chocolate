webpackJsonp([18],{"/CM7":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t("Xxa5"),r=t.n(s),i=t("exGp"),n=t.n(i),o=t("bOdI"),l=t.n(o),d=t("gyMJ"),c={data:function(){var a;return a={formData:{user_name:"",real_name:"",password:"",mobile:"",main_account:!1,disabled:!0},main_account:!1,disabled:!0,listId:"",total:0,curr:1,hash:"",operation:!1},l()(a,"operation",!1),l()(a,"pageSize",15),l()(a,"options1",[]),l()(a,"method_auth",{actAdd:0,actEdit:0,actDelete:0,setState:0}),l()(a,"main_auth",0),l()(a,"dialogPhoneVal",""),l()(a,"dialogNameVal",""),l()(a,"dialogpasswordVal",""),l()(a,"title",""),l()(a,"isLoading",!1),l()(a,"dialogVisible",!1),l()(a,"switchVal",!0),l()(a,"department_id",""),l()(a,"rule",{user_name:[{required:!0,message:"请输入登录手机号码",trigger:"blur"},{required:!0,pattern:/^1\d{10}$/,message:"手机号格式错误",trigger:"blur"}],real_name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 20 个字符",trigger:"blur"},{required:!0,pattern:/^[\u4e00-\u9fa5_a-zA-Z.·-]+$/,message:"姓名不支持特殊字符",trigger:"blur"}],password:[{min:8,message:"密码必须大于8位",trigger:"blur"}],selectVal1:[{required:!0,message:"请选中活动区域",trigger:"blur"}]}),l()(a,"tableHead",[{title:"编号",prop:"id"},{title:"用户名",prop:"user_name"},{title:"名称",prop:"real_name"},{title:"手机号",prop:"mobile"},{title:"状态",prop:"disabled"}]),l()(a,"tableData",[]),l()(a,"nodeData",[]),l()(a,"infoData",[]),l()(a,"hasNodes",[]),l()(a,"defaultProps",{children:"children",label:"node_name",disabled:"defaulted"}),a},mounted:function(){this.getList(),this.getHash()},methods:{handleSizeChange:function(a){this.curr=1,this.pageSize=a,this.getList()},handleCurrentChange:function(a){this.curr=a,this.getList()},submitForm:function(a){var e,t=this;this.$refs[a].validate((e=n()(r.a.mark(function a(e){var s,i,n;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!e){a.next=11;break}return 1==t.formData.disabled?t.disabled=0:t.disabled=1,s={user_name:t.formData.user_name,password:t.formData.password,mobile:t.formData.mobile,real_name:t.formData.real_name,node_ids:t.$refs.tree.getCheckedKeys().concat(t.$refs.tree.getHalfCheckedKeys()).join(","),disabled:t.disabled,hash:t.hash},"新增"==t.title?i=d._115:"编辑"==t.title&&(i=d._117,s.id=t.listId),a.next=6,t.axios.post(i,s);case 6:1==(n=a.sent).data.code?(t.dialogVisible=!1,t.getList()):t.$message({showClose:!0,message:n.data.msg,type:"error"}),t.getHash(),a.next=13;break;case 11:return console.log("error submit!!"),a.abrupt("return",!1);case 13:case"end":return a.stop()}},a,t)})),function(a){return e.apply(this,arguments)}))},delBtn:function(a){var e=this;return n()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$confirm("是否删除该条数据?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(n()(r.a.mark(function t(){var s,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s={id:a,deleted:1},t.next=3,e.axios.post(d._116,s);case 3:1==(i=t.sent).data.code?((e.total-1)%e.pageSize==0&&(e.curr=e.curr-1),e.$nextTick(function(){e.getList()})):e.$message({showClose:!0,message:i.data.msg,type:"error"}),e.getHash();case 6:case"end":return t.stop()}},t,e)}))).catch(function(){e.$message({type:"info",message:"已取消删除"})});case 1:case"end":return t.stop()}},t,e)}))()},addBtn:function(){var a=this;this.title="新增",this.dialogVisible=!0,this.$nextTick(function(){a.resetForm(),a.$refs.formData.clearValidate()}),this.getNodeData(),this.getHash()},resetForm:function(){this.formData={user_name:"",real_name:"",password:"",mobile:"",main_account:!1,disabled:!0},this.nodeData=[]},editBtn:function(a){var e=this;this.title="编辑",this.dialogVisible=!0,this.$nextTick(function(){e.resetForm(),e.$refs.formData.clearValidate()}),this.getInfoData(a.id),this.getHash()},switchChange:function(a,e,t,s){var i=this;return n()(r.a.mark(function n(){var o,l,c;return r.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o=d._120,l={id:a,state:1==t?0:1},r.next=5,i.axios.post(o,l);case 5:1==(c=r.sent).data.code||(i.tableData[s][e]=!t,i.$message({showClose:!0,message:c.data.msg,type:"error"}));case 7:case"end":return r.stop()}},n,i)}))()},handleClose:function(){this.dialogVisible=!1},getHash:function(){var a=this;return n()(r.a.mark(function e(){var t,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={page_hash:"schoolManage"},e.next=3,a.axios.post(d._20,t);case 3:1==(s=e.sent).data.code?a.hash=s.data.data:a.$message({showClose:!0,message:s.data.msg,type:"error"});case 5:case"end":return e.stop()}},e,a)}))()},getNodeData:function(a){var e=this;return n()(r.a.mark(function t(){var s,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.nodeData=[],t.next=3,e.axios.post(d._121);case 3:1==(s=t.sent).data.code?(e.nodeData=s.data.data,a&&"编辑"==e.title?e.$nextTick(function(){var e=this;this.$refs.tree.setCheckedKeys([]),a.forEach(function(a){var t=e.$refs.tree.getNode(a);t&&t.isLeaf&&e.$refs.tree.setChecked(t,!0)})}):(i=[],e.nodeData.forEach(function(a){i.push(a.id),a.children&&a.children.forEach(function(a){i.push(a.id)})}),e.$nextTick(function(){this.$refs.tree.setCheckedKeys(i)}))):e.$message({showClose:!0,message:s.data.msg,type:"error"});case 5:case"end":return t.stop()}},t,e)}))()},getInfoData:function(a){var e=this;return n()(r.a.mark(function t(){var s,i;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.infoData=[],s={id:a},t.next=4,e.axios.post(d._118,s);case 4:1==(i=t.sent).data.code?(e.infoData=i.data.data,e.hasNodes=i.data.data.nodes,e.getNodeData(e.hasNodes),e.operation=i.data.data.operation,e.listId=i.data.data.id,e.formData.user_name=i.data.data.user_name,e.formData.real_name=i.data.data.real_name,e.formData.mobile=i.data.data.mobile,1==i.data.data.disabled?e.formData.disabled=!1:e.formData.disabled=!0,1==i.data.data.main_account?e.formData.main_account=!0:e.formData.main_account=!1,e.formData.password=""):e.$message({showClose:!0,message:i.data.msg,type:"error"});case 6:case"end":return t.stop()}},t,e)}))()},getList:function(){var a=this;return n()(r.a.mark(function e(){var t,s,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.isLoading=!0,e.next=3,a.axios.post(d._119,{curr:a.curr,pagesize:a.pageSize});case 3:1==(t=e.sent).data.code?(a.tableData=t.data.data.data,a.total=t.data.data.total,s=t.data.data.resources.method_auth,i=a.method_auth,a.main_auth=t.data.data.resources.main_auth.main_account,s.map(function(a){a.method_name&&(i[a.method_name]=a.exist)}),a.method_auth=i,a.isLoading=!1):(a.isLoading=!1,a.$message({showClose:!0,message:t.data.msg,type:"error"}));case 5:case"end":return e.stop()}},e,a)}))()}}},u={render:function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"main"},[t("div",{staticClass:"districtAccount"},[t("div",{staticClass:"searchA"},[t("div",{staticClass:"add"},[t("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-plus",disabled:!a.method_auth.actAdd},on:{click:function(e){return a.addBtn()}}},[a._v("新增")])],1)]),a._v(" "),t("div",{staticClass:"home_table"},[t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:a.isLoading,expression:"isLoading"}],staticStyle:{width:"100%"},attrs:{data:a.tableData,border:"",size:"medium","element-loading-background":"rgba(0, 0, 0, 0.4)"}},[a._l(a.tableHead,function(e,s){return["状态"==e.title?t("el-table-column",{key:s,attrs:{prop:e.prop,label:e.title},scopedSlots:a._u([{key:"default",fn:function(s){return[t("el-switch",{attrs:{disabled:!a.method_auth.setState&&!a.main_auth&&a.tableData[s.$index][e.prop]||s.row.operation},on:{change:function(t){return a.switchChange(s.row.id,e.prop,a.tableData[s.$index][e.prop],s.$index)}},model:{value:a.tableData[s.$index][e.prop],callback:function(t){a.$set(a.tableData[s.$index],e.prop,t)},expression:"tableData[scope.$index][item.prop]"}})]}}],null,!0)}):t("el-table-column",{key:s,attrs:{prop:e.prop,label:e.title}})]}),a._v(" "),t("el-table-column",{attrs:{prop:"address",label:"操作",fixed:"right"},scopedSlots:a._u([{key:"default",fn:function(e){return[t("el-button",{attrs:{disabled:!a.method_auth.actEdit,type:"text",size:"small"},on:{click:function(t){return a.editBtn(e.row)}}},[a._v("编辑")]),a._v(" "),t("el-button",{staticStyle:{color:"#ff2b2b"},attrs:{disabled:!a.method_auth.actDelete,type:"text",size:"small"},on:{click:function(t){return a.delBtn(e.row.id)}}},[a._v("删除")])]}}])})],2)],1),a._v(" "),t("div",{staticClass:"pagination"},[t("el-pagination",{staticClass:"pagination",attrs:{background:"","current-page":a.curr,"page-sizes":[15,30,50,100],"page-size":a.pageSize,layout:"total, sizes, prev, pager, next",total:a.total,"hide-on-single-page":a.total<15},on:{"update:currentPage":function(e){a.curr=e},"update:current-page":function(e){a.curr=e},"size-change":a.handleSizeChange,"current-change":a.handleCurrentChange}})],1),a._v(" "),t("el-dialog",{directives:[{name:"dialogDrag",rawName:"v-dialogDrag"}],staticClass:"dialogStyle",attrs:{title:a.title,visible:a.dialogVisible,width:"600px","close-on-click-modal":!1},on:{"update:visible":function(e){a.dialogVisible=e},close:function(e){return a.handleClose("formData")}}},[t("div",[t("el-form",{ref:"formData",staticClass:"demo-ruleForm",attrs:{model:a.formData,rules:a.rule}},[t("div",{staticClass:"dialogInput",staticStyle:{display:"flex"}},[t("div",{staticClass:"padd",staticStyle:{"margin-right":"10px"}},[t("el-form-item",{attrs:{label:"登录账号",prop:"user_name"}},[t("el-input",{attrs:{placeholder:"请输入登录手机号码",clearable:"",size:"small",maxlength:"11"},model:{value:a.formData.user_name,callback:function(e){a.$set(a.formData,"user_name",e)},expression:"formData.user_name"}})],1)],1),a._v(" "),t("div",{staticClass:"padd"},[t("el-form-item",{attrs:{label:"姓名",prop:"real_name"}},[t("el-input",{attrs:{placeholder:"请输入姓名",clearable:"",size:"small"},model:{value:a.formData.real_name,callback:function(e){a.$set(a.formData,"real_name",e)},expression:"formData.real_name"}})],1)],1)]),a._v(" "),t("div",{staticClass:"dialogInput",staticStyle:{display:"flex"}},[t("div",{staticClass:"padd",staticStyle:{"margin-right":"10px"}},[t("el-form-item",{attrs:{label:"手机号"}},[t("el-input",{attrs:{placeholder:"微信/i襄阳注册手机号",clearable:"",size:"small"},model:{value:a.formData.mobile,callback:function(e){a.$set(a.formData,"mobile",e)},expression:"formData.mobile"}})],1)],1),a._v(" "),t("div",{staticClass:"padd"},[t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码",clearable:"",size:"small"},model:{value:a.formData.password,callback:function(e){a.$set(a.formData,"password",e)},expression:"formData.password"}})],1)],1)]),a._v(" "),t("div",{staticClass:"dialogInput",staticStyle:{display:"flex"}},[t("div",{staticClass:"padd",staticStyle:{"margin-right":"10px"}},[t("el-form-item",{attrs:{prop:"disabled",label:"状态"}},[t("el-switch",{attrs:{disabled:!a.method_auth.setState&&!a.main_auth&&a.formData.main_account||this.operation},model:{value:a.formData.disabled,callback:function(e){a.$set(a.formData,"disabled",e)},expression:"formData.disabled"}})],1)],1)]),a._v(" "),t("div",{staticClass:"dialogInput"},[t("div",{staticClass:"padd"},[t("div",{staticClass:"paddTit"},[a._v("功能节点")]),a._v(" "),t("div",{staticClass:"tree_main"},[t("el-form-item",[t("el-tree",{ref:"tree",attrs:{data:a.nodeData,"show-checkbox":"","node-key":"id","default-expand-all":"",props:a.defaultProps}})],1)],1)])]),a._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(e){return a.submitForm("formData")}}},[a._v("确 定")])],1)])],1)])],1)])},staticRenderFns:[]};var m=t("VU/8")(c,u,!1,function(a){t("5vP1"),t("W8HH")},"data-v-3880a80b",null);e.default=m.exports},"5vP1":function(a,e){},W8HH:function(a,e){}});
//# sourceMappingURL=18.97d0bca0a1e7517e6e50.js.map