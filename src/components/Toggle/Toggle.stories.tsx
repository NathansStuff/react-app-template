import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Toggle } from './Toggle';
import { emptyFunction } from './Toggle.mocks';

export default {
  title: 'components/Toggle',
  component: Toggle,
  argTypes: {},
} as ComponentMeta<typeof Toggle>;

export const Active: ComponentStory<typeof Toggle> = () => {
  return (
    <Toggle
      initiallyChecked={true}
      onChange={(value): void => emptyFunction(value)}
    />
  );
};

export const Inactive: ComponentStory<typeof Toggle> = () => {
  return (
    <Toggle
      initiallyChecked={false}
      onChange={(value): void => emptyFunction(value)}
    />
  );
};
