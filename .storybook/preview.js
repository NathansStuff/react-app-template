// These imports are for tailwind, see: https://github.com/storybookjs/addon-postcss/issues/18
import '!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css';
import '!style-loader!css-loader!postcss-loader!../src/styles/global.css';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  vroom: {
    name: 'VROOM 1.8 Ratio',
    styles: {
      width: '400px',
      height: '720px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
    defaultViewport: 'vroom',
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#F7F7F7',
      },
      {
        name: 'dark',
        value: '#000000',
      },
    ],
  },
};
