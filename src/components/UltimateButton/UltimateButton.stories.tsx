import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IUltimateButtonProps, UltimateButton } from './UltimateButton';
import { mockUltimateButtonProps } from './UltimateButton.mocks';

export default {
  title: 'components/UltimateButton',
  component: UltimateButton,
  argTypes: {},
} as ComponentMeta<typeof UltimateButton>;

const Template: ComponentStory<typeof UltimateButton> = (
  args: IUltimateButtonProps
) => <UltimateButton {...args} />;
export const Base = Template.bind({});
Base.args = {
  ...mockUltimateButtonProps,
} as IUltimateButtonProps;
