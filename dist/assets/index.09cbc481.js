import{T as a,k as e}from"./index.ddb90805.js";/* empty css              */const r=l=>{switch(l){case 400:a.fail("\u8BF7\u6C42\u5931\u8D25\uFF01\u8BF7\u60A8\u7A0D\u540E\u91CD\u8BD5");break;case 401:a.fail("\u767B\u5F55\u5931\u6548\uFF01\u8BF7\u60A8\u91CD\u65B0\u767B\u5F55");break;case 403:a.fail("\u5F53\u524D\u8D26\u53F7\u65E0\u6743\u9650\u8BBF\u95EE\uFF01");break;case 404:a.fail("\u4F60\u6240\u8BBF\u95EE\u7684\u8D44\u6E90\u4E0D\u5B58\u5728\uFF01");break;case 405:a.fail("\u8BF7\u6C42\u65B9\u5F0F\u9519\u8BEF\uFF01\u8BF7\u60A8\u7A0D\u540E\u91CD\u8BD5");break;case 408:a.fail("\u8BF7\u6C42\u8D85\u65F6\uFF01\u8BF7\u60A8\u7A0D\u540E\u91CD\u8BD5");break;case 500:a.fail("\u670D\u52A1\u5F02\u5E38\uFF01");break;case 502:a.fail("\u7F51\u5173\u9519\u8BEF\uFF01");break;case 503:a.fail("\u670D\u52A1\u4E0D\u53EF\u7528\uFF01");break;case 504:a.fail("\u7F51\u5173\u8D85\u65F6\uFF01");break;default:a.fail("\u8BF7\u6C42\u5931\u8D25\uFF01")}};e.defaults.baseURL="http://152.136.144.141:8080/dahe";e.defaults.timeout=2e3*1e3;e.defaults.headers.post["Content-Type"]="application/json";e.interceptors.response.use(l=>{if(l.data.state==1)return l.data},l=>{const{response:n}=l;if(n)return r(n.status)});