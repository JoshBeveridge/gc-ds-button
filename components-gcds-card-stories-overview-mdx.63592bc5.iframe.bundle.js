/*! For license information please see components-gcds-card-stories-overview-mdx.63592bc5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[4553,4442],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-card/stories/gcds-card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Action:()=>Action,Default:()=>Default,Image:()=>Image,Link:()=>Link,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Card",argTypes:{cardTitle:{name:"card-title",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},href:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},tag:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},description:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},imgSrc:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},imgAlt:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},type:{control:"select",options:["link","action"],table:{type:{summary:"string"},defaultValue:{summary:"link"}}},titleElement:{control:"select",options:["h3","h4","h5","h6","a"],table:{type:{summary:"string"},defaultValue:{summary:"a"}}},footer:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href?`href="${args.href}"`:null}\n  ${"link"!=args.type?'type="action"':null}\n  ${"a"!=args.titleElement?`title-element="${args.titleElement}"`:null}\n  ${args.tag?`tag="${args.tag}"`:null}\n  ${args.description?`description="${args.description}"`:null}\n  ${args.imgSrc?`img-src="${args.imgSrc}"`:null}\n  ${args.imgAlt?`img-alt="${args.imgAlt}"`:null}\n>\n  ${args.footer?`<div slot="footer">${args.footer}</div>`:null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href?`href="${args.href}"`:null}\n  ${"link"!=args.type?'type="action"':null}\n  ${"a"!=args.titleElement?`titleElement="${args.titleElement}"`:null}\n  ${args.tag?`tag="${args.tag}"`:null}\n  ${args.description?`description="${args.description}"`:null}\n  ${args.imgSrc?`imgSrc="${args.imgSrc}"`:null}\n  ${args.imgAlt?`imgAlt="${args.imgAlt}"`:null}\n>\n  ${args.footer?`<div slot="footer">${args.footer}</div>`:null}\n</GcdsCard>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={cardTitle:"Card title link",href:"#",type:"link",titleElement:"a",tag:"Tag",description:"Description or supporting text relating to the headline. Longer text will be truncated with ...",imgSrc:"",imgAlt:"",footer:""};const Link=Template.bind({});Link.args={cardTitle:"Card title link",href:"#",type:"link",titleElement:"a",tag:"",description:"Description or supporting text relating to the headline. Longer text will be truncated with ...",imgSrc:"",imgAlt:"",footer:""};const Action=Template.bind({});Action.args={cardTitle:"Card title link",href:"#",type:"action",titleElement:"a",tag:"",description:"Description or supporting text relating to the headline. Longer text will be truncated with ...",imgSrc:"",imgAlt:"",footer:'<a href="#">Action link</a>'};const Image=Template.bind({});Image.args={cardTitle:"Card title link",href:"#",type:"link",titleElement:"a",tag:"",description:"Description or supporting text relating to the headline. Longer text will be truncated with ...",imgSrc:"https://picsum.photos/480/270",imgAlt:"An image with the card component",footer:""};const Props=Template.bind({});Props.args={cardTitle:"Card title link",href:"#",type:"link",titleElement:"a",tag:"Tag",description:"Description or supporting text relating to the headline. Longer text will be truncated with ...",imgSrc:"",imgAlt:"",footer:""};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href?`href="${args.href}"`:null}\n  ${"link"!=args.type?'type="action"':null}\n  ${"a"!=args.titleElement?`title-element="${args.titleElement}"`:null}\n  ${args.tag?`tag="${args.tag}"`:null}\n  ${args.description?`description="${args.description}"`:null}\n  ${args.imgSrc?`img-src="${args.imgSrc}"`:null}\n  ${args.imgAlt?`img-alt="${args.imgAlt}"`:null}\n>\n  ${args.footer?`<div slot="footer">${args.footer}</div>`:null}\n</gcds-card>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={cardTitle:"Card title link",href:"#",type:"link",titleElement:"a",tag:"",description:"Description or supporting text relating to the headline. Longer text will be truncated with ...",imgSrc:"",imgAlt:"",footer:""},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `title-element="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `titleElement="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `title-element="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `titleElement="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Link.parameters?.docs?.source}}},Action.parameters={...Action.parameters,docs:{...Action.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `title-element="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `titleElement="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Action.parameters?.docs?.source}}},Image.parameters={...Image.parameters,docs:{...Image.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `title-element="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `titleElement="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Image.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `title-element="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</gcds-card>\n\n\x3c!-- React code --\x3e\n<GcdsCard\n  cardTitle="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `titleElement="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `imgSrc="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `imgAlt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</GcdsCard>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-card\n  card-title="${args.cardTitle}"\n  ${args.href ? `href="${args.href}"` : null}\n  ${args.type != \'link\' ? `type="action"` : null}\n  ${args.titleElement != \'a\' ? `title-element="${args.titleElement}"` : null}\n  ${args.tag ? `tag="${args.tag}"` : null}\n  ${args.description ? `description="${args.description}"` : null}\n  ${args.imgSrc ? `img-src="${args.imgSrc}"` : null}\n  ${args.imgAlt ? `img-alt="${args.imgAlt}"` : null}\n>\n  ${args.footer ? `<div slot="footer">${args.footer}</div>` : null}\n</gcds-card>\n`.replace(/\\s\\snull\\n/g, \'\')',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Link","Action","Image","Props","Playground"]},"./src/components/gcds-card/stories/overview.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_gcds_card_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-card/stories/gcds-card.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",code:"code",p:"p",em:"em",h2:"h2",h3:"h3",h4:"h4"},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_card_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h1,{id:"cardgcds-card",children:["Card",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<gcds-card>"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Also called: tile, content card."})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A card is a box containing structured, actionable content on a single topic."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_card_stories__WEBPACK_IMPORTED_MODULE_2__.Default,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"types",children:"Types"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"link",children:"Link"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_card_stories__WEBPACK_IMPORTED_MODULE_2__.Link,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"action",children:"Action"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_card_stories__WEBPACK_IMPORTED_MODULE_2__.Action,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-image",children:"With image"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_card_stories__WEBPACK_IMPORTED_MODULE_2__.Image,story:{inline:!0}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"resources",children:"Resources"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{className:"resources-list",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://design-system.alpha.canada.ca/en/components/card/",target:"_blank",children:"Guidance"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-card",target:"_blank",children:"Github"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-link",{size:"regular",href:"https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=5757-12701&mode=design&t=6AQy5Cmm6YcqHAJm-0",target:"_blank",children:"Figma"})})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);