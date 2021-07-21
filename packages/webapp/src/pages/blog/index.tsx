import { Box, Center, Heading, VStack } from '@chakra-ui/react';
import BlogPostGrid from 'components/Blog/BlogPostGrid';
import React from 'react';
import { getAllPosts } from 'utils/admin';

interface BlogPostLandingPageProps {
  metas: BlogPostMeta[];
}
export default function BlogLandingPage({ metas }: BlogPostLandingPageProps): JSX.Element {
  return (
    <>
      <Box mb="130px" />
      <Center>
        <VStack spacing="0.1em">
          <Heading as="h1" fontSize="4xl">
            Bitswired Blog
          </Heading>
          <Heading fontSize="xl" color="secondary" as="h2">
            {'AI & Code'}
          </Heading>
        </VStack>
      </Center>
      <BlogPostGrid metas={metas} />
      <Box mb="100px" />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: { metas: posts.map((x: any) => x.data) }
  };
}
