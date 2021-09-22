import { Box, Center, Heading, VStack } from '@chakra-ui/react';
import BlogPostGrid from 'components/Blog/BlogPostGrid';
import { NextSeo } from 'next-seo';
import React from 'react';
import { getAllPosts } from 'utils/admin';

interface BlogPostLandingPageProps {
  metas: BlogPostMeta[];
}
export default function BlogLandingPage({ metas }: BlogPostLandingPageProps): JSX.Element {
  const url = 'https://www.bitswired.com/blog';
  const title = 'Bitswired Blog - Learn Together';
  const description =
    'Bitswired blog. Articles about artificial intelligence, computer graphics, web development and more.';
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          site_name: 'Bitswired'
        }}
        twitter={{
          handle: '@Bitswired',
          site: '@Bitswired'
        }}
      />
      <Box mb="130px" />
      <Center>
        <VStack spacing="0.1em">
          <Heading
            as="h1"
            fontSize="4xl"
            bgGradient="linear(to-l, primary, secondary)"
            bgClip="text">
            Bitswired Blog
          </Heading>
          {/* <Heading fontSize="xl" color="secondary" as="h2">
            {'AI & Code'}
          </Heading> */}
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
