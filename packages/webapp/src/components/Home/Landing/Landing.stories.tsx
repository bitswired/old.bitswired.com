import { Story } from '@storybook/react';

import Landing from '.';

export default {
  title: 'Home/Landing',
  component: Landing
};

const Template: Story = (arguments_) => <Landing {...arguments_} />;

export const Default = Template.bind({});
Default.args = {};
