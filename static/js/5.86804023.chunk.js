(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[5],{512:function(e,n){var t=/[\'\"]/;e.exports=function(e){return e?(t.test(e.charAt(0))&&(e=e.substr(1)),t.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},536:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Fe}));var r=t(0),a=t.n(r),o=t(7),c=t(512),i=t.n(c),l=Object.assign||function(e){for(var n,t=1;t<arguments.length;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var s={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},p={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},f=["style","script"],d=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,m=/mailto:/i,g=/\n{2,}$/,h=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,y=/^ *> ?/gm,k=/^ {2,}\n/,v=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,b=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,x=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,S=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,T=/^(?:\n *)*\n/,w=/\r\n?/g,C=/^\[\^(.*)\](:.*)\n/,$=/^\[\^(.*)\]/,O=/\f/g,B=/^\s*?\[(x|\s)\]/,z=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,E=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,N=/&([a-z]+);/g,L=/^<!--.*?-->/,_=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,j=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,U=/^\{.*\}$/,H=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,I=/^<([^ >]+@[^ >]+)>/,P=/^<([^ >]+:\/[^ >]+)>/,M=/ *\n+$/,R=/(?:^|\n)( *)$/,D=/-([a-z])?/gi,F=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,Z=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,q=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,G=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,J=/^\[([^\]]*)\] ?\[([^\]]*)\]/,V=/(\[|\])/g,K=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Q=/\t/g,W=/^ *\| */,X=/(^ *\||\| *$)/g,Y=/ *$/,ee=/^ *:-+: *$/,ne=/^ *:-+ *$/,te=/^ *-+: *$/,re=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,ae=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,oe=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ce=/^\\([^0-9A-Za-z\s])/,ie=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,le=/(^\n+|\n+$|\s+$)/g,ue=/^([ \t]*)/,se=/\\([^0-9A-Z\s])/gi,pe=/^( *)((?:[*+-]|\d+\.)) +/,fe=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,de=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,me=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,ge=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,he=[h,x,b,z,A,E,L,j,fe,de,F,Z];function ye(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ke(e){return te.test(e)?"right":ee.test(e)?"center":ne.test(e)?"left":null}function ve(e,n,t){var r=t.inTable;t.inTable=!0;var a=n(e.trim(),t);t.inTable=r;var o=[[]];return a.forEach((function(e,n){"tableSeparator"===e.type?0!==n&&n!==a.length-1&&o.push([]):("text"===e.type&&(null==a[n+1]||"tableSeparator"===a[n+1].type)&&(e.content=e.content.replace(Y,"")),o[o.length-1].push(e))})),o}function be(e,n,t){t.inline=!0;var r=ve(e[1],n,t),a=function(e){return e.replace(X,"").split("|").map(ke)}(e[2]),o=function(e,n,t){return e.trim().split("\n").map((function(e){return ve(e,n,t)}))}(e[3],n,t);return t.inline=!1,{align:a,cells:o,header:r,type:"table"}}function xe(e,n){return null==e.align[n]?{}:{textAlign:e.align[n]}}function Se(e){function n(r,a){for(var o=[],c="";r;)for(var i=0;i<t.length;){var l=t[i],u=e[l],s=u.match(r,a,c);if(s){var p=s[0];r=r.substring(p.length);var f=u.parse(s,n,a);null==f.type&&(f.type=l),o.push(f),c=p;break}i++}return o}var t=Object.keys(e);return t.sort((function(n,t){var r=e[n].order,a=e[t].order;return r===a?n<t?-1:1:r-a})),function(e,t){return n(function(e){return e.replace(w,"\n").replace(O,"").replace(Q,"    ")}(e),t)}}function Te(e){return function(n,t){return t.inline?e.exec(n):null}}function we(e){return function(n,t){return t.inline||t.simple?e.exec(n):null}}function Ce(e){return function(n,t){return t.inline||t.simple?null:e.exec(n)}}function $e(e){return function(n){return e.exec(n)}}function Oe(e){try{if(decodeURIComponent(e).match(/^\s*javascript:/i))return null}catch(n){return null}return e}function Be(e){return e.replace(se,"$1")}function ze(e,n,t){var r=t.inline||!1,a=t.simple||!1;t.inline=!0,t.simple=!0;var o=e(n,t);return t.inline=r,t.simple=a,o}function Ae(e,n,t){var r=t.inline||!1,a=t.simple||!1;t.inline=!1,t.simple=!0;var o=e(n,t);return t.inline=r,t.simple=a,o}function Ee(e,n,t){return t.inline=!1,e(n+"\n\n",t)}function Ne(e,n,t){return{content:ze(n,e[1],t)}}function Le(){return{}}function _e(){return null}function je(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}function Ue(e,n,t){for(var r=e,a=n.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||t}function He(e,n){var t=Ue(n,e);return t?"function"==typeof t||"object"===("undefined"==typeof t?"undefined":u(t))&&"render"in t?t:Ue(n,e+".component",e):e}function Ie(e,n){function t(e,t){for(var r=Ue(n.overrides,e+".props",{}),a=arguments.length,o=Array(a>2?a-2:0),i=2;i<a;i++)o[i-2]=arguments[i];return c.apply(void 0,[He(e,n.overrides),l({},t,r,{className:je(t&&t.className,r.className)||void 0})].concat(o))}function r(e){var r=!1;n.forceInline?r=!0:!n.forceBlock&&(r=!1===K.test(e));var a=X(Q(r?e:e.replace(le,"")+"\n\n",{inline:r})),o=void 0;return a.length>1?o=t(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(o=a[0])&&(o=t("span",{key:"outer"},o)):o=t("span",{key:"outer"}),o}function o(e){var n=e.match(d);return n?n.reduce((function(e,n,t){var o=n.indexOf("=");if(-1!==o){var c=function(e){return-1!==e.indexOf("-")&&null===e.match(_)&&(e=e.replace(D,(function(e,n){return n.toUpperCase()}))),e}(n.slice(0,o)).trim(),l=i()(n.slice(o+1).trim()),u=s[c]||c,p=e[u]=function(e,n){return"style"===e?n.split(/;\s?/).reduce((function(e,n){var t=n.slice(0,n.indexOf(":")),r=t.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=n.slice(t.length+1).trim(),e}),{}):"href"===e?Oe(n):(n.match(U)&&(n=n.slice(1,n.length-1)),"true"===n||"false"!==n&&n)}(c,l);(E.test(p)||j.test(p))&&(e[u]=a.a.cloneElement(r(p.trim()),{key:t}))}else"style"!==n&&(e[s[n]||n]=!0);return e}),{}):void 0}(n=n||{}).overrides=n.overrides||{},n.slugify=n.slugify||ye,n.namedCodesToUnicode=n.namedCodesToUnicode?l({},p,n.namedCodesToUnicode):p;var c=n.createElement||a.a.createElement;var u=[],w={},O={blockQuote:{match:Ce(h),order:2,parse:function(e,n,t){return{content:n(e[0].replace(y,""),t)}},react:function(e,n,r){return t("blockquote",{key:r.key},n(e.content,r))}},breakLine:{match:$e(k),order:2,parse:Le,react:function(e,n,r){return t("br",{key:r.key})}},breakThematic:{match:Ce(v),order:2,parse:Le,react:function(e,n,r){return t("hr",{key:r.key})}},codeBlock:{match:Ce(x),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,n,r){return t("pre",{key:r.key},t("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:Ce(b),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:we(S),order:4,parse:function(e){return{content:e[2]}},react:function(e,n,r){return t("code",{key:r.key},e.content)}},footnote:{match:Ce(C),order:1,parse:function(e){return u.push({footnote:e[2],identifier:e[1]}),{}},react:_e},footnoteReference:{match:Te($),order:2,parse:function(e){return{content:e[1],target:"#"+e[1]}},react:function(e,n,r){return t("a",{key:r.key,href:Oe(e.target)},t("sup",{key:r.key},e.content))}},gfmTask:{match:Te(B),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,n,r){return t("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:Ce(z),order:2,parse:function(e,t,r){return{content:ze(t,e[2],r),id:n.slugify(e[2]),level:e[1].length}},react:function(e,n,r){return t("h"+e.level,{id:e.id,key:r.key},n(e.content,r))}},headingSetext:{match:Ce(A),order:1,parse:function(e,n,t){return{content:ze(n,e[1],t),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:$e(L),order:2,parse:function(){return{}},react:_e},image:{match:we(ge),order:2,parse:function(e){return{alt:e[1],target:Be(e[2]),title:e[3]}},react:function(e,n,r){return t("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Oe(e.target)})}},link:{match:Te(me),order:4,parse:function(e,n,t){return{content:Ae(n,e[1],t),target:Be(e[2]),title:e[3]}},react:function(e,n,r){return t("a",{key:r.key,href:Oe(e.target),title:e.title},n(e.content,r))}},linkAngleBraceStyleDetector:{match:Te(P),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Te(H),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Te(I),order:1,parse:function(e){var n=e[1],t=e[1];return m.test(t)||(t="mailto:"+t),{content:[{content:n.replace("mailto:",""),type:"text"}],target:t,type:"link"}}},list:{match:function(e,n,t){var r=R.exec(t),a=n._list||!n.inline;return r&&a?(e=r[1]+e,de.exec(e)):null},order:2,parse:function(e,n,t){var r=e[2],a=r.length>1,o=a?+r:void 0,c=e[0].replace(g,"\n").match(fe),i=!1;return{items:c.map((function(e,r){var a=pe.exec(e)[0].length,o=new RegExp("^ {1,"+a+"}","gm"),l=e.replace(o,"").replace(pe,""),u=r===c.length-1,s=-1!==l.indexOf("\n\n")||u&&i;i=s;var p,f=t.inline,d=t._list;t._list=!0,s?(t.inline=!1,p=l.replace(M,"\n\n")):(t.inline=!0,p=l.replace(M,""));var m=n(p,t);return t.inline=f,t._list=d,m})),ordered:a,start:o}},react:function(e,n,r){return t(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return t("li",{key:a},n(e,r))})))}},newlineCoalescer:{match:Ce(T),order:4,parse:Le,react:function(){return"\n"}},paragraph:{match:Ce(Z),order:4,parse:Ne,react:function(e,n,r){return t("p",{key:r.key},n(e.content,r))}},ref:{match:Te(q),order:1,parse:function(e){return w[e[1]]={target:e[2],title:e[4]},{}},react:_e},refImage:{match:we(G),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,n,r){return t("img",{key:r.key,alt:e.alt,src:Oe(w[e.ref].target),title:w[e.ref].title})}},refLink:{match:Te(J),order:1,parse:function(e,n,t){return{content:n(e[1],t),fallbackContent:n(e[0].replace(V,"\\$1"),t),ref:e[2]}},react:function(e,n,r){return w[e.ref]?t("a",{key:r.key,href:Oe(w[e.ref].target),title:w[e.ref].title},n(e.content,r)):t("span",{key:r.key},n(e.fallbackContent,r))}},table:{match:Ce(F),order:2,parse:be,react:function(e,n,r){return t("table",{key:r.key},t("thead",null,t("tr",null,e.header.map((function(a,o){return t("th",{key:o,style:xe(e,o)},n(a,r))})))),t("tbody",null,e.cells.map((function(a,o){return t("tr",{key:o},a.map((function(a,o){return t("td",{key:o,style:xe(e,o)},n(a,r))})))}))))}},tableSeparator:{match:function(e,n){return n.inTable?W.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:$e(ie),order:5,parse:function(e){return{content:e[0].replace(N,(function(e,t){return n.namedCodesToUnicode[t]?n.namedCodesToUnicode[t]:e}))}},react:function(e){return e.content}},textBolded:{match:we(re),order:3,parse:function(e,n,t){return{content:n(e[2],t)}},react:function(e,n,r){return t("strong",{key:r.key},n(e.content,r))}},textEmphasized:{match:we(ae),order:4,parse:function(e,n,t){return{content:n(e[2],t)}},react:function(e,n,r){return t("em",{key:r.key},n(e.content,r))}},textEscaped:{match:we(ce),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:we(oe),order:4,parse:Ne,react:function(e,n,r){return t("del",{key:r.key},n(e.content,r))}}};!0!==n.disableParsingRawHTML&&(O.htmlBlock={match:$e(E),order:2,parse:function(e,n,t){var r=e[3].match(ue)[1],a=new RegExp("^"+r,"gm"),c=e[3].replace(a,""),i=function(e){return he.some((function(n){return n.test(e)}))}(c)?Ee:ze,l=e[1].toLowerCase(),u=-1!==f.indexOf(l);return{attrs:o(e[2]),content:u?e[3]:i(n,c,t),noInnerParse:u,tag:u?l:e[1]}},react:function(e,n,r){return t(e.tag,l({key:r.key},e.attrs),e.noInnerParse?e.content:n(e.content,r))}},O.htmlSelfClosing={match:$e(j),order:2,parse:function(e){return{attrs:o(e[2]||""),tag:e[1]}},react:function(e,n,r){return t(e.tag,l({},e.attrs,{key:r.key}))}});var Q=Se(O),X=function(e){return function n(t,r){if(r=r||{},Array.isArray(t)){for(var a=r.key,o=[],c=!1,i=0;i<t.length;i++){r.key=i;var l=n(t[i],r),u="string"==typeof l;u&&c?o[o.length-1]+=l:o.push(l),c=u}return r.key=a,o}return e(t,n,r)}}(function(e){return function(n,t,r){return e[n.type].react(n,t,r)}}(O)),Y=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return u.length&&Y.props.children.push(t("footer",{key:"footer"},u.map((function(e){return t("div",{id:e.identifier,key:e.identifier},e.identifier,X(Q(e.footnote,{inline:!0})))})))),Y}function Pe(e){var n=e.children,t=e.options,r=function(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["children","options"]);return a.a.cloneElement(Ie(n,t),r)}var Me=t(162),Re=t(18),De=Object(Me.a)((function(e){return{doc:{padding:e.spacing(2)},h1:{paddingTop:e.spacing(3),paddingBottom:e.spacing(1)},h2:{paddingTop:e.spacing(3),paddingBottom:e.spacing(1)},h3:{paddingTop:e.spacing(3),paddingBottom:e.spacing(1)},h4:{paddingTop:e.spacing(3),paddingBottom:e.spacing(1)},h5:{paddingTop:e.spacing(3),paddingBottom:e.spacing(1)},h6:{paddingTop:e.spacing(3),paddingBottom:e.spacing(1)},p:{paddingBottom:e.spacing(2)},code:{display:"inline",backgroundColor:e.palette.background.default,padding:e.spacing(.5)}}}));function Fe(){var e=De(),n=Object(Re.b)().state,t=n?n.banner:"",r={overrides:{h1:{component:o.H,props:{variant:"h3",className:e.h1}},h2:{component:o.H,props:{variant:"h4",className:e.h2}},h3:{component:o.H,props:{variant:"h5",className:e.h3}},h4:{component:o.H,props:{variant:"h6",className:e.h4}},p:{component:o.H,props:{variant:"body1",className:e.p}},a:{component:o.o},li:{component:o.H,props:{component:"li"}},code:{component:"code",props:{className:e.code}}}};return a.a.createElement(o.z,{className:e.doc},"string"==typeof t&&a.a.createElement(Pe,{options:r},t))}}}]);
//# sourceMappingURL=5.86804023.chunk.js.map