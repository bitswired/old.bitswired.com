import { Box } from '@chakra-ui/react';

import BlogPostCard from './BlogPostCard';

interface BlogPosthSum {
  title: string;
  description: string;
  image: string;
}

interface CellProps {
  width: string | number;
  blogPostSum: BlogPosthSum;
  ratio: number;
}

function Cell({ width, blogPostSum, ratio }: CellProps) {
  if (!blogPostSum) return null;

  return (
    <Box
      as="article"
      display="inline-block"
      w={['100%', '50%', width]}
      verticalAlign="middle"
      mt="5vh"
      px="5vw">
      <BlogPostCard {...blogPostSum} ratio={ratio} />
    </Box>
  );
}

export interface BlogPostGridProps {
  blogPostSums: BlogPosthSum[];
}

export default function BlogPostGrid({ blogPostSums }: BlogPostGridProps): JSX.Element {
  return (
    <Box>
      <Cell blogPostSum={blogPostSums[0]} width="60%" ratio={4 / 3} />
      <Cell blogPostSum={blogPostSums[1]} width="40%" ratio={4 / 3} />

      <Cell blogPostSum={blogPostSums[2]} width="50%" ratio={16 / 9} />
      <Cell blogPostSum={blogPostSums[3]} width="50%" ratio={16 / 9} />

      <Cell blogPostSum={blogPostSums[4]} width="33%" ratio={4 / 3} />
      <Cell blogPostSum={blogPostSums[5]} width="33%" ratio={4 / 3} />
      <Cell blogPostSum={blogPostSums[6]} width="33%" ratio={4 / 3} />
    </Box>
  );
}
