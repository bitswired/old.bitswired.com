import { Story } from '@storybook/react';

import Headline, { HeadlineProps } from '.';

export default {
  title: 'Home/Headline',
  component: Headline,
  parameters: {
    backgrounds: { default: 'dark' }
  },
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg']
      }
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template: Story<HeadlineProps> = (arguments_) => (
  <Headline {...arguments_}>SUBSCRIBE</Headline>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  size: 'lg'
};
