import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IShareExpenses, ShareExpenses } from './ShareExpenses';
import {
  mockShareExpensesErrorProps,
  mockShareExpensesProps,
} from './ShareExpenses.mocks';

export default {
  title: 'userInput/ShareExpenses',
  component: ShareExpenses,
  argTypes: {},
} as ComponentMeta<typeof ShareExpenses>;

const Template: ComponentStory<typeof ShareExpenses> = (args) => (
  <Provider store={store}>
    <ShareExpenses {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockShareExpensesProps,
} as IShareExpenses;

const ErrorTemplate: ComponentStory<typeof ShareExpenses> = (args) => (
  <Provider store={store}>
    <ShareExpenses {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockShareExpensesErrorProps,
} as IShareExpenses;
