_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"20a2":function(e,t,n){e.exports=n("nOHt")},"3De/":function(e,t,n){e.exports={single:"style_single__1buOy"}},"HaE+":function(e,t,n){"use strict";function r(e,t,n,r,c,s,i){try{var o=e[s](i),a=o.value}catch(l){return void n(l)}o.done?t(a):Promise.resolve(a).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,s){var i=e.apply(t,n);function o(e){r(i,c,s,o,a,"next",e)}function a(e){r(i,c,s,o,a,"throw",e)}o(void 0)}))}}n.d(t,"a",(function(){return c}))},Q5td:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),c=n.n(r),s=n("hGi/"),i=n("HaE+"),o=n("nKUr"),a=(n("q1tI"),n("g4pe")),l=n.n(a),u=n("vRNQ"),h=n.n(u),d=n("vcXL"),j=n.n(d),b=n("3De/"),p=n.n(b),x=n("YFqc"),_=n.n(x),f=(n("20a2"),n("g/15"),function(e){var t=e.posts,n=e.repos;return console.log("fetch API by posts",t),console.log("fetch API by postsRepo",n),t?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(l.a,{children:[Object(o.jsx)("title",{children:"Next JS | Repo"}),Object(o.jsx)("meta",{name:"keyword",contain:"nextjs"})]}),Object(o.jsxs)("div",{className:"DynamicPage__container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{className:"avatar",src:t.avatar_url}),Object(o.jsxs)("h2",{children:[t.login," ",t.name," "]}),Object(o.jsx)("h4",{children:t.bio})]}),Object(o.jsxs)("div",{className:h.a.grid,children:[Object(o.jsxs)("div",{className:h.a.card,children:[Object(o.jsx)(_.a,{href:"/github/repo",as:"/github/repo",children:Object(o.jsx)("a",{children:Object(o.jsxs)("h3",{children:[t.public_repos," "]})})}),Object(o.jsx)("h3",{children:"public repos"})]}),Object(o.jsxs)("div",{className:h.a.card,children:[Object(o.jsx)(_.a,{href:"/github/follwing",as:"/github/follwer",children:Object(o.jsx)("a",{children:Object(o.jsxs)("h3",{children:[t.followers," "]})})}),Object(o.jsx)("h3",{children:"Followers"})]}),Object(o.jsxs)("div",{className:h.a.card,children:[Object(o.jsx)(_.a,{href:"/github/follwer",as:"/github/follwing",children:Object(o.jsx)("a",{children:Object(o.jsxs)("h3",{children:[t.following," "]})})}),Object(o.jsx)("h3",{children:"Following"})]})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{children:"This is repo's page"}),n.map((function(e){return Object(o.jsx)(_.a,{target:"_blank",href:e.html_url,children:Object(o.jsx)("a",{className:p.a.single,children:Object(o.jsx)("h4",{children:e.name})})})}))]})]}):Object(o.jsx)("div",{children:"Loading..."})});f.getInitialProps=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r,i,o,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(s.a)(t),n="gaearon",e.next=4,j()("https://api.github.com/users/".concat(n));case 4:return r=e.sent,e.next=7,r.json();case 7:return i=e.sent,e.next=10,j()("https://api.github.com/users/".concat(n,"/repos"));case 10:return o=e.sent,e.next=13,o.json();case 13:return a=e.sent,e.abrupt("return",{posts:i,repos:a,fallback:!1});case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=f},"hGi/":function(e,t,n){"use strict";function r(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,"a",(function(){return r}))},vRNQ:function(e,t,n){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports},wQcu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/github/repo",function(){return n("Q5td")}])}},[["wQcu",0,2,1,3]]]);