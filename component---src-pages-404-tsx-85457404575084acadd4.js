"use strict";(self.webpackChunkgatsby_starter_chakra_ui_type_script=self.webpackChunkgatsby_starter_chakra_ui_type_script||[]).push([[218],{4994:function(e,n,t){t.r(n),t.d(n,{Head:function(){return g},default:function(){return h}});var r=t(7294),a=t(1883),i=t(7747),s=t(2757),o=t(2675),c=t(4591),l=t(6554),u=t(2381),d=t(3179),m=t(8702),f=t(5432),p=t(5893),x=(0,l.G)((function(e,n){const t=(0,u.mq)("Link",e),{className:r,isExternal:a,...i}=(0,d.Lr)(e);return(0,p.jsx)(m.m.a,{target:a?"_blank":void 0,rel:a?"noopener":void 0,ref:n,className:(0,f.cx)("chakra-link",r),...i,__css:t})}));x.displayName="Link";var h=()=>r.createElement(i.xu,{p:24,fontFamily:"-apple-system, Roboto, sans-serif, serif"},r.createElement(s.X,{as:"h1",mt:0,mb:16,maxW:"container.sm"},"Page not found"),r.createElement(o.x,{mb:12},"Sorry 😔, we couldn’t find what you were looking for.",r.createElement("br",null),null,r.createElement("br",null),r.createElement(c.z,null,r.createElement(x,{as:a.Link,to:"/"},"Go home"))));const g=()=>r.createElement("title",null,"Not found")},4591:function(e,n,t){t.d(n,{z:function(){return b}});var r=t(7294);var[a,i]=function(e={}){const{name:n,strict:t=!0,hookName:a="useContext",providerName:i="Provider",errorMessage:s,defaultValue:o}=e,c=(0,r.createContext)(o);return c.displayName=n,[c.Provider,function e(){var n;const o=(0,r.useContext)(c);if(!o&&t){const t=new Error(null!=s?s:`${a} returned \`undefined\`. Seems you forgot to wrap component within ${i}`);throw t.name="ContextError",null==(n=Error.captureStackTrace)||n.call(Error,t,e),t}return o},c]}({strict:!1,name:"ButtonGroupContext"}),s=t(8702),o=t(5432),c=t(5893);function l(e){const{children:n,className:t,...a}=e,i=(0,r.isValidElement)(n)?(0,r.cloneElement)(n,{"aria-hidden":!0,focusable:!1}):n,l=(0,o.cx)("chakra-button__icon",t);return(0,c.jsx)(s.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...a,className:l,children:i})}l.displayName="ButtonIcon";var u=t(917),d=t(6554),m=t(2381),f=t(3179),p=(0,u.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),x=(0,d.G)(((e,n)=>{const t=(0,m.mq)("Spinner",e),{label:r="Loading...",thickness:a="2px",speed:i="0.45s",emptyColor:l="transparent",className:u,...d}=(0,f.Lr)(e),x=(0,o.cx)("chakra-spinner",u),h={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:a,borderBottomColor:l,borderLeftColor:l,animation:`${p} ${i} linear infinite`,...t};return(0,c.jsx)(s.m.div,{ref:n,__css:h,className:x,...d,children:r&&(0,c.jsx)(s.m.span,{srOnly:!0,children:r})})}));function h(e){const{label:n,placement:t,spacing:a="0.5rem",children:i=(0,c.jsx)(x,{color:"currentColor",width:"1em",height:"1em"}),className:l,__css:u,...d}=e,m=(0,o.cx)("chakra-button__spinner",l),f="start"===t?"marginEnd":"marginStart",p=(0,r.useMemo)((()=>({display:"flex",alignItems:"center",position:n?"relative":"absolute",[f]:n?a:0,fontSize:"1em",lineHeight:"normal",...u})),[u,n,f,a]);return(0,c.jsx)(s.m.div,{className:m,...d,__css:p,children:i})}x.displayName="Spinner",h.displayName="ButtonSpinner";var g=t(1103),b=(0,d.G)(((e,n)=>{const t=i(),a=(0,m.mq)("Button",{...t,...e}),{isDisabled:l=(null==t?void 0:t.isDisabled),isLoading:u,isActive:d,children:p,leftIcon:x,rightIcon:b,loadingText:_,iconSpacing:N="0.5rem",type:v,spinner:k,spinnerPlacement:j="start",className:S,as:C,...E}=(0,f.Lr)(e),w=(0,r.useMemo)((()=>{const e={...null==a?void 0:a._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...a,...!!t&&{_focus:e}}}),[a,t]),{ref:q,type:I}=function(e){const[n,t]=(0,r.useState)(!e);return{ref:(0,r.useCallback)((e=>{e&&t("BUTTON"===e.tagName)}),[]),type:n?"button":void 0}}(C),L={rightIcon:b,leftIcon:x,iconSpacing:N,children:p};return(0,c.jsxs)(s.m.button,{ref:(0,g.qq)(n,q),as:C,type:null!=v?v:I,"data-active":(0,o.PB)(d),"data-loading":(0,o.PB)(u),__css:w,className:(0,o.cx)("chakra-button",S),...E,disabled:l||u,children:[u&&"start"===j&&(0,c.jsx)(h,{className:"chakra-button__spinner--start",label:_,placement:"start",spacing:N,children:k}),u?_||(0,c.jsx)(s.m.span,{opacity:0,children:(0,c.jsx)(y,{...L})}):(0,c.jsx)(y,{...L}),u&&"end"===j&&(0,c.jsx)(h,{className:"chakra-button__spinner--end",label:_,placement:"end",spacing:N,children:k})]})}));function y(e){const{leftIcon:n,rightIcon:t,children:r,iconSpacing:a}=e;return(0,c.jsxs)(c.Fragment,{children:[n&&(0,c.jsx)(l,{marginEnd:a,children:n}),r,t&&(0,c.jsx)(l,{marginStart:a,children:t})]})}b.displayName="Button"},2675:function(e,n,t){t.d(n,{x:function(){return l}});var r=t(6554),a=t(2381),i=t(3179),s=t(8702),o=t(5432);var c=t(5893),l=(0,r.G)((function(e,n){const t=(0,a.mq)("Text",e),{className:r,align:l,decoration:u,casing:d,...m}=(0,i.Lr)(e),f=function(e){const n=Object.assign({},e);for(let t in n)void 0===n[t]&&delete n[t];return n}({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,c.jsx)(s.m.p,{ref:n,className:(0,o.cx)("chakra-text",e.className),...f,...m,__css:t})}));l.displayName="Text"},2757:function(e,n,t){t.d(n,{X:function(){return l}});var r=t(6554),a=t(2381),i=t(3179),s=t(8702),o=t(5432),c=t(5893),l=(0,r.G)((function(e,n){const t=(0,a.mq)("Heading",e),{className:r,...l}=(0,i.Lr)(e);return(0,c.jsx)(s.m.h2,{ref:n,className:(0,o.cx)("chakra-heading",e.className),...l,__css:t})}));l.displayName="Heading"},7747:function(e,n,t){t.d(n,{xu:function(){return s}});var r=t(8702),a=t(6554),i=t(5893),s=(0,r.m)("div");s.displayName="Box";var o=(0,a.G)((function(e,n){const{size:t,centerContent:r=!0,...a}=e,o=r?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,i.jsx)(s,{ref:n,boxSize:t,__css:{...o,flexShrink:0,flexGrow:0},...a})}));o.displayName="Square",(0,a.G)((function(e,n){const{size:t,...r}=e;return(0,i.jsx)(o,{size:t,ref:n,borderRadius:"9999px",...r})})).displayName="Circle"},1103:function(e,n,t){t.d(n,{lq:function(){return a},qq:function(){return i}});var r=t(7294);function a(...e){return n=>{e.forEach((e=>{!function(e,n){if(null!=e)if("function"!=typeof e)try{e.current=n}catch(t){throw new Error(`Cannot assign value '${n}' to ref '${e}'`)}else e(n)}(e,n)}))}}function i(...e){return(0,r.useMemo)((()=>a(...e)),e)}}}]);
//# sourceMappingURL=component---src-pages-404-tsx-85457404575084acadd4.js.map