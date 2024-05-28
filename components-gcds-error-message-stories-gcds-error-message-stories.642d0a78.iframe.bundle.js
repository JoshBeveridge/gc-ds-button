"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[8371],{"./src/components/gcds-error-message/stories/gcds-error-message.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Error message",argTypes:{messageId:{name:"message-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},default:{control:{type:"text"},table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-error-message message-id="${args.messageId}">\n  ${args.default}\n</gcds-error-message>\n\n\x3c!-- React code --\x3e\n<GcdsErrorMessage messageId="${args.messageId}">\n  ${args.default}"\n</GcdsErrorMessage>\n`,Default=Template.bind({});Default.args={messageId:"message-default",default:"Error message or validation message."};const Props=Template.bind({});Props.args={messageId:"message-props",default:"Error message or validation message."};const Playground=(args=>`\n<gcds-error-message message-id="${args.messageId}">\n  ${args.default}\n</gcds-error-message>\n`).bind({});Playground.args={messageId:"message-playground",default:"Error message or validation message."},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-error-message message-id="${args.messageId}">\n  ${args.default}\n</gcds-error-message>\n\n\x3c!-- React code --\x3e\n<GcdsErrorMessage messageId="${args.messageId}">\n  ${args.default}"\n</GcdsErrorMessage>\n`',...Default.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-error-message message-id="${args.messageId}">\n  ${args.default}\n</gcds-error-message>\n\n\x3c!-- React code --\x3e\n<GcdsErrorMessage messageId="${args.messageId}">\n  ${args.default}"\n</GcdsErrorMessage>\n`',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-error-message message-id="${args.messageId}">\n  ${args.default}\n</gcds-error-message>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Props","Playground"]}}]);