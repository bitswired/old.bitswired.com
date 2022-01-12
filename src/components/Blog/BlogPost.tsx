import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/breadcrumb';
import { Icon } from '@chakra-ui/icon';
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
  Wrap,
  WrapItem
} from '@chakra-ui/layout';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { Tag } from '@chakra-ui/tag';
import NewsletterSubscribeAction from 'components/Actions/NewsletterSubscribeAction';
import Button from 'components/Button';
import InternalLink from 'components/InternalLink';
import LazyImage from 'components/LazyImage';
import { AttentionSeeker } from 'components/Reveal/AttentionSeeker';
//import LazyImage from 'components/LazyImage';
import { infos } from 'config';
import { NextSeo } from 'next-seo';
import React from 'react';
import { FaBell, FaChevronRight, FaTags } from 'react-icons/fa';
import { TechArticleJsonLd } from 'rich-results';

import BlogPostAuthor from './BlogPostAuthor';

interface TagsProps {
  tags: string[];
}

function Tags({ tags }: TagsProps): JSX.Element {
  return (
    <HStack>
      {tags.map((tag) => (
        <Tag bgColor="lightblue" key={tag} size="md">
          {tag}
        </Tag>
      ))}
    </HStack>
  );
}

interface SubscribeProps {
  as: 'button' | 'text';
}

function Subscribe({ as }: SubscribeProps) {
  if (as === 'button')
    return (
      <NewsletterSubscribeAction display="inline-block">
        <Button size="md" variant="secondary-solid" rightIcon={<FaBell />}>
          Subscribe
        </Button>
      </NewsletterSubscribeAction>
    );

  return (
    <NewsletterSubscribeAction display="inline">
      <Button size="sm" variant="secondary-link" rightIcon={<FaBell />} iconSpacing="0.2em">
        Subscribe
      </Button>
    </NewsletterSubscribeAction>
  );
}

interface SideProps {
  meta: BlogPostMeta;
}

function SideFull({ meta }: SideProps) {
  return (
    <>
      <VStack bgColor="#EEE" spacing="1.5em" p="2em" rounded="md" align="left" w="max">
        <Box>
          <BlogPostAuthor />
        </Box>

        <HStack>
          <Icon as={FaTags} />
          <Tags tags={meta.tags} />
        </HStack>

        <HStack>
          <Text fontSize="sm">{meta.readMinutes} minutes read</Text>
        </HStack>

        <HStack>
          <Text fontSize="sm">Published on {meta.datePublished}</Text>
        </HStack>
      </VStack>

      <VStack bgColor="#EEE" spacing="2em" p="2em" rounded="md">
        <Text colot="primary1" textTransform="uppercase" fontWeight="bold">
          Subscribe to get updates
        </Text>

        <Text>Bitswired newsletter</Text>

        <AttentionSeeker>
          <Subscribe as="button" />
        </AttentionSeeker>
      </VStack>
    </>
  );
}

function SideMin({ meta }: SideProps) {
  return (
    <Wrap bg="#EEE" p="1em" rounded="md" spacing="2em" w="100%" align="center">
      <WrapItem w="100%">
        <BlogPostAuthor />
      </WrapItem>

      <WrapItem>
        <HStack>
          <Icon as={FaTags} />
          <Tags tags={meta.tags} />
        </HStack>
      </WrapItem>

      <WrapItem>
        <HStack spacing="1em">
          <HStack align="center" spacing={1}>
            <Text fontSize="sm">{meta.readMinutes} minutes</Text>
          </HStack>

          <HStack align="center" spacing={1}>
            <Text fontSize="sm">{meta.datePublished}</Text>
          </HStack>
        </HStack>
      </WrapItem>

      <WrapItem>
        <Subscribe as="text" />
      </WrapItem>
    </Wrap>
  );
}

interface NavigationProps {
  meta: BlogPostMeta;
}

function Navigation({ meta }: NavigationProps) {
  return (
    <Breadcrumb mt="3em" mb="-1em" spacing="8px" separator={<FaChevronRight color="gray.500" />}>
      <BreadcrumbItem>
        <InternalLink href="/blog">{meta.category}</InternalLink>
      </BreadcrumbItem>

      {meta.series && (
        <BreadcrumbItem>
          <InternalLink href="/blog">{meta.series}</InternalLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}

interface BodyProps {
  post: JSX.Element;
  meta: BlogPostMeta;
}

function Body({ post, meta }: BodyProps) {
  const layout = useBreakpointValue({ base: 'mobile', md: 'full' });

  if (layout === 'mobile')
    return (
      <VStack>
        <Box maxW="900px" mx="auto" w="100%">
          <Box px="1.5em" as="article" id="prose">
            <Navigation meta={meta} />

            <Heading as="h1" textTransform="capitalize">
              {meta.title}
            </Heading>
            <Center>
              <AspectRatio ratio={{ base: 16 / 9, md: 21 / 9 }} w="100%">
                <LazyImage
                  src={meta.image}
                  alt="Title image"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  m="auto"
                />
              </AspectRatio>
            </Center>
          </Box>

          <HStack spacing="2em" p="1em">
            <SideMin meta={meta}></SideMin>
          </HStack>

          <Box px="1.5em" as="section" py="1em" id="prose">
            {post}
          </Box>
        </Box>
      </VStack>
    );

  return (
    <HStack align="start" maxW="2000px" mx="auto">
      <Box maxW="900px" mx="auto">
        <Box p="1.5em" py="1em" as="article" id="prose">
          <Navigation meta={meta} />
          <Heading as="h1" textTransform="capitalize">
            {meta.title}
          </Heading>
          <Center>
            <AspectRatio ratio={{ base: 16 / 9, md: 16 / 9 }} w="100%">
              <LazyImage
                src={meta.image}
                alt="Title image"
                w="100%"
                h="100%"
                objectFit="cover"
                m="auto"
              />
            </AspectRatio>
          </Center>

          <Box as="section" py="1em" id="prose">
            {post}
          </Box>
        </Box>
      </Box>

      <VStack spacing="2em" p="1em" pt="3em" align="stretch" pr="3em">
        <SideFull meta={meta}></SideFull>
      </VStack>
    </HStack>
  );
}

export interface BlogPostProps {
  children: JSX.Element;
  meta: BlogPostMeta;
}

export default function BlogPost({ children, meta }: BlogPostProps): JSX.Element {
  const url = `https://www.bitswired.com/blog/${meta.slug}`;

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={url}
        openGraph={{
          url,
          title: meta.title,
          description: meta.description,
          images: meta.images.map((x) => ({ url: x })),
          site_name: 'Bitswired',
          article: {
            publishedTime: meta.datePublished,
            modifiedTime: meta.dateModified,
            section: meta.category,
            authors: [infos.linkedInProfile],
            tags: meta.tags
          }
        }}
        twitter={{
          handle: '@bitswired',
          site: '@bitswired'
        }}
      />
      <TechArticleJsonLd
        url={url}
        headline={meta.title}
        description={meta.description}
        image={meta.images}
        datePublished={meta.datePublished}
        dateModified={meta.dateModified}
      />
      <Body meta={meta} post={children}></Body>
    </>
  );
}
