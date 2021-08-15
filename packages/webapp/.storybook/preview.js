import React from 'react';
import theme from '../src/theme';
import { withNextRouter } from 'storybook-addon-next-router';
import { addDecorator } from '@storybook/react';

import { ChakraProvider } from '@chakra-ui/react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

addDecorator(
  withNextRouter({
    path: '/', // defaults to `/`
    asPath: '/', // defaults to `/`
    query: {}, // defaults to `{}`
    push() {} // defaults to using addon actions integration, can override any method in the router
  })
);

export const decorators = [
  (Story) => (
    <ChakraProvider resetCSS theme={theme}>
      <Story />
    </ChakraProvider>
  )
];
