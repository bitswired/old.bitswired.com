import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Icon,
  Tag,
  Text,
  useBreakpointValue,
  VStack,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import NewsletterSubscribeAction from 'components/Actions/NewsletterSubscribeAction';
import Button from 'components/Button';
import LazyImage from 'components/LazyImage';
import { AttentionSeeker } from 'components/Reveal/AttentionSeeker';
//import LazyImage from 'components/LazyImage';
import React from 'react';
import { FaBell, FaClock, FaEdit, FaTags } from 'react-icons/fa';

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
      <VStack bgColor="#EEE" spacing="1em" p="1em" rounded="md" align="left" w="max">
        <Box>
          <BlogPostAuthor />
        </Box>

        <HStack>
          <Icon as={FaTags} />
          <Tags tags={meta.tags} />
        </HStack>

        <HStack>
          <Icon as={FaClock} />
          <Text fontSize="sm">{meta.readMinutes} minutes</Text>
        </HStack>

        <HStack>
          <Icon as={FaEdit} />
          <Text fontSize="sm">{meta.datePublished}</Text>
        </HStack>
      </VStack>

      <VStack bgColor="#EEE" spacing="2em" p="1em" rounded="md">
        <Text colot="primary" textTransform="uppercase" fontWeight="bold">
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
            <Icon fontSize="sm" as={FaClock} />
            <Text fontSize="sm">{meta.readMinutes} minutes</Text>
          </HStack>

          <HStack align="center" spacing={1}>
            <Icon fontSize="sm" as={FaEdit} />
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
interface BodyProps {
  mdxRendered: JSX.Element;
  meta: BlogPostMeta;
}

function Body({ mdxRendered, meta }: BodyProps) {
  const layout = useBreakpointValue({ base: 'mobile', md: 'full' });

  if (layout === 'mobile')
    return (
      <VStack>
        <HStack spacing="2em" p="1em">
          <SideMin meta={meta}></SideMin>
        </HStack>
        <Box maxW="900px" mx="auto" w="100%">
          <Box px="1.5em" id="prose" as="article">
            <Text fontSize="1em" opacity={0.5} mb="-1em !important">
              {meta.category}
            </Text>
            <Heading as="h1">{meta.title}</Heading>
            {mdxRendered}
          </Box>
        </Box>
      </VStack>
    );

  return (
    <HStack align="start" maxW="2000px" mx="auto">
      <Box maxW="900px" mx="auto">
        <Box p="1.5em" py="1em" id="prose" as="article">
          <Text fontSize="1em" opacity={0.5} mb="-1em !important">
            {meta.category}
          </Text>
          <Heading as="h1">{meta.title}</Heading>
          {mdxRendered}
        </Box>
      </Box>

      <VStack spacing="2em" p="1em" pt="3em" align="stretch" pr="3em">
        <SideFull meta={meta}></SideFull>
      </VStack>
    </HStack>
  );
}

export interface BlogPostProps {
  mdxRendered: JSX.Element;
  meta: BlogPostMeta;
}

export default function BlogPost({ mdxRendered, meta }: BlogPostProps): JSX.Element {
  return (
    <>
      <Box>
        <Box position="relative">
          <AspectRatio ratio={{ base: 16 / 9, md: 21 / 9 }} w="100%" bg="black">
            <LazyImage
              src={meta.image}
              alt="Title image"
              w="100%"
              h="100%"
              objectFit="cover"
              m="auto"
              opacity={0.6}
            />
          </AspectRatio>

          <Box w="100%" position="absolute" top="40%" overflow="hidden">
            <Text
              lineHeight={1.1}
              fontWeight="bold"
              backdropFilter="blur(5px) saturate(180%)"
              bgColor="rgba(0,0,0, 0.5)"
              shadow="lg"
              p="0.5em"
              w="max"
              maxW="90%"
              mx="auto"
              fontSize={['2xl', '4xl', '4xl', '7xl']}
              as="h1"
              color="white"
              textAlign="center"
            >
              {meta.title}
            </Text>
          </Box>
        </Box>
      </Box>

      <Body meta={meta} mdxRendered={mdxRendered}></Body>
    </>
  );
}
