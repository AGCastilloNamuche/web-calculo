import{Z as g,ab as x,ac as m,ad as P,ae as L,af as b,ag as T,ah as I,ai as A,aj as c,ak as R,al as _,am as w,an as $,ao as M,a2 as f,ap as X,n,aq as Y,L as j,M as q,I as u,z}from"./index-49f99f90.js";const Z=g()({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:x,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...m(),...P({location:"top end"}),...L(),...b(),...T(),...I({transition:"scale-rotate-transition"})},setup(e,t){const{backgroundColorClasses:o,backgroundColorStyles:v}=A(c(e,"color")),{roundedClasses:C}=R(e),{t:y}=_(),{textColorClasses:k,textColorStyles:B}=w(c(e,"textColor")),{themeClasses:S}=$(),{locationStyles:V}=M(e,!0,a=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(a)?+(e.offsetY??0):["left","right"].includes(a)?+(e.offsetX??0):0));return f(()=>{const a=Number(e.content),s=!e.max||isNaN(a)?e.content:a<=+e.max?a:`${e.max}+`,[h,N]=X(t.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return n(e.tag,u({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},N,{style:e.style}),{default:()=>{var l,i;return[n("div",{class:"v-badge__wrapper"},[(i=(l=t.slots).default)==null?void 0:i.call(l),n(Y,{transition:e.transition},{default:()=>{var r,d;return[j(n("span",u({class:["v-badge__badge",S.value,o.value,C.value,k.value],style:[v.value,B.value,e.inline?{}:V.value],"aria-atomic":"true","aria-label":y(e.label,a),"aria-live":"polite",role:"status"},h),[e.dot?void 0:t.slots.badge?(d=(r=t.slots).badge)==null?void 0:d.call(r):e.icon?n(z,{icon:e.icon},null):s]),[[q,e.modelValue]])]}})])]}})}),{}}}),E=g()({name:"VListItemAction",props:{start:Boolean,end:Boolean,...m(),...b()},setup(e,t){let{slots:o}=t;return f(()=>n(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},o)),{}}});export{Z as V,E as a};