import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IPayBillsFrequency, PayBillsFrequency } from './PayBillsFrequency';
import {
  mockPayBillsFrequencyErrorProps,
  mockPayBillsFrequencyProps
} from './PayBillsFrequency.mocks';

export default {
  title: 'userInput/PaidFrequency',
  component: PayBillsFrequency,
  argTypes: {},
} as ComponentMeta<typeof PayBillsFrequency>;

const Template: ComponentStory<typeof PayBillsFrequency> = (args) => (
  <Provider store={store}>
    <PayBillsFrequency {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockPayBillsFrequencyProps,
} as IPayBillsFrequency;

const ErrorTemplate: ComponentStory<typeof PayBillsFrequency> = (args) => (
  <Provider store={store}>
    <PayBillsFrequency {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockPayBillsFrequencyErrorProps,
} as IPayBillsFrequency;
