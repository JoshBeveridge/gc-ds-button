(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./dist/esm-es5/gcds.js.map":function(module,exports){throw new Error('Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {"version":3,"names":["patchBrowser","importMeta","url","opts","resourcesUrl","URL","href","promiseResolve","then","options","bootstrapLazy","uploaderId","label","required","disabled","value","accept","multiple","errorMessage","hint","validator","validateOn","changeHandler","focusHandler","blurHandler","hasError","inheritedAttributes","lang","validate","langHref","signatureVariant","signatureHasLink","skipToHref","checkboxId","name","checked","clickHandler","parentError","hideLabel","inputId","size","type","autocomplete","selectId","defaultValue","characterCount","cols","rows","textareaId","alertRole","container","dismissHandler","heading","hideCloseBtn","hideRoleIcon","isFixed","isOpen","fieldsetId","legend","radioId","desktopLayout","mobileLayout","alignment","position","hideCanadaLink","display","wordmarkVariant","contextualHeading","contextualLinks","subLinks","previousHref","previousLabel","nextHref","nextLabel","totalPages","currentPage","pageChangeHandler","currentStep","bannerRole","detailsTitle","open","subHeading","listen","errorLinks","errorQueue","hasSubmitted","totalSteps","columns","columnsTablet","columnsDesktop","centered","gap","tag","alignContent","justifyContent","placeContent","alignItems","justifyItems","placeItems","buttonRole","buttonStyle","buttonId","rel","target","download","focusElement","variant","hasLink","messageId","message","iconStyle","marginLeft","marginRight","fixedWidth","labelFor","hintId"],"sources":["node_modules/@stencil/core/internal/client/patch-browser.js","@lazy-browser-entrypoint?app-data=conditional"],"sourcesContent":["/*\\n Stencil Client Patch Browser v3.2.2 | MIT Licensed | https://stenciljs.com\\n */\\nimport { BUILD, NAMESPACE } from \'@stencil/core/internal/app-data\';\\nimport { consoleDevInfo, plt, win, doc, promiseResolve, H } from \'@stencil/core\';\\n/**\\n * Helper method for querying a `meta` tag that contains a nonce value\\n * out of a DOM\'s head.\\n *\\n * @param doc The DOM containing the `head` to query against\\n * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag\\n * exists or the tag has no content.\\n */\\nfunction queryNonceMetaTagContent(doc) {\\n    var _a, _b, _c;\\n    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector(\'meta[name=\\"csp-nonce\\"]\')) === null || _b === void 0 ? void 0 : _b.getAttribute(\'content\')) !== null && _c !== void 0 ? _c : undefined;\\n}\\n// TODO(STENCIL-661): Remove code related to the dynamic import shim\\nconst getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\\\\s|-/g, \'_\')}`;\\nconst patchBrowser = () => {\\n    // NOTE!! This fn cannot use async/await!\\n    if (BUILD.isDev && !BUILD.isTesting) {\\n        consoleDevInfo(\'Running in development mode.\');\\n    }\\n    // TODO(STENCIL-659): Remove code implementing the CSS variable shim\\n    if (BUILD.cssVarShim) {\\n        // shim css vars\\n        // TODO(STENCIL-659): Remove code implementing the CSS variable shim\\n        plt.$cssShim$ = win.__cssshim;\\n    }\\n    if (BUILD.cloneNodeFix) {\\n        // opted-in to polyfill cloneNode() for slot polyfilled components\\n        patchCloneNodeFix(H.prototype);\\n    }\\n    if (BUILD.profile && !performance.mark) {\\n        // not all browsers support performance.mark/measure (Safari 10)\\n        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,\\n        // simply stub the implementations out.\\n        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)\\n        // @ts-ignore\\n        performance.mark = performance.measure = () => {\\n            /*noop*/\\n        };\\n        performance.getEntriesByName = () => [];\\n    }\\n    // @ts-ignore\\n    const scriptElm = \\n    // TODO(STENCIL-661): Remove code related to the dynamic import shim\\n    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.\\n    BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim\\n        ? Array.from(doc.querySelectorAll(\'script\')).find((s) => new RegExp(`\\\\/${NAMESPACE}(\\\\\\\\.esm)?\\\\\\\\.js($|\\\\\\\\?|#)`).test(s.src) ||\\n            s.getAttribute(\'data-stencil-namespace\') === NAMESPACE)\\n        : null;\\n    const importMeta = import.meta.url;\\n    const opts = BUILD.scriptDataOpts ? (scriptElm || {})[\'data-opts\'] || {} : {};\\n    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.\\n    if (BUILD.safari10 && \'onbeforeload\' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {\\n        // Safari < v11 support: This IF is true if it\'s Safari below v11.\\n        // This fn cannot use async/await since Safari didn\'t support it until v11,\\n        // however, Safari 10 did support modules. Safari 10 also didn\'t support \\"nomodule\\",\\n        // so both the ESM file and nomodule file would get downloaded. Only Safari\\n        // has \'onbeforeload\' in the script, and \\"history.scrollRestoration\\" was added\\n        // to Safari in v11. Return a noop then() so the async/await ESM code doesn\'t continue.\\n        // IS_ESM_BUILD is replaced at build time so this check doesn\'t happen in systemjs builds.\\n        return {\\n            then() {\\n                /* promise noop */\\n            },\\n        };\\n    }\\n    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.\\n    if (!BUILD.safari10 && importMeta !== \'\') {\\n        opts.resourcesUrl = new URL(\'.\', importMeta).href;\\n        // TODO(STENCIL-661): Remove code related to the dynamic import shim\\n        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.\\n    }\\n    else if (BUILD.dynamicImportShim || BUILD.safari10) {\\n        opts.resourcesUrl = new URL(\'.\', new URL(scriptElm.getAttribute(\'data-resources-url\') || scriptElm.src, win.location.href)).href;\\n        // TODO(STENCIL-661): Remove code related to the dynamic import shim\\n        if (BUILD.dynamicImportShim) {\\n            patchDynamicImport(opts.resourcesUrl, scriptElm);\\n        }\\n        // TODO(STENCIL-661): Remove code related to the dynamic import shim\\n        if (BUILD.dynamicImportShim && !win.customElements) {\\n            // module support, but no custom elements support (Old Edge)\\n            // @ts-ignore\\n            return import(/* webpackChunkName: \\"polyfills-dom\\" */ \'./dom.js\').then(() => opts);\\n        }\\n    }\\n    return promiseResolve(opts);\\n};\\n// TODO(STENCIL-661): Remove code related to the dynamic import shim\\nconst patchDynamicImport = (base, orgScriptElm) => {\\n    const importFunctionName = getDynamicImportFunction(NAMESPACE);\\n    try {\\n        // test if this browser supports dynamic imports\\n        // There is a caching issue in V8, that breaks using import() in Function\\n        // By generating a random string, we can workaround it\\n        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info\\n        win[importFunctionName] = new Function(\'w\', `return import(w);//${Math.random()}`);\\n    }\\n    catch (e) {\\n        // this shim is specifically for browsers that do support \\"esm\\" imports\\n        // however, they do NOT support \\"dynamic\\" imports\\n        // basically this code is for old Edge, v18 and below\\n        const moduleMap = new Map();\\n        win[importFunctionName] = (src) => {\\n            var _a;\\n            const url = new URL(src, base).href;\\n            let mod = moduleMap.get(url);\\n            if (!mod) {\\n                const script = doc.createElement(\'script\');\\n                script.type = \'module\';\\n                script.crossOrigin = orgScriptElm.crossOrigin;\\n                script.src = URL.createObjectURL(new Blob([`import * as m from \'${url}\'; window.${importFunctionName}.m = m;`], {\\n                    type: \'application/javascript\',\\n                }));\\n                // Apply CSP nonce to the script tag if it exists\\n                const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);\\n                if (nonce != null) {\\n                    script.setAttribute(\'nonce\', nonce);\\n                }\\n                mod = new Promise((resolve) => {\\n                    script.onload = () => {\\n                        resolve(win[importFunctionName].m);\\n                        script.remove();\\n                    };\\n                });\\n                moduleMap.set(url, mod);\\n                doc.head.appendChild(script);\\n            }\\n            return mod;\\n        };\\n    }\\n};\\nconst patchCloneNodeFix = (HTMLElementPrototype) => {\\n    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;\\n    HTMLElementPrototype.cloneNode = function (deep) {\\n        if (this.nodeName === \'TEMPLATE\') {\\n            return nativeCloneNodeFn.call(this, deep);\\n        }\\n        const clonedNode = nativeCloneNodeFn.call(this, false);\\n        const srcChildNodes = this.childNodes;\\n        if (deep) {\\n            for (let i = 0; i < srcChildNodes.length; i++) {\\n                // Node.ATTRIBUTE_NODE === 2, and checking because IE11\\n                if (srcChildNodes[i].nodeType !== 2) {\\n                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));\\n                }\\n            }\\n        }\\n        return clonedNode;\\n    };\\n};\\nexport { patchBrowser };\\n","export { setNonce } from \'@stencil/core\';\\nimport { bootstrapLazy } from \'@stencil/core\';\\nimport { patchBrowser } from \'@stencil/core/internal/client/patch-browser\';\\nimport { globalScripts } from \'@stencil/core/internal/app-globals\';\\npatchBrowser().then(options => {\\n  globalScripts();\\n  return bootstrapLazy([/*!__STENCIL_LAZY_DATA__*/], options);\\n});\\n"],"mappings":"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"}')}}]);