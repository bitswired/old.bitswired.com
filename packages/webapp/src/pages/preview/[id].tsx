import { CoreBlogPostFields, GetBlogPosts } from '@bitswired-web/graphql';
import { GET_BLOGPOSTS } from '@bitswired-web/graphql/dist/queries';
import BlogPost from 'components/Blog/BlogPost';
import { mdxComponents } from 'components/MDX';
import { GetServerSidePropsContext } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import apolloClient from 'utils/apollo-client';

interface BlogPostPreviewPageProps {
  blogPost: CoreBlogPostFields;
  mdxSource: any;
}

export default function BlogPostPreviewPage({
  blogPost,
  mdxSource
}: BlogPostPreviewPageProps): JSX.Element {
  return (
    <BlogPost
      blogPost={blogPost}
      mdxRendered={<MDXRemote {...mdxSource} components={mdxComponents} />}
    />
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  const b64Token = Buffer.from(
    process.env.BASIC_AUTH_USERNAME + ':' + process.env.BASIC_AUTH_PASSWORD
  ).toString('base64');

  const res = await apolloClient.query<GetBlogPosts>({
    query: GET_BLOGPOSTS,
    variables: {
      where: { _eq: { id: Number.parseInt(id as string) } }
    },
    context: {
      headers: {
        authorization: `Bearer ${b64Token}`
      }
    }
  });

  const blogPost = res.data.blogPosts[0];

  const mdxSource = await serialize(blogPost.body ?? '');

  return {
    props: { blogPost, mdxSource },
    fallback: false
  };
}
