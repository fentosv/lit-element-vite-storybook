import { ParametersType } from '@types';
import { html, TemplateResult } from 'lit';
import './src-test';

export default {
  title: 'SrcTest',
  component: 'src-test',
  argTypes: {
    counter: { control: 'number' },
    inverse: { control: 'boolean' },
    textColor: { control: 'color' },
    title: { control: 'text' },
    variant: { control: 'boolean' },
  },
};

interface Story<T> extends ParametersType {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  counter?: number;
  inverse?: boolean;
  slot?: TemplateResult;
  textColor?: string;
  title?: string;
  variant?: boolean;
}

const Template: Story<ArgTypes> = ({
  counter = 5,
  inverse = false,
  slot,
  textColor,
  title = 'Hello world',
  variant = false,
}: ArgTypes) => html`
  <src-test
    style="--src-test-text-color: ${textColor || 'black'}"
    .counter=${counter}
    .inverse=${inverse}
    .title=${title}
    .variant=${variant}
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
export const InverseBackground = Template.bind({});
InverseBackground.parameters = {
  backgrounds: {
    default: 'midnight',
  },
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
