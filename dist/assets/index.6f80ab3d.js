import{r as e}from"./request.e90f9786.js";import{z as p}from"./index.178e022e.js";const o=p(),i=(t,s)=>e.post("app/selectionActivity/video/list",{userId:o.$state.userId,pageSize:"10",activityNo:"carActivity001",creatorType:t,currentPage:s},""),c=t=>e.get("appposts/poststhumbup",{data:t},""),u=t=>e.get("app/dict/listByParentTypeNo",{parentTypeNo:t},""),n=(t,s)=>e.post("app/selectionActivity/video/list",{userId:o.$state.userId,pageSize:"10",activityNo:"3b4642431dfc43fcb581069037ee73be",creatorType:t,currentPage:s},"");export{n as a,u as g,c as p,i as s};
