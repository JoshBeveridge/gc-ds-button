import { Component, Element, Host, Prop, Watch, h } from '@stencil/core';
import { assignLanguage } from '../../utils/utils';
import {
  h2MenuAddUpDownArrowsToMainMenuItems,
  h2MenuTabOrder,
  h2MenuAddRightArrowToMainMenuItems,
  h2MenuEnableSubmenuTriggers,
  h2MenuAddMobileMenuTrigger,
  h2MenuAddPageAnchor
} from "./utils/module.min";

import I18N from './i18n/i18n';

@Component({
  tag: 'gcds-site-menu',
  styleUrl: 'gcds-site-menu.css',
  shadow: true,
})
export class GcdsSiteMenu {

  private lang: string;

  @Element() el: HTMLElement;

  /**
   * Desktop layout
   */
  @Prop({ mutable: true }) menuDesktopLayout!: 'topbar' | 'sidebar';

  @Watch('menuDesktopLayout')
  validateDesktopLayout(newValue: string) {
    if (newValue != 'topbar' && newValue != 'sidebar') {
      this.menuDesktopLayout = 'topbar';
    }
  }

  /**
   * Mobile layout
   */
  @Prop({ mutable: true }) menuMobileLayout!: 'drawer'; // | 'toolbar';

  @Watch('menuDesktopLayout')
  validateMobileLayout(newValue: string) {
    if (newValue != 'drawer' && newValue != 'toolbar') {
      this.menuMobileLayout = 'drawer';
    }
  }

  /**
   * Menu alignment
   */
  @Prop() menuAlignment: 'left' | 'center' | 'right' | 'split' = 'left';

  /**
   * Sticky navigation flag
   */
  @Prop() menuPosition: 'static' | 'sticky' = 'static';

  /**
   * Method to apply multiple attriibutes to an element
   * @param el - HTML element
   * @param attrs - Object of attributes and values
   */

  private setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  /**
   * Method to apply sub menu trigger button
   * @param el - <a> tag
   */
  private appendSubMenuButton(el) {
    // Create button element
    var button = document.createElement("button");
    this.setAttributes(button, {"aria-expanded": "false", "data-h2-submenu-trigger": ""});

    // Create the accessibility text span
    var a11yText = document.createElement("span");
    //a11yText.innerHTML = `Open or close ${el.textContent}'s submenu.`;
    a11yText.innerHTML = I18N[this.lang].submenuButtonText.replace('{$t}', el.textContent);
    a11yText.setAttribute("data-h2-submenu-trigger-accessibility-text", "");

    // Create the add icon span
    var addIcon = document.createElement("span");
    this.setAttributes(addIcon, {"aria-hidden": "true", "data-h2-submenu-trigger-add-icon": ""});
    addIcon.innerHTML = `
      <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.246399 1.38667L4.85966 5.99993L0.246399 10.6132L1.63321 12L7.63314 6.00007L1.63321 0.000137329L0.246399 1.38667Z" />
      </svg>
    `;

    // Create the remove icon span
    var removeIcon = document.createElement("span");
    this.setAttributes(removeIcon, {"aria-hidden": "true", "data-h2-submenu-trigger-remove-icon": ""});
    removeIcon.innerHTML = `
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.63306 10.6135L3.0198 6.00021L7.63306 1.38695L6.24624 0.000139115L0.246312 6.00007L6.24624 12L7.63306 10.6135Z" />
    </svg>
  `;

    // Put it all together and append button to page
    button.append(a11yText, addIcon, removeIcon);
    el.parentNode.append(button);
  }

  private async configureMenu() {
    var mainMenus = [];
    var elementChildren = this.el.children;
    // Loop through slotted elements
    for (var i = 0; i < elementChildren.length; i++) {
      // Grab menus
      if (elementChildren[i].nodeName == "UL") {
        var mainMenus = mainMenus.concat(elementChildren[i]);
      }
    }

    // Assign values to menus and child elements
    for (var i = 0; i < mainMenus.length; i++) {
      // Apply attributes at the highest level
      this.setAttributes(mainMenus[i], {"data-h2-menulist": "", "role": "menu"});
      // Apply attributes to any submenu ul
      mainMenus[i].querySelectorAll("ul").forEach((list) => {
        this.setAttributes(list, {"data-h2-menulist": "", "role": "menu"});
      });
      // Apply attributes to all li
      mainMenus[i].querySelectorAll("li").forEach((listitem) => {
        listitem.setAttribute("role", "presentation");
        for (var x = 0; x < listitem.children.length; x++) {
          if(listitem.children[x].nodeName == "A") {
            this.setAttributes(listitem.children[x], {"role": "menuitem"})
          } else if (listitem.children[x].nodeName != "BUTTON" && listitem.children[x].nodeName != "UL" ) {
            this.setAttributes(listitem.children[x], {"role": "menuitem", "tabindex": "-1" });
          }
        }
      });
      // Loop through each menuitem tag
      mainMenus[i].querySelectorAll("[role=menuitem]").forEach((menuitem) => {
        // Apply role attribute
        //menuitem.setAttribute("role", "menuitem");
        // Check if a tag has siblings
        if (menuitem.parentNode.children.length > 1) {
          // Apply attributes for sub menus
          this.setAttributes(menuitem, {"aria-expanded": "false", "aria-haspopup": "true"});
          // Append sub menu button trigger
          this.appendSubMenuButton(menuitem);
          if (menuitem.closest("ul").parentNode.nodeName == "li") {
            menuitem.setAttribute("tabindex", "-1");
          }
        }
      });
    }
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.validateDesktopLayout(this.menuDesktopLayout);
    this.validateMobileLayout(this.menuMobileLayout);


    // Add required attributes to slotted <ul>
    await this.configureMenu();

  }

