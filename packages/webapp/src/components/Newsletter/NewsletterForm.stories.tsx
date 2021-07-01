import { Story } from '@storybook/react';

import NewsletterForm, { NewsletterFormProps } from './NewsletterForm';

export default {
  title: 'Newsletter/NewsletterForm',
  component: NewsletterForm
};

const Template: Story<NewsletterFormProps> = (arguments_) => <NewsletterForm {...arguments_} />;

export const Default = Template.bind({});
Default.args = {};
