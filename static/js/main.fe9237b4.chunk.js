(this.webpackJsonpbetlovers=this.webpackJsonpbetlovers||[]).push([[0],{51:function(e,t,n){e.exports={item:"TeamRow_item__3vscW",checkbox:"TeamRow_checkbox__3nXbr",textInput:"TeamRow_textInput__2ZJYT"}},52:function(e,t,n){e.exports={item:"TeamInfoRow_item__2pnc6",checkbox:"TeamInfoRow_checkbox__eLxzL",textInput:"TeamInfoRow_textInput__2mc6g"}},53:function(e,t,n){e.exports={item:"FixtureRow_item__yD9DA",checkbox:"FixtureRow_checkbox__3MxcJ",textInput:"FixtureRow_textInput__1YUrc"}},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(27),i=n.n(c),s=n(11),u=n(18),o=n(56),j=n(19),l=n(6),b="SEARCH_TEAM",d="SEARCH_TEAM_SUCCESS",x="SEARCH_TEAM_FAILED",O="FETCH_TEAM",f="FETCH_TEAM_SUCCESS",m="FETCH_TEAM_FAILED",p="FETCH_TEAM_LAST_FIXTURES",h="FETCH_TEAM_LAST_FIXTURES_SUCCESS",v="FETCH_TEAM_LAST_FIXTURES_FAILED",_="FETCH_TEAM_NEXT_FIXTURES",T="FETCH_TEAM_NEXT_FIXTURES_SUCCESS",g="FETCH_TEAM_NEXT_FIXTURES_FAILED",y="CLEAR_FILTERED_TEAMS",E={filteredTeams:[],error:null,isSearching:!1},F=function(e){return function(e){return e.entities.teams}(e).filteredTeams},S=n(26),I={teamFixtures:{last:[],next:[]},error:null,isFetching:!1},w=function(e){return function(e){return e.entities.fixtures}(e).teamFixtures},A=function(e,t){var n;return null===(n=w(e)[t])||void 0===n?void 0:n.last},L=function(e,t){var n;return null===(n=w(e)[t])||void 0===n?void 0:n.next},N={entities:Object(u.c)({teams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{isSearching:!0});case d:return Object(l.a)(Object(l.a)({},e),{},{filteredTeams:[].concat(Object(j.a)(e.filteredTeams),Object(j.a)(t.payload.filteredTeams)),isSearching:!1});case x:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload.error,isSearching:!1});case O:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0});case f:return Object(l.a)(Object(l.a)({},e),{},{filteredTeams:[].concat(Object(j.a)(e.filteredTeams),[t.payload.team]),isFetching:!1});case m:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload.error,isFetching:!1});case y:return Object(l.a)(Object(l.a)({},e),{},{filteredTeams:E.filteredTeams});default:return e}},fixtures:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0});case h:return Object(l.a)(Object(l.a)({},e),{},{teamFixtures:Object(l.a)(Object(l.a)({},e.teamFixtures),{},Object(S.a)({},t.payload.teamId,{last:[].concat(Object(j.a)(e.teamFixtures.last),Object(j.a)(t.payload.lastTeamFixtures))})),isFetching:!1});case v:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload.error,isFetching:!1});case _:return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0});case T:return Object(l.a)(Object(l.a)({},e),{},{teamFixtures:Object(l.a)(Object(l.a)({},e.teamFixtures),{},Object(S.a)({},t.payload.teamId,{next:[].concat(Object(j.a)(e.teamFixtures.next),Object(j.a)(t.payload.nextTeamFixtures))})),isFetching:!1});case g:return Object(l.a)(Object(l.a)({},e),{},{error:t.payload.error,isFetching:!1});default:return e}}})},R=n(8),C=n.n(R),k=n(9),U=n(47),M=n(48),H=n(49),D=n.n(H),X=n(50),P=n.n(X),q=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.baseURL,a=void 0===n?"https://api-football-v1.p.rapidapi.com/v2":n,r=t.timeout,c=void 0===r?2e4:r;Object(U.a)(this,e),e.instance||(e.instance=P()(D.a.create({baseURL:a,timeout:c}),{maxRPS:24}),e.instance.interceptors.request.use((function(e){return Object(l.a)(Object(l.a)({},e),{},{headers:{"x-rapidapi-key":"ec42069b83msh138c318739dc607p1aa0e4jsn5d1fd5f96f84"}})})),Object.freeze(e.instance))}return Object(M.a)(e,[{key:"setGateway",value:function(t){e.instance.interceptors.request.use((function(e){return e.baseURL=t,e}))}},{key:"getInstance",value:function(){return e.instance}}]),e}()),z=n(23),B=q.getInstance(),J=function(e){var t="teams";return{searchTeam:function(){var n=Object(z.a)(C.a.mark((function n(a){var r,c;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.get("".concat(t,"/search/").concat(a));case 3:return r=n.sent,c=r.data.api.teams,n.abrupt("return",c);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),getTeam:function(){var n=Object(z.a)(C.a.mark((function n(a){var r,c;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.get("".concat(t,"/team/").concat(a));case 3:return r=n.sent,c=r.data.api.teams,n.abrupt("return",c[0]);case 8:return n.prev=8,n.t0=n.catch(0),n.abrupt("return",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}(B),Y=function(e){var t="fixtures";return{getTeamLastFixtures:function(){var n=Object(z.a)(C.a.mark((function n(a){var r,c,i,s=arguments;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:10,n.prev=1,n.next=4,e.get("".concat(t,"/team/").concat(a,"/last/").concat(r));case 4:return c=n.sent,i=c.data.api.fixtures,n.abrupt("return",i);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}(),getTeamNextFixtures:function(){var n=Object(z.a)(C.a.mark((function n(a){var r,c,i,s=arguments;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:10,n.prev=1,n.next=4,e.get("".concat(t,"/team/").concat(a,"/next/").concat(r));case 4:return c=n.sent,i=c.data.api.fixtures,n.abrupt("return",i);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}}(B),V=function(e){return{type:d,payload:{filteredTeams:e}}},W=function(e){return{type:f,payload:{team:e}}},G=function(){return{type:y}},Z=C.a.mark(K);function K(e){var t,n;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.name,a.prev=1,a.next=4,Object(k.b)(J.searchTeam,t);case 4:return n=a.sent,a.next=7,Object(k.c)(V(n));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(k.c)((r=a.t0,{type:x,payload:{error:r}}));case 13:case"end":return a.stop()}var r}),Z,null,[[1,9]])}var Q=C.a.mark($);function $(e){var t,n;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload.teamId,a.prev=1,a.next=4,Object(k.b)(J.getTeam,t);case 4:return n=a.sent,a.next=7,Object(k.c)(W(n));case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(1),a.next=13,Object(k.c)((r=a.t0,{type:m,payload:{error:r}}));case 13:case"end":return a.stop()}var r}),Q,null,[[1,9]])}var ee=function(e,t){return{type:h,payload:{teamId:e,lastTeamFixtures:t}}},te=function(e,t){return{type:T,payload:{teamId:e,nextTeamFixtures:t}}},ne=C.a.mark(ae);function ae(e){var t,n,a,r;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.teamId,a=t.quantity,c.prev=1,c.next=4,Object(k.b)(Y.getTeamLastFixtures,n,a);case 4:return r=c.sent,c.next=7,Object(k.c)(ee(n,r));case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(1),c.next=13,Object(k.c)((i=c.t0,{type:v,payload:{error:i}}));case 13:case"end":return c.stop()}var i}),ne,null,[[1,9]])}var re=C.a.mark(ce);function ce(e){var t,n,a,r;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.teamId,a=t.quantity,c.prev=1,c.next=4,Object(k.b)(Y.getTeamNextFixtures,n,a);case 4:return r=c.sent,c.next=7,Object(k.c)(te(n,r));case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(1),c.next=13,Object(k.c)((i=c.t0,{type:g,payload:{error:i}}));case 13:case"end":return c.stop()}var i}),re,null,[[1,9]])}var ie=C.a.mark(se);function se(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([Object(k.d)(b,K),Object(k.d)(O,$),Object(k.d)(p,ae),Object(k.d)(_,ce)]);case 2:case"end":return e.stop()}}),ie)}var ue=function(e){var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:!0}),n=Object(o.a)(),a=Object(u.e)(Object(u.c)(N),e,t(Object(u.a)(n)));return n.run(se),a},oe=n(16),je=n(10),le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"/teams/".concat(e,"/fixtures/last/").concat(t)},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return"/teams/".concat(e,"/fixtures/next/").concat(t)},de=function(e){return"/teams/".concat(e,"/standings")},xe="SEARCH YOUR TEAM",Oe="Please write item",fe="Not Started",me="Match Finished",pe="-",he=function(e){return[{ID:"1",LABEL:"Standings",ROUTE:de(e)},{ID:"2",LABEL:"Last games",ROUTE:le(e)},{ID:"3",LABEL:"Next games",ROUTE:be(e)}]},ve="No info available",_e=n(3),Te=function(){return Object(_e.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(_e.jsx)("h1",{style:{fontSize:"3rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#aaaaaa",textTransform:"uppercase",textAlign:"center"},children:xe})})},ge=n(31),ye=n(20),Ee=function(e){var t=e.onSearch,n=Object(a.useState)(""),r=Object(ge.a)(n,2),c=r[0],i=r[1];return Object(_e.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.trim()?(t(c),i("")):alert(Oe)},className:"form-container",children:[Object(_e.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:c,name:"team",onChange:function(e){i(e.target.value)}}),Object(_e.jsx)("button",{className:"input-submit",children:Object(_e.jsx)(ye.b,{style:{color:"darkcyan",fontSize:"20px",marginTop:"2px"}})})]})},Fe=n(51),Se=n.n(Fe),Ie=function(e){var t,n=e.team;return Object(_e.jsx)("li",{className:Se.a.item,children:Object(_e.jsxs)("div",{children:[Object(_e.jsx)("label",{children:n.name}),Object(_e.jsx)("button",{children:Object(_e.jsx)(oe.b,{to:(t=n.team_id,"/teams/".concat(t,"/info")),children:Object(_e.jsx)(ye.a,{style:{color:"orangered",fontSize:"16px"}})})})]})})};Ie.defaultProps={team:{}};var we=Ie,Ae=function(e){var t=e.teams;return Object(_e.jsx)("ul",{children:t.map((function(e){return Object(_e.jsx)(we,{team:e},e.team_id)}))})};Ae.defaultProps={teams:[]};var Le=Ae,Ne=function(){var e=Object(s.c)(F),t=Object(s.b)();Object(a.useEffect)((function(){t(G())}),[]);return Object(_e.jsx)("div",{className:"container",children:Object(_e.jsxs)("div",{className:"inner",children:[Object(_e.jsx)(Te,{}),Object(_e.jsx)(Ee,{onSearch:function(e){var n=e.trim().toLowerCase().replaceAll(" ","_");t(G()),t(function(e){return{type:b,payload:{name:e}}}(n))}}),Object(_e.jsx)(Le,{teams:e})]})})},Re=function(e){var t=e.teamLogo;return Object(_e.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em",textAlign:"center"},children:Object(_e.jsx)("img",{src:t,alt:"logo"})})};Re.defaultProps={teamLogo:""};var Ce=Re,ke=n(52),Ue=n.n(ke),Me=function(e){var t=e.label,n=e.route;return Object(_e.jsx)("li",{className:Ue.a.item,children:Object(_e.jsxs)("div",{children:[Object(_e.jsx)("label",{children:t}),Object(_e.jsx)("button",{children:Object(_e.jsx)(oe.b,{to:n,children:Object(_e.jsx)(ye.a,{style:{color:"orangered",fontSize:"16px"}})})})]})})};Me.defaultProps={label:"",route:"/"};var He=Me,De=function(e){var t=e.teamId;return Object(_e.jsx)("ul",{children:he(t).map((function(e){return Object(_e.jsx)(He,{label:e.LABEL,route:e.ROUTE},e.ID)}))})},Xe=function(){var e=Object(s.b)(),t=Object(je.f)().teamId,n=Object(s.c)((function(e){return function(e,t){return F(e).find((function(e){return e.team_id===Number(t)}))}(e,t)}));return Object(a.useEffect)((function(){n||e(function(e){return{type:O,payload:{teamId:e}}}(t))}),[t]),Object(_e.jsx)("div",{className:"container",children:Object(_e.jsx)("div",{className:"inner",children:n&&n.logo?Object(_e.jsxs)(_e.Fragment,{children:[Object(_e.jsx)(Ce,{teamLogo:n.logo}),Object(_e.jsx)(De,{teamId:t})]}):ve})})},Pe=n(53),qe=n.n(Pe),ze=function(e){var t=e.fixture,n=t.status,a=t.goalsHomeTeam,r=t.goalsAwayTeam,c=t.homeTeam,i=c.logo,s=c.team_name,u=t.awayTeam,o=u.logo,j=u.team_name;return Object(_e.jsx)("li",{className:qe.a.item,children:Object(_e.jsxs)("div",{children:[function(){var e=n===fe?"".concat(s," ").concat(pe," ").concat(j):n===me?"".concat(s," ").concat(a," ").concat(pe," ").concat(r," ").concat(j):"".concat(s," (").concat(a,") ").concat(pe," (").concat(r,") ").concat(j);return Object(_e.jsxs)(_e.Fragment,{children:[Object(_e.jsx)("img",{src:i,alt:"homeTeamLogo"}),Object(_e.jsx)("label",{children:e}),Object(_e.jsx)("img",{src:o,alt:"awayTeamLogo"})]})}(),Object(_e.jsx)("button",{children:Object(_e.jsx)(ye.a,{style:{color:"orangered",fontSize:"16px"}})})]})})};ze.defaultProps={fixture:{}};var Be=ze,Je=function(e){var t=e.fixtures;return Object(_e.jsx)("ul",{children:t.map((function(e){return Object(_e.jsx)(Be,{fixture:e},e.fixture_id)}))})};Je.defaultProps={fixtures:[]};var Ye=Je,Ve=function(){var e=Object(s.b)(),t=Object(je.f)(),n=t.teamId,r=(t.quantity,Object(s.c)((function(e){return A(e,n)}))),c=Object(s.c)((function(e){return function(e,t){var n;return null===(n=A(e,t))||void 0===n?void 0:n.length}(e,n)}));return Object(a.useEffect)((function(){c||e(function(e){return{type:p,payload:{teamId:e}}}(n))}),[n]),Object(_e.jsx)("div",{className:"container",children:Object(_e.jsx)("div",{className:"inner",children:c?Object(_e.jsx)(Ye,{fixtures:r}):ve})})},We=function(){var e=Object(s.b)(),t=Object(je.f)(),n=t.teamId,r=(t.quantity,Object(s.c)((function(e){return L(e,n)}))),c=Object(s.c)((function(e){return function(e,t){var n;return null===(n=L(e,t))||void 0===n?void 0:n.length}(e,n)}));return Object(a.useEffect)((function(){c||e(function(e){return{type:_,payload:{teamId:e}}}(n))}),[n]),Object(_e.jsx)("div",{className:"container",children:Object(_e.jsx)("div",{className:"inner",children:c?Object(_e.jsx)(Ye,{fixtures:r}):ve})})},Ge=function(){return Object(_e.jsx)("div",{children:Object(_e.jsx)("h1",{children:"No match for this page"})})},Ze=n(54),Ke=n(55),Qe=function(){var e=Object(a.useState)(!1),t=Object(ge.a)(e,2),n=t[0],r=t[1];return Object(_e.jsxs)("nav",{className:"navBar",children:[Object(_e.jsx)("button",{onClick:function(){r(!n)},children:n?Object(_e.jsx)(Ze.a,{style:{color:"#fff",width:"40px",height:"40px"}}):Object(_e.jsx)(Ke.a,{style:{color:"#7b7b7b",width:"40px",height:"40px"}})}),Object(_e.jsx)("ul",{className:"menuNav ".concat(n?" showMenu":""),children:[{id:1,path:"/",text:"Home"}].map((function(e){return Object(_e.jsx)("li",{children:Object(_e.jsx)(oe.c,{to:e.path,activeClassName:"active-link",onClick:function(){r(!1)},exact:!0,children:e.text})},e.id)}))})]})},$e=function(){return Object(_e.jsxs)(_e.Fragment,{children:[Object(_e.jsx)(Qe,{}),Object(_e.jsxs)(je.c,{children:[Object(_e.jsx)(je.a,{exact:!0,path:"/",children:Object(_e.jsx)(Ne,{})}),Object(_e.jsx)(je.a,{exact:!0,path:"/teams/:teamId/info",children:Object(_e.jsx)(Xe,{})}),Object(_e.jsx)(je.a,{exact:!0,path:"/teams/:teamId/fixtures/last/:quantity",children:Object(_e.jsx)(Ve,{})}),Object(_e.jsx)(je.a,{exact:!0,path:"/teams/:teamId/fixtures/next/:quantity",children:Object(_e.jsx)(We,{})}),Object(_e.jsx)(je.a,{path:"*",children:Object(_e.jsx)(Ge,{})})]})]})},et=(n(86),ue({}));i.a.render(Object(_e.jsx)(r.a.StrictMode,{children:Object(_e.jsx)(s.a,{store:et,children:Object(_e.jsx)(oe.a,{basename:"/betlovers",children:Object(_e.jsx)($e,{})})})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.fe9237b4.chunk.js.map