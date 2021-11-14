import { Box } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import { TechArticleJsonLd } from 'rich-results';

import BlogPostCard from './BlogPostCard';

const MotionBox = motion(Box);

interface CellProps {
  width: string | number;
  meta: BlogPostMeta;
  ratio: number;
}

function Cell({ width, meta, ratio }: CellProps) {
  if (!meta) return null;

  const url = `https://www.bitswired.com/blog/${meta.slug}`;
  return (
    <MotionBox
      // whileHover={{ translateY: '-2em' }}
      animate={{ scale: 1, transition: { delay: 0.5 } }}
      initial={{ scale: 0 }}
      as="article"
      display="inline-block"
      w={['100%', '50%', width]}
      verticalAlign="middle"
      mt={['10vh', '10vh', '10vh']}
      px="5vw">
      <BlogPostCard
        meta={meta}
        ratio={[16 / 9, 16 / 9, ratio]}
        sizes="(min-width: 48em) 50vw, 100vw"
      />
      <TechArticleJsonLd
        url={url}
        headline={meta.title}
        description={meta.description}
        image={meta.images}
        datePublished={meta.datePublished}
        dateModified={meta.dateModified}
      />
    </MotionBox>
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

      <Cell meta={metas[4]} width="33%" ratio={16 / 9} />
      <Cell meta={metas[5]} width="33%" ratio={16 / 9} />
      <Cell meta={metas[6]} width="33%" ratio={16 / 9} />
    </Box>
  );
}
