import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BasicDetails } from './BasicDetails';

export default {
  title: 'displays/BasicDetails',
  component: BasicDetails,
  argTypes: {},
} as ComponentMeta<typeof BasicDetails>;

const Template: ComponentStory<typeof BasicDetails> = () => <BasicDetails />;

export const Base = Template.bind({});
