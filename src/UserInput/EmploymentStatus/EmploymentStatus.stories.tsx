import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EmploymentStatus, IEmploymentStatus } from './EmploymentStatus';
import {
  mockEmploymentStatusErrorProps,
  mockEmploymentStatusProps,
} from './EmploymentStatus.mocks';

export default {
  title: 'userInput/EmploymentStatus',
  component: EmploymentStatus,
  argTypes: {},
} as ComponentMeta<typeof EmploymentStatus>;

const Template: ComponentStory<typeof EmploymentStatus> = (args) => (
  <Provider store={store}>
    <EmploymentStatus {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockEmploymentStatusProps,
} as IEmploymentStatus;

const ErrorTemplate: ComponentStory<typeof EmploymentStatus> = (args) => (
  <Provider store={store}>
    <EmploymentStatus {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockEmploymentStatusErrorProps,
} as IEmploymentStatus;
