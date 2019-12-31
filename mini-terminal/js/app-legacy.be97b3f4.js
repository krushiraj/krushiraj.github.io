(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),i=n.n(r);i.a},"0580":function(e,t,n){},"1a93":function(e,t,n){},"343a":function(e,t,n){},"35e6":function(e,t,n){"use strict";var r=n("343a"),i=n.n(r);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app",tabindex:"0"},on:{focus:e.setFocus}},[n("TerminalContainer")],1)},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{"--font-size":e.fontSize+"rem"},attrs:{id:"terminal-container",tabindex:"1"},on:{keydown:e.handleInput,click:function(t){return t.preventDefault(),e.openKeyboard(t)}}},[n("TerminalLogin",{attrs:{isLoggedIn:e.isLoggedIn}}),e._l(e.children,(function(t,r){var i=t.child,o=t.props;return[n(i,e._b({key:r,tag:"component"},"component",o,!1))]}))],2)},s=[],c=(n("28a5"),n("9ec8"),n("6b54"),n("7f7f"),n("55dd"),n("f559"),n("4917"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{id:"terminal-input"}},[n("input",{attrs:{id:"fake-input",type:"text"}}),n("TerminalPWDUser",{attrs:{username:e.username,pwd:e.pwd}}),n("TerminalEditableWrapper",{attrs:{suggestions:e.suggestions,cursorIndex:e.cursorIndex,editableText:e.editableText}})],1)}),u=[],l=(n("c5f6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{id:"user-pwd"}},[n("TerminalReadOnly",{attrs:{readOnlyText:e.username+"@"+e.sysname+":"+e.pwd+">"}})],1)}),d=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{id:"readOnlyContainer"}},e._l(e.finalTexts,(function(t,r){return n("span",{key:r},[e._v("\n        "+e._s(t)+"\n        "),e.breakOnNewLine?n("br"):e._e()])})),0)},p=[],f={name:"TerminalReadOnly",props:{readOnlyText:{type:String,default:""},breakOnNewLine:{type:Boolean,default:!1},trimLine:{type:Boolean,default:!0},simulateTyping:{type:Boolean,default:!1},typeSpeed:{type:Number,default:1}},computed:{finalTexts:function(e){var t=e.breakOnNewLine,n=e.readOnlyText,r=e.trimLine;if(t){var i=n.split("\n");return i.map((function(e){return r?e.trim():e})).filter((function(e){return""!=e}))}return[n]}}},m=f,g=(n("77ca"),n("2877")),y=Object(g["a"])(m,h,p,!1,null,"7a5b7044",null),v=y.exports,b={name:"TerminalPWDUser",components:{TerminalReadOnly:v},props:{username:{type:String,required:!0},sysname:{type:String,default:"MiniTerminal"},pwd:{type:String,required:!0}}},T=b,x=Object(g["a"])(T,l,d,!1,null,null,null),O=x.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{id:"editable-wrapper"}},[e._l(e.children,(function(t,r){var i=t.child,o=t.props;return[n(i,e._b({key:r,tag:"component"},"component",o,!1))]}))],2)},k=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"editable"},[e._v(e._s(e.textToRender))])},C=[],S=(n("a481"),{name:"TerminalEditable",props:{editableText:{type:String,required:!0}},computed:{textToRender:function(e){return e.editableText.replace(/\s/g," ")}}}),P=S,_=Object(g["a"])(P,I,C,!1,null,null,null),E=_.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{attrs:{id:"cursor-tab-wrapper"}},[n("TerminalCursor",{attrs:{charBeneath:e.charBeneath}}),n("TerminalTabAutoComplete",{attrs:{suggestions:e.suggestions}})],1)},j=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.hasSuggestions?n("ul",{attrs:{id:"suggestions"}},e._l(e.suggestions,(function(t,r){return n("li",{key:r},[e._v("\n        "+e._s(t)+"\n    ")])})),0):e._e()},F=[],A={name:"TerminalTabAutoComplete",props:{suggestions:{type:Array,default:function(){return[]}}},computed:{hasSuggestions:function(e){var t=e.suggestions;return!!t.length}}},L=A,N=(n("633a"),Object(g["a"])(L,R,F,!1,null,null,null)),U=N.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"cursor",style:{"--animation-duration":e.blinkSpeed+"s"}},[e._v(e._s(e._charBeneath))])},z=[],W={name:"TerminalCursor",props:{blinkSpeed:{type:Number,default:1},charBeneath:{type:String,default:" "}},computed:{_charBeneath:function(e){var t=e.charBeneath;return t.replace(/\s/g," ")}}},M=W,$=(n("35e6"),Object(g["a"])(M,B,z,!1,null,null,null)),q=$.exports,H={name:"TerminalCursorTabWrapper",components:{TerminalCursor:q,TerminalTabAutoComplete:U},props:{suggestions:{type:Array,default:function(){return[]}},charBeneath:{type:String,default:" "}}},K=H,V=(n("867c"),Object(g["a"])(K,D,j,!1,null,null,null)),Y=V.exports,G={name:"TerminalEditableWrapper",components:{TerminalEditable:E,TerminalCursorTabWrapper:Y},props:{editableText:{type:String,required:!0},cursorIndex:{type:Number,required:!0},suggestions:{type:Array,required:!0}},methods:{appendChild:function(e,t,n){e.push({child:t,props:n})},appendEditableChild:function(e,t){this.appendChild(e,E,{editableText:t})},appendCursorChild:function(e,t,n){this.appendChild(e,Y,{charBeneath:t,suggestions:n})},appendChildrenFromText:function(e,t,n){var r=t.match(/([\/a-zA-z0-9_.()`!@#$%^&*\-=+,<>?'";|:\[\]{}]+)|(\s+)/g);if(1==t.length&&1==n)this.appendCursorChild(e,t,this.suggestions);else for(var i in r)this.appendEditableChild(e,r[i])}},computed:{children:function(e){var t=e.editableText,n=e.cursorIndex,r=[],i=[t.slice(0,n),t[n]||" ",t.slice(n+1,t.length)];for(var o in i)this.appendChildrenFromText(r,i[o],o);return r}}},J=G,Z=Object(g["a"])(J,w,k,!1,null,null,null),Q=Z.exports,X={name:"TerminalInput",components:{TerminalPWDUser:O,TerminalEditableWrapper:Q},props:{editableText:{type:String,required:!0},cursorIndex:{type:Number,required:!0},pwd:{type:String,required:!0},username:{type:String,required:!0},suggestions:{type:Array,required:!0}}},ee=X,te=(n("94cc"),Object(g["a"])(ee,c,u,!1,null,null,null)),ne=te.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TerminalReadOnly",{attrs:{breakOnNewLine:"",readOnlyText:e.welcomeText}})},ie=[],oe={name:"TerminalLogin",components:{TerminalReadOnly:v},props:{isLoggedIn:{type:Boolean,required:!0}},computed:{welcomeText:function(e){var t=e.isLoggedIn;return"Welcome to Mini Terminal. Here you can checkout the profile of Krushi Raj Tula.\n                Copyright (c) 2019, Everyone - as this is an open-source site :P.\n            "+(t?"Need some help on how to use this? Use 'help' command.":"Please enter your username to establish a session. Guest is default username.\n            In case of any error in logging in with the username provided, the system will try to fallback to default username and establishes a session with default username.\n            *Note:Currently this terminal doesn't support handling of inputs from virtual keyboard. So, you can't use this on devices with touch screen.*")}}},ae=oe,se=Object(g["a"])(ae,re,ie,!1,null,null,null),ce=se.exports,ue=(n("8e6e"),n("ac6a"),n("456d"),n("d225")),le=n("b0b4"),de=n("bd86"),he=n("768b"),pe={"/":{type:"directory",data:{folder1:{type:"directory",data:{folder2:{type:"directory",data:{}},file2:{type:"file",data:"Hello from file2."}}},file1:{type:"file",data:"Hello from file1.\nSecond line.\n Third line here."},file2:{type:"file",data:"Hello from file2!"}}}},fe=function e(t){var n=t.name,r=t.type,i=t.parent,o=t.data,a=t.path;Object(ue["a"])(this,e),this.name=n,this.type=r,this.parent=i,this.path=a,this.data=o},me=function(){function e(){Object(ue["a"])(this,e),this.fsRoot={},this.buildFsTree(pe,void 0),this.currDir=this.fsRoot,this._currDir=this.fsRoot,this.currFile=void 0,this._currFile=void 0}return Object(le["a"])(e,[{key:"insertNode",value:function(e,t,n){return Object.getOwnPropertyNames(e).length?e.data[n[0]]?this.insertNode(e.data[n[0]],t,n.slice(1)):e.data[n[0]]=this.insertNode({},t,n.slice(1)):e=t,e}},{key:"buildFsTree",value:function(e,t){for(var n in e){var r=n,i=t?"/"!=t.path?t.path+"/"+r:t.path+r:r,o=t,a=e[n].type,s="file"==a?e[n].data:{},c=new fe({name:r,path:i,parent:o,type:a,data:s});this.fsRoot=this.insertNode(this.fsRoot,c,i.split("/").filter((function(e){return""!=e}))),"file"!=a&&this.buildFsTree(e[n].data,c)}}},{key:"changeDirectory",value:function(){this.currDir=this._currDir,this.currFile=this._currFile}},{key:"handleBaseEdgeConditions",value:function(e){return this._currDir=this.currDir,"/"==e?(this._currDir=this.fsRoot,this._currDir):"."==e?this._currDir:"/"==this._currDir.name&&".."==e?{error:"You are already in root directory. Cannot go beyond."}:void 0}},{key:"getPathTokens",value:function(e){if(e)return e.replace(/\.\./g,"parent").match(/([a-zA-z0-9_.()`!@#$%^&*\-=+,<>?'";|:\[\]{}]+)|([\/]+)/g)}},{key:"getNodeFromToken",value:function(e,t,n){if("/"==e)return{type:"continue"};if(this._currDir.hasOwnProperty("data")&&this._currDir.data.hasOwnProperty(e)||"parent"==e&&this._currDir.hasOwnProperty("parent"))return"parent"==e?this._currDir.parent:this._currDir.data[e];var r=t.slice(0,n-1).join("");return{type:"error",error:"ENOENT: Error no such file or directory found at ".concat(r).replace(/parent/g,"..")}}},{key:"handleFileEnt",value:function(e,t){if("/"==e)return{type:"error",error:"A file should not be followed by '/' as it can't be explored."};this._currFile=t}},{key:"getEntFromPath",value:function(e,t){var n=this.handleBaseEdgeConditions(e);if(n)return n;var r=this.getPathTokens(e);for(var i in r){var o=r[i];switch(n=this.getNodeFromToken(o,r,i),n.type){case"error":return n;case"file":this.handleFileEnt(r[i+1],n);break;case"directory":this._currDir=n;break;case"continue":continue}if(i==r.length-1)return t&&this.changeDirectory(),"file"==n.type?this._currFile:this._currDir}}}]),e}();function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){Object(de["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve="Mini Terminal v1.0.190807",be={},Te=new me,xe=function(e,t){return e==t||t.hasOwnProperty(e)},Oe=function(e,t,n){if("help"==t["command"])return!0;n.hasOwnProperty("options")?n["options"]+=1:n["options"]=1;var r=n["options"]<=Object.getOwnPropertyNames(t.options).length,i=xe(e.slice(2),t["options"]),o=i&&r;if(!o){var a="'".concat(e,"' is not a valid option for '").concat(t.command,"' command.");n.message=a}return o},we=function(e,t){t.hasOwnProperty("args")?t["args"]+=1:t["args"]=1;var n=t["args"]<=e["args"];if(!n){var r="Maximum number arguments exceeded. You can pass upto ".concat(e.args," arguments only.");t.message=r}return n},ke=function e(t,n,r,i){if(r==t.length)return!0;var o=t[r],a=o.str,s=o.type,c=!1;return c="optkey"==s?Oe(a,n,i,c):"argument"!=s||we(n,i,c),c&&e(t,n,r+1,i)},Ie=function(e,t){var n={message:""},r=!1;return t?(r=ke(e,t,0,n),{isValid:r,info:n}):(n.message="".concat(e[0]["str"]," - command not found. Please check and try again."),{isValid:r,info:n})},Ce=function(e){var t={command:"",options:{},args:[]};for(var n in e)switch(e[n].type){case"command":t.command=e[n].str;break;case"optkey":var r=parseInt(n)+2+"";t.options[e[n].str.slice(2)]=r<e.length?e[r].str:"";break;case"argument":t.args.push(e[n].str);break;default:continue}return t},Se=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];be.childrenData.push({child:v,props:{readOnlyText:e,breakOnNewLine:t,trimLine:n}})},Pe=function(e,t,n,r){be.childrenData.push({child:ne,props:{pwd:e,cursorIndex:t,editableText:n}})},_e=function(){be.cursorIndex=0,be.editableText="",be.loggedIn||(be.pwd="Username",be.username="Guest");var e=be,t=e.pwd,n=e.cursorIndex,r=e.editableText,i=e.username;Pe(t,n,r,i)},Ee=function(e){var t=e.message;Se(t),_e()},De=function(){var e=be,t=e.username,n=e.sysname,r=e.pwd,i=e.commandTokens;Ee({message:"ERROR: ".concat(t,"@").concat(n,":").concat(r,": Permission denied. Cannot ").concat(i[0].str)})},je=function(e){var t=(new Option).style;return t.color=e,t.color==e},Re=function(e){var t,n=e.command,r=n.args[0]||".",i=Te.getEntFromPath(r);if("file"==i.type)t=["ERROR: Expected a directory name/path, but found file name/path."];else for(var o in t=[".",".."],i.data)t.push(i.data[o].name);Se(t.join("\n")),_e()},Fe=function(e){var t=e.command,n=t.args[0],r=void 0;if(void 0!=n){var i=Te.getEntFromPath(n,!0);i.error||"directory"!=i.type?r="file"==i.type?"ERROR: ".concat(n," is not a directory."):i.error:be.pwd=i.path}else r="ERROR: command cd expects a directory name as argument. No such name provided.";r&&Se(r),_e()},Ae=function(e){var t,n=e.command,r=n.args,i=n.options["n"];if("*"==r[0]){r=[];var o=Te.getEntFromPath(".");for(var a in o.data)"file"==o.data[a].type&&r.push(o.data[a].name)}for(var s in r){var c=Te.getEntFromPath(r[s]);t="file"==c.type?c.data:"directory"==c.type?"ERROR: ".concat(c.name," is not a file."):c.error,Se((i?t.split("\n").map((function(e,t){return"".concat(t+1,") ").concat(e)})).join("\n"):t)+"\nEOF")}_e()},Le=function(){be.childrenData=[],_e()},Ne=function(e){var t,n=e.command,r=n.args,i=n.options,o="    ",a=Object.getOwnPropertyNames(i);if(r.length||a.length)if(1!=r.length||a.length>1)t=["ERROR: Help command expects exactly one command name as argument and optionally followed by exactly one option in that command."];else{var s=Ke.filter((function(e){return e.command==r[0]}))[0];if(t=[s.help],i.length){var c=a[0];t.push("".concat(o,"--").concat(c," - ").concat(s.options[c]))}else for(var u in s.options)t.push("".concat(o,"--").concat(u," - ").concat(s.options[u]))}else t=Ke.map((function(e){return"[".concat(e.command,"] - ").concat(e.help).replace(/\n/g,"\n"+o)}));Se(t.join("\n"),!0,!1),_e()},Ue=function(){var e=new Date;e.setMinutes(e.getMinutes()-1),document.cookie="mini-username=;expires=".concat(e.toUTCString(),";path=/"),be.prevLoggedIn=!1,be.loggedIn=!1,Se("You have been logged out successfully"),_e()},Be=function(){Se(ve),_e()},ze=function(e){var t,n=e.command.args,r=n[0]||1;r<1?t="ERROR: Font-size should always be greater than 0.":(be.fontsize=r,t="Terminal font-size has been changed to ".concat(r," unit(s).")),Se(t),_e()},We=function(){Se("Present working directory: '".concat(be.pwd,"'")),_e()},Me=function(){De()},$e=function(){De()},qe=function(){De()},He=function(e){var t=e.command.options,n=document.getElementsByTagName("body")[0],r=Object.getOwnPropertyNames(t).length,i=[];for(var o in r||(t={font:"fff",bg:"000"},i.push("No values provided, will fallback to default values")),t){var a=je(t[o]);n.style.setProperty("--".concat(o,"-color"),(a?"":"#")+"".concat(t[o])),i.push("Changed ".concat(o," color to ")+(a?"":"#")+"".concat(t[o]))}Se(i.join("\n")),_e()},Ke=[{command:"help",options:{},args:1,help:"Usage: help <command name> <?options for command> \nDisplays help text for each of the command supported in this terminal and also provides help for each of the option for each command.",executor:Ne},{command:"ls",options:{},args:1,help:"Usage: ls <dir> \nList all files and directories in a given directory or current directory if no argument is provided.",executor:Re},{command:"cd",options:{},args:1,help:"Usage: cd <dir> \nChanges present working directory to the given directory.",executor:Fe},{command:"cat",options:{n:"Prints the line numbers before each line."},args:1/0,help:"Usage: cat <?...options> <file1> <...more files> \nConcatenates file contents and displays it.",executor:Ae},{command:"clear",options:{},args:0,help:"Usage: clear \nClears all output text present from terminal.",executor:Le},{command:"logout",options:{},args:0,help:"Usage: logout \nCloses the session to terminal.",executor:Ue},{command:"ver",options:{},args:0,help:"Usage: ver \nPrints the current version of the terminal.",executor:Be},{command:"color",options:{font:"Sets the color for font in terminal.",bg:"Sets the color for background of terminal."},args:0,help:"Usage: color <?...options>\nSets the colors of the elements in terminal according to the options provided.\nAll colors should be provided as valid color name according to css (or) 3 or 6 digited hex color codes, whithout '#' sign in the beginning.\nEx:000, fff, fafafa, 020202.",executor:He},{command:"fontsize",options:{},args:1,help:"Usage: fontsize <size> \nSets the font-size of the text in terminal.\nIf no argument is provided, font-size falls back to default value.\nArgument size should always be greater than 0.",executor:ze},{command:"mv",options:{},args:2,help:"Usage: mv <old-path> <new-path> \nMoves files/directories or renames them.",executor:qe},{command:"rm",options:{r:"Recursively deletion in a directory."},args:1/0,help:"Usage: rm <file1> <?...files> \nRemoves files/directories from the disk.",executor:$e},{command:"mkdir",options:{},args:1,help:"Usage: mkdir <directory-name> \nCreates new directory in the path specified.",executor:Me},{command:"pwd",options:{},args:0,help:"Usage: pwd \nUsed to print the present working directory.",executor:We},{command:"sudo",options:{},args:0,help:"Usage: logout \nExecute a command with root user privileges.",executor:void 0}],Ve=function(e){var t=Ke.filter((function(t){var n=t.command;return n==e[0]["str"]})),n=Object(he["a"])(t,1),r=n[0],i=Ie(e,r),o=i.isValid,a=i.info;o?(a.command=Ce(e),r.executor(a)):Ee(ye({},a,{error:!0,data:void 0}))},Ye=function(e){if(be=e,!be.prevLoggedIn)return be.prevLoggedIn=!0,Se("You are now logged in as ".concat(be.username)),void _e();var t=e.commandTokens;""==t[0].str.trim()?_e():"sudo"==t[0].str?De():t.length?Ve(t):_e()},Ge=function(){function e(){Object(ue["a"])(this,e),this.comTrie={links:0},this.optTrie={links:0},this.fileTrie={links:0},this.commandList=[],this.buildCommandTrie(),this.buildOptionsTrie()}return Object(le["a"])(e,[{key:"insertInTrie",value:function(e,t,n){if(n!=t.length){var r=t[n];return e.hasOwnProperty(r)||(e[r]={links:0}),e.links+=1,this.insertInTrie(e[r],t,n+1)}}},{key:"buildTrieForFiles",value:function(e){for(var t in this.fileTrie={links:0},e.data)this.insertInTrie(this.fileTrie,e.data[t].name,0)}},{key:"buildCommandTrie",value:function(){this.commandList=Ke.map((function(e){return e.command}));var e=this.commandList;for(var t in e)this.insertInTrie(this.comTrie,e[t],0)}},{key:"buildOptionsTrie",value:function(){var e=this,t=this.commandList,n=function(n){var r=Object.getOwnPropertyNames(Ke.filter((function(e){return e.command==t[n]}))[0].options);for(var i in e.optTrie[t[n]]={links:0},r)e.insertInTrie(e.optTrie[t[n]],r[i],0)};for(var r in t)n(r)}},{key:"getCommandTrie",value:function(e){var t=this.comTrie;for(var n in e){if(!t.hasOwnProperty(e[n]))return;t=t[e[n]]}return t}},{key:"getOptionsTrie",value:function(e,t){var n=this.optTrie[e];for(var r in t){if(!n.hasOwnProperty(t[r]))return;n=n[t[r]]}return n}},{key:"getFilesTrie",value:function(e){var t=this.fileTrie;for(var n in e){if(!t.hasOwnProperty(e[n]))return;t=t[e[n]]}return t}},{key:"getStringsFromTrie",value:function(e,t,n){if(e){var r=n;if(0!=e.links)for(var i in e)"links"!=i&&this.getStringsFromTrie(e[i],t,r+i);else t.push(r)}}},{key:"getSuggestions",value:function(e,t,n){var r=[];return""==e?r:(e.length>0&&!n?this.getStringsFromTrie(this.getCommandTrie(e),r,""):e.length>0&&n&&"string"!=typeof t?(this.buildTrieForFiles(t),this.getStringsFromTrie(this.getFilesTrie(e),r,"")):t.length>-1&&n&&this.getStringsFromTrie(this.getOptionsTrie(e,t),r,""),r)}},{key:"getCommonSubStr",value:function(e,t){if(e){var n=t,r=Object.getOwnPropertyNames(e);if(2==r.length){var i=r.indexOf("links")?0:1,o=r[i];return this.getCommonSubStr(e[o],n+o)}return n}}},{key:"autoComplete",value:function(e,t,n){var r="";return""==e?r:(e.length>0&&!n?r=this.getCommonSubStr(this.getCommandTrie(e),""):e.length>0&&n&&"string"!=typeof t?(this.buildTrieForFiles(t),r=this.getCommonSubStr(this.getFilesTrie(e),"")):t.length>-1&&n&&(r=this.getCommonSubStr(this.getOptionsTrie(e,t),"")),r)}}]),e}(),Je=new Ge,Ze={name:"TerminalContainer",components:{TerminalLogin:ce,TerminalInput:ne},data:function(){return{editableText:"",cursorIndex:0,pwd:"Username",childrenData:[],history:[],hIndex:0,username:"Guest",prevLoggedIn:!1,loggedIn:!1,fontsize:1}},props:{sysname:{type:String,default:"MiniTerminal"},commands:{type:Array,default:function(){return Ke}}},methods:{openKeyboard:function(){document.getElementById("fake-input").focus()},isBackspace:function(e){return"Backspace"==e},isShiftKey:function(e){var t=e.shiftKey;return t},isPunctuationOrSymbol:function(e){return!!e.match(/[\/\.,';:"?\s*\-]/)},isAlNum:function(e){return!!e.match(/[a-zA-Z0-9]/)&&1==e.length},isTab:function(e){return"Tab"==e},isEnter:function(e){var t=e.key,n=e.keyCode;return 13==n||"Enter"==t},isArrow:function(e){return{check:e.startsWith("Arrow"),direction:e.slice(5)}},isControlActive:function(e){var t=e.metaKey,n=e.ctrlKey,r=this.os;return"MacOS"==r?t||n:"Windows"==r&&n},lastPunctuationIndex:function(){var e=this.punctuationIndices;return e[e.length-1]||-1},handleBackspace:function(e){var t,n=this.editableText;t=e?this.getNearestPunctIndex(0,this.punctuationIndices):this.cursorIndex-1,this.editableText=n.slice(0,-1==t?t*n.length:t)+n.slice(this.cursorIndex),this.cursorIndex=-1==t?0:t},getDirOffset:function(e){return e?1:-1},resolveNearestBase:function(e,t,n){return e[t+this.getDirOffset(n)]||(n?this.editableText.length+1:-1)},checkAndResolve:function(e,t,n){var r=e.indexOf(t);return r>-1?e[r+this.getDirOffset(n)]!=t+this.getDirOffset(n)?this.resolveNearestBase(e,r,n):this.resolveNearestBase(e,r+this.getDirOffset(n),n):r},getNearestPunctIndex:function(e,t){var n=t.slice(0),r=this.cursorIndex,i=this.checkAndResolve(n,r,e);return i>-1?i:(n.push(r),n.sort((function(e,t){return e-t})),this.checkAndResolve(n,r,e))},moveCursor:function(e){if(e){var t=this.editableText.length;return this.cursorIndex==t?this.cursorIndex:this.cursorIndex+1}return 0==this.cursorIndex?this.cursorIndex:this.cursorIndex-1},moveCursorCtrl:function(e){var t=this.getNearestPunctIndex(e,this.punctuationIndices),n=!this.isPunctuationOrSymbol(this.editableText[t+(e?-1:1)]||"");return t+(n?e?-1:1:0)},handleSideArrows:function(e,t){this.cursorIndex="Left"==e?t?this.moveCursorCtrl(0):this.moveCursor(0):t?this.moveCursorCtrl(1):this.moveCursor(1)},setHistoryAsCurrent:function(e){var t=this.history,n=t[e],r=n.editableText,i=n.cursorIndex;this.hIndex=e,this.editableText=r,this.cursorIndex=i},handleVerticalArrows:function(e){var t=this.hIndex;if("Up"==e){if(0==t)return;this.setHistoryAsCurrent(t-1)}else{if(t==this.history.length)return;t==this.history.length-1?(this.hIndex=t+1,this.editableText="",this.cursorIndex=0):this.setHistoryAsCurrent(t+1)}},mutateText:function(e,t){var n=this.editableText,r=this.cursorIndex,i=n.slice(0,r),o=n.slice(r);this.editableText=i+(e?"":t)+o,this.cursorIndex+=1},getRequiredData:function(e){var t=e.key;return{char:t,ctrl:this.isControlActive(e),shift:this.isShiftKey(e),punctuation:this.isPunctuationOrSymbol(t),alnum:this.isAlNum(t),isTab:this.isTab(t),isEnter:this.isEnter(e),isArrow:this.isArrow(t),isLastCharPunc:this.isPunctuationOrSymbol(this.editableText[this.editableText.length-1]||"")}},autoComplete:function(){if(this.loggedIn){var e="",t=this.commandTokens,n=t[t.length-1];if(!n)return;if("command"==n.type)e=Je.autoComplete(n.str,"",!1);else if("optkey"==n.type&&n.str.length>1)e=Je.autoComplete(t[0].str,n.str.slice(2),!0);else if("argument"==n.type&&!n.str.startsWith("-")){var r=Te.getEntFromPath(n.str);(r.error||"file"==r.type)&&(r=Te.getEntFromPath(".")),e=Je.autoComplete(n.str,r,!0)}void 0!=e&&(this.editableText=this.editableText+e,this.cursorIndex=this.cursorIndex+e.length)}},getTokenType:function(e,t){var n=0!=t.length;return n||0==e.length?n?""==e.trim()?"delimiter":e.startsWith("--")?"optkey":t[t.length-2]["str"].startsWith("--")?"optval":"argument":void 0:"command"},paintEditableAsReadOnly:function(){var e=document.getElementById("user-pwd").textContent,t=this.childrenData[this.childrenData.length-1],n={child:v,props:{readOnlyText:e.trim().concat(" ",t.props.editableText),breakOnNewLine:!0}};this.childrenData.pop(),this.childrenData.push(n)},loginUser:function(){var e=new Date;e.setDate(e.getDate()+1),document.cookie="mini-username=".concat(this.editableText,";expires=").concat(e.toUTCString(),";path=/"),document.cookie&&(this.loggedIn=!0,this.username=this.editableText,this.pwd="/",document.cookie="mini-username=".concat(this.editableText,";expires=").concat(e.toUTCString(),";path=/"))},appendToHistory:function(){var e=this.cursorIndex,t=this.editableText;10==this.history.length&&(this.history.slice(1),this.hIndex-=1),this.history.push({editableText:t,cursorIndex:e}),this.hIndex+=1},processCommand:function(){this.appendToHistory(),this.paintEditableAsReadOnly(),this.isLoggedIn||this.loginUser(),Ye(this)},updateChanges:function(){var e=this.editableText,t=this.cursorIndex,n=this.pwd,r=this.username,i=this.suggestions,o=this.childrenData.length-1;"TerminalInput"==this.childrenData[o].child.name&&(this.childrenData[o].props={editableText:e,cursorIndex:t,pwd:n,username:r,suggestions:i})},copySelection:function(){navigator.clipboard.writeText(document.getSelection().toString())},pasteContent:function(){var e=this;navigator.clipboard.readText().then((function(t){e.editableText=t,e.cursorIndex=t.length,e.updateChanges()}))},handleInput:function(e){var t=this.getRequiredData(e),n=t.char,r=t.ctrl,i=(t.shift,t.punctuation),o=t.alnum,a=t.isTab,s=t.isEnter,c=t.isArrow;t.isLastCharPunc;if(s)this.processCommand();else if(r&&"c"==n.toLowerCase())this.copySelection();else if(r&&"v"==n.toLowerCase())this.pasteContent();else if(a)this.autoComplete();else if(this.isBackspace(n))this.handleBackspace(r);else if(c.check){var u=c.direction;"Left"==u||"Right"==u?this.handleSideArrows(c.direction,r):this.handleVerticalArrows(c.direction)}else(o||i)&&this.mutateText(r,n);this.updateChanges()}},computed:{fontSize:function(e){var t=e.fontsize;return t},commandTokens:function(e){var t=e.editableText,n=this.getTokenType,r=t.match(/([\/a-zA-z0-9_.()`!@#$%^&*\-=+,<>?'";|:\[\]{}]+)|(\s+)/g),i=[],o=0,a=0;for(var s in r)a=o+r[s].length-1,i.push({str:r[s],start:o,end:a,type:n(r[s],i)}),o=a+1;return i},punctuationIndices:function(e){var t=this,n=e.commandTokens,r=n.filter((function(e){var n=e.str;return t.isPunctuationOrSymbol(n)})),i=[];for(var o in r){var a=r[o],s=a.start,c=a.end;s==c?i.push(s):i.push(s,c)}return i},os:function(){var e=window.navigator.userAgent,t=window.navigator.platform,n=["Macintosh","MacIntel","MacPPC","Mac68K"],r=["Win32","Win64","Windows","WinCE"],i=["iPhone","iPad","iPod"],o=null;return-1!==n.indexOf(t)?o="MacOS":-1!==i.indexOf(t)?o="iOS":-1!==r.indexOf(t)?o="Windows":/Android/.test(e)?o="Android":!o&&/Linux/.test(t)&&(o="Linux"),o},isLoggedIn:function(){for(var e=document.cookie.split(";"),t=-1,n=0;n<e.length;n++)if(null!==e[n].match("mini-username")){t=n;break}if(e&&-1!==t){var r=e[t].split("=")[1];""!==r&&(this.prevLoggedIn=!0,this.loggedIn=!0,this.pwd="/",this.username=r)}return this.loggedIn},children:function(e){var t=e.pwd,n=e.username,r=e.cursorIndex,i=e.editableText,o=e.childrenData,a=(e.isLoggedIn,e.suggestions);if(o&&0!=o.length)return o;var s={pwd:t,username:n,cursorIndex:r,editableText:i,suggestions:a};return o.push({child:ne,props:s}),o},historyIndex:function(e){var t=e.hIndex;return t},suggestions:function(e){var t=e.commandTokens,n=e.loggedIn;if(n){var r=t[t.length-1];if(r){if("command"==r.type)return Je.getSuggestions(r.str,"",!1);if("optkey"==r.type&&r.str.length>1)return Je.getSuggestions(t[0].str,r.str.slice(2),!0);if("argument"!=r.type||r.str.startsWith("-"))return[];var i=Te.getEntFromPath(r.str);return(i.error||"file"==i.type)&&(i=Te.getEntFromPath(".")),Je.getSuggestions(r.str,i,!0)}return[]}return[]}}},Qe=Ze,Xe=(n("cab4"),Object(g["a"])(Qe,a,s,!1,null,null,null)),et=Xe.exports,tt={name:"app",components:{TerminalContainer:et},methods:{setFocus:function(){document.getElementById("terminal-container").focus()}}},nt=tt,rt=(n("034f"),Object(g["a"])(nt,i,o,!1,null,null,null)),it=rt.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(it)}}).$mount("#app")},"633a":function(e,t,n){"use strict";var r=n("0580"),i=n.n(r);i.a},"64a9":function(e,t,n){},"77ca":function(e,t,n){"use strict";var r=n("1a93"),i=n.n(r);i.a},"867c":function(e,t,n){"use strict";var r=n("8eca"),i=n.n(r);i.a},"8ce2":function(e,t,n){},"8eca":function(e,t,n){},"94cc":function(e,t,n){"use strict";var r=n("8ce2"),i=n.n(r);i.a},cab4:function(e,t,n){"use strict";var r=n("cd77"),i=n.n(r);i.a},cd77:function(e,t,n){}});
//# sourceMappingURL=app-legacy.be97b3f4.js.map