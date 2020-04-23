(this["webpackJsonpnode.js-ui"]=this["webpackJsonpnode.js-ui"]||[]).push([[4],{938:function(e,t,a){"use strict";var n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(20)).default)(r.default.createElement("path",{d:"M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"}),"ThumbUp");t.default=o},939:function(e,t,a){"use strict";var n=a(18);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(20)).default)(r.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=o},963:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Z}));var n=a(57),r=a(15),o=a(0),i=a.n(o),c=a(3),s=a(171),l=a(10),d=a(42),u=a(220),p=a(925),m=a(85),h=a(866),b=a(149),g=a(221),f=a(1),v=a(4),E=(a(2),a(5)),y=o.forwardRef((function(e,t){var a=e.disableSpacing,n=void 0!==a&&a,r=e.classes,i=e.className,s=Object(v.a)(e,["disableSpacing","classes","className"]);return o.createElement("div",Object(f.a)({className:Object(c.a)(r.root,i,!n&&r.spacing),ref:t},s))})),x=Object(E.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(y),O=a(172),j=a(23),w=a(32),k=a(25),C=o.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.collapsedHeight,s=void 0===i?"0px":i,l=e.component,d=void 0===l?"div":l,u=e.in,p=e.onEnter,m=e.onEntered,h=e.onEntering,b=e.onExit,g=e.onExiting,E=e.style,y=e.timeout,x=void 0===y?j.b.standard:y,C=Object(v.a)(e,["children","classes","className","collapsedHeight","component","in","onEnter","onEntered","onEntering","onExit","onExiting","style","timeout"]),N=Object(k.a)(),z=o.useRef(),R=o.useRef(null),S=o.useRef(),H="number"===typeof s?"".concat(s,"px"):s;o.useEffect((function(){return function(){clearTimeout(z.current)}}),[]);return o.createElement(O.a,Object(f.a)({in:u,onEnter:function(e,t){e.style.height=H,p&&p(e,t)},onEntered:function(e,t){e.style.height="auto",m&&m(e,t)},onEntering:function(e,t){var a=R.current?R.current.clientHeight:0,n=Object(w.a)({style:E,timeout:x},{mode:"enter"}).duration;if("auto"===x){var r=N.transitions.getAutoHeightDuration(a);e.style.transitionDuration="".concat(r,"ms"),S.current=r}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style.height="".concat(a,"px"),h&&h(e,t)},onExit:function(e){var t=R.current?R.current.clientHeight:0;e.style.height="".concat(t,"px"),b&&b(e)},onExiting:function(e){var t=R.current?R.current.clientHeight:0,a=Object(w.a)({style:E,timeout:x},{mode:"exit"}).duration;if("auto"===x){var n=N.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(n,"ms"),S.current=n}else e.style.transitionDuration="string"===typeof a?a:"".concat(a,"ms");e.style.height=H,g&&g(e)},addEndListener:function(e,t){"auto"===x&&(z.current=setTimeout(t,S.current||0))},timeout:"auto"===x?null:x},C),(function(e,i){return o.createElement(d,Object(f.a)({className:Object(c.a)(n.container,r,{entered:n.entered,exited:!u&&"0px"===H&&n.hidden}[e]),style:Object(f.a)({minHeight:H},E),ref:t},i),o.createElement("div",{className:n.wrapper,ref:R},o.createElement("div",{className:n.wrapperInner},a)))}))}));C.muiSupportAuto=!0;var N=Object(E.a)((function(e){return{container:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(C),z=a(872),R=a(147),S=a(30),H=a(87),M=a(89),V=a(939),D=a.n(V),I=a(938),L=a.n(I),T=a(91),A=a(7),W=o.forwardRef((function(e,t){var a=e.children,n=e.classes,r=e.className,i=e.color,s=void 0===i?"default":i,l=e.component,d=void 0===l?"button":l,u=e.disabled,p=void 0!==u&&u,m=e.disableFocusRipple,h=void 0!==m&&m,b=e.focusVisibleClassName,g=e.size,E=void 0===g?"large":g,y=e.variant,x=void 0===y?"round":y,O=Object(v.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"]);return o.createElement(T.a,Object(f.a)({className:Object(c.a)(n.root,r,"round"!==x&&n.extended,"large"!==E&&n["size".concat(Object(A.a)(E))],p&&n.disabled,{primary:n.primary,secondary:n.secondary,inherit:n.colorInherit}[s]),component:d,disabled:p,focusRipple:!h,focusVisibleClassName:Object(c.a)(n.focusVisible,b),ref:t},O),o.createElement("span",{className:n.label},a))})),$=Object(E.a)((function(e){return{root:Object(f.a)({},e.typography.button,{boxSizing:"border-box",minHeight:36,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:e.shadows[6],"&:active":{boxShadow:e.shadows[12]},color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],"&:hover":{backgroundColor:e.palette.grey.A100,"@media (hover: none)":{backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground},textDecoration:"none"},"&$focusVisible":{boxShadow:e.shadows[6]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},primary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},secondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},extended:{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48,"&$sizeSmall":{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"&$sizeMedium":{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40}},focusVisible:{},disabled:{},colorInherit:{color:"inherit"},sizeSmall:{width:40,height:40},sizeMedium:{width:48,height:48}}}),{name:"MuiFab"})(W),F=a(106),_=Object(F.a)(i.a.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done"),q=Object(F.a)(i.a.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add"),B=a(58),P=a(142),J=a(17),U=a(67),G=a.n(U),K=a(69),Q=a.n(K),X=Object(s.a)((function(e){return{root:{marginBottom:20},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},red:{backgroundColor:H.a[500]},green:{backgroundColor:M.a[500]},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(4)},bar:{display:"flex",flexWrap:"wrap",padding:e.spacing(.5)},chip:{margin:e.spacing(.5)}}}));function Y(e){var t=e.name,a=e.data,o=e.startExpanded,s=void 0!==o&&o,b=X(),f=Object(l.b)(),v=Object(d.f)(),E=Object(J.a)(),y=i.a.useState("passed"!==a.status||s),O=Object(r.a)(y,2),j=O[0],w=O[1],k={"Vote Up":function(){return f({type:"VOTE",request:E.post("/vote",{id:parseInt(t)})})},Inspect:function(){return v.push("/inspect?q=proposals["+t+"]")}};return i.a.createElement(u.a,{className:b.root},i.a.createElement(p.a,{avatar:i.a.createElement(z.a,{"aria-label":"recipe",className:"passed"!==a.status?b.red:b.green},t),action:i.a.createElement(P.a,{actions:k}),title:"Proposal #".concat(t),subheader:i.a.createElement("span",null,"by ",a.author," ",i.a.createElement(G.a,{fromNow:!0,title:!0,date:new Date(a.created)}))}),i.a.createElement(N,{in:j,timeout:"auto",unmountOnExit:!0},i.a.createElement(g.a,null,i.a.createElement(S.a,{variant:"body2",color:"textSecondary",component:"p"},i.a.createElement(m.a,{variant:"outlined",className:b.bar},i.a.createElement("strong",{className:b.chip},"Votes:"),a.votes.map((function(e){return i.a.createElement(h.a,{className:b.chip,clickable:!0,size:"small",avatar:i.a.createElement(z.a,null,e.substr(0,1)),color:"primary",label:e,onDelete:function(){return!1},deleteIcon:i.a.createElement(_,null)})}))),i.a.createElement(Q.a,null,a.code)))),i.a.createElement(x,{disableSpacing:!0},i.a.createElement(B.a,{check:"passed"!==a.status},i.a.createElement(R.a,{"aria-label":"vote up",onClick:function(){f({type:"VOTE",request:E.post("/vote",{id:parseInt(t)})})}},i.a.createElement(L.a,null))),i.a.createElement(R.a,{className:Object(c.a)(b.expand,Object(n.a)({},b.expandOpen,j)),onClick:function(){w(!j)},"aria-expanded":j,"aria-label":"show more"},i.a.createElement(D.a,null))))}function Z(){var e=X(),t=Object(J.b)().state,a=t&&t.proposals,n=Object(d.f)(),r=Object(J.d)(),o=[];for(var c in a)o.push(i.a.createElement(Y,{key:c,name:c,data:a[c],startExpanded:c==a.length-1}));return 0===o.length&&o.push(i.a.createElement("h1",{key:0},"None yet...")),i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,null,o.reverse(),i.a.createElement(B.a,{check:!!r},i.a.createElement($,{color:"primary","aria-label":"add",className:e.fab,onClick:function(){return n.push("/proposals/new")}},i.a.createElement(q,null)))))}}}]);
//# sourceMappingURL=4.5ae77a89.chunk.js.map