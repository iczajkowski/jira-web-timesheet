(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{227:function(e,t,n){e.exports=n(424)},232:function(e,t,n){},233:function(e,t,n){},254:function(e,t,n){},386:function(e,t,n){},391:function(e,t,n){},392:function(e,t,n){},393:function(e,t,n){},414:function(e,t,n){},415:function(e,t,n){},416:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){},424:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(8),l=n.n(c),i=(n(232),n(233),n(24)),u=n(26);!function(e){e.SetUser="APP_SET_USER",e.ClearUser="APP_CLEAR_USER",e.SetAuthenticated="APP_SET_AUTHENTICATED",e.Logout="APP_LOGOUT"}(a||(a={}));var s,m=function(e){return{type:a.SetUser,payload:e}},d=Object(i.b)(a.SetAuthenticated),f=Object(i.b)(a.Logout),g=Object(i.b)(a.ClearUser);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b,O={url:null,user:null,isAuthenticated:void 0},E=Object(i.c)(O,(s={},Object(u.a)(s,a.SetUser,(function(e,t){return h({},e,{user:t.payload.user,url:t.payload.url})})),Object(u.a)(s,a.ClearUser,(function(e){return h({},e,{user:null,isAuthenticated:!1})})),Object(u.a)(s,a.SetAuthenticated,(function(e,t){return h({},e,{isAuthenticated:t.payload})})),s)),y=n(42);!function(e){e.Login="LOGIN_LOGIN",e.LoginSuccess="LOGIN_SUCCESS",e.SetError="LOGIN_SET_ERROR"}(b||(b={}));var v,j=Object(i.b)(b.Login),k=Object(i.b)(b.LoginSuccess),w=Object(i.b)(b.SetError);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I,P=Object(i.c)({isLoggingIn:!1,error:null},(v={},Object(u.a)(v,b.Login,(function(e){return _({},e,{isLoggingIn:!0})})),Object(u.a)(v,b.LoginSuccess,(function(e){return _({},e,{isLoggingIn:!1})})),Object(u.a)(v,b.SetError,(function(e,t){return _({},e,{error:t.payload,isLoggingIn:!1})})),v));!function(e){e.LoadWorklogs="WORKLOGS_LOAD",e.LoadedWorklogs="WORKLOGS_LOADED",e.ErrorLoadingWorklogs="WORKLOGS_ERROR"}(I||(I={}));var L,D=Object(i.b)(I.LoadWorklogs),C=Object(i.b)(I.LoadedWorklogs),N=Object(i.b)(I.ErrorLoadingWorklogs);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=Object(i.c)({isFetchingWorklogs:!1,month:null,year:null,day:null,user:null,worklogs:null,error:null},(L={},Object(u.a)(L,I.LoadWorklogs,(function(e,t){return T({},e,{user:t.payload.user,month:t.payload.month,year:t.payload.year,day:t.payload.day,isFetchingWorklogs:!0,error:null})})),Object(u.a)(L,I.LoadedWorklogs,(function(e,t){return T({},e,{worklogs:t.payload,isFetchingWorklogs:!1})})),Object(u.a)(L,I.ErrorLoadingWorklogs,(function(e,t){return T({},e,{error:t.payload,isFetchingWorklogs:!1})})),L)),R=Object(y.combineReducers)({appState:E,login:P,worklogs:W}),Y=n(22),F=n(35),U=n.n(F),M=function(){return U.a.get("/api/users/current")},x=function(e){return function(t){t(j()),function(e){return U.a.post("/api/users/authenticate",e)}(e).then((function(){return t(k()),M()})).then((function(e){t(m(e.data)),t(d(!0))})).catch((function(e){t(w(e.response&&e.response.status))}))}},K=function(){return function(e){e(f()),U.a.post("api/users/logout").then((function(){return e(g())}))}},V=n(77),q=n(65),z=(n(254),n(433)),G=n(432),H=n(438),B=n(439),J=n(64),Z=z.a.Text,Q=G.a.create({name:"login"})((function(e){var t=e.onSubmit,n=e.isLoggingIn,a=e.loginError,r=e.form,c=r.getFieldDecorator;return o.a.createElement(G.a,{onSubmit:function(e){e.preventDefault(),r.validateFields((function(e,n){e||t(n)}))}},o.a.createElement(G.a.Item,null,c("email",{rules:[{required:!0,message:"Please input your email"}]})(o.a.createElement(H.a,{placeholder:"Email"}))),o.a.createElement(G.a.Item,null,c("url",{rules:[{required:!0,message:"Please input URL"}]})(o.a.createElement(H.a,{addonBefore:"https://",placeholder:"URL"}))),o.a.createElement(G.a.Item,null,c("apiToken",{rules:[{required:!0,message:"Please input token"}]})(o.a.createElement(H.a,{placeholder:"Token"}))),o.a.createElement(G.a.Item,null,c("rememberMe",{valuePropName:"checked",initialValue:!0})(o.a.createElement(B.a,null,"Remember me"))),o.a.createElement(J.a,{loading:n,type:"primary",htmlType:"submit",className:"login-form__button"},"Log in"),a&&o.a.createElement("div",{className:"login-form__error"},o.a.createElement(Z,{type:"danger"},"Incorrect login data")))})),X=n(426),$=n(85),ee=n(46),te=n(430),ne=(n(386),function(){var e=Object(Y.c)(),t=Object(Y.d)((function(e){return e.appState.isAuthenticated})),n=Object(Y.d)((function(e){return e.login.isLoggingIn})),a=Object(Y.d)((function(e){return e.login.error}));return t?o.a.createElement(q.a,{to:{pathname:"dashboard"}}):o.a.createElement(X.a,{style:{height:"100%"}},o.a.createElement(X.a.Content,{style:{padding:"50px 50px"}},o.a.createElement($.a,{className:"login__card-wrapper"},o.a.createElement(ee.a,{md:{span:12,offset:6},xl:{span:8,offset:8}},o.a.createElement(te.a,{className:"login__card"},o.a.createElement("h2",null,"Sign in"),o.a.createElement(Q,{onSubmit:function(t){return x(t)(e)},isLoggingIn:n,loginError:a}))))))}),ae=n(58),re=n(427),oe=n(59),ce=n(11),le=n.n(ce),ie=function(e){var t=e.from,n=e.to,a=e.user,r=function(e){var t=e.from,n=e.to;return{from:le()(t).format("YYYY-MM-DD"),to:le()(n).format("YYYY-MM-DD")}}({from:t,to:n});return U.a.get("/api/worklogs?from=".concat(r.from,"&to=").concat(r.to,"&accountId=").concat(a.accountId))},ue=n(168),se=n.n(ue),me=function(e){return{from:e.startOf("month").toDate(),to:e.endOf("month").toDate()}};var de=n(214),fe=n(436),ge=n(9),pe=n(434),he=n(134);function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee=function(e,t){return e?e.reduce((function(e,n){return function(e,t){var n=Object.assign({},e);return Object.keys(t).reduce((function(e,n){var a=t[n],r=e[n]||[],o=[].concat(Object(he.a)(r),Object(he.a)(a));return Oe({},e,Object(u.a)({},n,o))}),n)}(e,n.worklogs.reduce((function(e,a){var r=function(e,t){return se.a.tz(se()(e),t)}(a.started,t).format("YYYY-MM-DD"),o=e[r]||[],c=[].concat(Object(he.a)(o),[{id:a.id,issueId:a.issueId,issueKey:n.issueKey,timeSpent:a.timeSpentSeconds,started:a.started}]);return Oe({},e,Object(u.a)({},r,c))}),{}))}),{}):{}},ye=(n(391),function(e){var t=Math.floor(e/3600),n=e/60%60,a=n<10?"0".concat(n):"".concat(n);return"".concat(t,":").concat(a)}),ve=function(e,t){return"https://".concat(e,"/browse/").concat(t)},je=z.a.Text,ke=function(e,t){return function(n){var a=n.format("YYYY-MM-DD"),r=e[a],c=r&&r.reduce((function(e,t){return e+t.timeSpent}),0),l=28800===c;return o.a.createElement("div",{className:"ant-fullcalendar-date"},o.a.createElement("div",{className:"ant-fullcalendar-value callendar-cell__header"},r&&o.a.createElement("span",{className:"callendar-cell__total-time"},o.a.createElement(je,{type:l?void 0:"warning"},"Total: ",ye(c)," ")),o.a.createElement("span",{className:"callendar-cell__day"},n.date())),o.a.createElement("div",{className:"ant-fullcalendar-content"},r&&o.a.createElement("div",null,o.a.createElement("ul",{className:"worklogs"},r.map((function(e,n){return o.a.createElement("li",{className:"worklog-list-item",key:"".concat(e.issueKey,"_").concat(n)},o.a.createElement("a",{target:"_blank",href:ve(t,e.issueKey)},e.issueKey),o.a.createElement("span",null,ye(e.timeSpent)))}))))))}},we=(n(392),n(56)),Se=(n(393),n(80)),_e=n.n(Se),Ie=function(e){return function(t){var n;e({data:[],fetching:!0}),t&&(n=t,U.a.get("/api/users/search",{params:{query:n}})).then((function(e){return e.data})).then((function(t){e({data:t,fetching:!1})}))}},Pe=function(e){var t=e.user,n=e.onUserSelect,a=Object(r.useState)({data:[],value:t.displayName,fetching:!1}),o=Object(ae.a)(a,2),c=o[0],l=o[1],i=_e()(Ie(l),800);return r.createElement("div",{className:"user__search"},r.createElement(we.a,{showSearch:!0,style:{width:"100%"},placeholder:"Select user",value:c.value,onSearch:i,onChange:function(e){var t=c.data.find((function(t){return t.accountId===e}));l({value:t&&t.displayName,data:[],fetching:!1}),t&&n(t)},showArrow:!1,filterOption:!1,defaultActiveFirstOption:!1,notFoundContent:c.fetching?r.createElement(de.a,{size:"small"}):null},c.data.map((function(e){return r.createElement(we.a.Option,{key:e.accountId},e.displayName)}))))},Le=function(e){var t=e.url,n=e.onViewChanged,a=e.onRefresh,c=e.isFetchingWorklogs,l=e.worklogs,i=e.selectedDate,u=e.totalLoggedTime,s=e.userWorklogs;Object(r.useEffect)((function(){return window.addEventListener("keyup",d),function(){window.removeEventListener("keyup",d)}}));var m=function(e){e&&n(e,s)},d=function(e){"r"===e.key&&a()},f=ke(l,t);return o.a.createElement(de.a,{spinning:c},o.a.createElement("div",{className:"worklog-calendar__header"},o.a.createElement("div",{className:"worklog-calendar__total-summary"},o.a.createElement(fe.a,{title:"Total logged:",value:ye(u)})),o.a.createElement("div",{className:"worklog-calendar__user"},o.a.createElement(Pe,{user:s,onUserSelect:function(e){e.accountId!==s.accountId&&n(i,e)}})),o.a.createElement(J.a.Group,null,o.a.createElement(J.a,{type:"primary",onClick:function(){var e=i.clone().subtract(1,"month");m(e)}},o.a.createElement(ge.a,{type:"left"}),"Backward"),o.a.createElement(J.a,{type:"primary",onClick:a},o.a.createElement(ge.a,{type:"sync"}),"Refresh(R)"),o.a.createElement(J.a,{type:"primary",onClick:function(){var e=i.clone().add(1,"month");m(e)}},"Forward",o.a.createElement(ge.a,{type:"right"})))),o.a.createElement(pe.a,{value:i,onChange:m,dateFullCellRender:f}))},De=(n(414),n(435)),Ce=n(431),Ne=(n(415),n(416),function(e){var t=e.date,n=e.totalLoggedTime;return o.a.createElement("div",{className:"details__title"},o.a.createElement("span",null,t.format("ll")),o.a.createElement("span",null,ye(n)))}),Ae=function(e){return e?Re(e)?Te(e):We(e):0},Te=function(e){return e.reduce((function(e,t){return e+t.worklogs.reduce((function(e,t){return e+t.timeSpentSeconds}),0)}),0)},We=function(e){return e.reduce((function(e,t){return e+t.timeSpent}),0)},Re=function(e){var t=e[0];return!!t&&t.worklogs instanceof Array},Ye=function(e){var t=e.jiraUrl,n=e.selectedDate,a=e.worklogs,r=e.canEdit,c=e.onAddWorklogClick,l=e.onWorklogDeleted,i=Ae(a),u=function(e){De.a.confirm({title:"Do you want to remove worklog?",content:"Confirm removing worklog from issue ".concat(e.issueKey," logged at ").concat(le()(e.started).format("lll"),". Time that was logged: ").concat(ye(e.timeSpent)),onOk:function(){return function(e){var t=e.worklogId,n=e.issueId;return U.a.delete("/api/worklogs/".concat(n,"/").concat(t))}({worklogId:e.id,issueId:e.issueId}).then(l).catch((function(){return re.a.error("Could not delete worklog")}))},onCancel:function(){}})};return o.a.createElement(te.a,{className:"details-sider",title:Ne({date:n,totalLoggedTime:i})},o.a.createElement(Ce.a,{header:o.a.createElement("div",{className:"list__header"},o.a.createElement("b",null,"Logged Issues:"),r?o.a.createElement(J.a,{onClick:c,type:"primary",icon:"plus-circle"},"Add"):""),dataSource:a,renderItem:function(e){return o.a.createElement(Ce.a.Item,null,o.a.createElement(Ce.a.Item.Meta,{title:o.a.createElement("div",{className:"worklog-list__title"},o.a.createElement("a",{target:"_blank",href:ve(t,e.issueKey)},e.issueKey),r?o.a.createElement(J.a,{onClick:function(){return u(e)},icon:"delete",size:"small"}):""),description:o.a.createElement("div",{className:"issue__description"},o.a.createElement("span",null,"Started at: ",o.a.createElement("b",null,le()(e.started).format("lll"))),o.a.createElement("span",null,"Logged: ",o.a.createElement("b",null,ye(e.timeSpent))))}))}}))},Fe=n(429),Ue=n(437),Me=n(218),xe=n(219),Ke=n(224),Ve=n(220),qe=n(225),ze=function(e){return U.a.get("/api/issues",{params:{query:e}})},Ge=function(e){function t(e){var n;return Object(Me.a)(this,t),(n=Object(Ke.a)(this,Object(Ve.a)(t).call(this,e))).state={data:[],value:"",fetching:!1},n.fetchId=0,n.fetchIssues=function(e){if(e){n.setState({data:[],fetching:!0}),n.fetchId+=1;var t=n.fetchId;ze(e).then((function(e){if(t===n.fetchId){var a=e.data;n.setState({data:a,fetching:!1})}}))}},n.handleChange=function(e){var t=n.state.data.find((function(t){return t.id==Number(e)})),a="";t&&(a="".concat(t.key," - ").concat(t.summaryText)),n.setState({value:a,data:[],fetching:!1}),n.props.onChange&&n.props.onChange(t)},n.fetchIssues=Object(oe.debounce)(n.fetchIssues,500),n}return Object(qe.a)(t,e),Object(xe.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"user__search"},o.a.createElement(we.a,{showSearch:!0,style:{width:"100%"},placeholder:"Select issue",value:this.state.value,onSearch:this.fetchIssues,onChange:this.handleChange,showArrow:!1,filterOption:!1,defaultActiveFirstOption:!1,notFoundContent:this.state.fetching?o.a.createElement(de.a,{size:"small"}):null},this.state.data.map((function(e){return o.a.createElement(we.a.Option,{key:e.id},e.key," - ",e.summaryText)}))))}}]),t}(o.a.Component),He={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},Be=function(e){var t=e.form,n=e.initialDate,a=e.validationPassed,r=e.onChange,c=t.getFieldDecorator;return o.a.createElement(G.a,{onChange:r},o.a.createElement(G.a.Item,Object.assign({label:"Issue"},He),c("issue",{rules:[{required:!0,message:"Please select issue"}]})(o.a.createElement(Ge,null))),o.a.createElement(G.a.Item,Object.assign({label:"Started at"},He),c("started",{rules:[{required:!0,message:"Please select date"}],initialValue:n})(o.a.createElement(Fe.a,{showTime:!0}))),o.a.createElement(G.a.Item,{label:"Hours",labelCol:{sm:4},wrapperCol:{sm:4}},c("hours",{rules:[{required:!0,message:"Please select date"}],initialValue:0})(o.a.createElement(Ue.a,{min:0,max:24}))),o.a.createElement(G.a.Item,{label:"Minutes",labelCol:{sm:4},wrapperCol:{sm:4}},c("minutes",{rules:[{required:!0,message:"Please select date"}],initialValue:0})(o.a.createElement(Ue.a,{min:0,max:59}))),a?"":o.a.createElement(z.a.Text,{type:"danger"},"Minutes or hours need to be provided"))},Je=G.a.create()((function(e){var t=e.selectedDate,n=e.modalVisible,a=e.onHideModal,c=e.onAdded,l=e.form,i=Object(r.useState)(!1),u=Object(ae.a)(i,2),s=u[0],m=u[1],d=Object(r.useState)(!0),f=Object(ae.a)(d,2),g=f[0],p=f[1],h=function(){var e=l.getFieldValue("minutes"),t=l.getFieldDecorator("hours");p(!!(e||t))},b=t.clone().hour(8).minute(0).second(0);return o.a.createElement(De.a,{title:"Log Time",visible:n,confirmLoading:s,onCancel:a,onOk:function(){h(),l.validateFields((function(e){if(!e&&g){m(!0);var t=function(e){var t=e.issue,n=e.started,a=e.hours,r=e.minutes;return{issueId:t.id,started:n.format(),timeSpent:3600*a+60*r}}(l.getFieldsValue());(n=t,U.a.post("api/worklogs",n)).then((function(){m(!1),c()}))}var n}))}},o.a.createElement(Be,{form:l,initialDate:b,validationPassed:g,onChange:function(){h()}}))})),Ze=function(e){var t=e.month,n=e.year,a=e.day;return Object(oe.isNil)(t)||Object(oe.isNil)(n)||Object(oe.isNil)(a)?le()():le()([n,t,a])},Qe=function(){var e=Object(Y.c)(),t=function(t,n,a){var r;(r={from:t,to:n,user:a},function(e){var t=r.from.getMonth(),n=r.from.getFullYear();e(D({user:r.user,month:t,year:n})),ie(r).then((function(t){e(C(t.data))})).catch((function(){e(N())}))})(e)},n=Object(q.g)(),a=new URLSearchParams(Object(q.h)().search),c=Object(Y.d)((function(e){return e.worklogs.isFetchingWorklogs})),l=Object(Y.d)((function(e){return e.appState.user})),i=Object(Y.d)((function(e){return e.appState.url}))||"",u=Object(Y.d)((function(e){var t=e.appState.user;return t&&t.timeZone})),s=Object(Y.d)((function(e){return e.worklogs.error})),m=Object(Y.d)((function(e){return e.worklogs})),d=m.worklogs,f=m.month,g=m.year,p=m.day,h=m.user,b=Ee(d,u),O=Ae(d),E=Object(r.useState)(Ze({month:f,year:g,day:p})),y=Object(ae.a)(E,2),v=y[0],j=y[1],k=Object(r.useState)(!1),w=Object(ae.a)(k,2),S=w[0],_=w[1];Object(r.useEffect)((function(){s&&re.a.error("Could not fetch worklogs. Please try again.")})),Object(r.useEffect)((function(){var e=me(Ze({year:a.get("year"),month:a.get("month"),day:a.get("day")})),n=e.from,r=e.to,o=a.get("user");o?function(e){var t=encodeURIComponent(e);return U.a.get("/api/users/".concat(t))}(o).then((function(e){var a=e.data;t(n,r,a)})).catch((function(){re.a.error("Could not fetch user with accountID: ".concat(o))})):t(n,r,l)}),[]);var I=function(){if(h){var e=me(v),n=e.from,a=e.to;t(n,a,h)}},P=function(){_(!1)},L=b[v.format("YYYY-MM-DD")]||[];return o.a.createElement("div",{className:"home__container"},Object(oe.isNil)(h)||Object(oe.isNil)(f)||Object(oe.isNil)(g)?"":o.a.createElement(o.a.Fragment,null,o.a.createElement($.a,{gutter:24},o.a.createElement(ee.a,{span:18,className:"home__content"},o.a.createElement(Le,{url:i,userWorklogs:h,isFetchingWorklogs:c,selectedDate:v,onViewChanged:function(e,a){j(e);var r=e.year(),o=e.month();if(function(e){var t=new URLSearchParams;Object.entries(e).forEach((function(e){var n=Object(ae.a)(e,2),a=n[0],r=n[1];return t.set(a,r.toString())})),n.push("?".concat(t.toString()))}({year:r,month:o,day:e.date(),user:a.accountId}),o!==f||r!==g||(h&&h.accountId)!==a.accountId){var c=me(le()([r,o])),l=c.from,i=c.to;t(l,i,a)}},onRefresh:I,worklogs:b,totalLoggedTime:O})),o.a.createElement(ee.a,{span:6,className:"home__sider"},o.a.createElement(Ye,{jiraUrl:i,selectedDate:v,worklogs:L,canEdit:(h&&h.accountId)===l.accountId,onAddWorklogClick:function(){_(!0)},onWorklogDeleted:I}))),o.a.createElement(Je,{selectedDate:v,modalVisible:S,onHideModal:P,onAdded:function(){I(),P()}})))},Xe=n(221),$e=(n(417),n(440)),et=n(127),tt=(n(418),function(e){var t=e.user,n=e.onLogout,a=e.children;return o.a.createElement($e.a,{theme:"dark",mode:"horizontal",className:"user-info__menu",selectable:!1},o.a.createElement(et.a,{title:o.a.createElement("span",null,o.a.createElement(ge.a,{type:"user"}),t.displayName)},o.a.createElement($e.a.Item,{disabled:!0},o.a.createElement("img",{alt:"avatar",src:t.avatarUrls["32x32"],className:"user-info__avatar"}),t.emailAddress),o.a.createElement($e.a.Item,{disabled:!0},"Timezone: ",t.timeZone),o.a.createElement($e.a.Item,{onClick:n},o.a.createElement(ge.a,{type:"logout"}),"Logout")),a&&o.a.createElement($e.a.Item,{className:"user-info__extras"},a))}),nt=X.a.Header,at=X.a.Content,rt=function(e){var t=e.children,n=Object(Y.c)(),a=Object(Y.d)((function(e){return e.appState.user}));return o.a.createElement(X.a,{className:"main-layout"},o.a.createElement(nt,{className:"main-layout__header"},o.a.createElement(tt,{user:a,onLogout:function(){return n(K())}},o.a.createElement("a",{href:"https://github.com/iczajkow/jira-web-timesheet",target:"_blank"},o.a.createElement(ge.a,{type:"github",style:{fontSize:"24px"}})))),o.a.createElement(at,{className:"main-layout__content"},t))},ot=function(e){var t=e.children,n=Object(Xe.a)(e,["children"]),a=Object(Y.d)((function(e){return e.appState.isAuthenticated}));return o.a.createElement(q.b,Object.assign({},n,{render:function(e){var n=e.location;return a?o.a.createElement(rt,null,t):o.a.createElement(q.a,{to:{pathname:"/login",state:{from:n}}})}}))},ct=function(){return o.a.createElement(V.a,null,o.a.createElement(q.d,null,o.a.createElement(q.b,{path:"/login"},o.a.createElement(ne,null)),o.a.createElement(ot,{path:"/dashboard"},o.a.createElement(Qe,null)),o.a.createElement(q.b,{path:"*"},o.a.createElement(q.a,{to:{pathname:"dashboard"}}))))},lt={checkAuthenticationConnect:function(){return function(e){M().then((function(t){e(m(t.data)),e(d(!0))})).catch((function(){e(d(!1))}))}}},it=Object(Y.b)((function(e){return{isAuthenticated:e.appState.isAuthenticated}}),lt)((function(e){var t=e.checkAuthenticationConnect,n=e.isAuthenticated;return o.a.useEffect((function(){t()}),[]),null!=n?o.a.createElement(ct,null):null})),ut=n(14),st=(n(419),n(222)),mt=n.n(st),dt=function(e){var t=e.dispatch;U.a.interceptors.response.use(void 0,(function(e){return 401===e.response.status&&t(g()),Promise.reject(e)}))},ft=n(428),gt=function(){"https:"===window.location.protocol||function(){var e="open".concat(Date.now()),t=o.a.createElement(J.a,{type:"primary",href:"https://".concat("jira-timesheet.iczajkow.pl")},"Open HTTPs version");ft.a.open({message:"Your connection is not private!",description:"You are using unsecured version of this website. To open secured version click button below.",btn:t,key:e,duration:0})}()},pt=Object(i.a)({reducer:R});dt(pt);var ht=function(){return gt(),o.a.createElement(ut.b,{locale:mt.a},o.a.createElement(Y.a,{store:pt},o.a.createElement(it,null)))};l.a.render(o.a.createElement(ht,null),document.getElementById("root"))}},[[227,1,2]]]);
//# sourceMappingURL=main.22d89b0a.chunk.js.map