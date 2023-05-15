"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[652],{364:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(184),i=function(e){var n=e.onClick,r=e.children;e.current;return(0,t.jsx)("button",{className:"button",onClick:n,type:"button",children:r})}},652:function(e,n,r){r.r(n),r.d(n,{default:function(){return v}});var t=r(683),i=r(861),c=r(439),s=r(757),o=r.n(s),a=r(791),u=r(689),l=r(87),f=r(553),d=r(691),h=r(364),p=r(184),v=function(){var e,n,r=(0,a.useState)({}),s=(0,c.Z)(r,2),v=s[0],j=s[1],b=(0,a.useState)(!1),x=(0,c.Z)(b,2),g=x[0],m=x[1],w=(0,a.useState)(!1),y=(0,c.Z)(w,2),O=y[0],Z=y[1],_=(0,u.UO)().filmId,k=(0,u.TH)(),P=(0,a.useRef)(null!==(e=null===(n=k.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");(0,a.useEffect)((function(){if(_){var e=function(){var e=(0,i.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,f.Z)("movie/".concat(_));case 4:n=e.sent,j((0,t.Z)({},n)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),Z(!0),console.log(e.t0);case 12:return e.prev=12,m(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[_]);var S=v.poster_path,C=v.original_title,U=v.title,D=v.vote_average,E=v.overview,N=v.genres;return(0,p.jsxs)(d.Z,{children:[(0,p.jsx)(l.rU,{to:P.current,children:(0,p.jsx)(h.Z,{children:"\u043d\u0430\u0437\u0430\u0434"})}),(0,p.jsxs)("div",{className:"film_info",children:[S&&(0,p.jsx)("img",{loading:"lazy",className:"film_images",src:"https://image.tmdb.org/t/p/w500".concat(S),alt:C}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:U}),(0,p.jsxs)("p",{children:["User rating: ",D]}),(0,p.jsx)("h3",{children:"Movie description"}),E?(0,p.jsx)("p",{children:E}):"\u043d\u0435\u043c\u0430\u0454 \u043e\u043f\u0438\u0441\u0443",(0,p.jsx)("h3",{children:"Genre/Genres"}),N&&(0,p.jsx)("p",{children:N.map((function(e){return e.name})).join(", ")}),(0,p.jsxs)("ul",{style:{display:"flex",gap:8,marginBottom:12},children:[(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"cast",children:(0,p.jsx)(h.Z,{children:"Cast"})})}),(0,p.jsx)("li",{children:(0,p.jsx)(l.rU,{to:"reviews",children:(0,p.jsx)(h.Z,{children:"Reviews"})})})]}),(0,p.jsx)(a.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(u.j3,{})})]})]}),g&&(0,p.jsx)("h2",{children:"We download movies"}),O&&(0,p.jsx)("h2",{children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"})]})}},553:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(861),i=r(757),c=r.n(i),s=r(243),o="https://api.themoviedb.org/3/",a="432ccaf7113b52e993b924f1fb358945",u=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:"",t=i.length>2&&void 0!==i[2]?i[2]:1,e.next=4,s.Z.get("".concat(o).concat(n),{params:{page:t,api_key:a,language:"en",query:r}}).then((function(e){return e.data}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=u},683:function(e,n,r){function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}r.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=652.543f2abc.chunk.js.map