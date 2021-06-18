import { Story } from '@storybook/react';

import Subline, { SublineProps } from '.';

export default {
  title: 'Home/Subline',
  component: Subline,
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
const Template: Story<SublineProps> = (arguments_) => <Subline {...arguments_}>SUBSCRIBE</Subline>;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  size: 'lg'
};
