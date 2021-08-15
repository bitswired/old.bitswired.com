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
      image: 'https://source.unsplash.com/random?sig=1',
      datePublished: '2020-01-01',
      dateModified: '2020-01-01',
      images: ['test']
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=2',
      datePublished: '2020-01-01',
      dateModified: '2020-01-01',
      images: ['test']
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=3',
      datePublished: '2020-01-01',
      dateModified: '2020-01-01',
      images: ['test']
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=4',
      datePublished: '2020-01-01',
      dateModified: '2020-01-01',
      images: ['test']
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=5',
      datePublished: '2020-01-01',
      dateModified: '2020-01-01',
      images: ['test']
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=6',
      datePublished: '2020-01-01',
      dateModified: '2020-01-01',
      images: ['test']
    },
    {
      title: 'Test Article',
      description: '',
      readMinutes: 10,
      tags: ['Typesript', 'React'],
      slug: 'tt-tt',
      published: true,
      image: 'https://source.unsplash.com/random?sig=7',
      datePublished: '2020-01-01',
      dateModified: '2020-01-01',
      images: ['test']
    }
  ]
};
