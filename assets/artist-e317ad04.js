import{a_ as t}from"./index-661ec728.js";const a=(a=-1,s=-1,i=30,e=0,m=-1)=>t({method:"GET",url:"/artist/list",params:{type:a,area:s,limit:i,offset:e,initial:m}}),s=a=>t({method:"GET",url:"/artist/detail",params:{id:a}}),i=a=>t({method:"GET",url:"/artists",params:{id:a,timestamp:(new Date).getTime()}}),e=(a,s=30,i=0,e="hot")=>t({method:"GET",url:"/artist/songs",params:{id:a,limit:s,offset:i,order:e,timestamp:(new Date).getTime()}}),m=(a,s=30,i=0)=>t({method:"GET",url:"/artist/album",params:{id:a,limit:s,offset:i}}),r=(a,s=30,i=0)=>t({method:"GET",url:"/artist/mv",params:{id:a,limit:s,offset:i}}),d=(a,s)=>t({method:"GET",hiddenBar:!0,url:"/artist/sub",params:{t:a,id:s,timestamp:(new Date).getTime()}});export{s as a,i as b,m as c,r as d,e,a as g,d as l};
