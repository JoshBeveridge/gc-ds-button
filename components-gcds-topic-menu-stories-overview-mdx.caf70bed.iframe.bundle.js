/*! For license information please see components-gcds-topic-menu-stories-overview-mdx.caf70bed.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[9221,8903],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./src/components/gcds-topic-menu/stories/overview.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_packages_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_gcds_topic_menu_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-topic-menu/stories/gcds-topic-menu.stories.tsx");function _createMdxContent(props){const _components=Object.assign({h1:"h1",code:"code",p:"p",h2:"h2",h3:"h3",h4:"h4"},(0,_home_runner_work_gcds_components_gcds_components_packages_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_topic_menu_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.h1,{id:"theme-and-topic-menugcds-topic-menu",children:["Theme and topic menu",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"<gcds-topic-menu>"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Navigate to the top tasks from all Government of Canada websites."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_topic_menu_stories__WEBPACK_IMPORTED_MODULE_2__.English,story:{height:"60rem",inline:!1}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br",{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"english",children:"English"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_topic_menu_stories__WEBPACK_IMPORTED_MODULE_2__.English,story:{height:"60rem",inline:!1}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h4,{id:"french",children:"French"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_topic_menu_stories__WEBPACK_IMPORTED_MODULE_2__.French,story:{height:"60rem",inline:!1}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"home-page",children:"Home page"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_topic_menu_stories__WEBPACK_IMPORTED_MODULE_2__.Home,story:{height:"60rem",inline:!1}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"resources",children:"Resources"}),"\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("ul",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-button",{type:"link","button-style":"text-only",href:"https://design-system.alpha.canada.ca/en/components/theme-and-topic-menu/",target:"_blank",children:"Guidance"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-button",{type:"link","button-style":"text-only",href:"https://github.com/cds-snc/gcds-components/tree/main/packages/web/src/components/gcds-topic-menu",target:"_blank",children:"Github"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("gcds-button",{type:"link","button-style":"text-only",href:"https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/Canadian-Digital-Service%E2%80%A8---GC-Design-System?type=design&node-id=7301-1409&mode=design&t=QC9vPhyviCSe8v0s-0",target:"_blank",children:"Figma"})})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_gcds_components_gcds_components_packages_web_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./src/components/gcds-topic-menu/stories/gcds-topic-menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{English:()=>English,French:()=>French,Home:()=>Home,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Theme and topic menu",argTypes:{home:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},...__webpack_require__("./src/utils/storybook/component-properties.js").langProp}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-topic-menu ${args.home?"home":null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</gcds-topic-menu>\n\n\x3c!-- React code --\x3e\n<GcdsTopicMenu ${args.home?"home":null} ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</GcdsTopicMenu>\n`.replace(/ null/g,""),English=Template.bind({});English.args={home:!1,lang:"en"};const French=Template.bind({});French.args={home:!1,lang:"fr"};const Home=Template.bind({});Home.args={home:!0,lang:"en"};const Props=Template.bind({});Props.args={home:!1,lang:"en"};const Playground=(args=>`\n<gcds-topic-menu\n  ${args.home?"home":null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-topic-menu>\n`).bind({});Playground.args={home:!1,lang:"en"},English.parameters={...English.parameters,docs:{...English.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-topic-menu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-topic-menu>\n\n\x3c!-- React code --\x3e\n<GcdsTopicMenu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsTopicMenu>\n`.replace(/ null/g, '')",...English.parameters?.docs?.source}}},French.parameters={...French.parameters,docs:{...French.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-topic-menu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-topic-menu>\n\n\x3c!-- React code --\x3e\n<GcdsTopicMenu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsTopicMenu>\n`.replace(/ null/g, '')",...French.parameters?.docs?.source}}},Home.parameters={...Home.parameters,docs:{...Home.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-topic-menu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-topic-menu>\n\n\x3c!-- React code --\x3e\n<GcdsTopicMenu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsTopicMenu>\n`.replace(/ null/g, '')",...Home.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-topic-menu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</gcds-topic-menu>\n\n\x3c!-- React code --\x3e\n<GcdsTopicMenu ${args.home ? `home` : null} ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}>\n</GcdsTopicMenu>\n`.replace(/ null/g, '')",...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"args => `\n<gcds-topic-menu\n  ${args.home ? `home` : null}\n  ${args.lang != 'en' ? `lang=\"${args.lang}\"` : null}\n>\n</gcds-topic-menu>\n`",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["English","French","Home","Props","Playground"]},"./src/utils/storybook/component-properties.js":()=>{},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);