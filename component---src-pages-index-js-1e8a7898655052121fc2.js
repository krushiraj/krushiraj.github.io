(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(200),l=n(199),o=n(201),c=n(191),s=n.n(c),u=function(){return r.a.createElement("div",{style:{width:"100%",padding:"0",textAlign:"center",alignSelf:"center"}},r.a.createElement("p",{style:{fontFamily:"Fira Code",fontSize:"2rem"}},r.a.createElement("a",{className:s.a.alink,href:"https://krushiraj.github.io/mini-terminal/"},"Mini-Terminal")))};n.d(t,"default",function(){return d});var m=[{name:"about-me"},{name:"my-works"},{name:"experience"},{name:"writings"},{name:"skills"},{name:"contact"},{name:"resume"}],d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}},r.a.createElement("div",{id:"nav",style:{width:"100%",padding:"0",textAlign:"center",alignSelf:"center"}},r.a.createElement("a",{href:"/"},r.a.createElement(l.a,{size:"200"})),r.a.createElement("p",{style:{textDecoration:"underline",textDecorationColor:"#e10000",fontSize:"2rem"}},"Krushi Raj Tula"),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement(o.a,{items:m,top:!1}),r.a.createElement(u,null)))))},a}(r.a.Component)},196:function(e,t,n){var a;e.exports=(a=n(198))&&a.default||a},197:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"Krushi Raj Tula",titleTemplate:"%s's portfolio",defaultDescription:"Portfolio of Krushi Raj Tula",siteUrl:"https://krushiraj.github.io",defaultImage:"/tkrlogo.png",twitterUsername:"krushiraj123"}}}}},198:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),r=n.n(a),i=n(98);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null}},199:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.size;return r.a.createElement("img",{alt:"Krushi Raj",src:"/krushi.jpg",height:t+"px",width:"auto",id:"logo",style:{borderRadius:"50%"}})}},200:function(e,t,n){"use strict";var a=n(197),r=n(0),i=n.n(r),l=n(202),o=(n(66),n(196),n(9).default.enqueue,i.a.createContext({}));function c(e){var t=e.staticQueryData,n=e.data,a=e.query,r=e.render,l=n?n.data:t[a]&&t[a].data;return i.a.createElement(i.a.Fragment,null,l&&r(l),!l&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,n=e.query,a=e.render,r=e.children;return i.a.createElement(o.Consumer,null,function(e){return i.a.createElement(c,{data:t,query:n,render:a||r,staticQueryData:e})})};var u=function(e){var t=e.title,n=e.description,r=e.image,o=e.pathname,c=e.article;return i.a.createElement(s,{query:m,render:function(e){var a=e.site.siteMetadata,s=a.defaultTitle,u=a.titleTemplate,m=a.defaultDescription,d=a.siteUrl,p=a.defaultImage,g=a.twitterUsername,f={title:t||s,description:n||m,image:""+d+(r||p),url:""+d+(o||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.Helmet,{title:f.title,titleTemplate:u},i.a.createElement("meta",{name:"description",content:f.description}),i.a.createElement("meta",{name:"image",content:f.image}),f.url&&i.a.createElement("meta",{property:"og:url",content:f.url}),!c?null:i.a.createElement("meta",{property:"og:type",content:"article"}),f.title&&i.a.createElement("meta",{property:"og:title",content:f.title}),f.description&&i.a.createElement("meta",{property:"og:description",content:f.description}),f.image&&i.a.createElement("meta",{property:"og:image",content:f.image}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),g&&i.a.createElement("meta",{name:"twitter:creator",content:g}),f.title&&i.a.createElement("meta",{name:"twitter:title",content:f.title}),f.description&&i.a.createElement("meta",{name:"twitter:description",content:f.description}),f.image&&i.a.createElement("meta",{name:"twitter:image",content:f.image})))},data:a})};t.a=u;u.defaultProps={title:null,description:null,image:null,pathname:null,article:!1};var m="1376445457"},201:function(e,t,n){"use strict";n(23);var a=n(0),r=n.n(a),i=(n(49),n(191)),l=n.n(i),o=function(e){var t=e.name,n=e.clickHandler;return r.a.createElement("li",{onClick:n,style:{display:"inline-block",padding:"0 5px"}},r.a.createElement("a",{className:l.a.alink,href:"#"+t},t))};function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return m});var s={listStyle:"none",textAlign:"right",margin:0,padding:0,whiteSpace:"nowrap",width:"100%",overflow:"auto"},u={listStyle:"none",margin:0,padding:0,width:"100%",overflow:"auto"},m=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).resizeFunc=function(e,t){void 0===t&&(t=c(n)),console.log(t);var a=document.querySelector("#nav ul li.active"),r=t.underLine.current;if(console.log(a,r),a){var i=a.getBoundingClientRect().left+window.pageXOffset,l=a.getBoundingClientRect().top+window.pageYOffset;r.style.left=i+"px",r.style.top=l+"px"}},n.clickHandler=function(e,t){void 0===t&&(t=c(n));var a=e.target.parentNode,r=document.querySelectorAll("#nav ul li"),i=t.underLine.current;if(!a.classList.contains("active")){for(var l=0;l<r.length;l++)r[l].classList.contains("active")&&r[l].classList.remove("active");a.classList.add("active");var o=a.getBoundingClientRect().width,s=a.getBoundingClientRect().height,u=a.getBoundingClientRect().left+window.pageXOffset,m=a.getBoundingClientRect().top+window.pageYOffset;i.style.width=o+"px",i.style.height=s+"px",i.style.left=u+"px",i.style.top=m-2+"px",i.style.transform="none"}console.log({target:e.target.parentNode,underline:t.underLine.current,lis:r})},n.underLine=r.a.createRef(),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.componentDidMount=function(){window.addEventListener("resize",this.resizeFunc)},i.render=function(){var e=this,t=this.props,n=t.top,a=t.items;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{style:n?s:u},a.map(function(t,n){return r.a.createElement(o,Object.assign({},t,{key:n,clickHandler:e.clickHandler}))})),r.a.createElement("span",{ref:this.underLine,style:{position:"absolute",borderBottom:"2px solid #e10000",transition:"all 0.3s ease-in-out"}}))},a}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-index-js-1e8a7898655052121fc2.js.map