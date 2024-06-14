"use strict";(self.webpackChunkagridocs=self.webpackChunkagridocs||[]).push([[893],{1925:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=r(5893),n=r(1151);const a={sidebar_label:"Fertilizer",pagination_next:null},o="AgriCraft Fertilizer JSON",l={id:"customization/1.18/fertilizer",title:"AgriCraft Fertilizer JSON",description:"Structure",source:"@site/docs/customization/1.18/fertilizer.md",sourceDirName:"customization/1.18",slug:"/customization/1.18/fertilizer",permalink:"/docs/customization/1.18/fertilizer",draft:!1,unlisted:!1,editUrl:"https://github.com/AgriCraft/agricraft.github.io/tree/main/docs/customization/1.18/fertilizer.md",tags:[],version:"current",frontMatter:{sidebar_label:"Fertilizer",pagination_next:null},sidebar:"customizationSidebar",previous:{title:"Soil",permalink:"/docs/customization/1.18/soil"}},s={},c=[{value:"Structure",id:"structure",level:2}];function f(e){const t={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"agricraft-fertilizer-json",children:"AgriCraft Fertilizer JSON"}),"\n",(0,i.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json5",children:'{\r\n  "path": "vanilla/fertilizers/bone_meal_fertilizer.json", // An internal field used for the transmission of JSON definitions.\r\n  "version": "1.16.4", // The version of the AgriCraft Fertilizer JSON.\r\n  "json_documentation": "https://agridocs.readthedocs.io/en/master/agri_fertilizer/", // Documentation of the AgriCraft Fertilizer JSON\r\n  "enabled": true, // Determines if the fertilizer should be loaded or not.\r\n  "mods": [ // An array of mod ids. The fertilizer will be loaded only if all mods using those ids are present.\r\n    "agricraft",\r\n    "minecraft"\r\n  ],\r\n  "id": "vanilla:bone_meal_fertilizer", // The unique string id for the fertilizer.\r\n  "lang_key": "item.minecraft.bone_meal",// The name of the fertilizer. Can be a lang key.\r\n  "variants": [ // An array of objects representing all the items that this fertilizer represents.\r\n    {           // This specific soil considers farmland and gravel to be the same soil.\r\n      "type": "item",\r\n      "object": "minecraft:bone_meal",\r\n      "useTag": false,\r\n      "data": "",\r\n      "ignoredData": [\r\n        "*"\r\n      ]\r\n    }\r\n  ],\r\n  "trigger_mutation": true, // Determine if the fertilizer trigger mutation in the crop.\r\n  "trigger_weeds": true,    // Determine if the fertilizer trigger weed growth in the crop.\r\n  "potency": 1, // Determine the potency of the fertilizer. Bigger values equals faster growth.\r\n  "effect": { // Effects of the fertilizer on the plants.\r\n    "reduce_growth": true, // Determine if the fertilizer can reduce the growth of negatively affected plants.\r\n    "kill_plant": true,    // Determine if the fertilizer can kill negatively affected plants.\r\n    "negatively_affected": { // The list of negatively affected plants by the fertilizer\r\n      "blacklist": false, // Determine if the list should be considered as a whitelist or a blacklist\r\n      "plant_list": [] // List of AgriPlant ids\r\n    },\r\n    "positively_affected":  {// The list of positively affected plants by the fertilizer\r\n      "blacklist": false, // Determine if the list should be considered as a whitelist or a blacklist\r\n      "plant_list": [] // List of AgriPlant ids\r\n    },\r\n    "particles": [ // An array of particles that are spawned in the world when the fertilizer is used on a plant.\r\n      {\r\n        "amount": 2, // The amount of particles\r\n        "when": [ // Determine on which plants the particle should spawn\r\n          "positive",\r\n          "neutral",\r\n          "negative"\r\n        ],\r\n        "id": "minecraft:smoke", // The id of the particle\r\n        "delta_x": 0.3, // How far from the center of the block the particle can spawn (X axis).\r\n        "delta_y": 0.4, // How high from the center of the block the particle can spawn (Y axis).\r\n        "delta_z": 0.3  // How far from the center of the block the particle can spawn (Z axis).\r\n      }\r\n    ]\r\n  }\r\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>o});var i=r(7294);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);