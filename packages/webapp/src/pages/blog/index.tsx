import { CoreBlogPostFields, GetBlogPosts } from '@bitswired-web/graphql';
import { GET_BLOGPOSTS } from '@bitswired-web/graphql/dist/queries';
import BlogPostGrid from 'components/Blog/BlogPostGrid';
import React from 'react';
import apolloClient from 'utils/apollo-client';

interface BlogPostLandingPageProps {
  blogPosts: CoreBlogPostFields[];
}
export default function BlogLandingPage({ blogPosts }: BlogPostLandingPageProps): JSX.Element {
  return <BlogPostGrid blogPostSums={blogPosts as any} />;
}

export async function getStaticProps() {
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

  return {
    props: { blogPosts }
  };
}
