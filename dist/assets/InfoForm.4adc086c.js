/* empty css              *//* empty css              *//* empty css              */import"./index.b61db740.js";import"./index.54505bef.js";import{_ as D,C as j}from"./05.e09ae218.js";import"./index.e9308d9f.js";/* empty css              */import{U as $}from"./index.f917bc55.js";import{_ as A,E as x,y as B,r as I,z as E,V as R,G,o as v,l as m,ad as d,aX as h,p as n,au as T,A as k,F as M,s as q,ae as g,a as b,q as P,C as X,D as H,T as s,at as J}from"./index.1cb909ac.js";import{_ as K}from"./08.5962a5d4.js";/* empty css              */import{D as O}from"./index.4ba519cb.js";import"./index.8b4aa88c.js";const w=r=>(X("data-v-aa98fef6"),r=r(),H(),r),Q={class:"form"},W={key:0},Y=w(()=>n("div",{class:"message"},"\u7533\u8BF7\u8FBE\u4EBA\u7C7B\u578B",-1)),Z={class:"message"},ee=w(()=>n("img",{class:"image",src:D,alt:""},null,-1)),te=w(()=>n("div",{class:"introduce"}," \u60A8\u63D0\u4F9B\u7684\u4FE1\u606F\u4EC5\u4F9B\u5927\u6CB3\u62A5\xB7\u8C6B\u89C6\u9891\u5BA1\u6838\u53C2\u8003\u53CA\u5F00\u8BBE\u8D26\u53F7\uFF0C\u76F8\u5173\u4FE1\u606F\u5C06\u4E25\u683C\u4FDD\u5BC6\u3002 ",-1)),ae={class:"title"},oe=["onUpdate:modelValue","placeholder"],ie={class:"tips"},ne={key:1,class:"expert"},se=w(()=>n("div",{class:"county"},"\u6240\u5728\u5730\u533A",-1)),le={__name:"InfoForm",props:{message:Array,title:String,authType:String},setup(r){const p=r,u=x(!1),c=x(""),y=B().proxy.$axios,i=I({message:[],options:[]}),t=I({authName:"",accountName:"",realName:"",phone:"",authType:"",talentTypeName:"",idCard:"",provinceId:"",countyId:"",cityId:"",fileList:[]}),V=E(),f=x("");function N(){y({method:"GET",url:"https://news.dahebao.cn/dahe/app/announce/countyList"}).then(a=>{if(a.status==200){for(let e of a.data)for(let l of e.children)delete l.children;i.options=a.data}else s(a.status)},a=>{s(a)})}function C({selectedOptions:a}){u.value=!1,f.value=a.map(e=>e.text).join("/"),t.cityId=c.value.toString(),t.provinceId=c.value.toString().slice(0,2)+"0000"}function z(){for(let a of i.message)if(a.value==""){s("\u8BF7\u68C0\u67E5"+a.name+"\u4FE1\u606F");return}if(p.authType=="4")if(t.talentTypeName==""){s("\u8BF7\u68C0\u67E5\u7533\u8BF7\u8FBE\u4EBA\u7C7B\u578B");return}else if(t.cityId==""){s("\u8BF7\u68C0\u67E5\u6240\u5728\u5730\u533A");return}else if(t.countyId==""){s("\u8BF7\u68C0\u67E5\u8BE6\u7EC6\u5730\u5740");return}else t.realName=i.message[0].value,t.idCard=i.message[1].value,t.phone=i.message[2].value,t.authType=p.authType;else t.authName=i.message[0].value,t.accountName=i.message[1].value,t.realName=i.message[2].value,t.phone=i.message[3].value,t.authType=p.authType;y({method:"post",url:`https://news.dahebao.cn/dahe/app/accountAuthRecord/saveAccountAuthRecord?userId=${V.$state.userId}`,data:[t]}).then(a=>{if(a.state=1){O({message:"\u4FE1\u606F\u5DF2\u63D0\u4EA4\u6210\u529F\uFF0C\u8BF7\u7B49\u5F85\u5BA1\u6838\uFF0C\u901A\u8FC7\u540E\u5C06\u6709\u5DE5\u4F5C\u4EBA\u5458\u8054\u7CFB\u60A8\u3002",theme:"round-button"});for(let e of i.message)e.value="";t.fileList.length=0,t.talentTypeName="",f.value="",t.countyId=""}else s(a.data)},a=>{s(a)})}function U(a){let e=new FormData;e.append("file",a.file),y({method:"post",url:"https://news.dahebao.cn/dahe/app/announce/uploadImg",data:e}).then(l=>{l.status==200?t.fileList[t.fileList.length-1].fileUrl=l.data.data.fileUrl:s(l.status)},l=>{s(l)})}return R(()=>t.fileList,(a,e)=>{a.length==0?i.message[4].value="":i.message[4].value="1"}),G(()=>{i.message=p.message,p.authType=="4"&&N()}),(a,e)=>{const l=$,L=j,S=J;return v(),m("div",Q,[r.authType=="4"?(v(),m("div",W,[Y,d(n("input",{class:"expert_input","onUpdate:modelValue":e[0]||(e[0]=o=>t.talentTypeName=o),placeholder:"\u7F8E\u98DF\uFF0C\u8FD0\u52A8\u7B49\uFF0C\u540D\u79F0\u81EA\u586B",type:"text"},null,512),[[h,t.talentTypeName]])])):T("",!0),n("div",Z,k(r.title),1),ee,te,(v(!0),m(M,null,q(i.message,(o,F)=>(v(),m("div",{class:"main",key:F},[n("div",ae,k(o.name),1),d(n("input",{class:"input",type:"text","onUpdate:modelValue":_=>o.value=_,placeholder:o.placeholder},null,8,oe),[[g,o.type=="input"],[h,o.value]]),d(b(l,{class:"uploader",modelValue:t.fileList,"onUpdate:modelValue":e[1]||(e[1]=_=>t.fileList=_),"after-read":U},null,8,["modelValue"]),[[g,o.type=="upload"]]),d(n("div",ie," \uFF08 \u8BF7\u4E0A\u4F20\u8425\u4E1A\u6267\u7167\uFF0C\u83B7\u5956\u8BC1\u4E66\u6216\u8BA4\u8BC1\u8BC1\u4E66 \uFF09 ",512),[[g,o.type=="upload"]])]))),128)),r.authType=="4"?(v(),m("div",ne,[se,d(n("input",{class:"province",readonly:"","onUpdate:modelValue":e[2]||(e[2]=o=>f.value=o),onClick:e[3]||(e[3]=o=>u.value=!0),type:"text"},null,512),[[h,f.value]]),d(n("input",{class:"province_more","onUpdate:modelValue":e[4]||(e[4]=o=>t.countyId=o),placeholder:"\u8BE6\u7EC6\u5730\u5740",type:"text"},null,512),[[h,t.countyId]]),d(n("img",{onClick:e[5]||(e[5]=o=>u.value=!0),class:"county_img",src:K,alt:""},null,512),[[g,!f.value]])])):T("",!0),b(S,{show:u.value,"onUpdate:show":e[8]||(e[8]=o=>u.value=o),round:"",position:"bottom"},{default:P(()=>[b(L,{modelValue:c.value,"onUpdate:modelValue":e[6]||(e[6]=o=>c.value=o),title:"\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A",options:i.options,onClose:e[7]||(e[7]=o=>u.value=!1),onFinish:C},null,8,["modelValue","options"])]),_:1},8,["show"]),n("button",{class:"submit",onClick:z},"\u63D0\u4EA4\u4FE1\u606F")])}}};var be=A(le,[["__scopeId","data-v-aa98fef6"]]);export{be as I};
