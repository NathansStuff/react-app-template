import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IOtherIncome, OtherIncome } from './OtherIncome';
import {
  mockOtherIncomeErrorProps,
  mockOtherIncomeProps,
} from './OtherIncome.mocks';

export default {
  title: 'userInput/OtherIncome',
  component: OtherIncome,
  argTypes: {},
} as ComponentMeta<typeof OtherIncome>;

const Template: ComponentStory<typeof OtherIncome> = (args) => (
  <Provider store={store}>
    <OtherIncome {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockOtherIncomeProps,
} as IOtherIncome;

const ErrorTemplate: ComponentStory<typeof OtherIncome> = (args) => (
  <Provider store={store}>
    <OtherIncome {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockOtherIncomeErrorProps,
} as IOtherIncome;
