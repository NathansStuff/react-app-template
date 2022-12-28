import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { CasualLength, ICasualLength } from './CasualLength';
import {
  mockCasualLengthErrorProps,
  mockCasualLengthProps,
} from './CasualLength.mocks';

export default {
  title: 'userInput/CasualLength',
  component: CasualLength,
  argTypes: {},
} as ComponentMeta<typeof CasualLength>;

const Template: ComponentStory<typeof CasualLength> = (args) => (
  <Provider store={store}>
    <CasualLength {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockCasualLengthProps,
} as ICasualLength;

const ErrorTemplate: ComponentStory<typeof CasualLength> = (args) => (
  <Provider store={store}>
    <CasualLength {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockCasualLengthErrorProps,
} as ICasualLength;
