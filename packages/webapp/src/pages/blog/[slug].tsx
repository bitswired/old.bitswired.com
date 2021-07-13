/* eslint-disable unicorn/no-abusive-eslint-disable */
import { Box } from '@chakra-ui/react';
import BlogPost from 'components/Blog/BlogPost';
import { mdxComponents } from 'components/MDX';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';

// eslint-disable-next-line
const fs = require('fs').promises;
// eslint-disable-next-line
const path = require('path');

interface BlogPostPageProps {
  meta: BlogPostMeta;
  mdxSource: any;
}

export default function BlogPostPage({ meta, mdxSource }: BlogPostPageProps): JSX.Element {
  return (
    <>
      <Box mb="75px" />
      <BlogPost meta={meta} mdxRendered={<MDXRemote {...mdxSource} components={mdxComponents} />} />
      <Box mb="100px" />
    </>
  );
}

const CONTENT_PATH = path.join(process.cwd(), 'src/content');

async function getAllPosts() {
  const posts = await fs.readdir(CONTENT_PATH);

  const tasks = posts.map(async (p: any) => {
    const fullpath = path.join(CONTENT_PATH, p);
    const fileContents = await fs.readFile(fullpath, 'utf8');
    const { data, content } = matter(fileContents);
    return { data, content };
  });
  return await (await Promise.all(tasks)).filter((x: any) => x.data.published);
}

export async function getStaticProps({ params }: any) {
  const posts = await getAllPosts();

  const { data, content }: any = posts.find((p: any) => p.data.slug === params.slug);

  const mdxSource = await serialize(content);

  return {
    props: { meta: data, mdxSource }
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((x: any) => ({
      params: {
        slug: x.data.slug
      }
    })),
    fallback: false
  };
}
