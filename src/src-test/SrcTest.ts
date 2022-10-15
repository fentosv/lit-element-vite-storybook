import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class SrcTest extends LitElement {
  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  @property({ type: Boolean, reflect: true }) variant = false;

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--src-test-text-color, #000);
    }
    .title {
      color: red;
    }
    :host([variant]) .title {
      border: 1px solid red;
      background-color: blue;
    }
  `;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2 class="title">${this.title} Nr. ${this.counter}!</h2>
      <h3>${this.variant}</h3>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
