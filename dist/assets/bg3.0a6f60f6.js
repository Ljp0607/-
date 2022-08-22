import{J as Y,K as M,M as j,N as J,Q as fe,V as U,W as Q,e as u,X as R,Y as X,Z as ge,$ as ve,a0 as he,a1 as me,a2 as be,a3 as T,a4 as _e,a5 as xe,a6 as pe,a7 as ye,a8 as we,a as ke,r as q,a9 as Se,aa as E,ab as Ce,ac as Ve,x as Ie,o as ze,ad as P,C as Ee,ae as F,af as Pe,I as L,ag as Te,ah as D,ai as Me,n as Be,aj as Ae}from"./index.ddb90805.js";const[Fe,Le]=Y("form"),Ne={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:M,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:j,showErrorMessage:j,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var Re=J({name:Fe,props:Ne,emits:["submit","failed"],setup(e,{emit:a,slots:l}){const{children:s,linkChildren:o}=fe(U),f=n=>n?s.filter(c=>n.includes(c.name)):s,k=n=>new Promise((c,d)=>{const _=[];f(n).reduce((A,w)=>A.then(()=>{if(!_.length)return w.validate().then(z=>{z&&_.push(z)})}),Promise.resolve()).then(()=>{_.length?d(_):c()})}),h=n=>new Promise((c,d)=>{const _=f(n);Promise.all(_.map(v=>v.validate())).then(v=>{v=v.filter(Boolean),v.length?d(v):c()})}),x=n=>{const c=s.find(d=>d.name===n);return c?new Promise((d,_)=>{c.validate().then(v=>{v?_(v):d()})}):Promise.reject()},g=n=>typeof n=="string"?x(n):e.validateFirst?k(n):h(n),B=n=>{typeof n=="string"&&(n=[n]),f(n).forEach(d=>{d.resetValidation()})},C=()=>s.reduce((n,c)=>(n[c.name]=c.getValidationStatus(),n),{}),V=(n,c)=>{s.some(d=>d.name===n?(d.$el.scrollIntoView(c),!0):!1)},p=()=>s.reduce((n,c)=>(n[c.name]=c.formValue.value,n),{}),S=()=>{const n=p();g().then(()=>a("submit",n)).catch(c=>{a("failed",{values:n,errors:c}),e.scrollToError&&c[0].name&&V(c[0].name)})},I=n=>{R(n),S()};return o({props:e}),Q({submit:S,validate:g,getValues:p,scrollToField:V,resetValidation:B,getValidationStatus:C}),()=>{var n;return u("form",{class:Le(),onSubmit:I},[(n=l.default)==null?void 0:n.call(l)])}}});const Xe=X(Re);function Oe(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function $e(e,a){return!(a.required&&Oe(e)||a.pattern&&!a.pattern.test(String(e)))}function We(e,a){return new Promise(l=>{const s=a.validator(e,a);if(he(s)){s.then(l);return}l(s)})}function K(e,a){const{message:l}=a;return me(l)?l(e,a):l||""}function je({target:e}){e.composing=!0}function H({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function qe(e,a){const l=ge();e.style.height="auto";let s=e.scrollHeight;if(be(a)){const{maxHeight:o,minHeight:f}=a;o!==void 0&&(s=Math.min(s,o)),f!==void 0&&(s=Math.max(s,f))}s&&(e.style.height=`${s}px`,ve(l))}function De(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function N(e){return[...e].length}function Ke(e,a){return[...e].slice(0,a).join("")}const[He,b]=Y("field"),Ye={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:M,formatter:Function,clearIcon:T("clear"),modelValue:_e(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:T("focus"),formatTrigger:T("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Je=xe({},pe,Ye,{rows:M,type:T("text"),rules:Array,autosize:[Boolean,Object],labelWidth:M,labelClass:ye,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Ue=J({name:He,props:Je,emits:["blur","focus","clear","keypress","click-input","end-validate","start-validate","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:a,slots:l}){const s=we(),o=ke({status:"unvalidated",focused:!1,validateMessage:""}),f=q(),k=q(),{parent:h}=Se(U),x=()=>{var t;return String((t=e.modelValue)!=null?t:"")},g=t=>{if(F(e[t]))return e[t];if(h&&F(h.props[t]))return h.props[t]},B=E(()=>{const t=g("readonly");if(e.clearable&&!t){const r=x()!=="",i=e.clearTrigger==="always"||e.clearTrigger==="focus"&&o.focused;return r&&i}return!1}),C=E(()=>k.value&&l.input?k.value():e.modelValue),V=t=>t.reduce((r,i)=>r.then(()=>{if(o.status==="failed")return;let{value:m}=C;if(i.formatter&&(m=i.formatter(m,i)),!$e(m,i)){o.status="failed",o.validateMessage=K(m,i);return}if(i.validator)return We(m,i).then(y=>{y&&typeof y=="string"?(o.status="failed",o.validateMessage=y):y===!1&&(o.status="failed",o.validateMessage=K(m,i))})}),Promise.resolve()),p=()=>{o.status="unvalidated",o.validateMessage=""},S=()=>a("end-validate",{status:o.status}),I=(t=e.rules)=>new Promise(r=>{p(),t?(a("start-validate"),V(t).then(()=>{o.status==="failed"?(r({name:e.name,message:o.validateMessage}),S()):(o.status="passed",r(),S())})):r()}),n=t=>{if(h&&e.rules){const{validateTrigger:r}=h.props,i=D(r).includes(t),m=e.rules.filter(y=>y.trigger?D(y.trigger).includes(t):i);m.length&&I(m)}},c=t=>{const{maxlength:r}=e;if(F(r)&&N(t)>r){const i=x();return i&&N(i)===+r?i:Ke(t,+r)}return t},d=(t,r="onChange")=>{if(t=c(t),e.type==="number"||e.type==="digit"){const i=e.type==="number";t=Pe(t,i,i)}e.formatter&&r===e.formatTrigger&&(t=e.formatter(t)),f.value&&f.value.value!==t&&(f.value.value=t),t!==e.modelValue&&a("update:modelValue",t)},_=t=>{t.target.composing||d(t.target.value)},v=()=>{var t;return(t=f.value)==null?void 0:t.blur()},A=()=>{var t;return(t=f.value)==null?void 0:t.focus()},w=()=>{const t=f.value;e.type==="textarea"&&e.autosize&&t&&qe(t,e.autosize)},z=t=>{o.focused=!0,a("focus",t),P(w),g("readonly")&&v()},Z=t=>{g("readonly")||(o.focused=!1,d(x(),"onBlur"),a("blur",t),n("onBlur"),P(w),Ae())},O=t=>a("click-input",t),G=t=>a("click-left-icon",t),ee=t=>a("click-right-icon",t),te=t=>{R(t),a("update:modelValue",""),a("clear",t)},$=E(()=>{if(typeof e.error=="boolean")return e.error;if(h&&h.props.showError&&o.status==="failed")return!0}),ne=E(()=>{const t=g("labelWidth");if(t)return{width:Ce(t)}}),ae=t=>{t.keyCode===13&&(!(h&&h.props.submitOnEnter)&&e.type!=="textarea"&&R(t),e.type==="search"&&v()),a("keypress",t)},W=()=>e.id||`${s}-input`,re=()=>o.status,ie=()=>{const t=b("control",[g("inputAlign"),{error:$.value,custom:!!l.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(l.input)return u("div",{class:t,onClick:O},[l.input()]);const r={id:W(),ref:f,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:g("disabled"),readonly:g("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${s}-label`:void 0,onBlur:Z,onFocus:z,onInput:_,onClick:O,onChange:H,onKeypress:ae,onCompositionend:H,onCompositionstart:je};return e.type==="textarea"?u("textarea",r,null):u("input",Me(De(e.type),r),null)},le=()=>{const t=l["left-icon"];if(e.leftIcon||t)return u("div",{class:b("left-icon"),onClick:G},[t?t():u(L,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},oe=()=>{const t=l["right-icon"];if(e.rightIcon||t)return u("div",{class:b("right-icon"),onClick:ee},[t?t():u(L,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},ce=()=>{if(e.showWordLimit&&e.maxlength){const t=N(x());return u("div",{class:b("word-limit")},[u("span",{class:b("word-num")},[t]),Be("/"),e.maxlength])}},se=()=>{if(h&&h.props.showErrorMessage===!1)return;const t=e.errorMessage||o.validateMessage;if(t){const r=l["error-message"],i=g("errorMessageAlign");return u("div",{class:b("error-message",i)},[r?r({message:t}):t])}},de=()=>{const t=g("colon")?":":"";if(l.label)return[l.label(),t];if(e.label)return u("label",{id:`${s}-label`,for:W()},[e.label+t])},ue=()=>[u("div",{class:b("body")},[ie(),B.value&&u(L,{name:e.clearIcon,class:b("clear"),onTouchstart:te},null),oe(),l.button&&u("div",{class:b("button")},[l.button()])]),ce(),se()];return Q({blur:v,focus:A,validate:I,formValue:C,resetValidation:p,getValidationStatus:re}),Ve(Te,{customValue:k,resetValidation:p,validateWithTrigger:n}),Ie(()=>e.modelValue,()=>{d(x()),p(),n("onChange"),P(w)}),ze(()=>{d(x(),e.formatTrigger),P(w)}),()=>{const t=g("disabled"),r=g("labelAlign"),i=de(),m=le();return u(Ee,{size:e.size,icon:e.leftIcon,class:b({error:$.value,disabled:t,[`label-${r}`]:r}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:ne.value,valueClass:b("value"),titleClass:[b("label",[r,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:m?()=>m:null,title:i?()=>i:null,value:ue,extra:l.extra})}}});const Ze=X(Ue);var Ge="./assets/bg1.682a90c8.png",et="./assets/bg3.f4f383cf.png";export{Ze as F,Ge as _,Xe as a,et as b};