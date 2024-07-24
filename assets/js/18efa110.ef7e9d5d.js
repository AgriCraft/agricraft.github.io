"use strict";(self.webpackChunkagridocs=self.webpackChunkagridocs||[]).push([[241],{9162:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=t(5893),i=t(1151);const s={},o="Removing Default Data",c={id:"customization/removing-data",title:"Removing Default Data",description:"You can remove existing data (such as plants, mutations, etc.) using the filter block in your datapack's pack.mcmeta file. The filter block supports regular expressions (regex), making the process more efficient.",source:"@site/docs/customization/removing-data.md",sourceDirName:"customization",slug:"/customization/removing-data",permalink:"/docs/customization/removing-data",draft:!1,unlisted:!1,editUrl:"https://github.com/AgriCraft/agricraft.github.io/tree/main/docs/customization/removing-data.md",tags:[],version:"current",frontMatter:{},sidebar:"customizationSidebar",previous:{title:"Wrapping up",permalink:"/docs/customization/wrapping-up"},next:{title:"Tolerance calculator",permalink:"/docs/customization/tolerance-calculator"}},r={},l=[{value:"Removing All Plants and Mutations in a Specific Namespace",id:"removing-all-plants-and-mutations-in-a-specific-namespace",level:2},{value:"Removing Mutations for Specific Plants",id:"removing-mutations-for-specific-plants",level:2},{value:"Example <code>pack.mcmeta</code>",id:"example-packmcmeta",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"removing-default-data",children:"Removing Default Data"}),"\n",(0,a.jsxs)(n.p,{children:["You can remove existing data (such as plants, mutations, etc.) using the ",(0,a.jsx)(n.code,{children:"filter"})," block in your datapack's ",(0,a.jsx)(n.code,{children:"pack.mcmeta"})," file. The ",(0,a.jsx)(n.code,{children:"filter"})," block supports regular expressions (regex), making the process more efficient."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"})," Due to a ",(0,a.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MC-271761",children:"Minecraft bug"}),", there are certain limitations to this option."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"removing-all-plants-and-mutations-in-a-specific-namespace",children:"Removing All Plants and Mutations in a Specific Namespace"}),"\n",(0,a.jsx)(n.p,{children:"This example demonstrates how to remove all AgriCraft plants and mutations."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"namespace"})," specifies that only data from the ",(0,a.jsx)(n.code,{children:"agricraft"})," namespace should be removed."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"path"})," is the path to the files that you want to remove:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"agricraft/"})," is the directory where all AgriCraft data is stored."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"((plants)|(mutations))"})," regex pattern specifies that both plants and mutations will be removed while keeping soils, fertilizers, and weeds intact."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:".*"})," regex pattern matches all files in the specified path."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Please note that using multiple namespaces will ",(0,a.jsx)(n.a,{href:"https://bugs.mojang.com/browse/MC-271761",children:"cause them to leak"}),". Until this issue is resolved, you should specify the same ",(0,a.jsx)(n.code,{children:"namespace"})," for all the paths."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json5",children:'  "filter": {\n    "block": [\n      {\n        "namespace": "agricraft",\n        "path": "agricraft/((plants)|(mutations))/.*"\n      }\n    ]\n  }\n'})}),"\n",(0,a.jsx)(n.h2,{id:"removing-mutations-for-specific-plants",children:"Removing Mutations for Specific Plants"}),"\n",(0,a.jsxs)(n.p,{children:["This example shows how to remove mutations for specific plants without using ",(0,a.jsx)(n.code,{children:"namespace"}),". If not specified, the mutation for ",(0,a.jsx)(n.code,{children:"petinia"})," will be removed from all namespaces. This shouldn't be an issue unless you have multiple mods with plants that have the same name. The second path targets all plants that end with ",(0,a.jsx)(n.code,{children:"_tulip"}),". This can be useful for removing multiple plants with similar names."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json5",children:'  "filter": {\n    "block": [\n      {\n        "path": "agricraft/mutations/petinia"\n      },\n      {\n        "path": "agricraft/mutations/.*_tulip"\n      }\n    ]\n  }\n'})}),"\n",(0,a.jsxs)(n.h2,{id:"example-packmcmeta",children:["Example ",(0,a.jsx)(n.code,{children:"pack.mcmeta"})]}),"\n",(0,a.jsxs)(n.p,{children:["Once you add the ",(0,a.jsx)(n.code,{children:"filter"}),", ",(0,a.jsx)(n.code,{children:"pack.mcmeta"})," file should look like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json5",children:'{\n  "pack": {\n    "pack_format": 15,\n    "description": "AgriCraft test datapack"\n  },\n  "filter": {\n    "block": [\n      {\n        "path": "agricraft/((plants)|(mutations))/.*_tulip"\n      },\n      {\n        "path": "agricraft/.*/petinia"\n      },\n      {\n        "path": "agricraft/soils/podzol"\n      }\n    ]\n  }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var a=t(7294);const i={},s=a.createContext(i);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);