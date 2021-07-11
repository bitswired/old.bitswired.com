import {
  AspectRatio,
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  HStack,
  Link,
  Stack,
  Tag,
  useBreakpointValue,
  VStack
} from '@chakra-ui/react';
import Button from 'components/Button';
import LazyImage from 'components/LazyImage';
import { NewsletterContext } from 'context/newsletter';
import React from 'react';

import BlogPostAuthor from './BlogPostAuthor';

interface TagsProps {
  tags: any;
}

function Tags({ tags }: TagsProps): JSX.Element {
  return (
    <HStack>
      {tags.map((tag: any) => (
        <Tag key={tag.id}>{tag.name}</Tag>
      ))}
    </HStack>
  );
}

interface SubscribeProps {
  as: 'button' | 'text';
}

function Subscribe({ as }: SubscribeProps) {
  const newsletterContext = React.useContext(NewsletterContext);
  if (!newsletterContext) return null;
  const { open } = newsletterContext;

  if (as === 'button')
    return (
      <Button onClick={open} size="md" variant="secondary-solid">
        NEWSLETTER
      </Button>
    );

  return (
    <Link color="primary" fontWeight="bold" textDecor="underline" onClick={open}>
      Subscribe
    </Link>
  );
}

interface SideProps {
  blogPost: any;
}

function SideFull({ blogPost }: SideProps) {
  return (
    <>
      <BlogPostAuthor />

      <HStack>
        {/* <Text>TOPICS:</Text> */}
        {blogPost.tags && <Tags tags={blogPost.tags} />}
      </HStack>

      <HStack>
        {/* <Text>NEWSLETTER:</Text> */}
        <Subscribe as="button" />
      </HStack>
    </>
  );
}

function SideMin({ blogPost }: SideProps) {
  return (
    <VStack spacing="1em" align="stretch">
      <BlogPostAuthor />

      <Divider />

      <HStack spacing="2em">
        {blogPost.tags && <Tags tags={blogPost.tags} />}
        <Subscribe as="text" />
      </HStack>
    </VStack>
  );
}
interface BodyProps {
  mdxRendered: JSX.Element;
  blogPost: any;
}

function Body({ mdxRendered, blogPost }: BodyProps) {
  const templateAreas = useBreakpointValue({
    base: `"side" "article"`,
    md: `"socials article article article side side"`
  });

  const metaStackDirection: any = useBreakpointValue({
    base: { direction: 'row', align: 'center' },
    md: { direction: 'column', align: 'stretch' }
  });

  return (
    <Grid mt="2em" gap="2em" templateAreas={templateAreas} maxW="2000px" mx="auto">
      {templateAreas?.includes('socials') && <GridItem gridArea="socials"></GridItem>}

      <GridItem gridArea="article">
        <Box maxW="900px" mx="auto">
          <Box p="1.5em" id="prose" as="article">
            {mdxRendered}
          </Box>
        </Box>
      </GridItem>

      <GridItem gridArea="side" mx="auto">
        <Stack {...metaStackDirection} spacing="2em" p="1em">
          {metaStackDirection?.direction === 'column' ? (
            <SideFull blogPost={blogPost}></SideFull>
          ) : (
            <SideMin blogPost={blogPost}></SideMin>
          )}
        </Stack>
      </GridItem>
    </Grid>
  );
}

export interface BlogPostProps {
  mdxRendered: JSX.Element;
  blogPost: any;
}

export default function BlogPost({ mdxRendered, blogPost }: BlogPostProps): JSX.Element {
  return (
    <>
      <Box>
        {blogPost.image && (
          <Box position="relative">
            <AspectRatio ratio={21 / 9} w="100%">
              <LazyImage
                src={blogPost.image}
                alt="Title image"
                w="100%"
                h="100%"
                objectFit="cover"
                m="auto"
              />
            </AspectRatio>

            <Box w="100%" position="absolute" top="40%" overflow="hidden">
              <Heading
                backdropFilter="blur(5px) saturate(180%)"
                bgColor="rgba(0,0,0, 0.3)"
                shadow="lg"
                p="0.5em"
                w="max"
                maxW="90%"
                mx="auto"
                fontSize={['lg', '4xl', '4xl', '7xl']}
                as="h1"
                color="white"
                textAlign="center">
                {blogPost.title}
              </Heading>
            </Box>
          </Box>
        )}
      </Box>

      <Body blogPost={blogPost} mdxRendered={mdxRendered}></Body>
    </>
  );
}
