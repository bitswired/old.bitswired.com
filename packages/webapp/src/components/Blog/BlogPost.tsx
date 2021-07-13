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
  tags: string[];
}

function Tags({ tags }: TagsProps): JSX.Element {
  return (
    <HStack>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
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
  meta: BlogPostMeta;
}

function SideFull({ meta }: SideProps) {
  return (
    <>
      <BlogPostAuthor />

      <HStack>
        {/* <Text>TOPICS:</Text> */}
        <Tags tags={meta.tags} />
      </HStack>

      <HStack>
        {/* <Text>NEWSLETTER:</Text> */}
        <Subscribe as="button" />
      </HStack>
    </>
  );
}

function SideMin({ meta }: SideProps) {
  return (
    <VStack spacing="1em" align="stretch">
      <BlogPostAuthor />

      <Divider />

      <HStack spacing="2em">
        <Tags tags={meta.tags} />
        <Subscribe as="text" />
      </HStack>
    </VStack>
  );
}
interface BodyProps {
  mdxRendered: JSX.Element;
  meta: BlogPostMeta;
}

function Body({ mdxRendered, meta }: BodyProps) {
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
            <SideFull meta={meta}></SideFull>
          ) : (
            <SideMin meta={meta}></SideMin>
          )}
        </Stack>
      </GridItem>
    </Grid>
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
          <AspectRatio ratio={21 / 9} w="100%">
            <LazyImage
              src={meta.image}
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
              {meta.title}
            </Heading>
          </Box>
        </Box>
      </Box>

      <Body meta={meta} mdxRendered={mdxRendered}></Body>
    </>
  );
}
