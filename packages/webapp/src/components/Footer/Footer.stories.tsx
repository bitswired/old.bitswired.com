import { Story } from '@storybook/react';

import Footer, { FooterProps } from '.';

export default {
  title: 'Footer',
  component: Footer
};

//👇 We create a “template” of how args map to rendering
const Template: Story<FooterProps> = () => <Footer />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
