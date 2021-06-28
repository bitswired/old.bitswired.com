import { Box } from '@chakra-ui/react';
import CodeBlock, { CodeBlockProps } from 'components/CodeBlock';
import LazyImage from 'components/LazyImage';

interface MDXImageProps {
  src: string;
  alt: string;
  title: string;
}

function MDXImage({ src, alt, title }: MDXImageProps): JSX.Element {
  return (
    <Box as="figure">
      <LazyImage
        mx="auto"
        src={src}
        alt={alt}
        w="100%"
        objectFit="contain"
        substituteHeight="400px"
      />
      <Box as="figcaption">{title}</Box>
    </Box>
  );
}

function MDXCodeBlock(props: CodeBlockProps): JSX.Element {
  return <CodeBlock {...props} />;
}

export const mdxComponents = {
  Figure: MDXImage,
  code: MDXCodeBlock
};
