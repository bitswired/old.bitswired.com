import BlogPost from 'components/Blog/BlogPost';
import { mdxComponents } from 'components/MDX';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import { BlogJsonLd } from 'next-seo';
import React from 'react';
import { getAllPosts } from 'utils/admin';

interface BlogPostPageProps {
  meta: BlogPostMeta;
  mdxSource: any;
}

export default function BlogPostPage({ meta, mdxSource }: BlogPostPageProps): JSX.Element {
  const url = `https://www.bitswired.com/blog/${meta.slug}`;
  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={url}
        openGraph={{
          url,
          title: meta.title,
          description: meta.description,
          images: meta.images.map(() => ({ url })),
          site_name: 'Bitswired'
        }}
        twitter={{
          handle: '@Bitswired',
          site: '@Bitswired'
        }}
      />
      <BlogJsonLd
        url={url}
        title={meta.title}
        images={meta.images}
        datePublished={meta.datePublished}
        dateModified={meta.dateModified}
        authorName="Jimi Vaubien"
        description={meta.description}
      />
      <BlogPost meta={meta} mdxRendered={<MDXRemote {...mdxSource} components={mdxComponents} />} />
    </>
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
