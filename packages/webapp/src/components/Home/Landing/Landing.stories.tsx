import { Story } from '@storybook/react';

import Landing, { LandingProps } from '.';

export default {
  title: 'Home/Landing',
  component: Landing,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg']
      }
    }
  }
};

const Template: Story<LandingProps> = (arguments_) => <Landing {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  size: 'lg'
};
