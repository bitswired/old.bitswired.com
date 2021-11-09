import { Story } from '@storybook/react';

import NewsletterForm from './NewsletterForm';

export default {
  title: 'Newsletter/NewsletterForm',
  component: NewsletterForm
};

const Template: Story = (arguments_) => <NewsletterForm {...arguments_} />;

export const Default = Template.bind({});
Default.args = {};
