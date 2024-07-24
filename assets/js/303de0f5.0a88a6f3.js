"use strict";(self.webpackChunkagridocs=self.webpackChunkagridocs||[]).push([[604],{3778:(t,e,n)=>{n.r(e),n.d(e,{Calculator:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var i=n(5893),a=n(1151),r=n(7294);const o={pagination_next:null},l="Tolerance calculator",s={id:"customization/tolerance-calculator",title:"Tolerance calculator",description:"A calculator to determine the tolerance factor for each soil requirements of the plant.",source:"@site/docs/customization/tolerance-calculator.mdx",sourceDirName:"customization",slug:"/customization/tolerance-calculator",permalink:"/docs/customization/tolerance-calculator",draft:!1,unlisted:!1,editUrl:"https://github.com/AgriCraft/agricraft.github.io/tree/main/docs/customization/tolerance-calculator.mdx",tags:[],version:"current",frontMatter:{pagination_next:null},sidebar:"customizationSidebar",previous:{title:"Removing Default Data",permalink:"/docs/customization/removing-data"}},c={};function u(){const t={br:"br",code:"code",div:"div",input:"input",label:"label",p:"p",...(0,a.a)()},[e,n]=(0,r.useState)(0),[o,l]=(0,r.useState)(0),[s,c]=(0,r.useState)(0),[u,h]=(0,r.useState)(0),[d,m]=(0,r.useState)(0),[x,p]=(0,r.useState)(0),[j,b]=(0,r.useState)(7);let f=Math.ceil(100*Math.abs((e-u)/j))/100,g=Math.ceil(100*Math.abs((o-d)/j))/100,y=Math.ceil(100*Math.abs((s-x)/j))/100,v=`"soil_humidity": {\n\t...\n\t"tolerance_factor": ${f.toFixed(2)}\n}\n"soil_acidity": {\n\t...\n\t"tolerance_factor": ${g.toFixed(2)}\n}\n"soil_nutrients": {\n\t...\n\t"tolerance_factor": ${y.toFixed(2)}\n}`;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.div,{style:{display:"flex",justifyContent:"space-evenly"},children:[(0,i.jsxs)(t.div,{children:[(0,i.jsx)(t.p,{children:"The soil:"}),(0,i.jsx)(t.label,{htmlFor:"humidity",children:"Humidity "}),(0,i.jsx)(t.input,{type:"number",id:"humidity",max:"5",min:"0",value:e,onChange:t=>n(parseInt(t.target.value))}),(0,i.jsx)(t.br,{}),(0,i.jsx)(t.label,{htmlFor:"acidity",children:"Acidity "}),(0,i.jsx)(t.input,{type:"number",id:"acidity",max:"6",min:"0",value:o,onChange:t=>l(parseInt(t.target.value))}),(0,i.jsx)(t.br,{}),(0,i.jsx)(t.label,{htmlFor:"nutrients",children:"Nutrients "}),(0,i.jsx)(t.input,{type:"number",id:"nutrients",max:"5",min:"0",value:s,onChange:t=>c(parseInt(t.target.value))}),(0,i.jsx)(t.br,{})]}),(0,i.jsxs)(t.div,{children:[(0,i.jsx)(t.p,{children:"The other soil:"}),(0,i.jsx)(t.label,{htmlFor:"other_humidity",children:"Humidity "}),(0,i.jsx)(t.input,{type:"number",id:"other_humidity",max:"5",min:"0",value:u,onChange:t=>h(parseInt(t.target.value))}),(0,i.jsx)(t.br,{}),(0,i.jsx)(t.label,{htmlFor:"other_acidity",children:"Acidity "}),(0,i.jsx)(t.input,{type:"number",id:"other_acidity",max:"6",min:"0",value:d,onChange:t=>m(parseInt(t.target.value))}),(0,i.jsx)(t.br,{}),(0,i.jsx)(t.label,{htmlFor:"other_nutrients",children:"Nutrients "}),(0,i.jsx)(t.input,{type:"number",id:"other_nutrients",max:"5",min:"0",value:x,onChange:t=>p(parseInt(t.target.value))}),(0,i.jsx)(t.br,{})]})]}),(0,i.jsx)(t.br,{}),(0,i.jsx)(t.div,{style:{display:"flex",justifyContent:"space-evenly"},children:(0,i.jsxs)(t.div,{children:[(0,i.jsx)(t.label,{htmlFor:"strength",children:"Strength "}),(0,i.jsx)(t.input,{type:"number",id:"strengthumidity",max:"10",min:"1",value:j,onChange:t=>b(parseInt(t.target.value))}),(0,i.jsx)(t.br,{})]})}),(0,i.jsx)(t.br,{}),(0,i.jsx)(t.code,{children:v})]})}const h=[];function d(t){const e={code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,a.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"tolerance-calculator",children:"Tolerance calculator"}),"\n",(0,i.jsx)(e.p,{children:"A calculator to determine the tolerance factor for each soil requirements of the plant.\nThe tolerance factor is used to determine the soils the plant can grow on after a specific strength."}),"\n",(0,i.jsx)(e.p,{children:"To use this calculator, first you need to choose:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"the soil of the plant at strength 1"}),"\n",(0,i.jsx)(e.li,{children:"the strength at which it can grow on the other soil"}),"\n",(0,i.jsx)(e.li,{children:"the other soil"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"Input each value in the box below and the tolerance factor for each soil condition will be calculated."}),"\n","\n","\n",(0,i.jsx)(u,{}),"\n",(0,i.jsxs)(e.p,{children:["The formula used is the following: ",(0,i.jsx)(e.code,{children:"tolerance = ceil(abs((soil_condition - other_soil_condition) / strength) * 100) / 100"})]})]})}function m(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>l,a:()=>o});var i=n(7294);const a={},r=i.createContext(a);function o(t){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),i.createElement(r.Provider,{value:e},t.children)}}}]);