import { CoreBlogPostFields, CoreBlogPostFields_tags } from '@bitswired-web/graphql';
import {
  AspectRatio,
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  Tag,
  useBreakpointValue
} from '@chakra-ui/react';

import BlogPostAuthor from './BlogPostAuthor';

interface TagsProps {
  tags: CoreBlogPostFields_tags[];
}

function Tags({ tags }: TagsProps): JSX.Element {
  return (
    <HStack>
      {tags.map((tag) => (
        <Tag key={tag.id}>{tag.name}</Tag>
      ))}
    </HStack>
  );
}

interface BodyProps {
  mdxRendered: JSX.Element;
  blogPost: Omit<CoreBlogPostFields, 'body'>;
}

function Body({ mdxRendered, blogPost }: BodyProps) {
  const templateAreas = useBreakpointValue({
    base: `"side" "article"`,
    md: `"socials article article article side side"`
  });

  const metaStackDirection = useBreakpointValue<'row' | 'column'>({
    base: 'row',
    md: 'column'
  });

  return (
    <Grid mt="2em" templateAreas={templateAreas}>
      <GridItem gridArea="socials"></GridItem>

      <GridItem gridArea="article">
        <Box maxW="800px" m="auto">
          <Box id="prose" as="article">
            {mdxRendered}
          </Box>
        </Box>
      </GridItem>

      <GridItem gridArea="side">
        <Stack direction={metaStackDirection} spacing="2em">
          <BlogPostAuthor />
          {blogPost.tags && <Tags tags={blogPost.tags} />}
        </Stack>
      </GridItem>
    </Grid>
  );
}

export interface BlogPostProps {
  mdxRendered: JSX.Element;
  blogPost: Omit<CoreBlogPostFields, 'body'>;
}

export default function BlogPost({ mdxRendered, blogPost }: BlogPostProps): JSX.Element {
  return (
    <>
      <Box>
        {blogPost.image && (
          <AspectRatio ratio={21 / 9} w="100%">
            <Image
              src={blogPost.image}
              alt="Title image"
              w="100%"
              h="100%"
              objectFit="cover"
              m="auto"
            />
          </AspectRatio>
        )}
      </Box>

      <Body blogPost={blogPost} mdxRendered={mdxRendered}></Body>
    </>
  );
}
