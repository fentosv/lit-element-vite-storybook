import { classMap } from 'lit/directives/class-map.js';
import { html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import style from './src-test.styles';

export class SrcTest extends LitElement {
  static styles = style;
  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  @property({ type: Boolean, reflect: true }) variant = false;

  @property({ type: Boolean, reflect: true }) inverse = false;

  __increment() {
    this.counter += 1;
  }

  render() {
    const classes = {
      'global-inverse': this.inverse,
    };
    return html`
      <h2 class="title">${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <h3 class="variant">Variant ${this.variant}</h3>
      <div class=${classMap(classes)}>Inverse ${this.inverse}</div>
    `;
  }
}
