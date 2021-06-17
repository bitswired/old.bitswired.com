const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);
const { compilerOptions } = require('../tsconfig.json');

const emotionReactPath = path.dirname(require.resolve('@emotion/react/package.json'));

const emotionStyledPath = path.dirname(require.resolve('@emotion/styled/package.json'));

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-actions'],
  // .storybook/main.js

  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
    }
  },
  babel: async (options) => {
    options.plugins.push('react-require');
    return {
      ...options
    };
  },
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '../src'));
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': emotionReactPath,
          'emotion-theming': emotionReactPath,
          '@emotion/styled': emotionStyledPath
        }
      }
    };
  }
};
