import{R as e,S as a,r as u,z as s,j as r,M as t,N as o,Q as l,U as i,W as n,X as v,as as m,a4 as p,at as d}from"./index-661ec728.js";import{V as c}from"./VideoLists-6d609de8.js";import{P as y}from"./index-8234b238.js";import"./Youtube-edd8b845.js";import"./PlayOne-c57c555f.js";import"./Grid-8b78ec37.js";import"./Skeleton-e15f2934.js";import"./use-houdini-0fca5f1d.js";import"./Select-289431c4.js";const g={class:"videos"},j={__name:"videos",setup(j){const{t:h}=e(),q=a(),f=u(q.currentRoute.value.query.keywords),C=u([]),N=u(0),b=u(30),R=u(q.currentRoute.value.query.page?Number(q.currentRoute.value.query.page):1),k=(e,a=30,u=0,s=1004)=>{m(e,a,u,s).then((e=>{N.value=e.result.mvCount,C.value=[],e.result.mvs?e.result.mvs.forEach((e=>{C.value.push({id:e.id,cover:e.cover,name:e.name,artist:e.artists,playCount:p(e.playCount),duration:d(e.duration)})})):$message.error(h("general.message.acquisitionFailed")),"undefined"!=typeof $scrollToTop&&$scrollToTop()}))};s((()=>q.currentRoute.value),(e=>{f.value=e.query.keywords,R.value=Number(e.query.page?e.query.page:1),"s-videos"==e.name&&k(f.value,b.value,(R.value-1)*b.value)}));const S=e=>{b.value=e,k(f.value,e,(R.value-1)*b.value)},P=e=>{q.push({path:"/search/videos",query:{keywords:f.value,page:e}})};return r((()=>{k(f.value,b.value,(R.value-1)*b.value)})),(e,a)=>(t(),o("div",g,[l(c,{listData:i(C)},null,8,["listData"]),i(C)[0]?(t(),n(y,{key:0,pageNumber:i(R),totalCount:i(N),onPageSizeChange:S,onPageNumberChange:P},null,8,["pageNumber","totalCount"])):v("",!0)]))}};export{j as default};
