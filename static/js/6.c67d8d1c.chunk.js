(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[6],{527:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return u}));var n=t(57),o=t(0),a=t.n(o),i=t(507),p=t(521),s=t(7),c=t(100),f=t.n(c);function l(e,r,t){if("undefined"===typeof e)return{type:"Identifier",value:"undefined"};if(e.$ref)return t.locations[e.$ref]?t.locations[e.$ref]:(t.locations[e.$ref]=r,l(t.references[e.$ref],r,t));var n,o={type:"Literal",value:JSON.stringify(e)};if("string"===typeof e.$v&&-1!==e.$v.indexOf("\n"))return{type:"TemplateLiteral",quasis:[{type:"TemplateElement",value:{raw:e.$v.replace(/[`\\]/g,(function(e){return"\\"+e})),cooked:e.$v},tail:!0}],expressions:[]};if("undefined"!==typeof e.$v&&(o={type:"Literal",value:e.$v}),"object"===e.$t){var a=[];for(var i in e.prop){console.log(e.prop[i]);var s=l(e.prop[i].v,void 0,t);a.push({type:"Property",computed:!1,key:{type:"Literal",value:i},value:s})}o="%ArrayPrototype%"==e.proto.$s?{type:"ArrayExpression",elements:a.filter((function(e){return"length"!==e.key.value})).map((function(e){return e.value}))}:{type:"ObjectExpression",properties:a}}"function"===e.$t&&(o=(n=e.src?Object(p.parse)(e.src.trim()):Object(p.parse)('() => { "builtin magic" }')).body[0].expression?n.body[0].expression:n.body[0]);if(r&&"Identifier"===r.type){var c=r;"FunctionDeclaration"===o.type?t.code.push(o):t.code.push({type:"ExpressionStatement",expression:{type:"AssignmentExpression",operator:"=",left:c,right:o}})}return o}function u(e){var r=e.data;console.log("DATA",r);var t=a.a.useMemo((function(){if(r&&r.root){console.log(r);var e={references:r.references,code:[],locations:Object(n.a)({},r.root.$ref,{type:"Identifier",name:"global"})},t=e.references[r.root.$ref];for(var o in t.prop)if(!t.prop[o].v.$s){l(t.prop[o].v,{type:"Identifier",name:o},e);"proposals"===o&&e.code.pop()}return e}}),[JSON.stringify(r)]);return t?a.a.createElement(s.z,{variant:"body2"},a.a.createElement(f.a,{language:"javascript"},Object(i.generate)({type:"Program",body:t.code}))):a.a.createElement(a.a.Fragment,null)}}}]);
//# sourceMappingURL=6.c67d8d1c.chunk.js.map