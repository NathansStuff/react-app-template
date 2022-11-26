import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IResidencyStatus, ResidencyStatus } from './ResidencyStatus';
import { mockResidencyStatusErrorProps } from './ResidencyStatus.mocks';

export default {
  title: 'userInput/ResidencyStatus',
  component: ResidencyStatus,
  argTypes: {},
} as ComponentMeta<typeof ResidencyStatus>;

const Template: ComponentStory<typeof ResidencyStatus> = (args) => (
  <Provider store={store}>
    <ResidencyStatus {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...ResidencyStatus,
} as IResidencyStatus;

const ErrorTemplate: ComponentStory<typeof ResidencyStatus> = (args) => (
  <Provider store={store}>
    <ResidencyStatus {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockResidencyStatusErrorProps,
} as IResidencyStatus;
