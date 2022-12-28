import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IVisaNumber, VisaNumber } from './VisaNumber';
import { mockVisaNumberErrorProps } from './VisaNumber.mocks';

export default {
  title: 'userInput/ResidencyStatus',
  component: VisaNumber,
  argTypes: {},
} as ComponentMeta<typeof VisaNumber>;

const Template: ComponentStory<typeof VisaNumber> = (args) => (
  <Provider store={store}>
    <VisaNumber {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...VisaNumber,
} as IVisaNumber;

const ErrorTemplate: ComponentStory<typeof VisaNumber> = (args) => (
  <Provider store={store}>
    <VisaNumber {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockVisaNumberErrorProps,
} as IVisaNumber;
