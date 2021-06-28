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
  title: 'Test Title',
  image: 'https://source.unsplash.com/random',
  description: 'Test descriptino test akdsjfn a;sdkf aksdjfn jafdsafkads'
};
