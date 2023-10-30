"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[9969],{"./src/components/gcds-stepper/stories/gcds-stepper.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,French:()=>French,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Stepper",argTypes:{currentStep:{name:"current-step",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"-"}},type:{required:!0}},totalSteps:{name:"total-steps",control:"number",table:{type:{summary:"number"},defaultValue:{summary:"-"}},type:{required:!0}},...__webpack_require__("./src/utils/storybook/component-properties.js").langProp}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-stepper current-step="${args.currentStep}" total-steps="${args.totalSteps}" ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</gcds-stepper>\n\n\x3c!-- React code --\x3e\n<GcdsStepper currentStep="${args.currentStep}" totalSteps="${args.totalSteps}" ${"en"!=args.lang?`lang="${args.lang}"`:null}>\n</GcdsStepper>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={lang:"en",currentStep:1,totalSteps:4};const French=Template.bind({});French.args={lang:"fr",currentStep:1,totalSteps:4};const Props=Template.bind({});Props.args={lang:"en",currentStep:1,totalSteps:4};const Playground=(args=>`\n<gcds-stepper\n  current-step="${args.currentStep}"\n  total-steps="${args.totalSteps}"\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-stepper>\n`).bind({});Playground.args={lang:"en",currentStep:1,totalSteps:4},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-stepper current-step="${args.currentStep}" total-steps="${args.totalSteps}" ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</gcds-stepper>\n\n\x3c!-- React code --\x3e\n<GcdsStepper currentStep="${args.currentStep}" totalSteps="${args.totalSteps}" ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</GcdsStepper>\n`.replace(/ null/g, \'\')',...Default.parameters?.docs?.source}}},French.parameters={...French.parameters,docs:{...French.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-stepper current-step="${args.currentStep}" total-steps="${args.totalSteps}" ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</gcds-stepper>\n\n\x3c!-- React code --\x3e\n<GcdsStepper currentStep="${args.currentStep}" totalSteps="${args.totalSteps}" ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</GcdsStepper>\n`.replace(/ null/g, \'\')',...French.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-stepper current-step="${args.currentStep}" total-steps="${args.totalSteps}" ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</gcds-stepper>\n\n\x3c!-- React code --\x3e\n<GcdsStepper currentStep="${args.currentStep}" totalSteps="${args.totalSteps}" ${args.lang != \'en\' ? `lang="${args.lang}"` : null}>\n</GcdsStepper>\n`.replace(/ null/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-stepper\n  current-step="${args.currentStep}"\n  total-steps="${args.totalSteps}"\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-stepper>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","French","Props","Playground"]},"./src/utils/storybook/component-properties.js":()=>{}}]);