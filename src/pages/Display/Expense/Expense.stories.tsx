import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Expense } from './Expense';

export default {
  title: 'displays/Expense',
  component: Expense,
  argTypes: {},
} as ComponentMeta<typeof Expense>;

const Template: ComponentStory<typeof Expense> = () => <Expense />;

export const Base = Template.bind({});
