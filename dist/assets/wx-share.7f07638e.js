import{l as G}from"./index.4cfa603b.js";function ae(){return window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)=="micromessenger"}var O={versions:function(){var o=navigator.userAgent;return{trident:o.indexOf("Trident")>-1,presto:o.indexOf("Presto")>-1,webKit:o.indexOf("AppleWebKit")>-1,gecko:o.indexOf("Gecko")>-1&&o.indexOf("KHTML")==-1,mobile:!!o.match(/AppleWebKit.*Mobile.*/)||!!o.match(/AppleWebKit/),ios:!!o.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:o.indexOf("Android")>-1||o.indexOf("Linux")>-1,iPhone:o.indexOf("iPhone")>-1||o.indexOf("Mac")>-1,iPad:o.indexOf("iPad")>-1,webApp:o.indexOf("Safari")==-1}}(),language:(navigator.browserLanguage||navigator.language).toLowerCase()};const j=O.versions.android,q=O.versions.ios||O.versions.iPhone||O.versions.iPad;var $=navigator.userAgent.toLowerCase();$.match(/MicroMessenger/i)=="micromessenger";function K(o){const h=document.createElement("a");h.setAttribute("href",o),h.click()}function te(o){j&&window.android&&window.android.postDetails(JSON.stringify(o)),q&&K("/ios://postDetails@?data="+JSON.stringify(o))}function ie(){j&&window.android&&window.android.userLogin(),q&&K("/ios://userLogin@?data=")}var Z={exports:{}};(function(o,h){Z.exports=h(o)})(window,function(o,h){if(!o.jWeixin){var m,r={config:"preVerifyJSAPI",onMenuShareTimeline:"menu:share:timeline",onMenuShareAppMessage:"menu:share:appmessage",onMenuShareQQ:"menu:share:qq",onMenuShareWeibo:"menu:share:weiboApp",onMenuShareQZone:"menu:share:QZone",previewImage:"imagePreview",getLocation:"geoLocation",openProductSpecificView:"openProductViewWithPid",addCard:"batchAddCard",openCard:"batchViewCard",chooseWXPay:"getBrandWCPayRequest",openEnterpriseRedPacket:"getRecevieBizHongBaoRequest",startSearchBeacons:"startMonitoringBeacons",stopSearchBeacons:"stopMonitoringBeacons",onSearchBeacons:"onBeaconsInRange",consumeAndShareCard:"consumedShareCard",openAddress:"editAddress"},_=function(){var e={};for(var a in r)e[r[a]]=a;return e}(),A=o.document,y=A.title,S=navigator.userAgent.toLowerCase(),J=navigator.platform.toLowerCase(),H=!(!J.match("mac")&&!J.match("win")),X=S.indexOf("wxdebugger")!=-1,U=S.indexOf("micromessenger")!=-1,T=S.indexOf("android")!=-1,R=S.indexOf("iphone")!=-1||S.indexOf("ipad")!=-1,L=(m=S.match(/micromessenger\/(\d+\.\d+\.\d+)/)||S.match(/micromessenger\/(\d+\.\d+)/))?m[1]:"",k={initStartTime:P(),initEndTime:0,preVerifyStartTime:0,preVerifyEndTime:0},u={version:1,appId:"",initTime:0,preVerifyTime:0,networkType:"",isPreVerifyOk:1,systemType:R?1:T?2:-1,clientVersion:L,url:encodeURIComponent(location.href)},p={},g={_completes:[]},I={state:0,data:{}};b(function(){k.initEndTime=P()});var V=!1,C=[],M={config:function(e){E("config",p=e);var a=p.check!==!1;b(function(){if(a)t(r.config,{verifyJsApiList:N(p.jsApiList),verifyOpenTagList:N(p.openTagList)},function(){g._complete=function(d){k.preVerifyEndTime=P(),I.state=1,I.data=d},g.success=function(d){u.isPreVerifyOk=0},g.fail=function(d){g._fail?g._fail(d):I.state=-1};var l=g._completes;return l.push(function(){(function(){if(!(H||X||p.debug||L<"6.0.2"||u.systemType<0)){var d=new Image;u.appId=p.appId,u.initTime=k.initEndTime-k.initStartTime,u.preVerifyTime=k.preVerifyEndTime-k.preVerifyStartTime,M.getNetworkType({isInnerInvoke:!0,success:function(f){u.networkType=f.networkType;var v="https://open.weixin.qq.com/sdk/report?v="+u.version+"&o="+u.isPreVerifyOk+"&s="+u.systemType+"&c="+u.clientVersion+"&a="+u.appId+"&n="+u.networkType+"&i="+u.initTime+"&p="+u.preVerifyTime+"&u="+u.url;d.src=v}})}})()}),g.complete=function(d){for(var f=0,v=l.length;f<v;++f)l[f]();g._completes=[]},g}()),k.preVerifyStartTime=P();else{I.state=1;for(var n=g._completes,i=0,s=n.length;i<s;++i)n[i]();g._completes=[]}}),M.invoke||(M.invoke=function(n,i,s){o.WeixinJSBridge&&WeixinJSBridge.invoke(n,D(i),s)},M.on=function(n,i){o.WeixinJSBridge&&WeixinJSBridge.on(n,i)})},ready:function(e){I.state!=0?e():(g._completes.push(e),!U&&p.debug&&e())},error:function(e){L<"6.0.2"||(I.state==-1?e(I.data):g._fail=e)},checkJsApi:function(e){t("checkJsApi",{jsApiList:N(e.jsApiList)},(e._complete=function(a){if(T){var n=a.checkResult;n&&(a.checkResult=JSON.parse(n))}a=function(i){var s=i.checkResult;for(var l in s){var d=_[l];d&&(s[d]=s[l],delete s[l])}return i}(a)},e))},onMenuShareTimeline:function(e){x(r.onMenuShareTimeline,{complete:function(){t("shareTimeline",{title:e.title||y,desc:e.title||y,img_url:e.imgUrl||"",link:e.link||location.href,type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareAppMessage:function(e){x(r.onMenuShareAppMessage,{complete:function(a){a.scene==="favorite"?t("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""}):t("sendAppMessage",{title:e.title||y,desc:e.desc||"",link:e.link||location.href,img_url:e.imgUrl||"",type:e.type||"link",data_url:e.dataUrl||""},e)}},e)},onMenuShareQQ:function(e){x(r.onMenuShareQQ,{complete:function(){t("shareQQ",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareWeibo:function(e){x(r.onMenuShareWeibo,{complete:function(){t("shareWeiboApp",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},onMenuShareQZone:function(e){x(r.onMenuShareQZone,{complete:function(){t("shareQZone",{title:e.title||y,desc:e.desc||"",img_url:e.imgUrl||"",link:e.link||location.href},e)}},e)},updateTimelineShareData:function(e){t("updateTimelineShareData",{title:e.title,link:e.link,imgUrl:e.imgUrl},e)},updateAppMessageShareData:function(e){t("updateAppMessageShareData",{title:e.title,desc:e.desc,link:e.link,imgUrl:e.imgUrl},e)},startRecord:function(e){t("startRecord",{},e)},stopRecord:function(e){t("stopRecord",{},e)},onVoiceRecordEnd:function(e){x("onVoiceRecordEnd",e)},playVoice:function(e){t("playVoice",{localId:e.localId},e)},pauseVoice:function(e){t("pauseVoice",{localId:e.localId},e)},stopVoice:function(e){t("stopVoice",{localId:e.localId},e)},onVoicePlayEnd:function(e){x("onVoicePlayEnd",e)},uploadVoice:function(e){t("uploadVoice",{localId:e.localId,isShowProgressTips:e.isShowProgressTips==0?0:1},e)},downloadVoice:function(e){t("downloadVoice",{serverId:e.serverId,isShowProgressTips:e.isShowProgressTips==0?0:1},e)},translateVoice:function(e){t("translateVoice",{localId:e.localId,isShowProgressTips:e.isShowProgressTips==0?0:1},e)},chooseImage:function(e){t("chooseImage",{scene:"1|2",count:e.count||9,sizeType:e.sizeType||["original","compressed"],sourceType:e.sourceType||["album","camera"]},(e._complete=function(a){if(T){var n=a.localIds;try{n&&(a.localIds=JSON.parse(n))}catch{}}},e))},getLocation:function(e){},previewImage:function(e){t(r.previewImage,{current:e.current,urls:e.urls},e)},uploadImage:function(e){t("uploadImage",{localId:e.localId,isShowProgressTips:e.isShowProgressTips==0?0:1},e)},downloadImage:function(e){t("downloadImage",{serverId:e.serverId,isShowProgressTips:e.isShowProgressTips==0?0:1},e)},getLocalImgData:function(e){V===!1?(V=!0,t("getLocalImgData",{localId:e.localId},(e._complete=function(a){if(V=!1,0<C.length){var n=C.shift();wx.getLocalImgData(n)}},e))):C.push(e)},getNetworkType:function(e){t("getNetworkType",{},(e._complete=function(a){a=function(n){var i=n.errMsg;n.errMsg="getNetworkType:ok";var s=n.subtype;if(delete n.subtype,s)n.networkType=s;else{var l=i.indexOf(":"),d=i.substring(l+1);switch(d){case"wifi":case"edge":case"wwan":n.networkType=d;break;default:n.errMsg="getNetworkType:fail"}}return n}(a)},e))},openLocation:function(e){t("openLocation",{latitude:e.latitude,longitude:e.longitude,name:e.name||"",address:e.address||"",scale:e.scale||28,infoUrl:e.infoUrl||""},e)},getLocation:function(e){t(r.getLocation,{type:(e=e||{}).type||"wgs84"},(e._complete=function(a){delete a.type},e))},hideOptionMenu:function(e){t("hideOptionMenu",{},e)},showOptionMenu:function(e){t("showOptionMenu",{},e)},closeWindow:function(e){t("closeWindow",{},e=e||{})},hideMenuItems:function(e){t("hideMenuItems",{menuList:e.menuList},e)},showMenuItems:function(e){t("showMenuItems",{menuList:e.menuList},e)},hideAllNonBaseMenuItem:function(e){t("hideAllNonBaseMenuItem",{},e)},showAllNonBaseMenuItem:function(e){t("showAllNonBaseMenuItem",{},e)},scanQRCode:function(e){t("scanQRCode",{needResult:(e=e||{}).needResult||0,scanType:e.scanType||["qrCode","barCode"]},(e._complete=function(a){if(R){var n=a.resultStr;if(n){var i=JSON.parse(n);a.resultStr=i&&i.scan_code&&i.scan_code.scan_result}}},e))},openAddress:function(e){t(r.openAddress,{},(e._complete=function(a){a=function(n){return n.postalCode=n.addressPostalCode,delete n.addressPostalCode,n.provinceName=n.proviceFirstStageName,delete n.proviceFirstStageName,n.cityName=n.addressCitySecondStageName,delete n.addressCitySecondStageName,n.countryName=n.addressCountiesThirdStageName,delete n.addressCountiesThirdStageName,n.detailInfo=n.addressDetailInfo,delete n.addressDetailInfo,n}(a)},e))},openProductSpecificView:function(e){t(r.openProductSpecificView,{pid:e.productId,view_type:e.viewType||0,ext_info:e.extInfo},e)},addCard:function(e){for(var a=e.cardList,n=[],i=0,s=a.length;i<s;++i){var l=a[i],d={card_id:l.cardId,card_ext:l.cardExt};n.push(d)}t(r.addCard,{card_list:n},(e._complete=function(f){var v=f.card_list;if(v){for(var c=0,W=(v=JSON.parse(v)).length;c<W;++c){var w=v[c];w.cardId=w.card_id,w.cardExt=w.card_ext,w.isSuccess=!!w.is_succ,delete w.card_id,delete w.card_ext,delete w.is_succ}f.cardList=v,delete f.card_list}},e))},chooseCard:function(e){t("chooseCard",{app_id:p.appId,location_id:e.shopId||"",sign_type:e.signType||"SHA1",card_id:e.cardId||"",card_type:e.cardType||"",card_sign:e.cardSign,time_stamp:e.timestamp+"",nonce_str:e.nonceStr},(e._complete=function(a){a.cardList=a.choose_card_info,delete a.choose_card_info},e))},openCard:function(e){for(var a=e.cardList,n=[],i=0,s=a.length;i<s;++i){var l=a[i],d={card_id:l.cardId,code:l.code};n.push(d)}t(r.openCard,{card_list:n},e)},consumeAndShareCard:function(e){t(r.consumeAndShareCard,{consumedCardId:e.cardId,consumedCode:e.code},e)},chooseWXPay:function(e){t(r.chooseWXPay,z(e),e)},openEnterpriseRedPacket:function(e){t(r.openEnterpriseRedPacket,z(e),e)},startSearchBeacons:function(e){t(r.startSearchBeacons,{ticket:e.ticket},e)},stopSearchBeacons:function(e){t(r.stopSearchBeacons,{},e)},onSearchBeacons:function(e){x(r.onSearchBeacons,e)},openEnterpriseChat:function(e){t("openEnterpriseChat",{useridlist:e.userIds,chatname:e.groupName},e)},launchMiniProgram:function(e){t("launchMiniProgram",{targetAppId:e.targetAppId,path:function(a){if(typeof a=="string"&&0<a.length){var n=a.split("?")[0],i=a.split("?")[1];return n+=".html",i!==void 0?n+"?"+i:n}}(e.path),envVersion:e.envVersion},e)},openBusinessView:function(e){t("openBusinessView",{businessType:e.businessType,queryString:e.queryString||"",envVersion:e.envVersion},(e._complete=function(a){if(T){var n=a.extraData;if(n)try{a.extraData=JSON.parse(n)}catch{a.extraData={}}}},e))},miniProgram:{navigateBack:function(e){e=e||{},b(function(){t("invokeMiniProgramAPI",{name:"navigateBack",arg:{delta:e.delta||1}},e)})},navigateTo:function(e){b(function(){t("invokeMiniProgramAPI",{name:"navigateTo",arg:{url:e.url}},e)})},redirectTo:function(e){b(function(){t("invokeMiniProgramAPI",{name:"redirectTo",arg:{url:e.url}},e)})},switchTab:function(e){b(function(){t("invokeMiniProgramAPI",{name:"switchTab",arg:{url:e.url}},e)})},reLaunch:function(e){b(function(){t("invokeMiniProgramAPI",{name:"reLaunch",arg:{url:e.url}},e)})},postMessage:function(e){b(function(){t("invokeMiniProgramAPI",{name:"postMessage",arg:e.data||{}},e)})},getEnv:function(e){b(function(){e({miniprogram:o.__wxjs_environment==="miniprogram"})})}}},F=1,B={};return A.addEventListener("error",function(e){if(!T){var a=e.target,n=a.tagName,i=a.src;if((n=="IMG"||n=="VIDEO"||n=="AUDIO"||n=="SOURCE")&&i.indexOf("wxlocalresource://")!=-1){e.preventDefault(),e.stopPropagation();var s=a["wx-id"];if(s||(s=F++,a["wx-id"]=s),B[s])return;B[s]=!0,wx.ready(function(){wx.getLocalImgData({localId:i,success:function(l){a.src=l.localData}})})}}},!0),A.addEventListener("load",function(e){if(!T){var a=e.target,n=a.tagName;if(a.src,n=="IMG"||n=="VIDEO"||n=="AUDIO"||n=="SOURCE"){var i=a["wx-id"];i&&(B[i]=!1)}}},!0),h&&(o.wx=o.jWeixin=M),M}function t(e,a,n){o.WeixinJSBridge?WeixinJSBridge.invoke(e,D(a),function(i){Q(e,i,n)}):E(e,n)}function x(e,a,n){o.WeixinJSBridge?WeixinJSBridge.on(e,function(i){n&&n.trigger&&n.trigger(i),Q(e,i,a)}):E(e,n||a)}function D(e){return(e=e||{}).appId=p.appId,e.verifyAppId=p.appId,e.verifySignType="sha1",e.verifyTimestamp=p.timestamp+"",e.verifyNonceStr=p.nonceStr,e.verifySignature=p.signature,e}function z(e){return{timeStamp:e.timestamp+"",nonceStr:e.nonceStr,package:e.package,paySign:e.paySign,signType:e.signType||"SHA1"}}function Q(e,a,n){e!="openEnterpriseChat"&&e!=="openBusinessView"||(a.errCode=a.err_code),delete a.err_code,delete a.err_desc,delete a.err_detail;var i=a.errMsg;i||(i=a.err_msg,delete a.err_msg,i=function(l,d){var f=l,v=_[f];v&&(f=v);var c="ok";if(d){var W=d.indexOf(":");(c=d.substring(W+1))=="confirm"&&(c="ok"),c=="failed"&&(c="fail"),c.indexOf("failed_")!=-1&&(c=c.substring(7)),c.indexOf("fail_")!=-1&&(c=c.substring(5)),(c=(c=c.replace(/_/g," ")).toLowerCase())!="access denied"&&c!="no permission to execute"||(c="permission denied"),f=="config"&&c=="function not exist"&&(c="ok"),c==""&&(c="fail")}return d=f+":"+c}(e,i),a.errMsg=i),(n=n||{})._complete&&(n._complete(a),delete n._complete),i=a.errMsg||"",p.debug&&!n.isInnerInvoke&&alert(JSON.stringify(a));var s=i.indexOf(":");switch(i.substring(s+1)){case"ok":n.success&&n.success(a);break;case"cancel":n.cancel&&n.cancel(a);break;default:n.fail&&n.fail(a)}n.complete&&n.complete(a)}function N(e){if(e){for(var a=0,n=e.length;a<n;++a){var i=e[a],s=r[i];s&&(e[a]=s)}return e}}function E(e,a){if(!(!p.debug||a&&a.isInnerInvoke)){var n=_[e];n&&(e=n),a&&a._complete&&delete a._complete,console.log('"'+e+'",',a||"")}}function P(){return new Date().getTime()}function b(e){U&&(o.WeixinJSBridge?e():A.addEventListener&&A.addEventListener("WeixinJSBridgeReady",e,!1))}});var Y=Z.exports;function ee(o){if(console.log(o),!o)return;let h=!1,m=Y;m.config({debug:h,appId:o.appid,timestamp:o.timestamp,nonceStr:o.nonceStr,signature:o.signature,jsApiList:["updateAppMessageShareData","updateTimelineShareData"]}),m.ready(function(){console.log("ready"),console.log("wx ready ok"),m.checkJsApi({jsApiList:["updateAppMessageShareData","updateTimelineShareData"],success:function(r){console.log("checkJsApi success : "+r)}}),m.updateAppMessageShareData({title:o.title,desc:o.description,link:o.url,imgUrl:o.img,success:function(){console.log("----- \u5206\u4EAB\u7ED9\u670B\u53CB\u6210\u529F-----------")},cancel:function(){console.log("----- \u5206\u4EAB\u7ED9\u670B\u53CB\u53D6\u6D88 \uFF1A ")}}),m.updateTimelineShareData({title:o.title,link:o.url,imgUrl:o.img,success:function(){console.log("\u5206\u4EAB\u5230\u670B\u53CB\u5708\u6210\u529F")},cancel:function(){}})}),m.error(function(r){console.error("wx error:",r)})}function oe(o,h,m){G({method:"post",url:"https://news.dahebao.cn/dahe/appshare/getshareinfo",headers:{"Content-Type":"application/json;charset=UTF-8"},params:{sign:"637586292ebf2c5fabab863734fc6a12",data:o}}).then(r=>{let _=r.data.data;_.img="https://imgcdn.dahebao.cn/20221201/20221201161822355246.png",_.title=h,_.description=m,ee(_)})}export{te as a,oe as b,ie as g,ae as s};
