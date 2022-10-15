import { css } from 'lit';

export default css`
  :host {
    /*display: inline-block;*/
  }

  .button {
    --button-height: 44px;
    --button-padding: var(--v-spacing-6);
    display: inline-block;
  }

  @media (min-width: 768px) {
    .button {
      --button-height: 48px;
    }
  }

  ::slotted(a),
  .buttontag {
    background-color: var(--button-background-color);
    height: var(--button-height);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--button-color);
    padding: 0 var(--button-padding) 0 var(--button-padding);
    border-radius: var(--v-border-radius-2);
    font-size: var(--v-typography-font-paragraph-2);
    font-family: var(--v-content-font-family-base), sans-serif;
    transition: all ease-in-out 0.4s;
  }

  ::slotted(a:hover),
  .buttontag:not([disabled]):hover {
    background-color: var(--button-hover-background-color);
    color: var(--button-hover-color);
  }

  ::slotted(a) {
    text-decoration: none;
  }

  .buttontag {
    border: none;
  }

  .buttontag:not([disabled]):hover {
    border: none;
    cursor: pointer;
  }

  :host(.v-inverse) .button {
    --button-color: var(--v-color-monochrome-6);
    --button-hover-color: var(--button-color);
  }

  .--appearance-primary {
    --button-color: var(--v-color-monochrome-1);
    --button-background-color: var(--v-color-primary-1);
    --button-hover-color: var(--v-color-monochrome-1);
    --button-hover-background-color: var(--v-color-primary-1-hover);
  }

  .--appearance-secondary {
    --button-background-color: var(--v-color-monochrome-6);
    --button-color: var(--v-color-monochrome-1);
    --button-hover-color: var(--v-color-monochrome-1);
    --button-hover-background-color: var(--v-color-monochrome-6-hover);
  }

  .--width-full {
    display: block;
  }

  .--state-disabled {
    opacity: 0.38;
  }
`;
