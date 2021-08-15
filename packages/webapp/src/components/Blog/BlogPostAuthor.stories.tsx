import { Story } from '@storybook/react';

import BlogPostAuthor from './BlogPostAuthor';

export default {
  title: 'Blog/BlogPostAuthor',
  component: BlogPostAuthor
};

const Template: Story = (arguments_) => <BlogPostAuthor {...arguments_} />;

export const Default = Template.bind({});
Default.args = {};
