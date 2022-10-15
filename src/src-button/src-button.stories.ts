import { html } from 'lit';

import './src-button';

export default {
  title: 'Button',
};

export const Default = () =>
  html`<src-button appearance="primary"
    ><a href="#">I'm a button</a></src-button
  >
  <src-button appearance="primary">I'm a real button</src-button>
  <src-button appearance="primary" state="disabled">I'm a disabled real button</src-button>`;
