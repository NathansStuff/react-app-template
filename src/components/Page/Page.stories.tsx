import { ComponentMeta, ComponentStory } from '@storybook/react';

import { IPage, Page } from './Page';
import { mockPageProps } from './Page.mocks';

export default {
  title: 'layouts/Page',
  component: Page,
  argTypes: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockPageProps,
} as IPage;
