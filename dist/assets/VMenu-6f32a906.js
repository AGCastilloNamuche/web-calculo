import{Z as M,$ as w,a0 as D,a1 as O,H as m,j as v,ar as b,E as x,I as f,a2 as I,n as V,as as $,a3 as j,at as A}from"./index-49f99f90.js";import{m as R,u as T,a as g,V as p}from"./VOverlay-68d22827.js";import{V as U}from"./dialog-transition-421c9114.js";const N=M()({name:"VMenu",props:{id:String,...w(R({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:U}}),["absolute"])},emits:{"update:modelValue":a=>!0},setup(a,P){let{slots:o}=P;const t=D(a,"modelValue"),{scopeId:y}=T(),C=O(),u=m(()=>a.id||`v-menu-${C}`),i=v(),e=b(g,null),s=v(0);A(g,{register(){++s.value},unregister(){--s.value},closeParents(){setTimeout(()=>{s.value||(t.value=!1,e==null||e.closeParents())},40)}}),x(t,l=>{l?e==null||e.register():e==null||e.unregister()});function S(){e==null||e.closeParents()}const h=m(()=>f({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":u.value},a.activatorProps));return I(()=>{const[l]=p.filterProps(a);return V(p,f({ref:i,class:["v-menu",a.class],style:a.style},l,{modelValue:t.value,"onUpdate:modelValue":r=>t.value=r,absolute:!0,activatorProps:h.value,"onClick:outside":S},y),{activator:o.activator,default:function(){for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return V($,{root:!0},{default:()=>{var d;return[(d=o.default)==null?void 0:d.call(o,...c)]}})}})}),j({id:u,ΨopenChildren:s},i)}});export{N as V};
