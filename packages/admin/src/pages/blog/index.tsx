import Grid from '@material-ui/core/Grid';
import { BlogPostCard } from '../../components/blog/card';
import CreateBlogPost from '../../components/blog/create';
import { useGetBlogPosts } from '../../hooks/blog-post';

export default function () {
  const { blogPosts, error, loading } = useGetBlogPosts();

  return (
    <>
      <CreateBlogPost />
      <Grid container spacing={3}>
        {blogPosts &&
          blogPosts.map((x) => (
            <Grid item xs={3}>
              <BlogPostCard key={x.title} blogPost={x} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
