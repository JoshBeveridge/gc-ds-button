"use strict";(self.webpackChunk_cdssnc_gcds_components=self.webpackChunk_cdssnc_gcds_components||[]).push([[2601],{"./src/components/gcds-heading/stories/gcds-heading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LevelH1:()=>LevelH1,LevelH2:()=>LevelH2,LevelH3:()=>LevelH3,LevelH4:()=>LevelH4,LevelH5:()=>LevelH5,LevelH6:()=>LevelH6,Playground:()=>Playground,Props:()=>Props,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Heading",argTypes:{tag:{control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"],table:{type:{summary:"string"},defaultValue:{summary:"-"}},type:{required:!0}},characterLimit:{name:"character-limit",control:{type:"select"},options:[!1,!0],table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},marginTop:{name:"margin-top",control:{type:"select"},options:["0","25","50","75","100","125","150","175","200","225","250","300","350","400","450","500","550","600","650","700","750","800","850","900","950","1000","1050","1100","1150","1200","1250"],table:{type:{summary:"string"},defaultValue:{summary:"h1: 0, h2-h6: 600"}}},marginBottom:{name:"margin-bottom",control:{type:"select"},options:["0","25","50","75","100","125","150","175","200","225","250","300","350","400","450","500","550","600","650","700","750","800","850","900","950","1000","1050","1100","1150","1200","1250"],table:{type:{summary:"string"},defaultValue:{summary:"300"}}},default:{control:{type:"text"},description:"Customize the content or include additional elements. | Personnalisez le contenu ou ajoutez des éléments supplémentaires.",table:{category:"Slots | Fentes"}}}},Template=args=>`\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${args.characterLimit?null:`character-limit="${args.characterLimit}"`} ${args.marginTop?`margin-top="${args.marginTop}"`:null} ${args.marginBottom?`margin-bottom="${args.marginBottom}"`:null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${args.characterLimit?null:`characterLimit="${args.characterLimit}"`} ${args.marginTop?`marginTop="${args.marginTop}"`:null} ${args.marginBottom?`marginBottom="${args.marginBottom}"`:null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g,""),Default=Template.bind({});Default.args={tag:"h2",characterLimit:!0,default:"Heading"};const LevelH1=Template.bind({});LevelH1.args={tag:"h1",characterLimit:!0,default:"Heading level 1"};const LevelH2=Template.bind({});LevelH2.args={tag:"h2",characterLimit:!0,default:"Heading level 2"};const LevelH3=Template.bind({});LevelH3.args={tag:"h3",characterLimit:!0,default:"Heading level 3"};const LevelH4=Template.bind({});LevelH4.args={tag:"h4",characterLimit:!0,default:"Heading level 4"};const LevelH5=Template.bind({});LevelH5.args={tag:"h5",characterLimit:!0,default:"Heading level 5"};const LevelH6=Template.bind({});LevelH6.args={tag:"h6",characterLimit:!0,default:"Heading level 6"};const Props=Template.bind({});Props.args={tag:"h2",characterLimit:!0,default:"Heading"};const Playground=(args=>`\n<gcds-heading\n  tag="${args.tag}"\n  ${args.marginTop?`margin-top="${args.marginTop}"`:null}\n  ${args.marginBottom?`margin-bottom="${args.marginBottom}"`:null}\n>\n  ${args.default}\n</gcds-heading>\n`).bind({});Playground.args={tag:"h2",characterLimit:!0,default:"Heading"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...Default.parameters?.docs?.source}}},LevelH1.parameters={...LevelH1.parameters,docs:{...LevelH1.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH1.parameters?.docs?.source}}},LevelH2.parameters={...LevelH2.parameters,docs:{...LevelH2.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH2.parameters?.docs?.source}}},LevelH3.parameters={...LevelH3.parameters,docs:{...LevelH3.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH3.parameters?.docs?.source}}},LevelH4.parameters={...LevelH4.parameters,docs:{...LevelH4.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH4.parameters?.docs?.source}}},LevelH5.parameters={...LevelH5.parameters,docs:{...LevelH5.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH5.parameters?.docs?.source}}},LevelH6.parameters={...LevelH6.parameters,docs:{...LevelH6.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...LevelH6.parameters?.docs?.source}}},Props.parameters={...Props.parameters,docs:{...Props.parameters?.docs,source:{originalSource:'args => `\n\x3c!-- Web component code (HTML, Angular, Vue) --\x3e\n<gcds-heading tag="${args.tag}" ${!args.characterLimit ? `character-limit="${args.characterLimit}"` : null} ${args.marginTop ? `margin-top="${args.marginTop}"` : null} ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</gcds-heading>\n\n\x3c!-- React code --\x3e\n<GcdsHeading tag="${args.tag}" ${!args.characterLimit ? `characterLimit="${args.characterLimit}"` : null} ${args.marginTop ? `marginTop="${args.marginTop}"` : null} ${args.marginBottom ? `marginBottom="${args.marginBottom}"` : null}>\n  ${args.default}\n</GcdsHeading>\n`.replace(/ null/g, \'\')',...Props.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'args => `\n<gcds-heading\n  tag="${args.tag}"\n  ${args.marginTop ? `margin-top="${args.marginTop}"` : null}\n  ${args.marginBottom ? `margin-bottom="${args.marginBottom}"` : null}\n>\n  ${args.default}\n</gcds-heading>\n`',...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Default","LevelH1","LevelH2","LevelH3","LevelH4","LevelH5","LevelH6","Props","Playground"]}}]);