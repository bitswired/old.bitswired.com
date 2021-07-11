import { Box } from '@chakra-ui/react';
import BlogPostGrid from 'components/Blog/BlogPostGrid';
import React from 'react';

interface BlogPostLandingPageProps {
  blogPosts: any;
}
export default function BlogLandingPage({ blogPosts }: BlogPostLandingPageProps): JSX.Element {
  return (
    <>
      <Box mb="100px" />
      <BlogPostGrid blogPostSums={blogPosts as any} />
      <Box mb="100px" />
    </>
  );
}

export async function getStaticProps() {
  const blogPosts: any = [];

  return {
    props: { blogPosts }
  };
}
