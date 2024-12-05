/*! For license information please see components-gcds-heading-stories-properties-mdx.6db9b0b2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[1957,2601],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>MDXProvider,a:()=>useMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/components/gcds-heading/stories/properties.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/react/jsx-runtime.js"),_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),_gcds_heading_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/gcds-heading/stories/gcds-heading.stories.tsx");function _createMdxContent(props){const _components={h1:"h1",...(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_gcds_heading_stories__WEBPACK_IMPORTED_MODULE_2__,name:"Events & properties"}),"\n",!new URLSearchParams(window.location.search).get("demo")&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{children:"Events & properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_gcds_heading_stories__WEBPACK_IMPORTED_MODULE_2__.Props,story:{inline:!0},sourceState:"shown",type:"dynamic"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_gcds_heading_stories__WEBPACK_IMPORTED_MODULE_2__.Props,sort:"requiredFirst"})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_gcds_components_gcds_components_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.a)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./src/components/gcds-heading/stories/gcds-heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LevelH1:()=>LevelH1,LevelH2:()=>LevelH2,LevelH3:()=>LevelH3,LevelH4:()=>LevelH4,LevelH5:()=>LevelH5,LevelH6:()=>LevelH6,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Heading",argTypes:{tag:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},characterLimit:{name:"character-limit",control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},marginTop:{name:"margin-top",control:{type:"select"},options:["0","25","50","75","100","125","150","175","200","225","250","300","350","400","450","500","550","600","650","700","750","800","850","900","950","1000","1050","1100","1150","1200","1250"],table:{type:{summary:"string"},defaultValue:{summary:"h1: 0, h2-h6: 600"}}},marginBottom:{name:"margin-bottom",control:{type:"select"},options:["0","25","50","75","100","125","150","175","200","225","250","300","350","400","450","500","550","600","650","700","750","800","850","900","950","1000","1050","1100","1150","1200","1250"],table:{type:{summary:"string"},defaultValue:{summary:"300"}}},default:{control:{type:"text"},description:"Customize the content or include additional elements. | Personnalisez le contenu ou ajoutez des éléments supplémentaires.",table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${args.characterLimit?null:`character-limit="${args.characterLimit}"`} ${args.marginTop?`margin-top="${args.marginTop}"`:null} ${args.marginBottom?`margin-bottom="${args.marginBottom}"`:null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${args.characterLimit?null:`characterLimit="${args.characterLimit}"`} ${args.marginTop?`marginTop="${args.marginTop}"`:null} ${args.marginBottom?`marginBottom="${args.marginBottom}"`:null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={tag:"h2",characterLimit:!0,default:"Heading"};const LevelH1=Template.bind({});LevelH1.args={tag:"h1",characterLimit:!0,default:"Heading level 1"};const LevelH2=Template.bind({});LevelH2.args={tag:"h2",characterLimit:!0,default:"Heading level 2"};const LevelH3=Template.bind({});LevelH3.args={tag:"h3",characterLimit:!0,default:"Heading level 3"};const LevelH4=Template.bind({});LevelH4.args={tag:"h4",characterLimit:!0,default:"Heading level 4"};const LevelH5=Template.bind({});LevelH5.args={tag:"h5",characterLimit:!0,default:"Heading level 5"};const LevelH6=Template.bind({});LevelH6.args={tag:"h6",characterLimit:!0,default:"Heading level 6"};const Props=Template.bind({});Props.args={tag:"h2",characterLimit:!0,default:"Heading"};const Playground=(args=>`\n<gcds-heading\n  tag="${args.tag}"\n  ${args.marginTop?`margin-top="${args.marginTop}"`:null}\n  ${args.marginBottom?`margin-bottom="${args.marginBottom}"`:null}\n>\n  ${args.default}\n</gcds-heading>\n`).bind({});Playground.args={tag:"h2",characterLimit:!0,default:"Heading"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...Default.parameters?.docs?.source}}},LevelH1.parameters={...LevelH1.parameters,docs:{...LevelH1.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH1.parameters?.docs?.source}}},LevelH2.parameters={...LevelH2.parameters,docs:{...LevelH2.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH2.parameters?.docs?.source}}},LevelH3.parameters={...LevelH3.parameters,docs:{...LevelH3.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH3.parameters?.docs?.source}}},LevelH4.parameters={...LevelH4.parameters,docs:{...LevelH4.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH4.parameters?.docs?.source}}},LevelH5.parameters={...LevelH5.parameters,docs:{...LevelH5.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH5.parameters?.docs?.source}}},LevelH6.parameters={...LevelH6.parameters,docs:{...LevelH6.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH6.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-heading\n  tag="${args.tag}"\n  ${args.marginTop ? `margin-top="${args.marginTop}"` : null}\n  ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}\n>\n  ${args.default}\n</gcds-heading>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","LevelH1","LevelH2","LevelH3","LevelH4","LevelH5","LevelH6","Props","Playground"]},"../../node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);