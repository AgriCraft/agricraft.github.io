"use strict";(self.webpackChunkagridocs=self.webpackChunkagridocs||[]).push([[927],{1398:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(5893),a=n(1151);const i={},r="Mutation",s={id:"customization/mutation",title:"Mutation",description:"Mutations are a way to create new breeds of plants from two plants.",source:"@site/docs/customization/mutation.md",sourceDirName:"customization",slug:"/customization/mutation",permalink:"/docs/customization/mutation",draft:!1,unlisted:!1,editUrl:"https://github.com/AgriCraft/agricraft.github.io/tree/main/docs/customization/mutation.md",tags:[],version:"current",frontMatter:{},sidebar:"customizationSidebar",previous:{title:"Plant",permalink:"/docs/customization/plant"},next:{title:"Soil",permalink:"/docs/customization/soil"}},c={},d=[];function u(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"mutation",children:"Mutation"}),"\n",(0,o.jsxs)(e.p,{children:["Mutations are a way to create new breeds of plants from two plants.\r\nAgriCraft ships default mutations for plants (you can view the defaults ",(0,o.jsx)(e.a,{href:"https://github.com/AgriCraft/todo-kether-fix-this",children:"here"}),").\r\nHowever, you can modify these mutations or add new ones."]}),"\n",(0,o.jsxs)(e.p,{children:["To create your own mutation, add a new json file in the directory ",(0,o.jsx)(e.code,{children:"data/<datapack_id>/agricraft/mutations/<mutation_id>.json"}),"\r\nwhere ",(0,o.jsx)(e.code,{children:"datapack_id"})," is the id of your datapack and",(0,o.jsx)(e.code,{children:"mutation_id"})," is the id of this mutation (it can be whatever you want).\r\nIn our case it will be ",(0,o.jsx)(e.code,{children:"tuto"})," and ",(0,o.jsx)(e.code,{children:"tomato"}),"."]}),"\n",(0,o.jsx)(e.p,{children:"There can be multiple mutation for the same plant, as long as the id of the mutation is different."}),"\n",(0,o.jsx)(e.p,{children:"The json file must have the following structure:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json5",children:'{\r\n  // mods needed for the mutation to be loaded\r\n  "mods": [],\r\n  // the chance of the mutation occurring on any given random tick, in the range [0.0, 1.0]\r\n  "chance": 0.75,\r\n  // the plant id of the child resulting of the mutation\r\n  "child": "tuto:tomato",\r\n  // the plant id of the first parent\r\n  "parent1": "minecraft:poppy",\r\n  // the plant id of the second parent\r\n  "parent2": "minecraft:potato"\r\n}\r\n\n'})})]})}function l(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>s,a:()=>r});var o=n(7294);const a={},i=o.createContext(a);function r(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);