(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{208:function(e,t,n){"use strict";n.r(t);n(29);var a=n(0),r=n.n(a),i=n(216),o=n(227),l=n(229),c=n(228),s=n.n(c),u=function(){return r.a.createElement("div",{style:{width:"100%",padding:"0",textAlign:"center",alignSelf:"center"}},r.a.createElement("p",{style:{fontFamily:"Fira Code",fontSize:"2rem"}},r.a.createElement("a",{className:s.a.alink,href:"https://krushiraj.github.io/mini-terminal/"},"Mini-Terminal")))};n.d(t,"default",function(){return f});var m=[{name:"about-me"},{name:"my-works"},{name:"experience"},{name:"writings"},{name:"skills"},{name:"contact"},{name:"resume"}],d=function(e){var t=e.name;return r.a.createElement("p",{style:{textDecoration:"underline",textDecorationColor:"#e10000",fontSize:"2rem"}},t)},p=function(){return r.a.createElement("a",{href:"/"},r.a.createElement(o.a,{size:"200"}))},g=function(){return r.a.createElement("div",{id:"nav",style:{width:"100%",padding:"0",textAlign:"center",alignSelf:"center"}},r.a.createElement(p,null),r.a.createElement(d,{name:"Krushi Raj Tula"}),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(l.a,{items:m,top:!1}),r.a.createElement(u,null)))},f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}},r.a.createElement(g,null)))},a}(r.a.Component)},212:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),i=n(68),o=n.n(i);n.d(t,"a",function(){return o.a});n(213),n(8).default.enqueue;var l=r.a.createContext({});function c(e){var t=e.staticQueryData,n=e.data,a=e.query,i=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,n=e.query,a=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(c,{data:t,query:n,render:a||i,staticQueryData:e})})}},213:function(e,t,n){var a;e.exports=(a=n(217))&&a.default||a},216:function(e,t,n){"use strict";var a=n(220),r=n(0),i=n.n(r),o=n(215),l=n.n(o),c=n(212),s=(n(29),i.a.memo(function(e){var t=e.author,n=e.siteUrl,a=e.datePublished,r=e.defaultTitle,o=e.description,c=e.image,s=e.isBlogPost,u=e.organization,m=e.title,d=e.url,p=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:m,alternateName:r,description:"Portfolio of Krushi Raj Tula"}],g=s?[].concat(p,[{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":d,name:m,image:c}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:m,alternateName:r,headline:m,image:{"@type":"ImageObject",url:c},description:o,author:{"@type":"Person",name:t},publisher:{"@type":"Organization",url:u.url,logo:u.logo,name:u.name},mainEntityOfPage:{"@type":"WebSite","@id":n},datePublished:a}]):p;return i.a.createElement(l.a,null,i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)))})),u=n(221),m=function(e){var t=e.postData,n=e.frontmatter,r=void 0===n?{}:n,o=e.postImage,m=e.isBlogPost;return i.a.createElement(c.b,{query:"4068895274",render:function(e){var n=e.site.siteMetadata,a=r||t.childMarkdownRemark.frontmatter||{},c=a.title||n.title,d=a.description||n.description,p=o?Object(u.normalizeUrl)(""+n.siteUrl+o):null,g=a.slug?Object(u.normalizeUrl)(""+n.siteUrl+a.slug):n.siteUrl,f=!!m&&new Date(a.date).toISOString();return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{htmlAttributes:{lang:"en"}},i.a.createElement("title",null,m?c+" | "+n.title:c),i.a.createElement("meta",{name:"description",content:d}),p&&i.a.createElement("meta",{name:"image",content:p}),i.a.createElement("meta",{property:"og:url",content:g}),m?i.a.createElement("meta",{property:"og:type",content:"article"}):null,i.a.createElement("meta",{property:"og:title",content:c}),i.a.createElement("meta",{property:"og:description",content:d}),p&&i.a.createElement("meta",{property:"og:image",content:p}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:site",content:"@"+n.social.twitter}),i.a.createElement("meta",{name:"twitter:creator",content:"@"+n.social.twitter}),i.a.createElement("meta",{name:"twitter:title",content:c}),i.a.createElement("meta",{name:"twitter:description",content:d}),p&&i.a.createElement("meta",{name:"twitter:image",content:p})),i.a.createElement(s,{isBlogPost:m,url:g,title:c,image:p,description:d,datePublished:f,siteUrl:n.siteUrl,author:n.author,organization:n.organization,defaultTitle:n.title}))},data:a})};m.defaultProps={isBlogPost:!1,postData:{childMarkdownRemark:{}},postImage:null};t.a=m},217:function(e,t,n){"use strict";n.r(t);n(54),n(16),n(13),n(15),n(9),n(22);var a=n(0),r=n.n(a),i=n(101);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},220:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Krushi Raj Tula","description":"Portfolio of Krushi Raj Tula","siteUrl":"https://krushiraj.github.io","image":"/tkrlogo.png","author":"Krushi Raj Tula <krushiraj123@gmail.com>","organization":{"name":"Krushi Raj Tula","url":"https://krushiraj.github.io","logo":"https://krushiraj.github.io/tkrlogo.png"},"social":{"twitter":"krushiraj123"}}}}}')},221:function(e,t,n){n(139),n(17),t.normalizeUrl=function(e){return(e=e.replace(/\/{2,}/g,"/")).match(/^https?:\/\//)||(e=e.replace(/^(https?:\/)(.+)/,"$1/$2")),e}},227:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.size;return r.a.createElement("img",{alt:"Krushi Raj",src:"/krushi.jpg",height:t+"px",width:"auto",id:"logo",style:{borderRadius:"50%"}})}},229:function(e,t,n){"use strict";n(18);var a=n(0),r=n.n(a),i=(n(29),n(228)),o=n.n(i),l=function(e){var t=e.name,n=e.clickHandler;return r.a.createElement("li",{onClick:n,style:{display:"inline-block",padding:"0 5px"}},r.a.createElement("a",{className:o.a.alink,href:"#"+t},t))};function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return m});var s={listStyle:"none",textAlign:"right",margin:0,padding:0,whiteSpace:"nowrap",width:"100%",overflow:"auto",height:"60px"},u={listStyle:"none",margin:0,padding:0,width:"100%",height:"100%"},m=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).resizeFunc=function(e,t){void 0===t&&(t=c(n));var a=document.querySelector("#nav ul li.active"),r=t.underLine.current;if(a){var i=a.getBoundingClientRect().left+window.pageXOffset,o=a.getBoundingClientRect().top+window.pageYOffset;r.style.left=i+"px",r.style.top=o+"px"}},n.clickHandler=function(e,t){void 0===t&&(t=c(n));var a=e.target,r=document.querySelectorAll("#nav ul li a"),i=t.underLine.current;if(i.style.display="initial",!a.classList.contains("active")){for(var o=0;o<r.length;o++)r[o].classList.contains("active")&&(r[o].classList.remove("active"),r[o].style.borderBottom="none");a.classList.add("active"),n.setState({selected:a});var l=a.getBoundingClientRect().width,s=a.getBoundingClientRect().height,u=a.getBoundingClientRect().left+window.pageXOffset,m=a.getBoundingClientRect().top+window.pageYOffset;i.style.width=l+"px",i.style.height=s+"px",i.style.left=u+"px",i.style.top=m+"px",i.style.transform="none"}},n.transitionEndHandler=function(e,t){void 0===t&&(t=c(n));var a=t,r=a.underLine.current,i=a.state.selected;console.log({current:r,selected:i}),i.style.borderBottom="2px solid #e10000",r.style.display="none"},n.underLine=r.a.createRef(),n.state={selected:void 0},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){window.addEventListener("resize",this.resizeFunc)},i.render=function(){var e=this,t=this.props,n=t.top,a=t.items;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{style:n?s:u},a.map(function(t,n){return r.a.createElement(l,Object.assign({},t,{key:n,clickHandler:e.clickHandler}))})),r.a.createElement("span",{ref:this.underLine,style:{position:"absolute",borderBottom:"2px solid #e10000",transition:"all 0.3s ease-in-out",margin:0,padding:0,zIndex:-1},onTransitionEnd:this.transitionEndHandler}))},a}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-26da89f6b95a2de2fc4b.js.map