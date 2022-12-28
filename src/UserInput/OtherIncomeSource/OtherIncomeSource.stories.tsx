import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IOtherIncomeSource, OtherIncomeSource } from './OtherIncomeSource';
import {
  mockOtherIncomeSourceErrorProps,
  mockOtherIncomeSourceProps,
} from './OtherIncomeSource.mocks';

export default {
  title: 'userInput/OtherIncomeSource',
  component: OtherIncomeSource,
  argTypes: {},
} as ComponentMeta<typeof OtherIncomeSource>;

const Template: ComponentStory<typeof OtherIncomeSource> = (args) => (
  <Provider store={store}>
    <OtherIncomeSource {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockOtherIncomeSourceProps,
} as IOtherIncomeSource;

const ErrorTemplate: ComponentStory<typeof OtherIncomeSource> = (args) => (
  <Provider store={store}>
    <OtherIncomeSource {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockOtherIncomeSourceErrorProps,
} as IOtherIncomeSource;
