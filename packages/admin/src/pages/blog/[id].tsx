import { useRouter } from 'next/router';

import EditBlogPost from '../../components/blog/edit';
import { useGetBlogPosts } from '../../hooks/blog-post';

export default function EditBlogPostPage(): JSX.Element {
  const {
    query: { id }
  } = useRouter();

  const { blogPosts } = useGetBlogPosts(Number.parseInt(id as string));

  if (!blogPosts) return null;

  return (
    <>
      <EditBlogPost blogPost={blogPosts[0]} />
    </>
  );
}
