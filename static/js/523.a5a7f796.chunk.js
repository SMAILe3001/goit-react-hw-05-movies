"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[523],{523:function(e,t,n){n.r(t);var r=n(433),a=n(861),i=n(439),c=n(757),u=n.n(c),s=n(791),o=n(689),f=n(553),p=n(184);t.default=function(){var e=(0,s.useState)([]),t=(0,i.Z)(e,2),n=t[0],c=t[1],l=(0,s.useState)(!1),h=(0,i.Z)(l,2),v=h[0],d=h[1],g=(0,s.useState)(!1),m=(0,i.Z)(g,2),w=m[0],b=m[1],x=(0,o.UO)().filmId;return(0,s.useEffect)((function(){if(x){var e=function(){var e=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,(0,f.Z)("movie/".concat(x,"/videos"));case 4:t=e.sent,c((0,r.Z)(t.results)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),b(!0),console.log(e.t0);case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[x]),(0,p.jsxs)(p.Fragment,{children:[0!==(null===n||void 0===n?void 0:n.length)?(0,p.jsx)("div",{children:n.filter((function(e){return"Trailer"===e.type})).map((function(e){var t=e.id,n=e.key,r=e.name;return(0,p.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(n),title:r},t)}))}):(0,p.jsx)("p",{children:"Trailer unavailable"}),v&&(0,p.jsx)("h2",{children:"We are loading reviews"}),w&&(0,p.jsx)("h2",{children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"})]})}},553:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(861),a=n(757),i=n.n(a),c=n(7),u=n.n(c),s=n(243),o="https://api.themoviedb.org/3/",f="432ccaf7113b52e993b924f1fb358945",p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"",r=a.length>2&&void 0!==a[2]?a[2]:1,e.next=4,s.Z.get("".concat(o).concat(t),{params:{page:r,api_key:f,language:"en",query:n}}).then((function(e){return e.data}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=p;p.propType={parameters:u().string,query:u().string,page:u().number}}}]);
//# sourceMappingURL=523.a5a7f796.chunk.js.map