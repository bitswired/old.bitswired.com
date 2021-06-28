import { Story } from '@storybook/react';

import BlogPostGrid, { BlogPostGridProps } from './BlogPostGrid';

export default {
  title: 'Blog/BlogPostCardGrid',
  component: BlogPostGrid
};

const Template: Story<BlogPostGridProps> = (arguments_) => <BlogPostGrid {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  blogPostSums: [
    {
      title: 'Test',
      description: 'Test',
      image: 'https://source.unsplash.com/random?sig=1'
    },
    {
      title: 'Test',
      description: 'Test',
      image: 'https://source.unsplash.com/random?sig=2'
    },
    {
      title: 'Test',
      description: 'Test',
      image: 'https://source.unsplash.com/random?sig=3'
    },
    {
      title: 'Test',
      description: 'Test',
      image: 'https://source.unsplash.com/random?sig=4'
    },
    {
      title: 'Test',
      description: 'Test',
      image: 'https://source.unsplash.com/random?sig=5'
    },
    {
      title: 'Test',
      description: 'Test',
      image: 'https://source.unsplash.com/random?sig=6'
    },
    {
      title: 'Test',
      description: 'Test',
      image: 'https://source.unsplash.com/random?sig=7'
    }
  ]
};
