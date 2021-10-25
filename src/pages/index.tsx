import { Heading, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import BlogPostCard from 'components/Blog/BlogPostCard';
import Features from 'components/Home/Features';
import Landing from 'components/Home/Landing';
import { Fade } from 'components/Reveal/Fade';
import { NextSeo } from 'next-seo';
import React from 'react';
import { getAllPosts, getFeaturedPost } from 'utils/admin';

interface LandingPageProps {
  featuredPosts: BlogPostMeta[];
}

export default function LandingPage({ featuredPosts }: LandingPageProps): JSX.Element {
  const url = 'https://www.bitswired.com';
  // const title = 'Bitswired - Spreading Tech Knowledge';
  const title = 'Bitswired - Embrace the Data Era';
  const description =
    'Artificial Intelligence, Programming, ... and much more! Tutorials, In-depth guides, Research papers ... Join the community!';
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
          site_name: 'Bitswired',
          images: [{ url: 'http://localhost:3000/logo/bitswired-logo-image.jpeg' }]
        }}
        twitter={{
          handle: '@Bitswired',
          site: '@Bitswired'
        }}
      />
      <Landing />
      <Features />
      <VStack p="2em" spacing="7em">
        <Heading as="h2"> Featured Blog Posts</Heading>
        <Wrap justify="center" mt="-5em" w="100%" spacing="3em">
          {featuredPosts.map((x) => (
            <WrapItem key={x.title} w={['100%', '65%', '30%']}>
              <Fade frac={0.5} triggerOnce>
                <BlogPostCard meta={x} ratio={16 / 9} sizes="700px" />
              </Fade>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  const featured = await getFeaturedPost(posts);

  return {
    props: { featuredPosts: featured }
  };
}
