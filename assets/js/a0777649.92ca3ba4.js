"use strict";(self.webpackChunkagridocs=self.webpackChunkagridocs||[]).push([[835],{2693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var i=n(5893),l=n(1151);const r={sidebar_label:"Soil"},s="AgriCraft Soil JSON",d={id:"customization/1.18/soil",title:"AgriCraft Soil JSON",description:"Structure",source:"@site/docs/customization/1.18/soil.md",sourceDirName:"customization/1.18",slug:"/customization/1.18/soil",permalink:"/docs/customization/1.18/soil",draft:!1,unlisted:!1,editUrl:"https://github.com/AgriCraft/agricraft.github.io/tree/main/docs/customization/1.18/soil.md",tags:[],version:"current",frontMatter:{sidebar_label:"Soil"},sidebar:"customizationSidebar",previous:{title:"Mutation",permalink:"/docs/customization/1.18/mutation"},next:{title:"Fertilizer",permalink:"/docs/customization/1.18/fertilizer"}},c={},h=[{value:"Structure",id:"structure",level:2},{value:"Soil condition values",id:"soil-condition-values",level:2},{value:"Humidity",id:"humidity",level:3},{value:"Acidity",id:"acidity",level:3},{value:"Nutrients",id:"nutrients",level:3},{value:"How the soil conditions are used :",id:"how-the-soil-conditions-are-used-",level:2},{value:"Exemple for humidity",id:"exemple-for-humidity",level:3},{value:"How to calculate the tolerance factor :",id:"how-to-calculate-the-tolerance-factor-",level:2}];function o(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"agricraft-soil-json",children:"AgriCraft Soil JSON"}),"\n",(0,i.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json5",children:'{\r\n  "path": "vanilla/soils/farmland_soil.json", // An internal field used for the transmission of JSON definitions.\r\n  "version": "1.16.4", // The version of the AgriCraft Soil JSON.\r\n  "json_documentation": "https://agridocs.readthedocs.io/en/master/agri_soil/", // Documentation of the AgriCraft Soil JSON.\r\n  "enabled": true, // Determines if the soil should be loaded or not.\r\n  "mods": [\r\n    "agricraft",\r\n    "minecraft"\r\n  ],\r\n  "id": "farmland_soil", // The unique string id for the soil.\r\n  "lang_key": "agricraft.soil.farmland.name", // The user-readable name of the soil. This does not need to be unique. Can be a lang key.\r\n  "varients": [ // An array of AgriStacks representing all the blocks that this soil represents.\r\n    {           // This specific soil considers farmland and gravel to be the same soil.\r\n      "type": "block",\r\n      "object": "minecraft:farmland",\r\n      "useTag": false,\r\n      "data": "",\r\n      "ignoredData": [\r\n        "*"\r\n      ]\r\n    }\r\n  ],\r\n  "humidity": "wet",\r\n  "acidity": "slightly_acidic",\r\n  "nutrients": "high",\r\n  "growth_modifier": 1.0\r\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"soil-condition-values",children:"Soil condition values"}),"\n",(0,i.jsx)(t.h3,{id:"humidity",children:"Humidity"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Synonyms"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"arid"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"dry"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"damp"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"moist"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"wet"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"standard"})," ",(0,i.jsx)(t.code,{children:"default"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"watery"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"flooded"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"acidity",children:"Acidity"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Synonyms"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"highly_acidic"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"0"})," ",(0,i.jsx)(t.code,{children:"1"})," ",(0,i.jsx)(t.code,{children:"2"})," ",(0,i.jsx)(t.code,{children:"highly-acidic"})," ",(0,i.jsx)(t.code,{children:"highly acidic"})," ",(0,i.jsx)(t.code,{children:"very_acidic"})," ",(0,i.jsx)(t.code,{children:"very-acidic"})," ",(0,i.jsx)(t.code,{children:"very acidic"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"acidic"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"3"})," ",(0,i.jsx)(t.code,{children:"4"})," ",(0,i.jsx)(t.code,{children:"5"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"slightly_acidic"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"6"})," ",(0,i.jsx)(t.code,{children:"slightly-acidic"})," ",(0,i.jsx)(t.code,{children:"slightly acidic"})," ",(0,i.jsx)(t.code,{children:"standard"})," ",(0,i.jsx)(t.code,{children:"default"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"neutral"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"7"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"slightly_alkaline"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"8"})," ",(0,i.jsx)(t.code,{children:"slightly-alkaline"})," ",(0,i.jsx)(t.code,{children:"slightly alkaline"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"alkaline"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"9"})," ",(0,i.jsx)(t.code,{children:"10"})," ",(0,i.jsx)(t.code,{children:"11"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"6"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"highly_alkaline"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"12"})," ",(0,i.jsx)(t.code,{children:"13"})," ",(0,i.jsx)(t.code,{children:"14"})," ",(0,i.jsx)(t.code,{children:"highly-alkaline"})," ",(0,i.jsx)(t.code,{children:"highly alkaline"})," ",(0,i.jsx)(t.code,{children:"very_alkaline"})," ",(0,i.jsx)(t.code,{children:"very-alkaline"})," ",(0,i.jsx)(t.code,{children:"very alkaline"})]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"nutrients",children:"Nutrients"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Value"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Name"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Synonyms"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"0"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"none"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"zero"})," ",(0,i.jsx)(t.code,{children:"empty"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"1"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"very_low"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"scare"})," ",(0,i.jsx)(t.code,{children:"poor"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"2"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"low"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"3"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"medium"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"normal"})," ",(0,i.jsx)(t.code,{children:"average"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"4"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"high"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.code,{children:"standard"})," ",(0,i.jsx)(t.code,{children:"default"})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"5"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"very_high"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.code,{children:"rich"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"how-the-soil-conditions-are-used-",children:"How the soil conditions are used :"}),"\n",(0,i.jsxs)(t.p,{children:["The condition is met if the soil value is in the range :\r\n",(0,i.jsx)(t.code,{children:"conditionValue \xb1 (tolerance_factor * plant_strength)"})]}),"\n",(0,i.jsx)(t.h3,{id:"exemple-for-humidity",children:"Exemple for humidity"}),"\n",(0,i.jsx)(t.p,{children:"Assuming the plant has a strength of 10 and has this condition in the json :"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-{json}",children:'{\r\n  "soil_humidity": {\r\n    "condition": "damp",\r\n    "type": "equal",\r\n    "tolerance_factor": 0.2\r\n  }\r\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"damp"})," has a value of 2. So : 2 \xb1 (0.2 * 10) = [0, 4].\r\nThat means the soil's humidity has to be in the range [0, 4]."]}),"\n",(0,i.jsxs)(t.p,{children:["Note : If the type was ",(0,i.jsx)(t.code,{children:"equal_or_higher"})," the range would be [0, +inf]"]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-calculate-the-tolerance-factor-",children:"How to calculate the tolerance factor :"}),"\n",(0,i.jsx)(t.p,{children:"First we have to set the soil the plant need, and at which strength the plant can be placed in farmland.\r\nLet's say we want our plant to pe placed on podzol, and the strength for farmland 7."}),"\n",(0,i.jsxs)(t.p,{children:["The calcul is : ",(0,i.jsx)(t.code,{children:"f = abs(ceil((soil_humidity - farmland_humidity) / strength)))"}),". More literally f equals the absolute value of the rounded up value of (soil_humidity - farmland_humidity) / strength."]}),"\n",(0,i.jsxs)(t.p,{children:["In our exemple, ",(0,i.jsx)(t.code,{children:"f = abs(ceil((2 - 3) / 7))) = abs(ceil(-0.1428))) = abs(-0.15)) = 0.15"}),"\r\nThe tolerance factor is thus 0.15."]})]})}function a(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>s});var i=n(7294);const l={},r=i.createContext(l);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);