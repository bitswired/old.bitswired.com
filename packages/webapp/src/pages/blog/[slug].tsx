import BlogPost from 'components/Blog/BlogPost';
import { mdxComponents } from 'components/MDX';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import { getAllPosts } from 'utils/admin';

interface BlogPostPageProps {
  meta: BlogPostMeta;
  mdxSource: any;
}

export default function BlogPostPage({ meta, mdxSource }: BlogPostPageProps): JSX.Element {
  return (
    <BlogPost meta={meta} mdxRendered={<MDXRemote {...mdxSource} components={mdxComponents} />} />
  );
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
