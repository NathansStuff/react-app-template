import { Provider } from 'react-redux';

import { store } from '@/context/store';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Gender, IGenderProps } from './Gender';
import { mockGenderProps } from './Gender.mocks';

export default {
  title: 'userInput/Gender',
  component: Gender,
  argTypes: {},
} as ComponentMeta<typeof Gender>;

const Template: ComponentStory<typeof Gender> = (args) => (
  <Provider store={store}>
    <Gender {...args} />
  </Provider>
);

export const Base = Template.bind({});

Base.args = {
  ...mockGenderProps,
} as IGenderProps;
