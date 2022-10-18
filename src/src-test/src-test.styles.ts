import { css } from 'lit';

export default css`
  :host {
    display: block;
    padding: 25px;
    color: var(--src-test-text-color, #000);
  }
  .title {
    color: red;
  }
  :host([variant]) .variant {
    border: 1px solid purple;
    background-color: lightpink;
  }
`;
