import { AspectRatio, Box, Text } from '@chakra-ui/react';
import LazyImage from 'components/LazyImage';

export interface BlogPostCardProps {
  ratio: number;
  meta: BlogPostMeta;
  sizes: string;
}

export default function BlogPostCard({ ratio, meta, sizes }: BlogPostCardProps): JSX.Element {
  return (
    <Box
      cursor="pointer"
      _hover={{
        img: {
          transform: 'scale(1.2)'
        },
        '.taz': {
          transform: 'scale(0.95)'
        }
      }}>
      <AspectRatio
        className="taz"
        width="100%"
        ratio={ratio}
        overflow="hidden"
        rounded="md"
        transition="transform 0.1s">
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
        <Text display="inline" fontWeight="bold">
          {meta.title}
        </Text>
        <Text display="inline" mx="0.5em">
          -
        </Text>
        <Text display="inline">{meta.description}</Text>
      </Box>
    </Box>
  );
}

// export default withRipples(BlogPostCard, { display: 'block' });
