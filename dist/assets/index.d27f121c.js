/* empty css              *//* empty css              */import{F as K,a as P,_ as Q}from"./bg1.0c1076e0.js";import"./index.1b95e17d.js";import{_ as T,a as I,x as $,c as s,d as r,f as a,F as A,g as D,B as b,E as W,t as g,z as X,l as Y,D as z,p as O,i as R,s as Z,r as N,o as tt,G as at,H as et,O as it,e as h,w as S,T as m,n as ot}from"./index.ee24c16d.js";/* empty css              */import{r as k}from"./request.b56e37a1.js";const dt=i=>k.get("app/daheDrawActivityConfig/findDrawActivityConfigByAactivityNo",i,""),st=i=>k.get("app/daheDrawActivityConfig/drawRecordList",i,""),rt=i=>k.get("app/daheDrawActivityConfig/getUserCodeAndinvitationList",i,""),nt=i=>k.get("app/daheDrawActivityConfig/toDraw",i,""),ct=i=>k.get("app/daheDrawActivityConfig/findDrawCount",i,""),vt=(i,e)=>k.post("app/daheDrawActivityConfig/saveAddress"+i,e,"");var C={findDraw:dt,drawRecordList:st,getUserCode:rt,toDraw:nt,findDrawCount:ct,saveAddress:vt};const lt=Y('<div class="decorate_top" data-v-4176f291><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div></div><div class="decorate_left" data-v-4176f291><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div></div><div class="decorate_right" data-v-4176f291><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div></div><div class="decorate_bottom" data-v-4176f291><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div><div class="tip" data-v-4176f291></div></div>',4),wt={key:0},ut=["src"],pt={class:"giftName"},ft={__name:"Sudoku",props:{start:Boolean,activity:Array,result:Number,clickLottery:Function,changeIsTurnOver:Function,changeShow:Function},setup(i){const e=i,t=I({item:[{state:0,color:1},{state:0,color:0},{state:0,color:1},{state:0,color:0},{state:0,color:0},{state:0,color:0},{state:0,color:1},{state:0,color:0},{state:0,color:1}]});function y(c){let v=[120,80,60,60,50,100,200,200,250],n=v.length,u=0;v.forEach((p,l)=>{setTimeout(()=>{_(p,l+1,n,c)},u),u+=p*8})}function _(c,v,n,u){let p=[0,1,2,5,8,7,6,3];v==n&&p.splice(u);for(let l in p)setTimeout(()=>{t.item.forEach(L=>{L.state=!1}),t.item[p[l]].state=!0,v==n&&l==p.length-1&&(z.alert({message:e.activity[p[l]].awardName}).then(()=>{e.changeShow()}),e.changeIsTurnOver())},c*l)}function w(){e.clickLottery()}return $(()=>e.start,(c,v)=>{y(e.result)}),(c,v)=>(s(),r("div",null,[a("main",null,[lt,(s(!0),r(A,null,D(t.item,(n,u)=>(s(),r("div",{style:b({background:n.state?"#FFFFE0":""}),key:u,class:W([n.color?"btn":"","item"])},[e.activity?(s(),r("div",wt,[a("img",{src:e.activity[u].awardImage},null,8,ut),a("div",pt,g(e.activity[u].awardName),1)])):X("",!0)],6))),128)),a("div",{class:"clickLott",onClick:w},"\u7ACB\u5373\u62BD\u5956")])]))}};var ht=T(ft,[["__scopeId","data-v-4176f291"]]);const gt=i=>(O("data-v-18456eb9"),i=i(),R(),i),mt={class:"wrapper"},yt={class:"sector-inner"},_t=["src"],bt=gt(()=>a("div",{class:"start"},"\u7ACB\u5373\u62BD\u5956",-1)),kt=[bt],xt={__name:"Corona",props:{activity:Array,clickLottery:Function,result:Number,changeIsTurnOver:Function,changeShow:Function,start:Boolean},setup(i){const e=i,t=I({rotateAngle:0,time:0,rotate_angle:"",item:24,activity:{poolList:[{name:"iphone"},{name:"ipad"},{name:"switch"},{name:"\u73A9\u5177"},{name:"\u597D\u73A9\u7684"},{name:"\u597D\u5403\u7684"}]}});function y(){e.clickLottery()}function _(w){switch(t.rotateAngle=t.rotateAngle-t.time,w){case 1:t.time=Math.random()*(30-0)+0;break;case 6:t.time=Math.random()*(85-35)+35;break;case 5:t.time=Math.random()*(145-95)+95;break;case 4:t.time=Math.random()*(205-155)+155;break;case 3:t.time=Math.random()*(265-215)+215;break;case 2:t.time=Math.random()*(325-275)+275;break}t.rotateAngle=t.rotateAngle+3600+t.time,t.rotate_angle=`rotate(${t.rotateAngle}deg)`,setTimeout(function(){z.alert({message:e.activity[w-1].awardName}).then(()=>{e.changeShow()}),e.changeIsTurnOver()},5200)}return $(()=>e.start,(w,c)=>{_(e.result)}),(w,c)=>(s(),r("main",null,[a("div",mt,[a("div",{class:"panel",style:b({transform:t.rotate_angle,transition:"5s"})},[(s(!0),r(A,null,D(t.activity.poolList,(v,n)=>(s(),r("div",{class:"sector",key:n},[a("div",yt,[a("span",null,g(e.activity[n].awardName),1),a("img",{src:e.activity[n].awardImage},null,8,_t)])]))),128))],4),a("div",{class:"pointer",onClick:y},kt)])]))}};var Nt=T(xt,[["__scopeId","data-v-18456eb9"]]);const F=i=>(O("data-v-91ead686"),i=i(),R(),i),Ct=["src"],Lt=["src"],St={key:0,class:"title"},Tt={key:1,class:"title"},It=F(()=>a("div",{class:"text"},"\u6682\u65E0\u62BD\u5956",-1)),At=[It],Dt={key:2},zt={key:3},Ft={key:4,class:"empty_img"},Vt=F(()=>a("img",{src:Q,alt:""},null,-1)),$t=[Vt],Ot={class:"wrapper"},Rt={class:"block"},Bt=F(()=>a("div",null,"\u8BF7\u586B\u5199\u9886\u5956\u4FE1\u606F",-1)),jt={style:{margin:"16px"}},Mt=ot(" \u63D0\u4EA4 "),Et=["src"],Ut={class:"groud"},qt={__name:"index",setup(i){const e=Z(),t=I({sum:"",start:!0,result:0,activity:{drawType:0,poolList:[]},time:0,activityNo:"",isTurnOver:!0,recordList:[]}),y=N(!1),_=N(""),w=N(""),c=N(""),v=N(""),n=/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;function u(){p()}function p(){C.saveAddress(`?userId=${e.userId}&activityNo=${t.activityNo}`,JSON.stringify({realName:w.value,recordNo:v.value,phone:c.value,activityNo:t.activityNo,address:_.value})).then(o=>{m("\u4FDD\u5B58\u6210\u529F"),l()}).catch(o=>{m(o),l()})}function l(){t.activity.poolList[t.sum].awardFlag&&(y.value=!y.value)}function L(){t.time>0?t.isTurnOver?(t.isTurnOver=!1,t.time--,C.toDraw({userId:e.userId,activityNo:t.activityNo}).then(o=>{if(v.value=o.recordNo,t.activity.drawType==2){for(let d in t.activity.poolList)if(o.awardNo&&t.activity.poolList[d].awardNo==o.awardNo){t.sum=d;let x=[1,2,3,8,5,4,7,6,5];t.result=x[d],t.start=!t.start;return}}else if(t.activity.drawType==1){for(let d in t.activity.poolList)if(t.activity.poolList[d].awardNo==o.awardNo){t.sum=d,t.result=d*1+1,t.start=!t.start;return}}else m("\u51FA\u9519\u4E86")}).catch(()=>{t.activity.drawType==2?(t.start=!t.start,t.result=5):(t.start=!t.start,t.result=6)})):z.alert({message:"\u8BF7\u52FF\u91CD\u590D\u62BD\u5956"}).then(()=>{}):m("\u62BD\u5956\u6B21\u6570\u4E0D\u8DB3")}function B(){C.findDrawCount({userId:e.userId,activityNo:t.activityNo}).then(o=>{t.time=o.drawCount}).catch(o=>{})}function j(){window.location.href.indexOf("activityNo")==-1?m("\u8BF7\u6DFB\u52A0\u6D3B\u52A8\u7F16\u7801"):t.activityNo=window.location.href.match(/activityNo=(\S*)&/)[1]}function M(){C.findDraw({userId:e.userId,activityNo:t.activityNo}).then(o=>{if(e.userId!="empty")if(o.drawActivityConfig.drawType==2&&o.drawActivityConfig.poolList.length==8){const d=o.drawActivityConfig;d.poolList.splice(4,0,{awardImage:null,awardName:null}),t.activity=d}else o.drawActivityConfig.drawType==1&&o.drawActivityConfig.poolList.length==6?t.activity=o.drawActivityConfig:m("\u62BD\u5956\u914D\u7F6E\u6709\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u914D\u7F6E");else m("\u672A\u767B\u5F55\uFF0C\u65E0\u6CD5\u62BD\u5956")}).then(()=>{t.activity.createTime=t.activity.createTime.substring(0,10),t.activity.endDate=t.activity.endDate.substring(0,10),t.activity.createTime=t.activity.createTime.replace(/-/g,"/"),t.activity.endDate=t.activity.endDate.replace(/-/g,"/")}).catch(o=>{m("\u83B7\u53D6\u62BD\u5956\u914D\u7F6E\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")})}function E(){C.drawRecordList({userId:e.userId,activityNo:t.activityNo,page_index:0,page_count:50}).then(o=>{t.recordList=o.recordList}).catch(o=>{})}function V(){t.isTurnOver=!0}return tt(()=>{j(),B(),M(),E()}),(o,d)=>{const x=K,U=at,q=et,G=P,H=it;return s(),r("div",{class:"content",style:b([{background:t.activity.background?`url(${t.activity.background})`:""},{"background-size":"100% 100%","background-repeat":"no-repeat"}])},[a("header",null,[a("img",{class:"header_title",src:t.activity.activityName},null,8,Ct),a("img",{class:"header_rule",src:t.activity.activityRuleImage},null,8,Lt),a("div",{class:"activityRule",style:b({color:t.activity.activityRuleStyle?t.activity.activityRuleStyle:"#727272"})},g(t.activity.activityRule),5)]),t.activity.drawType==1||t.activity.drawType==2?(s(),r("div",St,[a("div",{style:b({color:t.activity.dateStyle?t.activity.dateStyle:"#727272"})}," \u65F6\u95F4\uFF1A"+g(t.activity.createTime)+"-"+g(t.activity.endDate),5),a("div",{class:"text",style:b({color:t.activity.drawCountFontStyle?t.activity.drawCountFontStyle:"#414141"})}," \u62BD\u5956\u6B21\u6570 ",4),a("div",{class:"time",style:b({color:t.activity.drawCountStyle?t.activity.drawCountStyle:"#EB2800"})},g(t.time)+"\u6B21 ",5)])):(s(),r("div",Tt,At)),t.activity.drawType==2?(s(),r("div",Dt,[h(ht,{activity:t.activity.poolList,result:t.result,clickLottery:L,changeIsTurnOver:V,start:t.start,changeShow:l},null,8,["activity","result","start"])])):t.activity.drawType==1?(s(),r("div",zt,[h(Nt,{activity:t.activity.poolList,result:t.result,clickLottery:L,changeIsTurnOver:V,start:t.start,changeShow:l},null,8,["activity","result","start"])])):(s(),r("div",Ft,$t)),h(H,{show:y.value},{default:S(()=>[a("div",Ot,[a("div",Rt,[Bt,h(G,{onSubmit:u},{default:S(()=>[h(U,{inset:""},{default:S(()=>[h(x,{modelValue:w.value,"onUpdate:modelValue":d[0]||(d[0]=f=>w.value=f),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"]),h(x,{modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=f=>c.value=f),placeholder:"\u8BF7\u8F93\u5165\u7535\u8BDD\u53F7\u7801",name:"pattern",rules:[{pattern:n,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u624B\u673A\u53F7"}]},null,8,["modelValue","rules"]),h(x,{modelValue:_.value,"onUpdate:modelValue":d[2]||(d[2]=f=>_.value=f),placeholder:"\u8BF7\u8F93\u5165\u5730\u5740",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5730\u5740"}]},null,8,["modelValue"])]),_:1}),a("div",jt,[h(q,{round:"",block:"",type:"primary","native-type":"submit"},{default:S(()=>[Mt]),_:1})])]),_:1})])])]),_:1},8,["show"]),a("footer",null,[a("div",null,[a("img",{class:"tip",src:t.activity.drawRecordImage},null,8,Et)]),a("div",Ut,[(s(!0),r(A,null,D(t.recordList,(f,J)=>(s(),r("div",{class:"cell",key:J},[a("div",null,g(f.realName),1),a("div",null,g(f.awardName),1),a("div",null,g(f.phone),1)]))),128))])])],4)}}};var Xt=T(qt,[["__scopeId","data-v-91ead686"]]);export{Xt as default};
