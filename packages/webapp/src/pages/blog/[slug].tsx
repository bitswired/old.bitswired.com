import { CoreBlogPostFields, GetBlogPosts } from '@bitswired-web/graphql';
import { GET_BLOGPOSTS } from '@bitswired-web/graphql/dist/queries';
import { Box } from '@chakra-ui/react';
import BlogPost from 'components/Blog/BlogPost';
import { mdxComponents } from 'components/MDX';
import { GetStaticPropsContext } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import React from 'react';
import apolloClient from 'utils/apollo-client';

interface BlogPostPageProps {
  blogPost: CoreBlogPostFields;
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

export async function getStaticProps(context: GetStaticPropsContext) {
  if (!context.params) throw new Error('Missing params in context');
  const { slug } = context.params;

  const b64Token = Buffer.from(
    process.env.BASIC_AUTH_USERNAME + ':' + process.env.BASIC_AUTH_PASSWORD
  ).toString('base64');
  const res = await apolloClient.query<GetBlogPosts>({
    query: GET_BLOGPOSTS,
    variables: {
      where: { _eq: { slug: slug } }
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
    props: { blogPost, mdxSource }
  };
}

export async function getStaticPaths() {
  const b64Token = Buffer.from(
    process.env.BASIC_AUTH_USERNAME + ':' + process.env.BASIC_AUTH_PASSWORD
  ).toString('base64');

  const res = await apolloClient.query<GetBlogPosts>({
    query: GET_BLOGPOSTS,
    context: {
      headers: {
        authorization: `Bearer ${b64Token}`
      }
    }
  });

  const blogPosts = res.data.blogPosts;
  const paths = blogPosts.map((blogPost) => ({ params: { slug: blogPost.slug } }));

  return { paths, fallback: false };
}
