"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[1612],{"./src/components/gcds-file-uploader/stories/gcds-file-uploader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AcceptAudio:()=>AcceptAudio,AcceptImages:()=>AcceptImages,AcceptJpg:()=>AcceptJpg,AcceptPdf:()=>AcceptPdf,AcceptPng:()=>AcceptPng,AcceptSvg:()=>AcceptSvg,AcceptVideos:()=>AcceptVideos,Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Multiple:()=>Multiple,Playground:()=>Playground,Props:()=>Props,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/storybook/component-properties.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/File uploader",parameters:{actions:{argTypesRegex:"^on.*",handles:["change","focus","blur"]}},argTypes:{accept:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},multiple:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:"-"}}},uploaderId:{name:"uploader-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},name:{name:"name",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},disabled:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},errorMessage:{name:"error-message",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},hint:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},label:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},required:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},value:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.h4,..._utils_storybook_component_properties__WEBPACK_IMPORTED_MODULE_0__.q_,gcdsChange:{action:"change",table:{category:"Events | Événements"}},gcdsFocus:{action:"focus",table:{category:"Events | Événements"}},gcdsBlur:{action:"blur",table:{category:"Events | Événements"}}}},Template=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`error-message="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.accept?`accept="${args.accept}"`:null}\n  ${args.multiple?"multiple":null}\n  ${"blur"!=args.validateOn?`validate-on="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint?`hint="${args.hint}"`:null}\n  ${args.errorMessage?`errorMessage="${args.errorMessage}"`:null}\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  ${args.value?`value="${args.value}"`:null}\n  ${args.accept?`accept="${args.accept}"`:null}\n  ${args.multiple?"multiple":null}\n  ${"blur"!=args.validateOn?`validateOn="${args.validateOn}"`:null}\n  ${"en"!=args.lang?`lang="${args.lang}"`:null}\n>\n</GcdsFileUploader>\n`.replace(/\s\snull\n/g,""),Default=Template.bind({});Default.args={uploaderId:"uploader-default",name:"file-uploader",label:"Label",hint:"Hint / Example message.",validateOn:"blur",lang:"en"};const Disabled=Template.bind({});Disabled.args={uploaderId:"uploader-disabled",name:"file-uploader",label:"Label",hint:"Hint / Example message.",disabled:!0,validateOn:"blur",lang:"en"};const Error=Template.bind({});Error.args={uploaderId:"uploader-error",name:"file-uploader",label:"Label",hint:"Hint / Example message.",errorMessage:"Error message or validation message.",required:!0,validateOn:"blur",lang:"en"};const Required=Template.bind({});Required.args={uploaderId:"uploader-required",name:"file-uploader",label:"Label",hint:"Hint / Example message.",required:!0,validateOn:"blur",lang:"en"};const Multiple=Template.bind({});Multiple.args={uploaderId:"uploader-multiple",name:"file-uploader",label:"Label",hint:"Hint / Example message.",multiple:!0,validateOn:"blur",lang:"en"};const AcceptAudio=Template.bind({});AcceptAudio.args={uploaderId:"uploader-audio",name:"file-uploader",label:"Label",hint:"Hint / Example message.",accept:"audio/*",validateOn:"blur",lang:"en"};const AcceptImages=Template.bind({});AcceptImages.args={uploaderId:"uploader-images",name:"file-uploader",label:"Label",hint:"Hint / Example message.",accept:"image/*",validateOn:"blur",lang:"en"};const AcceptJpg=Template.bind({});AcceptJpg.args={uploaderId:"uploader-jpg",name:"file-uploader",label:"Label",hint:"Hint / Example message.",accept:"image/jpeg",validateOn:"blur",lang:"en"};const AcceptPdf=Template.bind({});AcceptPdf.args={uploaderId:"uploader-pdf",name:"file-uploader",label:"Label",hint:"Hint / Example message.",accept:"application/pdf",validateOn:"blur",lang:"en"};const AcceptPng=Template.bind({});AcceptPng.args={uploaderId:"uploader-png",name:"file-uploader",label:"Label",hint:"Hint / Example message.",accept:"image/png",validateOn:"blur",lang:"en"};const AcceptSvg=Template.bind({});AcceptSvg.args={uploaderId:"uploader-svg",name:"file-uploader",label:"Label",hint:"Hint / Example message.",accept:"image/svg+xml",validateOn:"blur",lang:"en"};const AcceptVideos=Template.bind({});AcceptVideos.args={uploaderId:"uploader-videos",name:"file-uploader",label:"Label",hint:"Hint / Example message.",accept:"video/*",validateOn:"blur",lang:"en"};const Props=Template.bind({});Props.args={uploaderId:"uploader",name:"file-uploader",label:"Label",hint:"Hint / Example message.",errorMessage:"",required:!1,disabled:!1,value:"",accept:"",multiple:!1,validateOn:"blur",lang:"en"};const Playground=(args=>`\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  hint="${args.hint}"\n  error-message="${args.errorMessage}"\n  ${args.required?"required":null}\n  ${args.disabled?"disabled":null}\n  value="${args.value}"\n  ${args.accept?`accept="${args.accept}"`:null}\n  ${args.multiple?"multiple":null}\n  validate-on="${args.validateOn}"\n  lang="${args.lang}"\n>\n</gcds-file-uploader>\n`).bind({});Playground.args={uploaderId:"uploader-playground",name:"file-uploader",label:"Label",hint:"Hint / Example message.",errorMessage:"",required:!1,disabled:!1,value:"",accept:"",multiple:!1,validateOn:"blur",lang:"en"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...Default.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...Disabled.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...Error.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...Required.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...Multiple.parameters?.docs?.source}}},AcceptAudio.parameters={...AcceptAudio.parameters,docs:{...AcceptAudio.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...AcceptAudio.parameters?.docs?.source}}},AcceptImages.parameters={...AcceptImages.parameters,docs:{...AcceptImages.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...AcceptImages.parameters?.docs?.source}}},AcceptJpg.parameters={...AcceptJpg.parameters,docs:{...AcceptJpg.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...AcceptJpg.parameters?.docs?.source}}},AcceptPdf.parameters={...AcceptPdf.parameters,docs:{...AcceptPdf.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...AcceptPdf.parameters?.docs?.source}}},AcceptPng.parameters={...AcceptPng.parameters,docs:{...AcceptPng.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...AcceptPng.parameters?.docs?.source}}},AcceptSvg.parameters={...AcceptSvg.parameters,docs:{...AcceptSvg.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...AcceptSvg.parameters?.docs?.source}}},AcceptVideos.parameters={...AcceptVideos.parameters,docs:{...AcceptVideos.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...AcceptVideos.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `error-message="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validate-on="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</gcds-file-uploader>\n\n\x3c!-- React code --\x3e\n<GcdsFileUploader\n  uploaderId="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  ${args.hint ? `hint="${args.hint}"` : null}\n  ${args.errorMessage ? `errorMessage="${args.errorMessage}"` : null}\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.value ? `value="${args.value}"` : null}\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  ${args.validateOn != \'blur\' ? `validateOn="${args.validateOn}"` : null}\n  ${args.lang != \'en\' ? `lang="${args.lang}"` : null}\n>\n</GcdsFileUploader>\n`.replace(/\\s\\snull\\n/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-file-uploader\n  uploader-id="${args.uploaderId}"\n  label="${args.label}"\n  name="${args.name}"\n  hint="${args.hint}"\n  error-message="${args.errorMessage}"\n  ${args.required ? `required` : null}\n  ${args.disabled ? `disabled` : null}\n  value="${args.value}"\n  ${args.accept ? `accept="${args.accept}"` : null}\n  ${args.multiple ? `multiple` : null}\n  validate-on="${args.validateOn}"\n  lang="${args.lang}"\n>\n</gcds-file-uploader>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Disabled","Error","Required","Multiple","AcceptAudio","AcceptImages","AcceptJpg","AcceptPdf","AcceptPng","AcceptSvg","AcceptVideos","Props","Playground"]},"./src/utils/storybook/component-properties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h4:()=>validatorProps,q_:()=>langProp});const langProp={lang:{control:{type:"select"},options:["en","fr"],table:{type:{summary:"string"},defaultValue:{summary:"en"}}}},validatorProps={validateOn:{name:"validate-on",control:{type:"select"},options:["blur","other"],table:{type:{summary:"string"},defaultValue:{summary:"blur"}}}}}}]);