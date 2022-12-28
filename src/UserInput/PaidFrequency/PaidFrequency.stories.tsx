import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IPaidFrequency, PaidFrequency } from './PaidFrequency';
import {
  mockPaidFrequencyErrorProps,
  mockPaidFrequencyProps,
} from './PaidFrequency.mocks';

export default {
  title: 'userInput/PaidFrequency',
  component: PaidFrequency,
  argTypes: {},
} as ComponentMeta<typeof PaidFrequency>;

const Template: ComponentStory<typeof PaidFrequency> = (args) => (
  <Provider store={store}>
    <PaidFrequency {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockPaidFrequencyProps,
} as IPaidFrequency;

const ErrorTemplate: ComponentStory<typeof PaidFrequency> = (args) => (
  <Provider store={store}>
    <PaidFrequency {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockPaidFrequencyErrorProps,
} as IPaidFrequency;
