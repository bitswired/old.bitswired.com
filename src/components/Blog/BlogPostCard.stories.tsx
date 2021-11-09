import { Box } from '@chakra-ui/react';
import { Story } from '@storybook/react';

import BlogPostCard, { BlogPostCardProps } from './BlogPostCard';

export default {
  title: 'Blog/BlogPostCard',
  component: BlogPostCard
};

const Template: Story<BlogPostCardProps> = (arguments_) => (
  <Box w="500px">
    <BlogPostCard {...arguments_} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  ratio: 1,
  meta: {
    title: 'Test Article',
    description: '',
    readMinutes: 10,
    image: 'https://wallpaper.dog/large/526372.jpg',
    tags: ['Typesript', 'React'],
    category: 'Programming',
    slug: 'tt-tt',
    published: true,
    datePublished: '2020-01-01',
    dateModified: '2020-01-01',
    images: ['test']
  }
};
