import { Component, Element, Host, Prop, State, Method, Event, EventEmitter, h } from '@stencil/core';
import { assignLanguage, observerConfig } from '../../utils/utils';

@Component({
  tag: 'gcds-menu-group',
  styleUrl: 'gcds-menu-group.css',
  shadow: true,
})
export class GcdsMenuGroup {
  @Element() el: HTMLElement;

  private triggerElement?: HTMLElement;

  /**
   * Heading for the menu group, labels the button trigger
   */
  @Prop({ reflect: true }) heading!: string;

  /**
   * Has the menu group been expanded
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;

  /**
   * Emitted when the button has focus.
   */
  @Event() gcdsClick!: EventEmitter<void>;

  /**
  * Language of rendered component
  */
  @State() lang: string;

  /**
  * Style of menu to render based on parent
  */
  @State() menuStyle: string;

  /**
  * Focus button element
  */
  @Method()
  async focusTrigger() {
    this.triggerElement.focus();
  }

  /**
  * Toggle the menu open or closed
  */
  @Method()
  async toggleMenu() {
    this.open = !this.open

    // Close any child menu-groups
    for (let i = 0; i < this.el.children.length; i++) {
      if (this.el.children[i].nodeName == "GCDS-MENU-GROUP" && (this.el.children[i].hasAttribute("open"))) {
        (this.el.children[i] as HTMLGcdsMenuGroupElement).toggleMenu();
      }
    }
  }

  /*
  * Observe lang attribute change
  */
  updateLang() {
    const observer = new MutationObserver((mutations) => {
      if (mutations[0].oldValue != this.el.lang) {
        this.lang = this.el.lang;
      }
    });
    observer.observe(this.el, observerConfig);
  }

  async componentWillLoad() {
    // Define lang attribute
    this.lang = assignLanguage(this.el);

    this.updateLang();

    if (this.el.parentNode.nodeName == "GCDS-SITE-MENU") {
        this.menuStyle = "dropdown"
    } else {
        this.menuStyle = "expandable"
    }

    if (this.el.parentNode.nodeName == "GCDS-MENU-GROUP" && !(this.el.parentNode as HTMLElement).classList.contains("gcds-mobile-menu") && this.el.closest("gcds-site-menu")) {
      this.el.remove();
    }
  }

  render() {
    const { heading, open } = this;
    return (
      <Host
        role="presentation"
        open={open}
      >
        <button
          aria-haspopup="true"
          aria-expanded={open.toString()}
          role="menuitem"
          ref={element => this.triggerElement = element as HTMLElement}
          class={`gcds-menu-group__trigger gcds-trigger--${this.menuStyle}`}
          onClick={() => {
            this.toggleMenu();
            this.gcdsClick.emit();
          }}
        >
          {heading}
        </button>
        <ul
          role="menu"
          class={`gcds-menu-group__list gcds-menu--${this.menuStyle}`}
        >
          <slot></slot>
        </ul>
      </Host>
    );
  }

}