import { AspectRatio, Box, HStack, Text, VStack, Wrap } from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import Button from 'components/Button';
import InternalLink from 'components/InternalLink';
import LazyImage from 'components/LazyImage';

export interface BlogPostCardProps {
  ratio: number | number[];
  meta: BlogPostMeta;
  sizes: string;
}

export default function BlogPostCard({ ratio, meta, sizes }: BlogPostCardProps): JSX.Element {
  return (
    <Box
      transition="box-shadow 0.2s ease, transform 0.1s ease-out"
      w="100%"
      rounded="md"
      _hover={{
        shadow: 'xl',
        transform: 'translate(0, -2em)',
        img: {
          transform: 'scale(1.2)'
        }
        // '.taz': {
        //   transform: 'scale(0.95)'
        // }
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
      <VStack w="100%" overflow="hidden" py="1em" px="1em" align="start" spacing="0.5em">
        <Text fontSize="1.4em" fontWeight="bold" textTransform="capitalize">
          {meta.title}
        </Text>

        <HStack align="center" justify="end">
          <Text fontSize="0.8em" color="gray.500" textTransform="uppercase">
            {meta.category}
          </Text>
          <Text fontSize="0.8em" color="gray.500">
            -
          </Text>
          <Text fontSize="0.8em" color="gray.500">
            {meta.readMinutes} min
          </Text>

          <InternalLink href={`/blog/${meta.slug}`}>
            <Button variant="primary-link" marginLeft="auto" size="sm">
              READ MORE
            </Button>
          </InternalLink>
        </HStack>

        {meta.series && (
          <HStack align="center" justify="end">
            <Text fontSize="0.7em" color="gray.500">
              Series: {meta.series}
            </Text>
          </HStack>
        )}

        <Text color="gray.600" noOfLines={2} fontSize="0.9em">
          {meta.description}
        </Text>
        <Wrap>
          {meta.tags.map((tag) => (
            <Tag bgColor="lightblue" key={tag} size="md">
              {tag}
            </Tag>
          ))}
        </Wrap>
      </VStack>
    </Box>
  );
}

// export default withRipples(BlogPostCard, { display: 'block' });
