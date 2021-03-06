/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MdButton {
        "circle": boolean;
        "icon": any;
        "shadow": "inner" | "outer";
        "size": "small" | "medium" | "large";
        "theme": "light" | "dark";
    }
    interface MdNav {
        "theme": "light" | "dark";
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLMdButtonElement extends Components.MdButton, HTMLStencilElement {
    }
    var HTMLMdButtonElement: {
        prototype: HTMLMdButtonElement;
        new (): HTMLMdButtonElement;
    };
    interface HTMLMdNavElement extends Components.MdNav, HTMLStencilElement {
    }
    var HTMLMdNavElement: {
        prototype: HTMLMdNavElement;
        new (): HTMLMdNavElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "md-button": HTMLMdButtonElement;
        "md-nav": HTMLMdNavElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MdButton {
        "circle"?: boolean;
        "icon"?: any;
        "shadow"?: "inner" | "outer";
        "size"?: "small" | "medium" | "large";
        "theme"?: "light" | "dark";
    }
    interface MdNav {
        "theme"?: "light" | "dark";
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "md-button": MdButton;
        "md-nav": MdNav;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "md-button": LocalJSX.MdButton & JSXBase.HTMLAttributes<HTMLMdButtonElement>;
            "md-nav": LocalJSX.MdNav & JSXBase.HTMLAttributes<HTMLMdNavElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
