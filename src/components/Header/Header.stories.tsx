import { action } from '@storybook/addon-actions';
import { Story } from '@storybook/react';

import Header, { HeaderProps } from '.';

export default {
  title: 'Header',
  component: Header,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    isGoingDown: {
      control: {
        type: 'boolean'
      }
    },
    lock: {
      control: {
        type: 'boolean'
      }
    },
    isSliderOpen: {
      control: {
        type: 'boolean'
      }
    },
    onSliderOpen: {},
    onSliderClose: {}
  }
};

const actionsData = {
  onSliderOpen: action('open-slider'),
  onSliderClose: action('close-slider')
};

const Template: Story<HeaderProps> = (arguments_) => <Header {...arguments_} />;

export const Primary = Template.bind({});
Primary.args = {
  isSliderOpen: false,
  ...actionsData
};
