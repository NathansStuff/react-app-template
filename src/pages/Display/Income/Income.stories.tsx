import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Income } from './Income';

export default {
  title: 'displays/Income',
  component: Income,
  argTypes: {},
} as ComponentMeta<typeof Income>;

const Template: ComponentStory<typeof Income> = () => <Income />;

export const Base = Template.bind({});
