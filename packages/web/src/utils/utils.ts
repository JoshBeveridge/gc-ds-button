import { EventEmitter } from '@stencil/core';

export function format(label: string): string {
  return label ? ` ${label}` : 'Fallback Button Label';
}

export const inheritAttributes = (
  el: HTMLElement,
  shadowElement: HTMLElement,
  attributes: string[] = [],
) => {
  const attributeObject = {};

  // Check for any aria or data attributes
  for (let i = 0; i < el.attributes.length; i++) {
    const attr = el.attributes[i];
    if (attr.name.includes('aria-')) {
      attributeObject[attr.name] = attr.value;
      el.removeAttribute(attr.name);
    }
  }

  // Check for attributes defined by component
  attributes.forEach(attr => {
    if (
      el.hasAttribute(attr) ||
      (shadowElement && shadowElement.hasAttribute(attr))
    ) {
      const value = el.getAttribute(attr) || shadowElement.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] =
          el.getAttribute(attr) || shadowElement.getAttribute(attr);
      }
      el.removeAttribute(attr);
    }
  });

  return attributeObject;
};

export const assignLanguage = (el: HTMLElement) => {
  let lang = '';
  if (!el.getAttribute('lang')) {
    const closestLangAttribute = closestElement('[lang]', el)?.getAttribute(
      'lang',
    );
    if (closestLangAttribute == 'en' || !closestLangAttribute) {
      lang = 'en';
    } else {
      lang = 'fr';
    }
  } else if (el.getAttribute('lang') == 'en') {
    lang = 'en';
  } else {
    lang = 'fr';
  }

  return lang;
};

// Allows use of closest() function across shadow boundaries
const closestElement = (selector, el) => {
  if (el) {
    return (
      (el && el != document && el != window && el.closest(selector)) ||
      closestElement(selector, el.getRootNode().host)
    );
  }

  return null;
};

export const observerConfig = {
  attributes: true,
  attributeOldValue: true,
  attributeFilter: ['lang'],
};

// For validation - check if element has a checked checkbox/radio sibling
export const elementGroupCheck = name => {
  let hasCheck = false;
  const element = document.querySelectorAll<HTMLFormElement>(
    `input[name=${name}]`,
  );
  for (let i = 0; i < element.length; i++) {
    if (element[i].checked) {
      hasCheck = true;
    }
  }
  return !hasCheck;
};

// Emit event with logic to cancel HTML events
// Returns false if event has been prevented
export const emitEvent = (
  e: Event,
  customEvent: EventEmitter,
  value?: unknown,
) => {
  const event = customEvent.emit(value);

  // Was the custom or native event interrupted
  if (event.defaultPrevented || e.defaultPrevented) {
    // Stop native HTML event in shadow-dom
    e.preventDefault();
    return false;
  }

  return true;
};

/* Log validation error for required properties in components
 * @param name - name of the component i.e. <gcds-*>
 * @param errorArr - array of attributes with errors
 * @param optionalAttrsArrToRemove - array of optional attributes with errors to be removed from this error message
 */
export const logError = (
  name: string,
  errorArr: string[],
  optionalAttrsArrToRemove?: string[]
) => {
  let engMsg = 'Render error, please check required properties.';
  let frMsg = 'Erreur de rendu, veuillez vérifier les propriétés requises.';
  let errors = [...errorArr];

  // remove any potential optional attributes from errors array
  if (optionalAttrsArrToRemove && optionalAttrsArrToRemove.length > 0) {
    for (const optionalAttr of optionalAttrsArrToRemove) {
      if (errors.includes(optionalAttr)) {
        errors.splice(errors.indexOf(optionalAttr), 1);
      }
    }
  }

  console.error(`${name}: ${engMsg} (${errors}) | ${name}: ${frMsg} (${errors})`);
};
