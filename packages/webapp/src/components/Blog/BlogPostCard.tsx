import { AspectRatio, Box, Heading, Text } from '@chakra-ui/react';
import LazyImage from 'components/LazyImage';

export interface BlogPostCardProps {
  ratio: number;
  title: string;
  image: string;
  description: string;
}

export default function BlogPostCard({
  ratio,
  title,
  description,
  image
}: BlogPostCardProps): JSX.Element {
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
      <Box w="100%" overflow="hidden">
        <Heading as="h2" display="inline">
          {title}
        </Heading>
        <Text display="inline" mx="0.5em">
          --
        </Text>
        <Text display="inline">{description}</Text>
      </Box>
      <AspectRatio
        className="taz"
        width="100%"
        ratio={ratio}
        overflow="hidden"
        rounded="md"
        transition="transform 0.1s">
        <LazyImage w="100%" h="100%" objectFit="cover" transition="transform 0.1s" src={image} />
      </AspectRatio>
    </Box>
  );
}

// export default withRipples(BlogPostCard, { display: 'block' });
