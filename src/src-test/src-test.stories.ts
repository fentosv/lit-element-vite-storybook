import { html, TemplateResult } from 'lit';
import './src-test';

export default {
  title: 'SrcTest',
  component: 'src-test',
  argTypes: {
    variant: { control: 'boolean' },
    title: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  variant?: boolean;
  title?: string;
  counter?: number;
  textColor?: string;
  slot?: TemplateResult;
}

const Template: Story<ArgTypes> = ({
  title = 'Hello world',
  counter = 5,
  textColor,
  variant = false,
  slot,
}: ArgTypes) => html`
  <src-test
    style="--src-test-text-color: ${textColor || 'black'}"
    .variant=${variant}
    .title=${title}
    .counter=${counter}
  >
    ${slot}
  </src-test>
`;

export const Regular = Template.bind({});

export const variantTrue = Template.bind({});
variantTrue.args = {
  variant: true,
};
export const variantFalse = Template.bind({});
variantFalse.args = {
  variant: false,
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
