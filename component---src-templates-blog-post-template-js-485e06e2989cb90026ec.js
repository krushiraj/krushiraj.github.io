(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{207:function(e,t,r){"use strict";r.r(t);r(55),r(16),r(13),r(15),r(9),r(22),r(42);var n=r(0),a=r.n(n),i=r(214),o=r(258),s=r.n(o),l=r(218),c=r.n(l),u=r(259),d=r.n(u),f=r(209),p=r(215);var g=r(211).b.div.withConfig({displayName:"Bio__StyledBioDiv",componentId:"sc-1x7ohlf-0"})(["margin-bottom:",";p{color:",";a{color:",';opacity:0.7;position:relative;text-decoration:none;display:inline-block;padding:0;&:after{background:none repeat scroll 0 0 transparent;bottom:2px;content:"";display:block;height:2px;left:50%;position:absolute;background:',";transition:width 0.3s ease 0s,left 0.3s ease 0s;width:0;}&:hover:after{width:100%;left:0;}&:hover{opacity:1;}&:active{color:",";}&:visited{color:",";}}}img{margin-right:",";width:",";height:",";}"],Object(f.a)(2.5),p.b.skyblue,p.b.green,p.b.palered,p.b.green,p.b.green,Object(f.a)(.5),Object(f.a)(4),Object(f.a)(4)),m=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return a.a.createElement(g,{style:{display:"flex"}},a.a.createElement("img",{src:d.a,alt:"Krushi Raj Tula",style:{borderRadius:"50%"}}),a.a.createElement("p",null,"By ",a.a.createElement("strong",null,"Krushi Raj Tula")," who is a geek, enthusiast solving his problems and build things for himself and others sometime with technology. You can reach out to him on"," ",a.a.createElement("a",{href:"https://twitter.com/krushiraj123",target:"_blank",rel:"noopener noreferrer"},"Twitter!")))},n}(a.a.Component),h=r(224),b=r(257),y=r(251);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach(function(t){S(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"default",function(){return O}),r.d(t,"pageQuery",function(){return E});var O=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.data.mdx,t=this.props.pageContext,r=t.previous,n=t.next;return a.a.createElement(b.a,{location:this.props.location},a.a.createElement(h.a,{isBlogPost:!0,frontmatter:w({},e.frontmatter,{slug:e.fields.slug}),postImage:e.fields.socialImage.childImageSharp.original.src}),a.a.createElement(y.c,{style:{cursor:"auto"}},e.frontmatter.banner&&a.a.createElement(c.a,{sizes:e.frontmatter.banner.childImageSharp.fluid}),a.a.createElement("h1",null,e.frontmatter.title),a.a.createElement(y.a,null,e.frontmatter.date),e.frontmatter.technologies&&a.a.createElement(y.e,null,"Technology tags:"," ",e.frontmatter.technologies.split(",").map(function(e,t){return a.a.createElement("span",{key:e.trim()+"-"+t},e.trim())})),a.a.createElement(s.a,null,e.body)),a.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),a.a.createElement(m,null),a.a.createElement(y.b,null,a.a.createElement("li",null,r&&a.a.createElement(i.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),a.a.createElement("li",null,n&&a.a.createElement(i.a,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},n}(a.a.Component),E="4101711532"},218:function(e,t,r){"use strict";r(13),r(15),r(9),r(98),r(151),r(226);var n=r(21);t.__esModule=!0,t.default=void 0;var a,i=n(r(78)),o=n(r(76)),s=n(r(152)),l=n(r(153)),c=n(r(0)),u=n(r(54)),d=function(e){var t=(0,l.default)({},e),r=t.resolutions,n=t.sizes,a=t.critical;return r&&(t.fixed=r,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),a&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,r=e.fixed;return(t&&t[0]||r&&r[0]).src},p=Object.create({}),g=function(e){var t=d(e),r=f(t);return p[r]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},n&&c.default.createElement("source",{type:"image/webp",media:a,srcSet:n,sizes:i}),c.default.createElement("source",{media:a,srcSet:r,sizes:i}))})}function w(e){var t=[],r=[];return e.forEach(function(e){return(e.media?t:r).push(e)}),[].concat(t,r)}function S(e){return e.map(function(e){var t=e.src,r=e.media,n=e.tracedSVG;return c.default.createElement("source",{key:t,media:r,srcSet:n})})}function O(e){return e.map(function(e){var t=e.src,r=e.media,n=e.base64;return c.default.createElement("source",{key:t,media:r,srcSet:n})})}function E(e,t){var r=e.srcSet,n=e.srcSetWebp,a=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(a?'media="'+a+'" ':"")+'srcset="'+(t?n:r)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var j=function(e,t){var r=(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),a);return r&&(r.observe(e),y.set(e,t)),function(){r.unobserve(e),y.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)}).join("")+"<img "+c+o+s+r+n+t+i+a+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,r=e.imageVariants,n=e.generateSources,a=e.spreadProps,i=c.default.createElement(I,(0,l.default)({src:t},a));return r.length>1?c.default.createElement("picture",null,n(r),i):i},I=c.default.forwardRef(function(e,t){var r=e.sizes,n=e.srcSet,a=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,l.default)({sizes:r,srcSet:n,src:a},p,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=h&&g(t),r.addNoScript=!(t.critical&&!t.fadeIn),r.useIOSupport=!m&&b&&!t.critical&&!r.seenBefore;var n=t.critical||"eager"==t.loading||h&&(m||!r.useIOSupport);return r.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=c.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,i.default)(r)),r.handleRef=r.handleRef.bind((0,i.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=d(e),r=f(t),p[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=d(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,E=e.loading,j=e.draggable,P=!1===this.state.fadeIn||this.state.imgLoaded,k=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:P?1:0,transition:k?"opacity "+b+"ms":"none"},s),z="boolean"==typeof h?"lightgray":h,V={transitionDelay:b+"ms"},_=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&V,{},s,{},f),T={title:t,alt:this.state.isVisible?"":r,style:_,className:p};if(g){var C=g,D=C[0];return c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(D.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/D.aspectRatio+"%"}}),z&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&V)}),D.base64&&c.default.createElement(R,{src:D.base64,spreadProps:T,imageVariants:C,generateSources:O}),D.tracedSVG&&c.default.createElement(R,{src:D.tracedSVG,spreadProps:T,imageVariants:C,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(C),c.default.createElement(I,{alt:r,title:t,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:r,title:t,loading:E},D,{imageVariants:C}))}}))}if(m){var N=m,M=N[0],F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},i);return"inherit"===i.display&&delete F.display,c.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},z&&c.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:z,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},k&&V)}),M.base64&&c.default.createElement(R,{src:M.base64,spreadProps:T,imageVariants:N,generateSources:O}),M.tracedSVG&&c.default.createElement(R,{src:M.tracedSVG,spreadProps:T,imageVariants:N,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(N),c.default.createElement(I,{alt:r,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:E,draggable:j})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:r,title:t,loading:E},M,{imageVariants:N}))}}))}return null},t}(c.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var k=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),x=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});P.propTypes={resolutions:k,sizes:x,fixed:u.default.oneOfType([k,u.default.arrayOf(k)]),fluid:u.default.oneOfType([x,u.default.arrayOf(x)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var z=P;t.default=z},226:function(e,t,r){"use strict";r(227)("fixed",function(e){return function(){return e(this,"tt","","")}})},227:function(e,t,r){var n=r(1),a=r(10),i=r(38),o=/"/g,s=function(e,t,r,n){var a=String(i(e)),s="<"+t;return""!==r&&(s+=" "+r+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+a+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(s),n(n.P+n.F*a(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",r)}},237:function(e,t,r){var n=r(1),a=r(57),i=r(30),o=r(5),s=r(6),l=r(10),c=r(157),u=(r(4).Reflect||{}).construct,d=l(function(){function e(){}return!(u(function(){},[],e)instanceof e)}),f=!l(function(){u(function(){})});n(n.S+n.F*(d||f),"Reflect",{construct:function(e,t){i(e),o(t);var r=arguments.length<3?e:i(arguments[2]);if(f&&!d)return u(e,t,r);if(e==r){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var n=[null];return n.push.apply(n,t),new(c.apply(e,n))}var l=r.prototype,p=a(s(l)?l:Object.prototype),g=Function.apply.call(e,p,t);return s(g)?g:p}})},258:function(e,t,r){function n(e,t,r){return(n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(e,n));return r&&a(i,r.prototype),i}).apply(null,arguments)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(55),r(15),r(22),r(98),r(144),r(43),r(16),r(13),r(139),r(68),r(9),r(237),r(237),r(139),r(98),r(144),r(68),r(43),r(55),r(16),r(13),r(15),r(9),r(22);var c=r(0),u=r(91),d=u.useMDXComponents,f=u.mdx,p=r(126).useMDXScope;e.exports=function(e){var t=e.scope,r=e.components,a=e.children,o=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["scope","components","children"]),l=d(r),u=p(t),g=c.useMemo(function(){if(!a)return null;var e=s({React:c,mdx:f},u),t=Object.keys(e),r=t.map(function(t){return e[t]});return n(Function,["_fn"].concat(i(t),[""+a])).apply(void 0,[{}].concat(i(r)))},[a,t]);return c.createElement(g,s({components:l},o))}},259:function(e,t,r){e.exports=r.p+"static/krushi-f239a525d5e45be7d93095c878eaf418.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-post-template-js-485e06e2989cb90026ec.js.map