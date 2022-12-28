import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { AmountPaid, IAmountPaid } from './AmountPaid';
import {
  mockAmountPaidErrorProps,
  mockAmountPaidProps,
} from './AmountPaid.mocks';

export default {
  title: 'userInput/AmountPaid',
  component: AmountPaid,
  argTypes: {},
} as ComponentMeta<typeof AmountPaid>;

const Template: ComponentStory<typeof AmountPaid> = (args) => (
  <Provider store={store}>
    <AmountPaid {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockAmountPaidProps,
} as IAmountPaid;

const ErrorTemplate: ComponentStory<typeof AmountPaid> = (args) => (
  <Provider store={store}>
    <AmountPaid {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockAmountPaidErrorProps,
} as IAmountPaid;
