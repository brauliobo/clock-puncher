import{c as g,h as d}from"./render.3954a5c3.js";import{p as t,c,h,a as i,q as f,I as m,g as y,M as x,N as v,O as _,U as C,_ as $,L as P}from"./index.0634828e.js";var Q=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:s}){const{proxy:{$q:o}}=y(),e=i(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(i(m,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const r=c(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return n.styleFn(a,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),u=c(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:r.value},d(s.default))}}),q="/assets/quasar-logo-vertical.55e9c854.svg";const F=C("img",{alt:"Quasar logo",src:q,style:{width:"200px",height:"200px"}},null,-1);function B(n,s,o,e,l,r){return x(),v(Q,{class:"flex flex-center"},{default:_(()=>[F]),_:1})}const I=P({name:"IndexPage"});var k=$(I,[["render",B]]);export{k as default};
