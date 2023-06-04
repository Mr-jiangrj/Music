import{d as e,M as a,N as l,O as s,_ as o,R as r,S as u,am as t,r as n,p as i,z as c,j as p,Q as d,Y as m,U as g,a2 as v,X as f,ao as h,aK as y,at as C,aL as S,ap as w,aM as _,aB as j,a1 as k,W as $,ac as x,aN as b,ad as N,aA as D}from"./index-661ec728.js";import{D as F}from"./DataLists-57663f84.js";import{P as R}from"./index-8234b238.js";import"./SmallSongData-3374c561.js";import"./Add-3dc646af.js";import"./FormItem-6ada1754.js";import"./Alert-dbc6e093.js";import"./ListAdd-a3933c80.js";import"./LinkTwo-82bd962a.js";import"./PlayOne-c57c555f.js";import"./Select-289431c4.js";const T={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},q=[s("path",{d:"M19 11c0-3.87-3.13-7-7-7a6.99 6.99 0 0 0-6.74 5.15A5.49 5.49 0 0 0 1 14.5C1 17.54 3.46 20 6.5 20h12c2.49-.01 4.5-2.03 4.5-4.52c0-2.33-1.75-4.22-4-4.48zm-6 2v2c0 .55-.45 1-1 1s-1-.45-1-1v-2H9.21c-.45 0-.67-.54-.35-.85l2.79-2.79c.2-.2.51-.2.71 0l2.79 2.79a.5.5 0 0 1-.35.85H13z",fill:"currentColor"},null,-1)],z=e({name:"BackupRound",render:function(e,s){return a(),l("svg",T,q)}}),M={class:"cloud"},A={class:"data"},L={key:0,class:"space"},P=o({__name:"cloud",setup(e){const{t:o}=r(),T=u(),q=t(),P=n([]),U=n([]),B=n(30),E=n(T.currentRoute.value.query.page?Number(T.currentRoute.value.query.page):1),H=n(0),I=n(null),G=n("success"),O=n(!1),Q=n(0),W=(e=30,a=0,l=!0)=>{y(e,a).then((e=>{H.value=e.count,U.value=[],P.value=[(e.size/Math.pow(1024,3)).toFixed(2),(e.maxSize/Math.pow(1024,3)).toFixed(0)],e.data?e.data.forEach(((e,a)=>{U.value.push({id:e.songId,num:a+1+(E.value-1)*B.value,name:e.simpleSong.name,artist:e.simpleSong.ar,album:e.simpleSong.al,alia:e.simpleSong.alia,mv:e.simpleSong.mv,time:C(e.simpleSong.dt)})})):$message.error(o("general.message.acquisitionFailed")),"undefined"!=typeof $scrollToTop&&$scrollToTop()}))},X=e=>{const{loaded:a,total:l}=e,s=Math.round(100*a/l);Q.value=Number(s)},Y=e=>{const a=e.target.files;if(!a[0])return!1;G.value="success",O.value=!0,S(a[0],X).then((e=>{var a,l;200===e.code?(K(),(null==(a=e.privateCloud.simpleSong.al)?void 0:a.name)||$message.warning(o("general.message.upCloudNotHas")),$message.success(o("general.message.upCloudSuccess",{name:null==(l=e.privateCloud.simpleSong)?void 0:l.name})),W(B.value,(E.value-1)*B.value)):(G.value="error",$message.error(o("general.message.upCloudError")),console.error(o("general.message.upCloudError")))})).catch((e=>{G.value="error",K(),$message.error(o("general.message.upCloudFailure")),console.error(o("general.message.upCloudFailure"),e)}))},K=()=>{O.value=!1,Q.value=0,I.value.value=null},V=()=>{K(),I.value.click()},Z=e=>{B.value=e,W(e,(E.value-1)*B.value)},J=e=>{T.push({path:"/user/cloud",query:{page:e}})};return i("cloudDataLoad",((e=!1)=>{W(B.value,(E.value-1)*B.value,e)})),c((()=>T.currentRoute.value),(e=>{E.value=Number(e.query.page?e.query.page:1),"user-cloud"==e.name&&W(B.value,(E.value-1)*B.value)})),p((()=>{$setSiteTitle(o("nav.user")+" - "+o("nav.userChildren.cloud")),W(B.value,(E.value-1)*B.value)})),(e,o)=>{const r=x,u=w,t=b,n=N,i=_,c=D,p=j;return a(),l("div",M,[s("div",A,[d(u,{class:"up",type:"primary",strong:"",secondary:"",round:"",onClick:o[0]||(o[0]=e=>g(I).click())},{icon:m((()=>[d(r,{component:g(z)},null,8,["component"])])),default:m((()=>[k(" "+v(e.$t("general.name.upCloud")),1)])),_:1}),s("input",{ref_key:"upSongRef",ref:I,type:"file",style:{display:"none"},accept:"audio/*",onChange:Y},null,544),g(P)[0]?(a(),l("div",L,[s("span",null,v(g(P)[0])+" G",1),d(i,{trigger:"hover"},{trigger:m((()=>[d(t,{type:"line",color:g(q).themeData.primaryColor,class:"progress","show-indicator":!1,percentage:100/(g(P)[1]/g(P)[0])},null,8,["color","percentage"])])),default:m((()=>[d(n,null,{default:m((()=>[k(v(e.$t("general.name.cloudUsed",{used:(100/(g(P)[1]/g(P)[0])).toFixed(),remaining:g(P)[1]-g(P)[0]})),1)])),_:1})])),_:1}),s("span",null,v(g(P)[1])+" G",1)])):f("",!0)]),d(F,{listData:g(U)},null,8,["listData"]),d(R,{totalCount:g(H),pageNumber:g(E),onPageSizeChange:Z,onPageNumberChange:J},null,8,["totalCount","pageNumber"]),d(p,{class:"s-modal close",show:g(O),"onUpdate:show":o[1]||(o[1]=e=>h(O)?O.value=e:null),preset:"card",title:e.$t("general.name.upCloud"),"auto-focus":!1,bordered:!1,"close-on-esc":!1,esc:!1,"mask-closable":!1},{footer:m((()=>["error"===g(G)?(a(),$(c,{key:0,justify:"end"},{default:m((()=>[d(u,{onClick:K},{default:m((()=>[k(v(e.$t("general.dialog.cancel")),1)])),_:1}),d(u,{type:"primary",onClick:V},{default:m((()=>[k(v(e.$t("general.dialog.resetUp")),1)])),_:1})])),_:1})):f("",!0)])),default:m((()=>[d(t,{type:"line",status:g(G),percentage:g(Q),"indicator-placement":"inside",processing:""},null,8,["status","percentage"])])),_:1},8,["show","title"])])}}},[["__scopeId","data-v-0bd165c1"]]);export{P as default};
