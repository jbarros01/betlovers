(this.webpackJsonpbetlovers=this.webpackJsonpbetlovers||[]).push([[0],{32:function(e,t,a){e.exports={item:"TeamRow_item__3vscW",teamLogo:"TeamRow_teamLogo__1ujtk",teamName:"TeamRow_teamName__3UuBz"}},52:function(e,t,a){e.exports={header:"SearchTeam_header__3tJnH"}},53:function(e,t,a){e.exports={clearSearch:"FilteredTeamsList_clearSearch__XO1Gu"}},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var r,n=a(1),c=a.n(n),s=a(28),i=a.n(s),o=a(12),u=a(20),l=a(54),j=a(22),b=a(4),d="SEARCH_TEAM",m="SEARCH_TEAM_SUCCESS",x="SEARCH_TEAM_FAILED",h="FETCH_TEAM_LAST_FIXTURES",O="FETCH_TEAM_LAST_FIXTURES_SUCCESS",f="FETCH_TEAM_LAST_FIXTURES_FAILED",p="FETCH_TEAM_NEXT_FIXTURES",v="FETCH_TEAM_NEXT_FIXTURES_SUCCESS",g="FETCH_TEAM_NEXT_FIXTURES_FAILED",T="CLEAR_FILTERED_TEAMS",E="FETCH_LIVE_FIXTURES",y="FETCH_LIVE_FIXTURES_SUCCESS",_="FETCH_LIVE_FIXTURES_FAILED",F="FETCH_TEAM_LEAGUE_STANDINGS",N="FETCH_TEAM_LEAGUE_STANDINGS_SUCCESS",L="FETCH_TEAM_LEAGUE_STANDINGS_FAILED",S={filteredTeams:[],error:null,isSearching:!1},w=function(e){return function(e){return e.entities.teams}(e).filteredTeams},A=a(23),R={teamFixtures:{},liveFixtures:[],error:null,isFetching:!1},I=function(e){return e.entities.fixtures},C=function(e){return I(e).teamFixtures},k=function(e){return I(e).liveFixtures},U=function(e,t){var a;return null===(a=C(e)[t])||void 0===a?void 0:a.last},P=function(e,t){var a;return null===(a=C(e)[t])||void 0===a?void 0:a.next},D={teamLeagueStandings:{},error:null,isFetching:!1},B={entities:Object(u.c)({teams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(b.a)(Object(b.a)({},e),{},{isSearching:!0});case m:return Object(b.a)(Object(b.a)({},e),{},{filteredTeams:[].concat(Object(j.a)(e.filteredTeams),Object(j.a)(t.payload.filteredTeams)),isSearching:!1});case x:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload.error,isSearching:!1});case T:return Object(b.a)(Object(b.a)({},e),{},{filteredTeams:S.filteredTeams});default:return e}},fixtures:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!0});case O:var a,r,n=t.payload.teamId,c=(null===(a=e.teamFixtures[n])||void 0===a?void 0:a.last)||[],s=(null===(r=e.teamFixtures[n])||void 0===r?void 0:r.next)||[];return Object(b.a)(Object(b.a)({},e),{},{teamFixtures:Object(b.a)(Object(b.a)({},e.teamFixtures),{},Object(A.a)({},n,{last:[].concat(Object(j.a)(c),Object(j.a)(t.payload.lastTeamFixtures)),next:s})),isFetching:!1});case f:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload.error,isFetching:!1});case p:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!0});case v:var i,o,u=t.payload.teamId,l=(null===(i=e.teamFixtures[u])||void 0===i?void 0:i.last)||[],d=(null===(o=e.teamFixtures[u])||void 0===o?void 0:o.next)||[];return Object(b.a)(Object(b.a)({},e),{},{teamFixtures:Object(b.a)(Object(b.a)({},e.teamFixtures),{},Object(A.a)({},u,{last:l,next:[].concat(Object(j.a)(d),Object(j.a)(t.payload.nextTeamFixtures))})),isFetching:!1});case g:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload.error,isFetching:!1});case E:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!0});case y:return Object(b.a)(Object(b.a)({},e),{},{liveFixtures:t.payload.liveFixtures,isFetching:!1});case _:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload.error,isFetching:!1});default:return e}},leagues:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(b.a)(Object(b.a)({},e),{},{isFetching:!0});case N:return Object(b.a)(Object(b.a)({},e),{},{teamLeagueStandings:Object(b.a)(Object(b.a)({},e.teamStandings),{},Object(A.a)({},t.payload.teamId,t.payload.teamLeagueStandings)),isFetching:!1});case L:return Object(b.a)(Object(b.a)({},e),{},{error:t.payload.error,isFetching:!1});default:return e}}})},H=a(5),M=a.n(H),G=a(8),X=a(48),V=a(49),q=a(50),z=a.n(q),J=a(51),Q=a.n(J),W=new(function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.baseURL,r=void 0===a?"https://v3.football.api-sports.io/":a,n=t.timeout,c=void 0===n?2e4:n;Object(X.a)(this,e),e.instance||(e.instance=Q()(z.a.create({baseURL:r,timeout:c}),{maxRPS:1}),e.instance.interceptors.request.use((function(e){return Object(b.a)(Object(b.a)({},e),{},{headers:{"x-apisports-key":"45252098c31dfddc6d69b10be6448123"}})})),Object.freeze(e.instance))}return Object(V.a)(e,[{key:"setGateway",value:function(t){e.instance.interceptors.request.use((function(e){return e.baseURL=t,e}))}},{key:"getInstance",value:function(){return e.instance}}]),e}()),Y=a(15),Z=W.getInstance(),K=function(e){var t="teams";return{searchTeam:function(){var a=Object(Y.a)(M.a.mark((function a(r){var n,c;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.get("".concat(t,"?search=").concat(r));case 3:return n=a.sent,c=n.data.response,a.abrupt("return",c);case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}(),getTeam:function(){var a=Object(Y.a)(M.a.mark((function a(r){var n,c;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.get("".concat(t,"/team/").concat(r));case 3:return n=a.sent,c=n.data.response,a.abrupt("return",c[0]);case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}}(Z),$=function(e){var t="fixtures";return{getTeamLastFixtures:function(){var a=Object(Y.a)(M.a.mark((function a(r){var n,c,s,i=arguments;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:10,a.prev=1,a.next=4,e.get("".concat(t,"/team/").concat(r,"/last/").concat(n));case 4:return c=a.sent,s=c.data.response,a.abrupt("return",s);case 9:return a.prev=9,a.t0=a.catch(1),a.abrupt("return",a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}(),getTeamNextFixtures:function(){var a=Object(Y.a)(M.a.mark((function a(r){var n,c,s,i=arguments;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:10,a.prev=1,a.next=4,e.get("".concat(t,"/team/").concat(r,"/next/").concat(n));case 4:return c=a.sent,s=c.data.response,a.abrupt("return",s);case 9:return a.prev=9,a.t0=a.catch(1),a.abrupt("return",a.t0);case 12:case"end":return a.stop()}}),a,null,[[1,9]])})));return function(e){return a.apply(this,arguments)}}(),getLiveFixtures:function(){var a=Object(Y.a)(M.a.mark((function a(){var r,n;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.get("".concat(t,"?live=all"));case 3:return r=a.sent,n=r.data.response,a.abrupt("return",n);case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}()}}(Z),ee=function(e){var t="leagues";return{getTeamLeagues:function(){var a=Object(Y.a)(M.a.mark((function a(r){var n,c;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.get("".concat(t,"/team/").concat(r));case 3:return n=a.sent,c=n.data.response,a.abrupt("return",c);case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}(),getLeagueStandings:function(){var t=Object(Y.a)(M.a.mark((function t(a){var r,n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.get("".concat("leagueTable","/").concat(a));case 3:return r=t.sent,n=r.data.response,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),getCurrentTeamLeague:function(){var a=Object(Y.a)(M.a.mark((function a(r){var n,c;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e.get("".concat(t,"?team=").concat(r,"&current=true&type=league"));case 3:return n=a.sent,c=n.data.response,a.abrupt("return",c[0]);case 8:return a.prev=8,a.t0=a.catch(0),a.abrupt("return",a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}}(Z),te=(r=Z,{getStandings:function(){var e=Object(Y.a)(M.a.mark((function e(t){var a,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.get("".concat("standings").concat(t));case 3:return a=e.sent,n=a.data.response,e.abrupt("return",n[0].league.standings[0]);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()}),ae=function(e){return{type:m,payload:{filteredTeams:e}}},re=function(){return{type:T}},ne=M.a.mark(ce);function ce(e){var t,a;return M.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload.name,r.prev=1,r.next=4,Object(G.b)(K.searchTeam,t);case 4:return a=r.sent,r.next=7,Object(G.c)(ae(a));case 7:r.next=13;break;case 9:return r.prev=9,r.t0=r.catch(1),r.next=13,Object(G.c)((n=r.t0,{type:x,payload:{error:n}}));case 13:case"end":return r.stop()}var n}),ne,null,[[1,9]])}var se=function(e,t){return{type:h,payload:{teamId:e,quantity:t}}},ie=function(e,t){return{type:O,payload:{teamId:e,lastTeamFixtures:t}}},oe=function(e,t){return{type:p,payload:{teamId:e,quantity:t}}},ue=function(e,t){return{type:v,payload:{teamId:e,nextTeamFixtures:t}}},le=function(e){return{type:y,payload:{liveFixtures:e}}},je=M.a.mark(be);function be(e){var t,a,r,n;return M.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,a=t.teamId,r=t.quantity,c.prev=1,c.next=4,Object(G.b)($.getTeamLastFixtures,a,r);case 4:return n=c.sent,c.next=7,Object(G.c)(ie(a,n));case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(1),c.next=13,Object(G.c)((s=c.t0,{type:f,payload:{error:s}}));case 13:case"end":return c.stop()}var s}),je,null,[[1,9]])}var de=M.a.mark(me);function me(e){var t,a,r,n;return M.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,a=t.teamId,r=t.quantity,c.prev=1,c.next=4,Object(G.b)($.getTeamNextFixtures,a,r);case 4:return n=c.sent,c.next=7,Object(G.c)(ue(a,n));case 7:c.next=13;break;case 9:return c.prev=9,c.t0=c.catch(1),c.next=13,Object(G.c)((s=c.t0,{type:g,payload:{error:s}}));case 13:case"end":return c.stop()}var s}),de,null,[[1,9]])}var xe=M.a.mark(he);function he(){var e;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(G.b)($.getLiveFixtures);case 3:return e=t.sent,t.next=6,Object(G.c)(le(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(G.c)((a=t.t0,{type:_,payload:{error:a}}));case 12:case"end":return t.stop()}var a}),xe,null,[[0,8]])}var Oe=function(e,t){return{type:N,payload:{teamLeagueStandings:e,teamId:t}}},fe=M.a.mark(pe);function pe(e){var t,a,r,n,c,s;return M.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload.teamId,i.prev=1,i.next=4,Object(G.b)(ee.getCurrentTeamLeague,t);case 4:return a=i.sent,r=a.league.id,n=a.seasons,c=n[0].year,i.next=10,Object(G.b)(te.getStandings,"?league=".concat(r,"&season=").concat(c));case 10:return s=i.sent,i.next=13,Object(G.c)(Oe(s,t));case 13:i.next=19;break;case 15:return i.prev=15,i.t0=i.catch(1),i.next=19,Object(G.c)((o=i.t0,{type:L,payload:{error:o}}));case 19:case"end":return i.stop()}var o}),fe,null,[[1,15]])}var ve=M.a.mark(ge);function ge(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(G.a)([Object(G.d)(d,ce),Object(G.d)(h,be),Object(G.d)(p,me),Object(G.d)(E,he),Object(G.d)(F,pe)]);case 2:case"end":return e.stop()}}),ve)}var Te=function(e){var t=u.d,a=Object(l.a)(),r=Object(u.e)(Object(u.c)(B),e,t(Object(u.a)(a)));return a.run(ge),r},Ee=a(11),ye=a(10),_e=function(e){return"/teams/".concat(e,"/info")},Fe="FOR THE PASSIONATES.",Ne="Please write item",Le="Search your team...",Se="Clear search",we="LIVE GAMES",Ae={NOT_STARTED:"Not Started",TBD:"Time To Be Defined",MATCH_FINISHED:"Match Finished",MATCH_CANCELLED:"Match Cancelled"},Re="CANC",Ie="-",Ce="TBD",ke="No info available",Ue=[{id:1,header:"Clubs",options:[{label:"...",route:"#"}]},{id:2,header:"Fixtures",options:[{label:"Live Games",route:"#"},{label:"Last Games",route:"#"},{label:"Next Games",route:"#"},{label:"...",route:"#"}]},{id:3,header:"Leagues",options:[{label:"...",route:"#"}]},{id:4,header:"Predictions",options:[{label:"...",route:"#"}]}],Pe={"Promotion - Champions League (Group Stage)":"#004682",Promotion:"#004682","Championship Round":"#004682","Semi-finals":"#004682","Quarter-finals":"#004682","Final Series":"#004682","Next Round":"#004682","Promotion - Campeonato Paulista (Play Offs)":"#004682","Promotion - Copa de la Liga Profesional (Play Offs)":"#004682","CONMEBOL Libertadores":"#004682",Final:"#004682","Final Series Play-offs":"#1EA8EC","Play-off":"#1EA8EC","Promotion - Champions League (Qualification)":"#1EA8EC","UEFA Europa League Play-off":"#1EA8EC","5th-8th Place Play-offs":"#1EA8EC","Promotion Play-off":"#1EA8EC","Promotion - Europa League (Group Stage)":"#7F0029","Promotion - Europa Conference League (Qualification)":"#b7860b","Relegation Play-off":"#bd0000","Relegation Round":"#ff4141",Relegation:"#ff4141"},De={"(Relegation)":"#bd0000","Relegation -":"#ff4141"},Be="Rank",He="Club",Me={FULL:"Matches Played",ABBREVIATURE:"MP"},Ge="Win",Xe="Draw",Ve="Loss",qe={FULL:"Goals For",ABBREVIATURE:"GF"},ze={FULL:"Goals Against",ABBREVIATURE:"GA"},Je={FULL:"Goals Difference",ABBREVIATURE:"GD"},Qe="Points",We=a(52),Ye=a.n(We),Ze=a(0),Ke=function(){return Object(Ze.jsx)("header",{className:Ye.a.header,children:Object(Ze.jsx)("h1",{children:Fe})})},$e=a(19),et=a(21),tt=function(e){var t=e.onSearch,a=Object(n.useState)(""),r=Object($e.a)(a,2),c=r[0],s=r[1];return Object(Ze.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.trim()?(t(c),s("")):alert(Ne)},className:"form-container",children:[Object(Ze.jsx)("span",{className:"input-search",children:Object(Ze.jsx)(et.d,{})}),Object(Ze.jsx)("input",{type:"text",className:"input-text",placeholder:Le,value:c,name:"team",onChange:function(e){s(e.target.value)}}),Object(Ze.jsx)("button",{className:"input-submit",children:Object(Ze.jsx)(et.a,{})})]})},at=a(32),rt=a.n(at),nt=function(e){var t=e.team;return Object(Ze.jsx)(Ee.b,{to:_e(t.id),className:rt.a.item,children:Object(Ze.jsxs)("li",{children:[Object(Ze.jsx)("div",{className:rt.a.teamLogo,children:Object(Ze.jsx)("img",{src:t.logo,alt:"teamLogo"})}),Object(Ze.jsx)("div",{className:rt.a.teamName,children:Object(Ze.jsx)("label",{children:t.name})})]})})};nt.defaultProps={team:{}};var ct=nt,st=a(53),it=a.n(st),ot=function(e){var t=e.teams,a=Object(o.b)(),r=Object(o.c)(w),n=function(){a(re())};return r.length>0&&Object(Ze.jsxs)("ul",{children:[Object(Ze.jsx)("li",{className:it.a.clearSearch,children:Object(Ze.jsxs)("button",{onClick:n,children:[Se,Object(Ze.jsx)(et.e,{})]})}),t.map((function(e){var t=e.team;return Object(Ze.jsx)(ct,{team:t},t.id)}))]})};ot.defaultProps={teams:[]};var ut=ot,lt=a(9),jt=a.n(lt),bt=function(e){var t=e.info,a=t.fixture,r=a.date,n=a.status,c=n.short,s=n.elapsed,i=t.teams,o=i.home,u=o.id,l=o.logo,j=o.name,b=i.away,d=b.id,m=b.logo,x=b.name,h=t.goals,O=h.home,f=h.away,p=t.league.logo,v=function(){return c===Ae.NOT_STARTED||c===Ae.TBD?Object(Ze.jsx)("div",{className:jt.a.fixtureResult,children:Ie}):c===Ae.MATCH_CANCELLED?Object(Ze.jsx)("div",{className:jt.a.cancelledLabel,children:Re}):Object(Ze.jsxs)("div",{className:jt.a.ongoingResult,children:[Object(Ze.jsxs)("div",{className:jt.a.timeElapsed,children:[s,Object(Ze.jsx)("img",{src:"".concat("/betlovers","/blinker.gif"),alt:"timeElapsed"})]}),Object(Ze.jsx)("div",{className:jt.a.goals,children:Object(Ze.jsxs)("b",{children:[O," ",Ie," ",f]})})]})};return Object(Ze.jsxs)("li",{className:jt.a.fixture,children:[Object(Ze.jsx)("div",{className:jt.a.eventDate,children:c===Ae.TBD?Ce:r.slice(0,16).replace("T"," ")}),c===Ae.MATCH_FINISHED?function(){var e=O<f;return O>f?Object(Ze.jsxs)(Ze.Fragment,{children:[Object(Ze.jsx)("div",{className:jt.a.homeTeamName,children:Object(Ze.jsx)(Ee.b,{to:_e(u),children:Object(Ze.jsx)("b",{children:j})})}),Object(Ze.jsx)("div",{className:jt.a.homeTeamLogo,children:Object(Ze.jsx)("img",{src:l,alt:"homeTeamLogo"})}),Object(Ze.jsx)("div",{className:jt.a.fixtureResult,children:Object(Ze.jsxs)("b",{children:[O," ",Ie," ",f]})}),Object(Ze.jsx)("div",{className:jt.a.awayTeamLogo,children:Object(Ze.jsx)("img",{src:m,alt:"awayTeamLogo"})}),Object(Ze.jsx)("div",{className:jt.a.awayTeamName,children:Object(Ze.jsx)(Ee.b,{to:_e(d),children:x})})]}):e?Object(Ze.jsxs)(Ze.Fragment,{children:[Object(Ze.jsx)("div",{className:jt.a.homeTeamName,children:Object(Ze.jsx)(Ee.b,{to:_e(u),children:j})}),Object(Ze.jsx)("div",{className:jt.a.homeTeamLogo,children:Object(Ze.jsx)("img",{src:l,alt:"homeTeamLogo"})}),Object(Ze.jsx)("div",{className:jt.a.fixtureResult,children:Object(Ze.jsxs)("b",{children:[O," ",Ie," ",f]})}),Object(Ze.jsx)("div",{className:jt.a.awayTeamLogo,children:Object(Ze.jsx)("img",{src:m,alt:"awayTeamLogo"})}),Object(Ze.jsx)("div",{className:jt.a.awayTeamName,children:Object(Ze.jsx)(Ee.b,{to:_e(d),children:Object(Ze.jsx)("b",{children:x})})})]}):Object(Ze.jsxs)(Ze.Fragment,{children:[Object(Ze.jsx)("div",{className:jt.a.homeTeamName,children:Object(Ze.jsx)(Ee.b,{to:_e(u),children:j})}),Object(Ze.jsx)("div",{className:jt.a.homeTeamLogo,children:Object(Ze.jsx)("img",{src:l,alt:"homeTeamLogo"})}),Object(Ze.jsx)("div",{className:jt.a.fixtureResult,children:Object(Ze.jsxs)("b",{children:[O," ",Ie," ",f]})}),Object(Ze.jsx)("div",{className:jt.a.awayTeamLogo,children:Object(Ze.jsx)("img",{src:m,alt:"awayTeamLogo"})}),Object(Ze.jsx)("div",{className:jt.a.awayTeamName,children:Object(Ze.jsx)(Ee.b,{to:_e(d),children:x})})]})}():Object(Ze.jsxs)(Ze.Fragment,{children:[Object(Ze.jsx)("div",{className:jt.a.homeTeamName,children:Object(Ze.jsx)(Ee.b,{to:_e(u),children:j})}),Object(Ze.jsx)("div",{className:jt.a.homeTeamLogo,children:Object(Ze.jsx)("img",{src:l,alt:"homeTeamLogo"})}),v(),Object(Ze.jsx)("div",{className:jt.a.awayTeamLogo,children:Object(Ze.jsx)("img",{src:m,alt:"awayTeamLogo"})}),Object(Ze.jsx)("div",{className:jt.a.awayTeamName,children:Object(Ze.jsx)(Ee.b,{to:_e(d),children:x})})]}),Object(Ze.jsx)("div",{className:jt.a.leagueLogo,children:Object(Ze.jsx)("img",{src:p,alt:"leagueLogo"})})]})};bt.defaultProps={fixture:{}};var dt=bt,mt=function(e){var t=e.fixtures,a=e.teamId;return Object(Ze.jsx)("ul",{children:t.map((function(e){return Object(Ze.jsx)(dt,{info:e,teamId:a},e.fixture.id)}))})};mt.defaultProps={fixtures:[],teamId:null};var xt=mt,ht=function(){var e=Object(o.b)(),t=Object(o.c)(w),a=Object(o.c)(k),r=a.length>0&&!t.length>0;Object(n.useEffect)((function(){e(re()),e({type:E})}),[]);return Object(Ze.jsx)("div",{className:"container",children:Object(Ze.jsxs)("div",{className:"inner-homepage",children:[Object(Ze.jsx)(Ke,{}),Object(Ze.jsx)(tt,{onSearch:function(t){var a=t.trim().toLowerCase().replaceAll(" ","_");e(re()),e(function(e){return{type:d,payload:{name:e}}}(a))}}),Object(Ze.jsx)(ut,{teams:t}),r&&Object(Ze.jsxs)(Ze.Fragment,{children:[Object(Ze.jsxs)("header",{className:"liveHeader",children:[we,Object(Ze.jsx)("img",{src:"".concat("/betlovers","/live.gif"),alt:"live"})]}),Object(Ze.jsx)(xt,{fixtures:a})]})]})})},Ot=(a(84),function(e){var t=e.standings,a=e.teamId;return Object(Ze.jsxs)("table",{children:[Object(Ze.jsx)("thead",{children:Object(Ze.jsxs)("tr",{class:"tableHeader",children:[Object(Ze.jsx)("th",{children:Be}),Object(Ze.jsx)("th",{class:"club",children:He}),Object(Ze.jsx)("th",{children:Me.ABBREVIATURE}),Object(Ze.jsx)("th",{children:Qe}),Object(Ze.jsx)("th",{children:Ge}),Object(Ze.jsx)("th",{children:Xe}),Object(Ze.jsx)("th",{children:Ve}),Object(Ze.jsx)("th",{children:qe.ABBREVIATURE}),Object(Ze.jsx)("th",{children:ze.ABBREVIATURE}),Object(Ze.jsx)("th",{children:Je.ABBREVIATURE})]})}),Object(Ze.jsx)("tbody",{children:t.map((function(e){var t=e.rank,r=e.team,n=r.logo,c=r.name,s=r.id,i=e.points,o=e.description,u=e.goalsDiff,l=e.all,j=l.played,d=l.win,m=l.draw,x=l.lose,h=l.goals,O=h.for,f=h.against,p="white";Object.entries(Pe).forEach((function(e){var t=Object($e.a)(e,2),a=t[0],r=t[1];o===a?p=r:Object.entries(De).forEach((function(e){var t=Object($e.a)(e,2),a=t[0],r=t[1];(null===o||void 0===o?void 0:o.includes(a))&&(p=r)}))}));var v={background:s===Number(a)?"aliceblue":"white"};return Object(Ze.jsxs)("tr",{children:[Object(Ze.jsx)("td",{style:Object(b.a)({borderBottom:"3px solid ".concat(p)},v),children:t}),Object(Ze.jsxs)("td",{style:v,class:"club",children:[Object(Ze.jsx)("div",{class:"teamLogo",children:Object(Ze.jsx)("img",{src:n,alt:""})}),Object(Ze.jsx)("div",{class:"teamName",children:Object(Ze.jsx)(Ee.b,{to:_e(s),children:c})})]}),Object(Ze.jsx)("td",{style:v,children:j}),Object(Ze.jsx)("td",{style:v,children:i}),Object(Ze.jsx)("td",{style:v,children:d}),Object(Ze.jsx)("td",{style:v,children:m}),Object(Ze.jsx)("td",{style:v,children:x}),Object(Ze.jsx)("td",{style:v,children:O}),Object(Ze.jsx)("td",{style:v,children:f}),Object(Ze.jsx)("td",{style:v,children:u})]})}))})]})});Ot.defaultProps={standings:[],teamId:""};var ft=Ot,pt=function(){var e=Object(o.b)(),t=Object(ye.f)().teamId,a=Object(o.c)((function(e){return function(e,t){return function(e){return e.entities.leagues}(e).teamLeagueStandings[t]}(e,t)}));Object(n.useEffect)((function(){a||e(function(e){return{type:F,payload:{teamId:e}}}(t))}),[t]);return Object(Ze.jsx)("div",{className:"container",children:Object(Ze.jsx)("div",{className:"inner",children:a?Object(Ze.jsx)(ft,{standings:a,teamId:t}):ke})})},vt=function(){var e=Object(o.b)(),t=Object(n.useState)(10),a=Object($e.a)(t,2),r=a[0],c=a[1],s=Object(ye.f)().teamId,i=Object(o.c)((function(e){return U(e,s)})),u=Object(o.c)((function(e){return function(e,t){var a;return null===(a=U(e,t))||void 0===a?void 0:a.length}(e,s)}));Object(n.useEffect)((function(){return u||e(se(s,r)),function(){return c(10)}}),[s]);return Object(Ze.jsx)("div",{className:"container",children:Object(Ze.jsx)("div",{className:"inner",children:u?Object(Ze.jsxs)(Ze.Fragment,{children:[Object(Ze.jsx)(xt,{fixtures:i}),Object(Ze.jsx)("div",{className:"loadMore",children:Object(Ze.jsx)("button",{onClick:function(){c(r+10),e(se(s,r))},children:"Load more..."})})]}):ke})})},gt=function(){var e=Object(o.b)(),t=Object(n.useState)(10),a=Object($e.a)(t,2),r=a[0],c=a[1],s=Object(ye.f)().teamId,i=Object(o.c)((function(e){return P(e,s)})),u=Object(o.c)((function(e){return function(e,t){var a;return null===(a=P(e,t))||void 0===a?void 0:a.length}(e,s)}));Object(n.useEffect)((function(){return u||e(oe(s,r)),function(){return c(10)}}),[s]);return Object(Ze.jsx)("div",{className:"container",children:Object(Ze.jsx)("div",{className:"inner",children:u?Object(Ze.jsxs)(Ze.Fragment,{children:[Object(Ze.jsx)(xt,{fixtures:i}),Object(Ze.jsx)("div",{className:"loadMore",children:Object(Ze.jsx)("button",{onClick:function(){c(r+10),e(oe(s,r))},children:"Load more..."})})]}):ke})})},Tt=function(){return Object(Ze.jsx)("div",{children:Object(Ze.jsx)("h1",{children:"No match for this page"})})},Et=(a(85),function(){var e=Object(n.useState)(!1),t=Object($e.a)(e,2),a=t[0],r=t[1],c=function(){r(!a)};return Object(Ze.jsx)("div",{class:"nav",children:Object(Ze.jsx)("header",{class:"menuNav ".concat(a?"is-active":""),id:"masthead",role:"banner",children:Object(Ze.jsxs)("div",{class:"nav-container",children:[Object(Ze.jsx)("button",{onClick:c,class:"menuNav ".concat(a?"hamburger hamburger--boring is-active":"hamburger hamburger--boring"),type:"button",children:Object(Ze.jsx)("span",{class:"hamburger-box",children:Object(Ze.jsx)("span",{class:"hamburger-inner"})})}),Object(Ze.jsx)(Ee.b,{to:"/",class:"menuNav ".concat(a?"logo is-active":"logo"),children:Object(Ze.jsx)("span",{children:"betlovers."})}),a&&Object(Ze.jsxs)("nav",{class:"menuNav is-active",id:"site-nav",role:"navigation",children:[Ue.map((function(e){return Object(Ze.jsxs)("div",{class:"col",children:[Object(Ze.jsx)("h4",{children:e.header}),Object(Ze.jsx)("ul",{children:e.options.map((function(e){return Object(Ze.jsx)("li",{children:Object(Ze.jsx)("a",{href:e.route,children:e.label})})}))})]})})),Object(Ze.jsx)("div",{class:"col",children:Object(Ze.jsxs)("ul",{class:"social",children:[Object(Ze.jsx)("li",{children:Object(Ze.jsx)("a",{href:"",children:Object(Ze.jsx)(et.b,{})})}),Object(Ze.jsx)("li",{children:Object(Ze.jsx)("a",{href:"",children:Object(Ze.jsx)(et.f,{})})}),Object(Ze.jsx)("li",{children:Object(Ze.jsx)("a",{href:"",children:Object(Ze.jsx)(et.c,{})})})]})})]})]})})})}),yt=function(){return Object(Ze.jsxs)(Ze.Fragment,{children:[Object(Ze.jsx)(Et,{}),Object(Ze.jsxs)(ye.c,{children:[Object(Ze.jsx)(ye.a,{exact:!0,path:"/",children:Object(Ze.jsx)(ht,{})}),Object(Ze.jsx)(ye.a,{exact:!0,path:"/teams/:teamId/info",children:Object(Ze.jsx)(pt,{})}),Object(Ze.jsx)(ye.a,{exact:!0,path:"/teams/:teamId/fixtures/last",children:Object(Ze.jsx)(vt,{})}),Object(Ze.jsx)(ye.a,{exact:!0,path:"/teams/:teamId/fixtures/next",children:Object(Ze.jsx)(gt,{})}),Object(Ze.jsx)(ye.a,{path:"*",children:Object(Ze.jsx)(Tt,{})})]})]})},_t=(a(86),Te({}));i.a.render(Object(Ze.jsx)(c.a.StrictMode,{children:Object(Ze.jsx)(o.a,{store:_t,children:Object(Ze.jsx)(Ee.a,{basename:"/betlovers",children:Object(Ze.jsx)(yt,{})})})}),document.getElementById("root"))},9:function(e,t,a){e.exports={fixture:"FixtureRow_fixture__1a-s3",checkbox:"FixtureRow_checkbox__3MxcJ",homeTeamName:"FixtureRow_homeTeamName__NozqZ",awayTeamName:"FixtureRow_awayTeamName__1N4Zk",homeTeamLogo:"FixtureRow_homeTeamLogo__1KFpR",awayTeamLogo:"FixtureRow_awayTeamLogo__3_Afo",textInput:"FixtureRow_textInput__1YUrc",ongoingResult:"FixtureRow_ongoingResult__2YRgN",fixtureLabel:"FixtureRow_fixtureLabel__3_16W",timeElapsed:"FixtureRow_timeElapsed__1BqHI",leagueLogo:"FixtureRow_leagueLogo__zuzrl",eventDate:"FixtureRow_eventDate__3-HB0"}}},[[87,1,2]]]);
//# sourceMappingURL=main.a0e11d97.chunk.js.map