(this["webpackJsonpseahub-frontend"]=this["webpackJsonpseahub-frontend"]||[]).push([[14],{1805:function(e,t,r){r(73),e.exports=r(1835)},1806:function(e,t,r){},1835:function(e,t,r){"use strict";r.r(t);var n=r(3),s=r(4),a=r(35),c=r(6),o=r(7),i=r(2),l=r.n(i),d=r(33),h=r.n(d),b=r(24),j=r(12),u=r.n(j),O=r(5),m=r(1),p=r(8),f=r(21),g=r(29),x=r(10),v=r(72),D=r(112),w=r(100),M=r(101),S=r(135),k=r(315),F=r(0),C=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).handleInputChange=function(e){s.setState({inputValue:e})},s.formSubmit=function(){var e=s.state.inputValue,t=s.props.repoID;s.setState({submitBtnDisabled:!0}),p.a.deleteRepoTrash(t,e.value).then((function(e){x.a.success(Object(m.ub)("Clean succeeded.")),s.props.refreshTrash(),s.props.toggleDialog()})).catch((function(e){var t=O.a.getErrorMsg(e);s.setState({formErrorMsg:t,submitBtnDisabled:!1})}))},s.options=[{label:Object(m.ub)("3 days ago"),value:3},{label:Object(m.ub)("1 week ago"),value:7},{label:Object(m.ub)("1 month ago"),value:30},{label:Object(m.ub)("all"),value:0}],s.state={inputValue:s.options[0],submitBtnDisabled:!1},s}return Object(s.a)(r,[{key:"render",value:function(){var e=this.state.formErrorMsg;return Object(F.jsxs)(D.a,{isOpen:!0,centered:!0,toggle:this.props.toggleDialog,children:[Object(F.jsx)(w.a,{toggle:this.props.toggleDialog,children:Object(m.ub)("Clean")}),Object(F.jsx)(M.a,{children:Object(F.jsxs)(l.a.Fragment,{children:[Object(F.jsx)("p",{children:Object(m.ub)("Clear files in trash and history\uff1a")}),Object(F.jsx)(k.a,{defaultValue:this.options[0],options:this.options,autoFocus:!1,onChange:this.handleInputChange,placeholder:""}),e&&Object(F.jsx)("p",{className:"error m-0 mt-2",children:e})]})}),Object(F.jsx)(S.a,{children:Object(F.jsx)("button",{className:"btn btn-primary",disabled:this.state.submitBtnDisabled,onClick:this.formSubmit,children:Object(m.ub)("Submit")})})]})}}]),r}(l.a.Component),I=(r(157),r(178),r(1806),window.app.pageOptions),_=I.repoID,N=I.repoFolderName,y=I.path,T=I.enableClean,L=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).getItems=function(e){p.a.getRepoFolderTrash(_,y,e).then((function(e){var t=e.data,r=t.data,n=t.more,a=t.scan_stat;!r.length&&n?s.getItems(a):s.setState({isLoading:!1,items:s.state.items.concat(r),more:n,scanStat:a})})).catch((function(e){s.setState({isLoading:!1,errorMsg:O.a.getErrorMsg(e,!0)})}))},s.getMore=function(){s.setState({isLoading:!0}),s.getItems(s.state.scanStat)},s.onSearchedClick=function(e){if(!0===e.is_dir){var t=m.wc+"library/"+e.repo_id+"/"+e.repo_name+e.path;Object(b.c)(t,{repalce:!0})}else{var r=m.wc+"lib/"+e.repo_id+"/file"+O.a.encodePath(e.path);window.open("about:blank").location.href=r}},s.goBack=function(e){e.preventDefault(),window.history.back()},s.cleanTrash=function(){s.toggleCleanTrashDialog()},s.toggleCleanTrashDialog=function(){s.setState({isCleanTrashDialogOpen:!s.state.isCleanTrashDialogOpen})},s.refreshTrash=function(){s.setState({isLoading:!0,errorMsg:"",items:[],scanStat:null,more:!1,showFolder:!1}),s.getItems()},s.renderFolder=function(e,t,r){s.setState({showFolder:!0,commitID:e,baseDir:t,folderPath:r,folderItems:[],isLoading:!0}),p.a.listCommitDir(_,e,"".concat(t.substr(0,t.length-1)).concat(r)).then((function(e){s.setState({isLoading:!1,folderItems:e.data.dirent_list})})).catch((function(e){e.response?403==e.response.status?s.setState({isLoading:!1,errorMsg:Object(m.ub)("Permission denied")}):s.setState({isLoading:!1,errorMsg:Object(m.ub)("Error")}):s.setState({isLoading:!1,errorMsg:Object(m.ub)("Please check the network.")})}))},s.clickRoot=function(e){e.preventDefault(),s.refreshTrash()},s.clickFolderPath=function(e,t){t.preventDefault();var r=s.state,n=r.commitID,a=r.baseDir;s.renderFolder(n,a,e)},s.renderFolderPath=function(){var e=s.state.folderPath.split("/");return Object(F.jsxs)(l.a.Fragment,{children:[Object(F.jsx)("a",{href:"#",onClick:s.clickRoot,children:N}),Object(F.jsx)("span",{children:" / "}),e.map((function(t,r){if(r>0&&r!=e.length-1)return Object(F.jsxs)(l.a.Fragment,{children:[Object(F.jsx)("a",{href:"#",onClick:s.clickFolderPath.bind(Object(a.a)(s),e.slice(0,r+1).join("/")),children:e[r]}),Object(F.jsx)("span",{children:" / "})]},r)})),e[e.length-1]]})},s.state={isLoading:!0,errorMsg:"",items:[],scanStat:null,more:!1,isCleanTrashDialogOpen:!1},s}return Object(s.a)(r,[{key:"componentDidMount",value:function(){this.getItems()}},{key:"render",value:function(){var e=this.state,t=e.isCleanTrashDialogOpen,r=e.showFolder;return Object(F.jsxs)(l.a.Fragment,{children:[Object(F.jsxs)("div",{className:"h-100 d-flex flex-column",children:[Object(F.jsxs)("div",{className:"top-header d-flex justify-content-between",children:[Object(F.jsx)("a",{href:m.wc,children:Object(F.jsx)("img",{src:m.Sb+m.Nb,height:m.Mb,width:m.Ob,title:m.xc,alt:"logo"})}),Object(F.jsx)(v.a,{onSearchedClick:this.onSearchedClick})]}),Object(F.jsx)("div",{className:"flex-auto container-fluid pt-4 pb-6 o-auto",children:Object(F.jsx)("div",{className:"row",children:Object(F.jsxs)("div",{className:"col-md-10 offset-md-1",children:[Object(F.jsx)("h2",{children:O.a.generateDialogTitle(Object(m.ub)("{placeholder} Trash"),N)}),Object(F.jsx)("a",{href:"#",className:"go-back",title:Object(m.ub)("Back"),onClick:this.goBack,role:Object(m.ub)("Back"),children:Object(F.jsx)("span",{className:"fas fa-chevron-left"})}),Object(F.jsxs)("div",{className:"d-flex justify-content-between align-items-center op-bar",children:[Object(F.jsxs)("p",{className:"m-0",children:[Object(m.ub)("Current path: "),r?this.renderFolderPath():N]}),"/"==y&&T&&!r&&Object(F.jsx)("button",{className:"btn btn-secondary clean",onClick:this.cleanTrash,children:Object(m.ub)("Clean")})]}),Object(F.jsx)(P,{data:this.state,getMore:this.getMore,renderFolder:this.renderFolder})]})})})]}),t&&Object(F.jsx)(g.a,{children:Object(F.jsx)(C,{repoID:_,refreshTrash:this.refreshTrash,toggleDialog:this.toggleCleanTrashDialog})})]})}}]),r}(l.a.Component),P=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).theadData=[{width:"5%",text:""},{width:"45%",text:Object(m.ub)("Name")},{width:"20%",text:Object(m.ub)("Delete Time")},{width:"15%",text:Object(m.ub)("Size")},{width:"15%",text:""}],s}return Object(s.a)(r,[{key:"render",value:function(){var e=this,t=this.props.data,r=t.isLoading,n=t.errorMsg,s=t.items,a=t.more,c=t.showFolder,o=t.commitID,i=t.baseDir,d=t.folderPath,h=t.folderItems;return Object(F.jsxs)(l.a.Fragment,{children:[Object(F.jsxs)("table",{className:"table-hover",children:[Object(F.jsx)("thead",{children:Object(F.jsx)("tr",{children:this.theadData.map((function(e,t){return Object(F.jsx)("th",{width:e.width,children:e.text},t)}))})}),Object(F.jsx)("tbody",{children:c?h.map((function(t,r){return Object(F.jsx)(B,{item:t,commitID:o,baseDir:i,folderPath:d,renderFolder:e.props.renderFolder},r)})):s.map((function(t,r){return Object(F.jsx)(R,{item:t,renderFolder:e.props.renderFolder},r)}))})]}),r&&Object(F.jsx)(f.a,{}),n&&Object(F.jsx)("p",{className:"error mt-6 text-center",children:n}),a&&!r&&!c&&Object(F.jsx)("button",{className:"btn btn-block more mt-6",onClick:this.props.getMore,children:Object(m.ub)("More")})]})}}]),r}(l.a.Component),R=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).handleMouseOver=function(){s.setState({isIconShown:!0})},s.handleMouseOut=function(){s.setState({isIconShown:!1})},s.restoreItem=function(e){e.preventDefault();var t=s.props.item,r=t.commit_id,n=t.parent_dir+t.obj_name;(t.is_dir?p.a.restoreFolder(_,r,n):p.a.restoreFile(_,r,n)).then((function(e){s.setState({restored:!0}),x.a.success(Object(m.ub)("Successfully restored 1 item."))})).catch((function(e){var t="";t=e.response?e.response.data.error_msg||Object(m.ub)("Error"):Object(m.ub)("Please check the network."),x.a.danger(t)}))},s.renderFolder=function(e){e.preventDefault();var t=s.props.item;s.props.renderFolder(t.commit_id,t.parent_dir,O.a.joinPath("/",t.obj_name))},s.state={restored:!1,isIconShown:!1},s}return Object(s.a)(r,[{key:"render",value:function(){var e=this.props.item,t=this.state,r=t.restored,n=t.isIconShown;return r?null:e.is_dir?Object(F.jsxs)("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,onFocus:this.handleMouseOver,children:[Object(F.jsx)("td",{className:"text-center",children:Object(F.jsx)("img",{src:O.a.getFolderIconUrl(),alt:Object(m.ub)("Directory"),width:"24"})}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"#",onClick:this.renderFolder,children:e.obj_name})}),Object(F.jsx)("td",{title:u()(e.deleted_time).format("LLLL"),children:u()(e.deleted_time).format("YYYY-MM-DD")}),Object(F.jsx)("td",{}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"#",className:n?"":"invisible",onClick:this.restoreItem,role:"button",children:Object(m.ub)("Restore")})})]}):Object(F.jsxs)("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,onFocus:this.handleMouseOver,children:[Object(F.jsx)("td",{className:"text-center",children:Object(F.jsx)("img",{src:O.a.getFileIconUrl(e.obj_name),alt:Object(m.ub)("File"),width:"24"})}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"".concat(m.wc,"repo/").concat(_,"/trash/files/?obj_id=").concat(e.obj_id,"&commit_id=").concat(e.commit_id,"&base=").concat(encodeURIComponent(e.parent_dir),"&p=").concat(encodeURIComponent("/"+e.obj_name)),target:"_blank",children:e.obj_name})}),Object(F.jsx)("td",{title:u()(e.deleted_time).format("LLLL"),children:u()(e.deleted_time).format("YYYY-MM-DD")}),Object(F.jsx)("td",{children:O.a.bytesToSize(e.size)}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"#",className:n?"":"invisible",onClick:this.restoreItem,role:"button",children:Object(m.ub)("Restore")})})]})}}]),r}(l.a.Component),B=function(e){Object(c.a)(r,e);var t=Object(o.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).handleMouseOver=function(){s.setState({isIconShown:!0})},s.handleMouseOut=function(){s.setState({isIconShown:!1})},s.renderFolder=function(e){e.preventDefault();var t=s.props.item,r=s.props,n=r.commitID,a=r.baseDir,c=r.folderPath;s.props.renderFolder(n,a,O.a.joinPath(c,t.name))},s.state={isIconShown:!1},s}return Object(s.a)(r,[{key:"render",value:function(){var e=this.props.item,t=(this.state.isIconShown,this.props),r=t.commitID,n=t.baseDir,s=t.folderPath;return"dir"==e.type?Object(F.jsxs)("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,children:[Object(F.jsx)("td",{className:"text-center",children:Object(F.jsx)("img",{src:O.a.getFolderIconUrl(),alt:Object(m.ub)("Directory"),width:"24"})}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"#",onClick:this.renderFolder,children:e.name})}),Object(F.jsx)("td",{}),Object(F.jsx)("td",{}),Object(F.jsx)("td",{})]}):Object(F.jsxs)("tr",{onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut,children:[Object(F.jsx)("td",{className:"text-center",children:Object(F.jsx)("img",{src:O.a.getFileIconUrl(e.name),alt:Object(m.ub)("File"),width:"24"})}),Object(F.jsx)("td",{children:Object(F.jsx)("a",{href:"".concat(m.wc,"repo/").concat(_,"/trash/files/?obj_id=").concat(e.obj_id,"&commit_id=").concat(r,"&base=").concat(encodeURIComponent(n),"&p=").concat(encodeURIComponent(O.a.joinPath(s,e.name))),target:"_blank",children:e.name})}),Object(F.jsx)("td",{}),Object(F.jsx)("td",{children:O.a.bytesToSize(e.size)}),Object(F.jsx)("td",{})]})}}]),r}(l.a.Component);h.a.render(Object(F.jsx)(L,{}),document.getElementById("wrapper"))}},[[1805,1,0]]]);
//# sourceMappingURL=repoFolderTrash.chunk.js.map