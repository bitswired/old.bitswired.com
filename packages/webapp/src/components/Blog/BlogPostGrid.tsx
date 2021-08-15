import { Box } from '@chakra-ui/react';
import Link from 'next/link';

import BlogPostCard from './BlogPostCard';

interface CellProps {
  width: string | number;
  meta: BlogPostMeta;
  ratio: number;
}

function Cell({ width, meta, ratio }: CellProps) {
  if (!meta) return null;

  return (
    <Box
      as="article"
      display="inline-block"
      w={['100%', '50%', width]}
      verticalAlign="middle"
      mt="10vh"
      px="5vw">
      <Link href={`/blog/${meta.slug}`}>
        <a href={`/blog/${meta.slug}`}>
          <BlogPostCard meta={meta} ratio={ratio} />
        </a>
      </Link>
    </Box>
  );
}

export interface BlogPostGridProps {
  metas: BlogPostMeta[];
}

export default function BlogPostGrid({ metas }: BlogPostGridProps): JSX.Element {
  return (
    <Box>
      <Cell meta={metas[0]} width="60%" ratio={4 / 3} />
      <Cell meta={metas[1]} width="40%" ratio={4 / 3} />

      <Cell meta={metas[2]} width="50%" ratio={16 / 9} />
      <Cell meta={metas[3]} width="50%" ratio={16 / 9} />

      <Cell meta={metas[4]} width="33%" ratio={4 / 3} />
      <Cell meta={metas[5]} width="33%" ratio={4 / 3} />
      <Cell meta={metas[6]} width="33%" ratio={4 / 3} />
    </Box>
  );
}
