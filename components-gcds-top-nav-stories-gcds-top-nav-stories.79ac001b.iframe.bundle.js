"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[2895],{"./src/components/gcds-top-nav/stories/gcds-top-nav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Center:()=>Center,Default:()=>Default,Home:()=>Home,Left:()=>Left,Playground:()=>Playground,Props:()=>Props,Right:()=>Right,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Top navigation",argTypes:{label:{name:"label",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},alignment:{control:{type:"select"},options:["right","left","center"],table:{type:{summary:"string"},defaultValue:{summary:"right"}}},...__webpack_require__("./src/utils/storybook/component-properties.js").langProp,home:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.home?`<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> `:null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.home?`<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> `:null}\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavGroup  openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  </GcdsNavGroup>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={label:"Top navigation",alignment:"right",home:"Home nav link",lang:"en"};const Props=Template.bind({});Props.args={label:"Top navigation",alignment:"right",home:"Home nav link",lang:"en"};const Home=Template.bind({});Home.args={label:"Top navigation",alignment:"right",home:"Home nav link",lang:"en"};const Right=Template.bind({});Right.args={label:"Top navigation",alignment:"right",home:"",lang:"en"};const Center=Template.bind({});Center.args={label:"Top navigation",alignment:"center",home:"",lang:"en"};const Left=Template.bind({});Left.args={label:"Top navigation",alignment:"left",home:"",lang:"en"};const Playground=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n  ${args.home?`<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> `:null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n`.replace(/\s\snull\n/g,"")).bind({});Playground.args={label:"Top navigation",alignment:"right",home:"Home nav link",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavGroup  openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  </GcdsNavGroup>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavGroup  openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  </GcdsNavGroup>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Home.parameters={...Home.parameters,docs:{...Home.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavGroup  openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  </GcdsNavGroup>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Home.parameters?.docs?.source}}},Right.parameters={...Right.parameters,docs:{...Right.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavGroup  openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  </GcdsNavGroup>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Right.parameters?.docs?.source}}},Center.parameters={...Center.parameters,docs:{...Center.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavGroup  openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  </GcdsNavGroup>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Center.parameters?.docs?.source}}},Left.parameters={...Left.parameters,docs:{...Left.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n\n\x3c!-- React code --\x3e\n<GcdsTopNav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<GcdsNavLink href="#home" slot="home">${args.home}</GcdsNavLink> ` : null}\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavGroup  openTrigger="Nav group label" menuLabel="Nav group label">\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n    <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  </GcdsNavGroup>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n  <GcdsNavLink href="#">Nav link</GcdsNavLink>\n</GcdsTopNav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Left.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-top-nav\n  label="${args.label}"\n  alignment="${args.alignment}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n  ${args.home ? `<gcds-nav-link href="#home" slot="home">${args.home}</gcds-nav-link> ` : null}\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-group  open-trigger="Nav group label" menu-label="Nav group label">\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n    <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  </gcds-nav-group>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n  <gcds-nav-link href="#">Nav link</gcds-nav-link>\n</gcds-top-nav>\n`.replace(/\\s\\snull\\n/g, \'\')',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Props","Home","Right","Center","Left","Playground"]},"./src/utils/storybook/component-properties.js":()=>{}}]);