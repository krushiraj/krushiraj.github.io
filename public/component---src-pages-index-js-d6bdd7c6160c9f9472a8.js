(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return l});var n=a(0),r=a.n(n),i=a(195);var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement("div",null,"Here is my portfolio"),r.a.createElement("a",{href:"/mini-teminal/"},"Click here to open Mini-Terminal"))},n}(r.a.Component)},192:function(e,t,a){var n;e.exports=(n=a(194))&&n.default||n},193:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Krushi Raj Tula",defaultDescription:"Portfolio of Krushi Raj Tula",siteUrl:"https://krushiraj.github.io",defaultImage:"/tkrlogo.png",twitterUsername:"krushiraj123"}}}}},194:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),i=a(98);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},195:function(e,t,a){"use strict";var n=a(193),r=a(0),i=a.n(r),l=a(196),o=(a(66),a(192),a(9).default.enqueue,i.a.createContext({}));function c(e){var t=e.staticQueryData,a=e.data,n=e.query,r=e.render,l=a?a.data:t[n]&&t[n].data;return i.a.createElement(i.a.Fragment,null,l&&r(l),!l&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,r=e.children;return i.a.createElement(o.Consumer,null,function(e){return i.a.createElement(c,{data:t,query:a,render:n||r,staticQueryData:e})})};var m=function(e){var t=e.title,a=e.description,r=e.image,o=e.pathname,c=e.article;return i.a.createElement(u,{query:p,render:function(e){var n=e.site.siteMetadata,u=n.defaultTitle,m=n.titleTemplate,p=n.defaultDescription,s=n.siteUrl,d=n.defaultImage,f=n.twitterUsername,g={title:t||u,description:a||p,image:""+s+(r||d),url:""+s+(o||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Helmet,{title:g.title,titleTemplate:m},i.a.createElement("meta",{name:"description",content:g.description}),i.a.createElement("meta",{name:"image",content:g.image}),g.url&&i.a.createElement("meta",{property:"og:url",content:g.url}),!c?null:i.a.createElement("meta",{property:"og:type",content:"article"}),g.title&&i.a.createElement("meta",{property:"og:title",content:g.title}),g.description&&i.a.createElement("meta",{property:"og:description",content:g.description}),g.image&&i.a.createElement("meta",{property:"og:image",content:g.image}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),f&&i.a.createElement("meta",{name:"twitter:creator",content:f}),g.title&&i.a.createElement("meta",{name:"twitter:title",content:g.title}),g.description&&i.a.createElement("meta",{name:"twitter:description",content:g.description}),g.image&&i.a.createElement("meta",{name:"twitter:image",content:g.image})))},data:n})};t.a=m;m.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var p="728552493"}}]);
//# sourceMappingURL=component---src-pages-index-js-d6bdd7c6160c9f9472a8.js.map