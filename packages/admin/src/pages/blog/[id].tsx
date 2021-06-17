import { useRouter } from 'next/router';
import EditBlogPost from '../../components/blog/edit';
import { useGetBlogPosts } from '../../hooks/blog-post';

export default function () {
  const {
    query: { id }
  } = useRouter();

  if (!id) return null;

  const { blogPosts } = useGetBlogPosts(parseInt(id));

  if (!blogPosts) return null;

  return (
    <>
      <EditBlogPost blogPost={blogPosts[0]} />
    </>
  );
}
