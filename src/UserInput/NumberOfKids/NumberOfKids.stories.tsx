import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { INumberOfKidsProps, NumberOfKids } from './NumberOfKids';
import {
  mockNumberOfKidsErrorProps,
  mockNumberOfKidsProps,
} from './NumberOfKids.mocks';

export default {
  title: 'userInput/NumberOfKids',
  component: NumberOfKids,
  argTypes: {},
} as ComponentMeta<typeof NumberOfKids>;

const Template: ComponentStory<typeof NumberOfKids> = (args) => (
  <Provider store={store}>
    <NumberOfKids {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockNumberOfKidsProps,
} as INumberOfKidsProps;

const ErrorTemplate: ComponentStory<typeof NumberOfKids> = (args) => (
  <Provider store={store}>
    <NumberOfKids {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockNumberOfKidsErrorProps,
} as INumberOfKidsProps;
