import{aW as e,n,l as r,d as o,e as t,B as a,g as i,ba as s,bx as l,h as d,aZ as c,Z as u}from"./index-661ec728.js";import{u as g}from"./use-houdini-0fca5f1d.js";const h={name:"Skeleton",common:e,self:e=>{const{heightSmall:n,heightMedium:r,heightLarge:o,borderRadius:t}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:t,heightSmall:n,heightMedium:r,heightLarge:o}}},m=n([r("skeleton","\n height: 1em;\n width: 100%;\n transition: background-color .3s var(--n-bezier);\n transition:\n --n-color-start .3s var(--n-bezier),\n --n-color-end .3s var(--n-bezier),\n background-color .3s var(--n-bezier);\n animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);\n background-color: var(--n-color-start);\n "),n("@keyframes skeleton-loading","\n 0% {\n background: var(--n-color-start);\n }\n 40% {\n background: var(--n-color-end);\n }\n 80% {\n background: var(--n-color-start);\n }\n 100% {\n background: var(--n-color-start);\n }\n ")]),b=o({name:"Skeleton",inheritAttrs:!1,props:Object.assign(Object.assign({},a.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),setup(e){g();const{mergedClsPrefixRef:n}=t(e),r=a("Skeleton","-skeleton",m,h,e,n);return{mergedClsPrefix:n,style:i((()=>{var n,o;const t=r.value,{common:{cubicBezierEaseInOut:a}}=t,i=t.self,{color:d,colorEnd:c,borderRadius:u}=i;let g;const{circle:h,sharp:m,round:b,width:p,height:k,size:v,text:f,animated:y}=e;void 0!==v&&(g=i[s("height",v)]);const x=h?null!==(n=null!=p?p:k)&&void 0!==n?n:g:p,z=null!==(o=h&&null!=p?p:k)&&void 0!==o?o:g;return{display:f?"inline-block":"",verticalAlign:f?"-0.125em":"",borderRadius:h?"50%":b?"4096px":m?"":u,width:"number"==typeof x?l(x):x,height:"number"==typeof z?l(z):z,animation:y?"":"none","--n-bezier":a,"--n-color-start":d,"--n-color-end":c}}))}},render(){const{repeat:e,style:n,mergedClsPrefix:r,$attrs:o}=this,t=d("div",c({class:`${r}-skeleton`,style:n},o));return e>1?d(u,null,Array.apply(null,{length:e}).map((e=>[t,"\n"]))):t}});export{b as _};
