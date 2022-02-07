"use strict";(self.webpackChunkjunotools_docs=self.webpackChunkjunotools_docs||[]).push([[804],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,k=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4595:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:3},d="Pinned Codes",c={unversionedId:"pinned-codes",id:"pinned-codes",title:"Pinned Codes",description:"Code Pinning mechanism allows codes to be pinned to the memory.",source:"@site/docs/03-pinned-codes.md",sourceDirName:".",slug:"/pinned-codes",permalink:"/docs/pinned-codes",editUrl:"https://github.com/deus-labs/junotools/docs/tree/main/docs/03-pinned-codes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Guide",permalink:"/docs/dashboards/cw-721/guide"},next:{title:"Contributing",permalink:"/docs/contributing"}},p=[{value:"Listed Codes",id:"listed-codes",children:[{value:"Mainnet <code>juno1</code>",id:"mainnet-juno1",children:[],level:3},{value:"Testnet <code>uni-2</code>",id:"testnet-uni-2",children:[],level:3}],level:2}],u={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pinned-codes"},"Pinned Codes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code Pinning")," mechanism allows codes to be pinned to the memory."),(0,o.kt)("p",null,"This way code does not have to be loaded to memory on each execution thus making ",(0,o.kt)("strong",{parentName:"p"},"~x40 performance"),"."),(0,o.kt)("p",null,"This is an estimation, that needs to be benchmarked."),(0,o.kt)("p",null,"Code pinning is done through native chain governance."),(0,o.kt)("p",null,"You can read more at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/smart-contracts/code-pinning/"},"docs.cosmwasm.com")),(0,o.kt)("h2",{id:"listed-codes"},"Listed Codes"),(0,o.kt)("p",null,"Codes listed on Juno mainnet and testnet will appear here so you can use them anywhere."),(0,o.kt)("h3",{id:"mainnet-juno1"},"Mainnet ",(0,o.kt)("inlineCode",{parentName:"h3"},"juno1")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code Name"),(0,o.kt)("th",{parentName:"tr",align:null},"ID"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cw20-merkle-airdrop"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cw20-base"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cw20-bonding"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cw20-stake"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cw1-subkeys"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,o.kt)("h3",{id:"testnet-uni-2"},"Testnet ",(0,o.kt)("inlineCode",{parentName:"h3"},"uni-2")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Code Name"),(0,o.kt)("th",{parentName:"tr",align:null},"ID"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cw20-merkle-airdrop"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cw20-base"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cw20-bonding"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cw20-stake"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"cw1-subkeys"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A")))))}s.isMDXComponent=!0}}]);