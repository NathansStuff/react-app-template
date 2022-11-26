import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ILivingStatusProps, LivingStatus } from './LivingStatus';
import {
  mockLivingStatusErrorProps,
  mockLivingStatusProps,
} from './LivingStatus.mocks';

export default {
  title: 'userInput/LivingStatus',
  component: LivingStatus,
  argTypes: {},
} as ComponentMeta<typeof LivingStatus>;

const Template: ComponentStory<typeof LivingStatus> = (args) => (
  <Provider store={store}>
    <LivingStatus {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockLivingStatusProps,
} as ILivingStatusProps;

const ErrorTemplate: ComponentStory<typeof LivingStatus> = (args) => (
  <Provider store={store}>
    <LivingStatus {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockLivingStatusErrorProps,
} as ILivingStatusProps;
