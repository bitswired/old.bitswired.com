import { Story } from '@storybook/react';

import NewsletterModal, { NewsletterModalProps } from './NewsletterModal';

export default {
  title: 'Newsletter/NewsletterModal',
  component: NewsletterModal
};

const Template: Story<NewsletterModalProps> = (arguments_) => <NewsletterModal {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true
};
