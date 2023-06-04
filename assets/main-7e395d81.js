import{_ as e,am as a,a8 as l,aO as s,aP as t,R as n,r as i,j as u,M as o,N as v,Q as c,Y as d,aG as r,O as g,a1 as m,a2 as p,U as h,W as b,X as y,Z as $,$ as f,I as _,aH as T,aQ as k,ao as S,ap as U,ad as L,aE as w}from"./index-661ec728.js";import{a as C,_ as x}from"./Grid-8b78ec37.js";import{_ as j}from"./Select-289431c4.js";const P={class:"set-main"},M={class:"top"},D={class:"name"},I={class:"tip"},H={class:"name"},A={class:"name"},E={class:"name"},F={class:"name"},N={class:"tip"},V={class:"name"},z={class:"name"},G={class:"tip"},O={class:"name"},Q={class:"name"},R={class:"tip"},W={class:"name"},X={class:"tip"},Y={class:"name"},Z={class:"tip"},q={class:"name"},B={class:"tip"},J={class:"name"},K={class:"tip"},ee={class:"name"},ae={class:"tip"},le=e({__name:"main",setup(e){const le=a(),se=l(),te=s(),{theme:ne,themeAuto:ie,listClickMode:ue,bottomLyricShow:oe,songLevel:ve,bannerShow:ce,autoSignIn:de,searchHistory:re,themeType:ge,showLyricSetting:me,songVolumeFade:pe,useUnmServer:he,memoryLastPlaybackPosition:be,language:ye}=t(le),{locale:$e,t:fe}=n(),_e=i([]),Te=e=>{te.value,e&&(ne.value=te.value)},ke=i([]),Se=[{label:"🇨🇳 简体中文",value:"zh-CN"},{label:"🇬🇧 English",value:"en"}],Ue=(e,a)=>{const l=document.documentElement;$e.value=e,l&&l.setAttribute("lang",e),we(),fe("setting.changeLanguage",{name:e}),$message.success(fe("setting.changeLanguage",{name:a.label}))},Le=i([]),we=()=>{var e,a,l,s;_e.value=[{label:fe("nav.avatar.light"),value:"light"},{label:fe("nav.avatar.dark"),value:"dark"}],ke.value=[{label:fe("setting.dblclick"),value:"dblclick"},{label:fe("setting.click"),value:"click"}],Le.value=[{label:fe("setting.standard"),value:"standard"},{label:fe("setting.higher"),value:"higher"},,{label:fe("setting.exhigh"),value:"exhigh"},{label:fe("setting.lossless"),value:"lossless",disabled:!(null==(e=se.userData)?void 0:e.vipType)},{label:fe("setting.hires"),value:"hires",disabled:!(null==(a=se.userData)?void 0:a.vipType)},{label:fe("setting.jyeffect"),value:"jyeffect",disabled:!(null==(l=se.userData)?void 0:l.vipType)},{label:fe("setting.jymaster"),value:"jymaster",disabled:!(null==(s=se.userData)?void 0:s.vipType)}]},Ce=(e,a=!1)=>{a?$dialog.warning({class:"s-dialog",title:fe("general.name.restore"),content:fe("setting.themeTypeDialog"),positiveText:fe("general.name.restore"),negativeText:fe("general.dialog.cancel"),onPositiveClick:()=>{$message.success(fe("other.cleanAll")),ge.value="red"}}):($message.success(fe("setting.themeChange",{name:e.name})),ge.value=e.label)};return u((()=>{we()})),(e,a)=>{const l=U,s=L,t=C,n=x,i=r,u=j,le=w;return o(),v("div",P,[c(i,{class:"set-item","content-style":{flexDirection:"column",alignItems:"flex-start"}},{default:d((()=>[g("div",M,[g("div",D,[m(p(e.$t("setting.themeType"))+" ",1),g("span",I,p(e.$t("setting.themeTypeTip")),1)]),"red"!==h(ge)?(o(),b(l,{key:0,strong:"",secondary:"",onClick:a[0]||(a[0]=e=>Ce(null,!0))},{default:d((()=>[m(p(e.$t("general.name.restore")),1)])),_:1})):y("",!0)]),c(n,{class:"color-selete","x-gap":16,"y-gap":16,responsive:"screen",cols:"3 s:4 m:5 l:6"},{default:d((()=>[(o(!0),v($,null,f(h(k),(e=>(o(),b(t,{key:e,style:_({"--color":e.primaryColor}),class:T(e.label===h(ge)?"item check":"item"),onClick:a=>Ce(e)},{default:d((()=>[c(s,{innerHTML:"zh-CN"===h(ye)?e.name:e.label},null,8,["innerHTML"])])),_:2},1032,["style","class","onClick"])))),128))])),_:1})])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",H,p(e.$t("setting.language")),1),c(u,{class:"set",value:h(ye),"onUpdate:value":[a[1]||(a[1]=e=>S(ye)?ye.value=e:null),Ue],options:Se},null,8,["value"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",A,p(e.$t("setting.theme")),1),c(u,{class:"set",value:h(ne),"onUpdate:value":[a[2]||(a[2]=e=>S(ne)?ne.value=e:null),a[3]||(a[3]=e=>ie.value=!1)],options:h(_e)},null,8,["value","options"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",E,p(e.$t("setting.themeAuto")),1),c(le,{value:h(ie),"onUpdate:value":[a[4]||(a[4]=e=>S(ie)?ie.value=e:null),Te],round:!1},null,8,["value"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",F,[m(p(e.$t("setting.autoSignIn"))+" ",1),g("span",N,p(e.$t("setting.autoSignInTip")),1)]),c(le,{value:h(de),"onUpdate:value":a[5]||(a[5]=e=>S(de)?de.value=e:null),round:!1},null,8,["value"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",V,p(e.$t("setting.bannerShow")),1),c(le,{value:h(ce),"onUpdate:value":a[6]||(a[6]=e=>S(ce)?ce.value=e:null),round:!1},null,8,["value"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",z,[m(p(e.$t("setting.listClickMode"))+" ",1),g("span",G,p(e.$t("setting.listClickModeTip")),1)]),c(u,{class:"set",value:h(ue),"onUpdate:value":a[7]||(a[7]=e=>S(ue)?ue.value=e:null),options:h(ke)},null,8,["value","options"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",O,p(e.$t("setting.searchHistory")),1),c(le,{value:h(re),"onUpdate:value":a[8]||(a[8]=e=>S(re)?re.value=e:null),round:!1},null,8,["value"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",Q,[m(p(e.$t("setting.bottomLyricShow"))+" ",1),g("span",R,p(e.$t("setting.bottomLyricShowTip")),1)]),c(le,{value:h(oe),"onUpdate:value":a[9]||(a[9]=e=>S(oe)?oe.value=e:null),round:!1},null,8,["value"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",W,[m(p(e.$t("setting.songVolumeFade"))+" ",1),g("span",X,p(e.$t("setting.songVolumeFadeTip")),1)]),c(le,{value:h(pe),"onUpdate:value":a[10]||(a[10]=e=>S(pe)?pe.value=e:null),round:!1},null,8,["value"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",Y,[m(p(e.$t("setting.memoryLastPlaybackPosition"))+" ",1),g("span",Z,p(e.$t("setting.memoryLastPlaybackPositionTip")),1)]),c(le,{value:h(be),"onUpdate:value":a[11]||(a[11]=e=>S(be)?be.value=e:null),round:!1},null,8,["value"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",q,[m(p(e.$t("setting.songLevel"))+" ",1),g("span",B,p(e.$t("setting.songLevelTip")),1)]),c(u,{class:"set",value:h(ve),"onUpdate:value":a[12]||(a[12]=e=>S(ve)?ve.value=e:null),options:h(Le)},null,8,["value","options"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",J,[m(p(e.$t("setting.useUnmServerShow"))+" ",1),g("span",K,p(h(true)?e.$t("setting.useUnmServerShowTip1"):e.$t("setting.useUnmServerShowTip2")),1)]),c(le,{value:h(he),"onUpdate:value":a[13]||(a[13]=e=>S(he)?he.value=e:null),round:!1,disabled:!h(true)},null,8,["value","disabled"])])),_:1}),c(i,{class:"set-item"},{default:d((()=>[g("div",ee,[m(p(e.$t("setting.showLyricSetting"))+" ",1),g("span",ae,p(e.$t("setting.showLyricSettingTip")),1)]),c(le,{value:h(me),"onUpdate:value":a[14]||(a[14]=e=>S(me)?me.value=e:null),round:!1},null,8,["value"])])),_:1})])}}},[["__scopeId","data-v-b234628f"]]);export{le as default};
