import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, EButtonType, IButton } from './Button';
import { mockButtonProps } from './Button.mocks';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...mockButtonProps,
} as IButton;

export const Primary = Template.bind({});
Primary.args = {
  ...mockButtonProps,
  type: EButtonType.PRIMARY,
} as IButton;

export const PrimaryInverted = Template.bind({});
PrimaryInverted.args = {
  ...mockButtonProps,
  type: EButtonType.PRIMARY_INVERTED,
} as IButton;

export const Success = Template.bind({});
Success.args = {
  ...mockButtonProps,
  type: EButtonType.SUCCESS,
} as IButton;

export const Disabled = Template.bind({});
Disabled.args = {
  ...mockButtonProps,
  type: EButtonType.DISABLED,
} as IButton;
