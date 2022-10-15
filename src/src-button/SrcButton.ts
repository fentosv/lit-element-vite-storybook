import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import style from './src-button.styles';
import { SrcButtonAppearance, SrcButtonWidth, SrcButtonState } from './src-button.enum';

export class SrcButton extends LitElement {
  static styles = style;

  @property({ type: String })
  appearance = SrcButtonAppearance.primary;

  @property({ type: String })
  width = SrcButtonWidth.auto;

  @property({ type: String })
  state = SrcButtonState.default;

  @property({ type: String })
  type: "button" | "submit" = "button";

  render() {
    const slottedLink = !!this.querySelector('a');

    const classes = {
      button: true,
      '--appearance-primary': this.appearance === SrcButtonAppearance.primary,
      '--appearance-secondary':
        this.appearance === SrcButtonAppearance.secondary,
      '--width-full': this.width === SrcButtonWidth.full,
      '--state-disabled': this.state === SrcButtonState.disabled,
    };

    const ret = (slottedLink) ?
      html`
      <div class=${classMap(classes)}>
        <slot></slot>
      </div>` :
      html`
      <span class=${classMap(classes)}>
        <button class="buttontag" type=${this.type} ?disabled=${!slottedLink && this.state === SrcButtonState.disabled} ><slot></slot></button>
      </span>`;
    return ret;
  }
}
