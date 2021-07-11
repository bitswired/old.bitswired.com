import { Box } from '@chakra-ui/react';
import BlogPost from 'components/Blog/BlogPost';
import { mdxComponents } from 'components/MDX';
import { MDXRemote } from 'next-mdx-remote';
import React from 'react';

interface BlogPostPageProps {
  blogPost: any;
  mdxSource: any;
}

export default function BlogPostPage({ blogPost, mdxSource }: BlogPostPageProps): JSX.Element {
  return (
    <>
      <Box mb="75px" />
      <BlogPost
        blogPost={blogPost}
        mdxRendered={<MDXRemote {...mdxSource} components={mdxComponents} />}
      />
      <Box mb="100px" />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { blogPost: undefined, mdxSource: undefined }
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: false };
}
