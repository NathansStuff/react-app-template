import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { HaveKids, IHaveKidsProps } from './HaveKids';
import { mockHaveKidsErrorProps, mockHaveKidsProps } from './HaveKids.mocks';

export default {
  title: 'userInput/HaveKids',
  component: HaveKids,
  argTypes: {},
} as ComponentMeta<typeof HaveKids>;

const Template: ComponentStory<typeof HaveKids> = (args) => (
  <Provider store={store}>
    <HaveKids {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockHaveKidsProps,
} as IHaveKidsProps;

const ErrorTemplate: ComponentStory<typeof HaveKids> = (args) => (
  <Provider store={store}>
    <HaveKids {...args} />
  </Provider>
);

export const Errors = ErrorTemplate.bind({});

Errors.args = {
  ...mockHaveKidsErrorProps,
} as IHaveKidsProps;
