/* eslint-disable sonarjs/no-duplicate-string */
import { Story } from '@storybook/react';

import BlogPostGrid, { BlogPostGridProps } from './BlogPostGrid';

export default {
  title: 'Blog/BlogPostCardGrid',
  component: BlogPostGrid
};

const Template: Story<BlogPostGridProps> = (arguments_) => <BlogPostGrid {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  metas: [
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=1'
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=2'
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=3'
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=4'
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=5'
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=6'
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=7'
    }
  ]
};
