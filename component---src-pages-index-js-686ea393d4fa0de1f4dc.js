(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return u});a(23);var n=a(0),r=a.n(n),i=a(201),l=a(199),c=a(200);var o=[{name:"about-me"},{name:"my-works"},{name:"experience"},{name:"writings"},{name:"skills"},{name:"contact"},{name:"resume"}],u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}},r.a.createElement("div",{id:"nav",style:{width:"100%",padding:"0",textAlign:"center",alignSelf:"center"}},r.a.createElement("a",{href:"/"},r.a.createElement(l.a,{size:"200"})),r.a.createElement("p",{style:{textDecoration:"underline",textDecorationColor:"#e10000",fontSize:"2rem"}},"Krushi Raj Tula"),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("ul",{style:{listStyle:"none",margin:0,padding:0,width:"100%",overflow:"auto"}},o.map(function(e,t){return r.a.createElement(c.a,Object.assign({},e,{key:t}))}))))))},n}(r.a.Component)},196:function(e,t,a){var n;e.exports=(n=a(198))&&n.default||n},197:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Krushi Raj Tula",titleTemplate:"%s's portfolio",defaultDescription:"Portfolio of Krushi Raj Tula",siteUrl:"https://krushiraj.github.io",defaultImage:"/tkrlogo.png",twitterUsername:"krushiraj123"}}}}},198:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(98);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.size;return r.a.createElement("img",{alt:"Krushi Raj",src:"/krushi.jpg",height:t+"px",width:"auto",id:"logo",style:{borderRadius:"50%"}})}},200:function(e,t,a){"use strict";a(49);var n=a(0),r=a.n(n),i=a(191),l=a.n(i);t.a=function(e){var t=e.name;return r.a.createElement("li",{style:{display:"inline-block",padding:"0 5px"}},r.a.createElement("a",{className:l.a.alink,href:"#"+t},t))}},201:function(e,t,a){"use strict";var n=a(197),r=a(0),i=a.n(r),l=a(202),c=(a(66),a(196),a(9).default.enqueue,i.a.createContext({}));function o(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,l=a?a.data:t[n]&&t[n].data;return i.a.createElement(i.a.Fragment,null,l&&r(l),!l&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return i.a.createElement(c.Consumer,null,function(e){return i.a.createElement(o,{data:t,query:a,render:n||r,staticQueryData:e})})};var m=function(e){var t=e.title,a=e.description,r=e.image,c=e.pathname,o=e.article;return i.a.createElement(u,{query:s,render:function(e){var n=e.site.siteMetadata,u=n.defaultTitle,m=n.titleTemplate,s=n.defaultDescription,p=n.siteUrl,d=n.defaultImage,g=n.twitterUsername,f={title:t||u,description:a||s,image:""+p+(r||d),url:""+p+(c||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Helmet,{title:f.title,titleTemplate:m},i.a.createElement("meta",{name:"description",content:f.description}),i.a.createElement("meta",{name:"image",content:f.image}),f.url&&i.a.createElement("meta",{property:"og:url",content:f.url}),!o?null:i.a.createElement("meta",{property:"og:type",content:"article"}),f.title&&i.a.createElement("meta",{property:"og:title",content:f.title}),f.description&&i.a.createElement("meta",{property:"og:description",content:f.description}),f.image&&i.a.createElement("meta",{property:"og:image",content:f.image}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),g&&i.a.createElement("meta",{name:"twitter:creator",content:g}),f.title&&i.a.createElement("meta",{name:"twitter:title",content:f.title}),f.description&&i.a.createElement("meta",{name:"twitter:description",content:f.description}),f.image&&i.a.createElement("meta",{name:"twitter:image",content:f.image})))},data:n})};t.a=m;m.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var s="1376445457"}}]);
//# sourceMappingURL=component---src-pages-index-js-686ea393d4fa0de1f4dc.js.map