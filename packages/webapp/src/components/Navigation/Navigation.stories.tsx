import { Story } from '@storybook/react';

import Navigation from '.';

export default {
  title: 'Navigation',
  component: Navigation,
  parameters: {
    backgrounds: { default: 'dark' }
  }
};

//👇 We create a “template” of how args map to rendering
const Template: Story = (arguments_) => <Navigation {...arguments_} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {};

// export const Secondary = Template.bind({});
// Secondary.args = { ...Primary.args, variant: "secondary-solid" };