  componentDidLoad() {
    var menus = [];
    // Add ULs to shadow DOM
    var elementChildren = this.el.children;
    // Loop through slotted elements
    for (var i = 0; i < elementChildren.length; i++) {
      // Act only on ul
      if (elementChildren[i].nodeName == "UL") {
        menus = menus.concat(elementChildren[i]);
      }
    }

    for (var i = 0; i < menus.length; i++) {
      var container = this.el.shadowRoot.querySelector("[data-h2-menu-container]");
      container.insertBefore(menus[i], container.querySelector('[data-optional-right]'));
    }

    var hostElement = this.el;
    var mobileLayout = this.menuMobileLayout;
    const mediaQuery = window.matchMedia('screen and (min-width: 64em)');

    // Check if loaded in mobile size
    if (!mediaQuery.matches) {
      document.querySelector("body").style.paddingBottom = "3rem";
      hostElement.shadowRoot.querySelector("[data-h2-menu-container]").setAttribute("data-mobile", "");
    }

    // Register event listener
    mediaQuery.addEventListener("change", function(e){
      if (e.matches) {

        // Set mobile menu to default if window size changes to desktop
        var elementNav = hostElement.shadowRoot.querySelector('nav');
        var mobileTrigger = hostElement.shadowRoot.querySelector('[data-h2-mobile-menu-trigger]');
        if (elementNav.classList.contains("h2-mobile-menu-active")) {
          elementNav.classList.remove("h2-mobile-menu-active");
          mobileTrigger.classList.remove("h2-active");
          mobileTrigger.setAttribute("aria-expanded", "false");
          document.body.style.removeProperty("overflow");
        }

        if (mobileLayout == "drawer") {
          document.querySelector("body").style.removeProperty("padding-bottom");
        }

        hostElement.shadowRoot.querySelector("[data-h2-menu-container]").removeAttribute("data-mobile");

      } else {
        if (mobileLayout == "drawer") {
          document.querySelector("body").style.paddingBottom = "3rem";
        }

        hostElement.shadowRoot.querySelector("[data-h2-menu-container]").setAttribute("data-mobile", "");
      }
    });

    h2MenuAddUpDownArrowsToMainMenuItems(this.el);
    h2MenuTabOrder(this.el);
    h2MenuAddRightArrowToMainMenuItems(this.el);
    h2MenuEnableSubmenuTriggers(this.el);
    h2MenuAddMobileMenuTrigger(this.el);
    h2MenuAddPageAnchor(this.el);
  }

  render() {
    const sticky = this.menuPosition == 'sticky' ? true : false;
    const mobileMenutask = this.menuMobileLayout == 'drawer' ?
      <gcds-button
        aria-expanded="false"
        aria-label={I18N[this.lang].mobileTriggerLabel}
        aria-haspopup="true"
        data-h2-mobile-menu-trigger
        button-type="button" role="button" button-role="primary">
        <span data-h2-mobile-menu-trigger-open-label>Menu</span><span data-h2-mobile-menu-trigger-close-label>{I18N[this.lang].mobileTriggerClose}</span>
      </gcds-button>
      :
      '';

    return (
      <Host
        data-h2-menu-wrapper
        menu-desktop-layout={this.menuDesktopLayout}
        menu-mobile-layout={this.menuMobileLayout}
        menu-sticky={sticky}
        lang={this.lang}
      >
        {mobileMenutask}
        <nav
          aria-label={I18N[this.lang].navLabel}
          data-h2-menu
        >
          <div data-h2-menu-container>
            <div data-optional-left>
              <slot name="left" />
            </div>
            <slot />
            <div data-optional-right>
              <slot name="right" />
            </div>
          </div>
        </nav>
        <slot name="main" />
      </Host>
    );
  }
}