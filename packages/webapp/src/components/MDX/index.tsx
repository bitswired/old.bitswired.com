import { AspectRatio, Box, Code, CodeProps, Link, LinkProps } from '@chakra-ui/react';
import CodeBlock, { CodeBlockProps } from 'components/CodeBlock';
import LazyImage from 'components/LazyImage';
import NextLink from 'next/link';

interface MDXImageProps {
  src: string;
  alt: string;
  title: string;
  ratio: number;
  width: string;
}

function MDXImage({ src, alt, title, ratio, width }: MDXImageProps): JSX.Element {
  return (
    <Box as="figure">
      <AspectRatio ratio={ratio} width={width}>
        <LazyImage
          mx="auto"
          src={src}
          alt={alt}
          w="100%"
          objectFit="cover"
          substituteHeight="400px"
        />
      </AspectRatio>

      <Box as="figcaption">{title}</Box>
    </Box>
  );
}

function MDXCodeBlock(props: CodeBlockProps): JSX.Element {
  return <CodeBlock {...props} />;
}

function MDXLink(props: LinkProps): JSX.Element {
  if (props.href?.startsWith('/')) {
    const { href, ...p } = props;
    return (
      <NextLink href={href} passHref>
        <Link color="secondary" textDecoration="underline" {...p}>
          {props.children}
        </Link>
      </NextLink>
    );
  } else
    return (
      <Link color="secondary" textDecoration="underline" isExternal {...props}>
        {props.children}
      </Link>
    );
}

function MDXInlineCodeBlock({ children }: CodeProps): JSX.Element {
  return <Code bgColor="#EEE">{children}</Code>;
}

export const mdxComponents = {
  Figure: MDXImage,
  code: MDXCodeBlock,
  inlineCode: MDXInlineCodeBlock,
  a: MDXLink
};
