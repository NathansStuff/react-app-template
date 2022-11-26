import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IRadioGroup, RadioGroup } from './RadioGroup';
import { mockRadioGroupProps } from './RadioGroup.mocks';

export default {
  title: 'components/RadioGroup',
  component: RadioGroup,
  argTypes: {},
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...mockRadioGroupProps,
} as IRadioGroup;

export const InitialValue = Template.bind({});
InitialValue.args = {
  ...mockRadioGroupProps,
  initialValue: 0,
} as IRadioGroup;

export const Errors = Template.bind({});
Errors.args = {
  ...mockRadioGroupProps,
  showErrors: true,
} as IRadioGroup;

export const ThreeButtons = Template.bind({});
ThreeButtons.args = {
  onChange: mockRadioGroupProps.onChange,
  options: [
    { label: 'Option 1', value: 'option1', id: 'option1' },
    { label: 'Option 2', value: 'option2', id: 'option2' },
    { label: 'Option 3', value: 'option3', id: 'option3' },
  ],
  showErrors: false,
  title: mockRadioGroupProps.title,
} as IRadioGroup;
