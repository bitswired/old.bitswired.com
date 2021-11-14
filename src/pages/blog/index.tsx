import { Box, Center, Heading, VStack } from '@chakra-ui/layout';
import BlogPostGrid from 'components/Blog/BlogPostGrid';
import { BLOG_URL } from 'config';
import { BlogJsonLd, NextSeo } from 'next-seo';
import React from 'react';
import { getAllPosts } from 'utils/admin';

interface BlogPostLandingPageProps {
  metas: BlogPostMeta[];
}
export default function BlogLandingPage({ metas }: BlogPostLandingPageProps): JSX.Element {
  const title = 'Bitswired Blog - Learn Together';
  const description =
    'Bitswired blog. Articles about artificial intelligence, computer graphics, web development and more.';
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={BLOG_URL}
        openGraph={{
          url: BLOG_URL,
          title,
          description,
          site_name: 'Bitswired'
        }}
        twitter={{
          handle: '@Bitswired',
          site: '@Bitswired'
        }}
      />
      <BlogJsonLd
        url={BLOG_URL}
        title="Publication"
        description="Data and Digital Technologies"
        images={['']}
        datePublished="2020-09-01"
        dateModified="2020-09-01"
        authorName="Jimi Vaubien"
      />
      <Box mb="130px" />
      <Center>
        <VStack spacing="0.1em">
          <Heading
            as="h1"
            fontFamily="orbitron"
            fontSize="2rem"
            bgGradient="linear(to-l, primary, secondary)"
            bgClip="text"
          >
            Bitswired Blog
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
    props: { metas: posts.map((x: any) => x.meta) }
  };
}
