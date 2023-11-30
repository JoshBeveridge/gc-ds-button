"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[2848],{"./src/components/gcds-button/stories/gcds-button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BtnWithIcon:()=>BtnWithIcon,DangerSize:()=>DangerSize,DangerState:()=>DangerState,Playground:()=>Playground,Preview:()=>Preview,PreviewStyles:()=>PreviewStyles,PreviewTypes:()=>PreviewTypes,PrimarySize:()=>PrimarySize,PrimaryState:()=>PrimaryState,Props:()=>Props,SecondarySize:()=>SecondarySize,SecondaryState:()=>SecondaryState,SkipToContentSize:()=>SkipToContentSize,SkipToContentState:()=>SkipToContentState,TextOnlySize:()=>TextOnlySize,TextOnlyState:()=>TextOnlyState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Button",parameters:{actions:{argTypesRegex:"^on.*",handles:["click","change","focus","blur"]}},argTypes:{buttonRole:{name:"button-role",control:{type:"select"},options:["primary","secondary","danger","skip-to-content"],table:{type:{summary:"string"},defaultValue:{summary:"primary"}}},buttonStyle:{name:"button-style",control:{type:"select"},options:["solid","text-only"],table:{type:{summary:"string"},defaultValue:{summary:"solid"}}},disabled:{control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},buttonId:{name:"button-id",control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},name:{control:"text",table:{type:{summary:"string"},defaultValue:{summary:"-"}}},size:{control:{type:"select"},options:["regular","small"],table:{type:{summary:"string"},defaultValue:{summary:"regular"}}},type:{control:{type:"select"},options:["submit","reset","button","link"],table:{type:{summary:"string"},defaultValue:{summary:"button"}}},download:{control:"text",if:{arg:"type",eq:"link"},table:{type:{summary:"string"},defaultValue:{summary:"-"}}},href:{control:"text",if:{arg:"type",eq:"link"},table:{type:{summary:"string"},defaultValue:{summary:"-"}}},rel:{control:"text",if:{arg:"type",eq:"link"},table:{type:{summary:"string"},defaultValue:{summary:"-"}}},target:{control:"text",if:{arg:"type",eq:"link"},table:{type:{summary:"string"},defaultValue:{summary:"-"}}},default:{control:{type:"text"},table:{category:"Slots | Fentes"}},gcdsClick:{action:"click",table:{category:"Events | Événements"}},gcdsChange:{action:"change",table:{category:"Events | Événements"}},gcdsFocus:{action:"focus",table:{category:"Events | Événements"}},gcdsBlur:{action:"blur",table:{category:"Events | Événements"}}}},TemplateTwoButtons=args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${"primary"!=args.buttonRole?`button-role="${args.buttonRole}"`:null} ${"solid"!=args.btnOneStyle?`button-style="${args.btnOneStyle}"`:null} ${"regular"!=args.btnOneSize?`size="${args.btnOneSize}"`:null} ${args.btnOneDisabled?"disabled":null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${"primary"!=args.buttonRole?`button-role="${args.buttonRole}"`:null} ${"solid"!=args.btnTwoStyle?`button-style="${args.btnTwoStyle}"`:null} ${"regular"!=args.btnTwoSize?`size="${args.btnTwoSize}"`:null} ${args.btnTwoDisabled?"disabled":null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${"primary"!=args.buttonRole?`buttonRole="${args.buttonRole}"`:null} ${"solid"!=args.btnOneStyle?`buttonStyle="${args.btnOneStyle}"`:null} ${"regular"!=args.btnOneSize?`size="${args.btnOneSize}"`:null} ${args.btnOneDisabled?"disabled":null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${"primary"!=args.buttonRole?`buttonRole="${args.buttonRole}"`:null} ${"solid"!=args.btnTwoStyle?`buttonStyle="${args.btnTwoStyle}"`:null} ${"regular"!=args.btnTwoSize?`size="${args.btnTwoSize}"`:null} ${args.btnTwoDisabled?"disabled":null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g,""),Preview=(()=>'\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button>\n  Primary\n</gcds-button>\n<gcds-button button-role="secondary">\n  Secondary\n</gcds-button>\n<gcds-button button-role="danger">\n  Danger\n</gcds-button>\n<gcds-button button-role="skip-to-content">\n  Skip-to-content\n</gcds-button>\n<gcds-button button-style="text-only">\n  Text-only\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton>\n  Primary\n</GcdsButton>\n<GcdsButton buttonRole="secondary">\n  Secondary\n</GcdsButton>\n<GcdsButton buttonRole="danger">\n  Danger\n</GcdsButton>\n<GcdsButton buttonRole="skip-to-content">\n  Skip-to-content\n</GcdsButton>\n<GcdsButton buttonStyle="text-only">\n  Text-only\n</GcdsButton>\n').bind({}),PreviewTypes=(()=>'\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button>\n  Button\n</gcds-button>\n<gcds-button type="link">\n  Link\n</gcds-button>\n<gcds-button type="reset">\n  Reset\n</gcds-button>\n<gcds-button type="submit">\n  Submit\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton>\n  Button\n</GcdsButton>\n<GcdsButton type="link">\n  Link\n</GcdsButton>\n<GcdsButton type="reset">\n  Reset\n</GcdsButton>\n<GcdsButton type="submit">\n  Submit\n</GcdsButton>\n').bind({}),PreviewStyles=TemplateTwoButtons.bind({});PreviewStyles.args={buttonRole:"primary",btnOneText:"Solid",btnOneStyle:"solid",btnOneSize:"regular",btnTwoText:"Text-only",btnTwoStyle:"text-only",btnTwoSize:"regular"};const PrimaryState=TemplateTwoButtons.bind({});PrimaryState.args={buttonRole:"primary",btnOneText:"Primary default",btnOneStyle:"solid",btnOneSize:"regular",btnOneDisabled:!1,btnTwoText:"Primary disabled",btnTwoStyle:"solid",btnTwoSize:"regular",btnTwoDisabled:!0};const PrimarySize=TemplateTwoButtons.bind({});PrimarySize.args={buttonRole:"primary",btnOneText:"Primary default",btnOneStyle:"solid",btnOneSize:"regular",btnTwoText:"Primary small",btnTwoStyle:"solid",btnTwoSize:"small"};const SecondaryState=TemplateTwoButtons.bind({});SecondaryState.args={buttonRole:"secondary",btnOneText:"Secondary default",btnOneStyle:"solid",btnOneSize:"regular",btnOneDisabled:!1,btnTwoText:"Secondary disabled",btnTwoStyle:"solid",btnTwoSize:"regular",btnTwoDisabled:!0};const SecondarySize=TemplateTwoButtons.bind({});SecondarySize.args={buttonRole:"secondary",btnOneText:"Secondary default",btnOneStyle:"solid",btnOneSize:"regular",btnTwoText:"Secondary small",btnTwoStyle:"solid",btnTwoSize:"small"};const DangerState=TemplateTwoButtons.bind({});DangerState.args={buttonRole:"danger",btnOneText:"Danger default",btnOneStyle:"solid",btnOneSize:"regular",btnOneDisabled:!1,btnTwoText:"Danger disabled",btnTwoStyle:"solid",btnTwoSize:"regular",btnTwoDisabled:!0};const DangerSize=TemplateTwoButtons.bind({});DangerSize.args={buttonRole:"danger",btnOneText:"Danger default",btnOneStyle:"solid",btnOneSize:"regular",btnTwoText:"Danger small",btnTwoStyle:"solid",btnTwoSize:"small"};const SkipToContentState=TemplateTwoButtons.bind({});SkipToContentState.args={buttonRole:"skip-to-content",btnOneText:"Skip-to-content default",btnOneStyle:"solid",btnOneSize:"regular",btnOneDisabled:!1,btnTwoText:"Skip-to-content disabled",btnTwoStyle:"solid",btnTwoSize:"regular",btnTwoDisabled:!0};const SkipToContentSize=TemplateTwoButtons.bind({});SkipToContentSize.args={buttonRole:"skip-to-content",btnOneText:"Skip-to-content default",btnOneStyle:"solid",btnOneSize:"regular",btnTwoText:"Skip-to-content small",btnTwoStyle:"solid",btnTwoSize:"small"};const TextOnlyState=TemplateTwoButtons.bind({});TextOnlyState.args={buttonRole:"primary",btnOneText:"Text-only default",btnOneStyle:"text-only",btnOneSize:"regular",btnOneDisabled:!1,btnTwoText:"Text-only disabled",btnTwoStyle:"text-only",btnTwoSize:"regular",btnTwoDisabled:!0};const TextOnlySize=TemplateTwoButtons.bind({});TextOnlySize.args={buttonRole:"primary",btnOneText:"Text-only default",btnOneSize:"regular",btnOneStyle:"text-only",btnTwoText:"Text-only small",btnTwoSize:"small",btnTwoStyle:"text-only"};const BtnWithIcon=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button>\n  ${args.default} <gcds-icon name="${args.iconName}"></gcds-icon>\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton>\n  ${args.default} <GcdsIcon name="${args.iconName}"></GcdsIcon>\n</GcdsButton>\n`.replace(/ null/g,"")).bind({});BtnWithIcon.args={default:"Close ",iconName:"times"};const Props=(args=>`\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${"button"!=args.type?`type="${args.type}"`:null} ${"primary"!=args.buttonRole?`button-role="${args.buttonRole}"`:null} ${"solid"!=args.buttonStyle?`button-style="${args.buttonStyle}"`:null} ${args.buttonId?`button-id="${args.buttonId}"`:null} ${"regular"!=args.size?`size="${args.size}"`:null} ${args.disabled?"disabled":null} ${args.name?`name="${args.name}"`:null} ${"link"==args.type&&args.href?`href="${args.href}"`:null} ${"link"==args.type&&args.rel?`rel="${args.rel}"`:null} ${"link"==args.type&&args.target?`target="${args.target}"`:null} ${"link"==args.type&&args.download?`download="${args.download}"`:null}>\n  ${args.default}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${"button"!=args.type?`type="${args.type}"`:null} ${"primary"!=args.buttonRole?`buttonRole="${args.buttonRole}"`:null} ${"solid"!=args.buttonStyle?`buttonStyle="${args.buttonStyle}"`:null} ${args.buttonId?`buttonId="${args.buttonId}"`:null} ${"regular"!=args.size?`size="${args.size}"`:null} ${args.disabled?"disabled":null} ${args.name?`name="${args.name}"`:null} ${"link"==args.type&&args.href?`href="${args.href}"`:null} ${"link"==args.type&&args.rel?`rel="${args.rel}"`:null} ${"link"==args.type&&args.target?`target="${args.target}"`:null} ${"link"==args.type&&args.download?`download="${args.download}"`:null}>\n  ${args.default}\n</GcdsButton>\n`.replace(/ null/g,"")).bind({});Props.args={type:"button",buttonRole:"primary",buttonStyle:"solid",buttonId:"",size:"regular",disabled:!1,name:"",href:"",rel:"",target:"",download:"",default:"Button label"};const Playground=(args=>`\n<gcds-button\n  ${"button"!=args.type?`type="${args.type}"`:null}\n  ${"primary"!=args.buttonRole?`button-role="${args.buttonRole}"`:null}\n  ${"solid"!=args.buttonStyle?`button-style="${args.buttonStyle}"`:null}\n  ${args.buttonId?`button-id="${args.buttonId}"`:null}\n  ${"regular"!=args.size?`size="${args.size}"`:null}\n  ${args.disabled?"disabled":null}\n  ${args.name?`name="${args.name}"`:null}\n  ${"link"==args.type&&args.href?`href="${args.href}"`:null}\n  ${"link"==args.type&&args.rel?`rel="${args.rel}"`:null}\n  ${"link"==args.type&&args.target?`target="${args.target}"`:null}\n  ${"link"==args.type&&args.download?`download="${args.download}"`:null}\n>\n  ${args.default}\n</gcds-button>\n`).bind({});Playground.args={type:"button",buttonRole:"primary",buttonStyle:"solid",buttonId:"",size:"regular",disabled:!1,name:"",href:"",rel:"",target:"",download:"",default:"Button label"},Preview.parameters={...Preview.parameters,docs:{...Preview.parameters?.docs,source:{originalSource:'() => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button>\n  Primary\n</gcds-button>\n<gcds-button button-role="secondary">\n  Secondary\n</gcds-button>\n<gcds-button button-role="danger">\n  Danger\n</gcds-button>\n<gcds-button button-role="skip-to-content">\n  Skip-to-content\n</gcds-button>\n<gcds-button button-style="text-only">\n  Text-only\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton>\n  Primary\n</GcdsButton>\n<GcdsButton buttonRole="secondary">\n  Secondary\n</GcdsButton>\n<GcdsButton buttonRole="danger">\n  Danger\n</GcdsButton>\n<GcdsButton buttonRole="skip-to-content">\n  Skip-to-content\n</GcdsButton>\n<GcdsButton buttonStyle="text-only">\n  Text-only\n</GcdsButton>\n`',...Preview.parameters?.docs?.source}}},PreviewTypes.parameters={...PreviewTypes.parameters,docs:{...PreviewTypes.parameters?.docs,source:{originalSource:'() => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button>\n  Button\n</gcds-button>\n<gcds-button type="link">\n  Link\n</gcds-button>\n<gcds-button type="reset">\n  Reset\n</gcds-button>\n<gcds-button type="submit">\n  Submit\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton>\n  Button\n</GcdsButton>\n<GcdsButton type="link">\n  Link\n</GcdsButton>\n<GcdsButton type="reset">\n  Reset\n</GcdsButton>\n<GcdsButton type="submit">\n  Submit\n</GcdsButton>\n`',...PreviewTypes.parameters?.docs?.source}}},PreviewStyles.parameters={...PreviewStyles.parameters,docs:{...PreviewStyles.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `button-style=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `button-style=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `buttonStyle=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `buttonStyle=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g, '')",...PreviewStyles.parameters?.docs?.source}}},PrimaryState.parameters={...PrimaryState.parameters,docs:{...PrimaryState.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `button-style=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `button-style=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `buttonStyle=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `buttonStyle=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g, '')",...PrimaryState.parameters?.docs?.source}}},PrimarySize.parameters={...PrimarySize.parameters,docs:{...PrimarySize.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `button-style=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `button-style=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `buttonStyle=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `buttonStyle=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g, '')",...PrimarySize.parameters?.docs?.source}}},SecondaryState.parameters={...SecondaryState.parameters,docs:{...SecondaryState.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `button-style=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `button-style=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `buttonStyle=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `buttonStyle=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g, '')",...SecondaryState.parameters?.docs?.source}}},SecondarySize.parameters={...SecondarySize.parameters,docs:{...SecondarySize.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `button-style=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `button-style=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `buttonStyle=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `buttonStyle=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g, '')",...SecondarySize.parameters?.docs?.source}}},DangerState.parameters={...DangerState.parameters,docs:{...DangerState.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `button-style=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `button-style=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `buttonStyle=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `buttonStyle=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g, '')",...DangerState.parameters?.docs?.source}}},DangerSize.parameters={...DangerSize.parameters,docs:{...DangerSize.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `button-style=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `button-style=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `buttonStyle=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `buttonStyle=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g, '')",...DangerSize.parameters?.docs?.source}}},SkipToContentState.parameters={...SkipToContentState.parameters,docs:{...SkipToContentState.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `button-style=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `button-style=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `buttonStyle=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `buttonStyle=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g, '')",...SkipToContentState.parameters?.docs?.source}}},SkipToContentSize.parameters={...SkipToContentSize.parameters,docs:{...SkipToContentSize.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `button-style=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `button-style=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `buttonStyle=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `buttonStyle=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g, '')",...SkipToContentSize.parameters?.docs?.source}}},TextOnlyState.parameters={...TextOnlyState.parameters,docs:{...TextOnlyState.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `button-style=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `button-style=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `buttonStyle=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `buttonStyle=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g, '')",...TextOnlyState.parameters?.docs?.source}}},TextOnlySize.parameters={...TextOnlySize.parameters,docs:{...TextOnlySize.parameters?.docs,source:{originalSource:"args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `button-style=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</gcds-button>\n<gcds-button ${args.buttonRole != 'primary' ? `button-role=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `button-style=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnOneStyle != 'solid' ? `buttonStyle=\"${args.btnOneStyle}\"` : null} ${args.btnOneSize != 'regular' ? `size=\"${args.btnOneSize}\"` : null} ${args.btnOneDisabled ? `disabled` : null}>\n  ${args.btnOneText}\n</GcdsButton>\n<GcdsButton ${args.buttonRole != 'primary' ? `buttonRole=\"${args.buttonRole}\"` : null} ${args.btnTwoStyle != 'solid' ? `buttonStyle=\"${args.btnTwoStyle}\"` : null} ${args.btnTwoSize != 'regular' ? `size=\"${args.btnTwoSize}\"` : null} ${args.btnTwoDisabled ? `disabled` : null}>\n  ${args.btnTwoText}\n</GcdsButton>\n`.replace(/ null/g, '')",...TextOnlySize.parameters?.docs?.source}}},BtnWithIcon.parameters={...BtnWithIcon.parameters,docs:{...BtnWithIcon.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button>\n  ${args.default} <gcds-icon name="${args.iconName}"></gcds-icon>\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton>\n  ${args.default} <GcdsIcon name="${args.iconName}"></GcdsIcon>\n</GcdsButton>\n`.replace(/ null/g, \'\')',...BtnWithIcon.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (Angular, Vue) --\x3e\n<gcds-button ${args.type != \'button\' ? `type="${args.type}"` : null} ${args.buttonRole != \'primary\' ? `button-role="${args.buttonRole}"` : null} ${args.buttonStyle != \'solid\' ? `button-style="${args.buttonStyle}"` : null} ${args.buttonId ? `button-id="${args.buttonId}"` : null} ${args.size != \'regular\' ? `size="${args.size}"` : null} ${args.disabled ? `disabled` : null} ${args.name ? `name="${args.name}"` : null} ${args.type == \'link\' && args.href ? `href="${args.href}"` : null} ${args.type == \'link\' && args.rel ? `rel="${args.rel}"` : null} ${args.type == \'link\' && args.target ? `target="${args.target}"` : null} ${args.type == \'link\' && args.download ? `download="${args.download}"` : null}>\n  ${args.default}\n</gcds-button>\n\n\x3c!-- React code --\x3e\n<GcdsButton ${args.type != \'button\' ? `type="${args.type}"` : null} ${args.buttonRole != \'primary\' ? `buttonRole="${args.buttonRole}"` : null} ${args.buttonStyle != \'solid\' ? `buttonStyle="${args.buttonStyle}"` : null} ${args.buttonId ? `buttonId="${args.buttonId}"` : null} ${args.size != \'regular\' ? `size="${args.size}"` : null} ${args.disabled ? `disabled` : null} ${args.name ? `name="${args.name}"` : null} ${args.type == \'link\' && args.href ? `href="${args.href}"` : null} ${args.type == \'link\' && args.rel ? `rel="${args.rel}"` : null} ${args.type == \'link\' && args.target ? `target="${args.target}"` : null} ${args.type == \'link\' && args.download ? `download="${args.download}"` : null}>\n  ${args.default}\n</GcdsButton>\n`.replace(/ null/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-button\n  ${args.type != \'button\' ? `type="${args.type}"` : null}\n  ${args.buttonRole != \'primary\' ? `button-role="${args.buttonRole}"` : null}\n  ${args.buttonStyle != \'solid\' ? `button-style="${args.buttonStyle}"` : null}\n  ${args.buttonId ? `button-id="${args.buttonId}"` : null}\n  ${args.size != \'regular\' ? `size="${args.size}"` : null}\n  ${args.disabled ? `disabled` : null}\n  ${args.name ? `name="${args.name}"` : null}\n  ${args.type == \'link\' && args.href ? `href="${args.href}"` : null}\n  ${args.type == \'link\' && args.rel ? `rel="${args.rel}"` : null}\n  ${args.type == \'link\' && args.target ? `target="${args.target}"` : null}\n  ${args.type == \'link\' && args.download ? `download="${args.download}"` : null}\n>\n  ${args.default}\n</gcds-button>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Preview","PreviewTypes","PreviewStyles","PrimaryState","PrimarySize","SecondaryState","SecondarySize","DangerState","DangerSize","SkipToContentState","SkipToContentSize","TextOnlyState","TextOnlySize","BtnWithIcon","Props","Playground"]}}]);