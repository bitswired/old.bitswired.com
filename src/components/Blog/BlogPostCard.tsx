import { AspectRatio, Box, Text } from '@chakra-ui/react';
import InternalLink from 'components/InternalLink';
import LazyImage from 'components/LazyImage';

export interface BlogPostCardProps {
  ratio: number | number[];
  meta: BlogPostMeta;
  sizes: string;
}

export default function BlogPostCard({ ratio, meta, sizes }: BlogPostCardProps): JSX.Element {
  return (
    <InternalLink href={`/blog/${meta.slug}`}>
      <a href={`/blog/${meta.slug}`} style={{ display: 'block', width: '100%' }}>
        <Box
          w="100%"
          cursor="pointer"
          _hover={{
            img: {
              transform: 'scale(1.2)'
            },
            '.taz': {
              transform: 'scale(0.95)'
            }
          }}
        >
          <AspectRatio
            className="taz"
            width="100%"
            ratio={ratio}
            overflow="hidden"
            rounded="sm"
            transition="transform 0.1s"
          >
            <LazyImage
              w="100%"
              h="100%"
              objectFit="cover"
              transition="transform 0.1s"
              src={meta.image}
              sizes={sizes}
            />
          </AspectRatio>
          <Box w="100%" overflow="hidden" p="1em">
            <Text fontSize="1em" color="gray.500" textTransform="uppercase">
              {meta.category}
            </Text>
            <Text fontSize="1.2em">{meta.title}</Text>
            <Text color="gray.600" noOfLines={2} fontSize="0.9em">
              {meta.description}
            </Text>
          </Box>
        </Box>
      </a>
    </InternalLink>
  );
}

// export default withRipples(BlogPostCard, { display: 'block' });
