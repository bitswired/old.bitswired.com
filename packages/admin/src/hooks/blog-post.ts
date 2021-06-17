import { useMutation, useQuery } from '@apollo/client';
import {
  CoreBlogPostFields,
  CreateBlogPostInput,
  GetBlogPosts,
  Mutations,
  Queries,
  UpdateBlogPostInput
} from '@bitswired-web/graphql';
import { toast } from 'react-toastify';

export function useGetBlogPosts(id?: number) {
  const variables = id ? { where: { _eq: { id } } } : undefined;

  const { data, loading, error } = useQuery<GetBlogPosts>(Queries.GET_BLOGPOSTS, {
    variables
  });

  const blogPosts: CoreBlogPostFields[] | undefined = data?.blogPosts;

  return { blogPosts, loading, error };
}

export function useCreateBlogPost() {
  const [mutate, { data, loading, error }] = useMutation(Mutations.CREATE_BLOGPOST, {
    refetchQueries: [{ query: Queries.GET_BLOGPOSTS }],
    onError: (err) => {
      toast.error(err.graphQLErrors.map((x) => x.message).join('\n'));
    }
  });

  const createBlogPost = (blogPost: CreateBlogPostInput) => {
    mutate({ variables: { blogPost } });
  };

  return { createBlogPost, data, loading, error };
}

export function useUpdateBlogPost() {
  const [mutate, { data, loading, error }] = useMutation(Mutations.UPDATE_BLOGPOST, {
    refetchQueries: [{ query: Queries.GET_BLOGPOSTS }]
  });

  const updateBlogPost = (blogPost: UpdateBlogPostInput) => {
    mutate({ variables: { blogPost } });
  };

  return { updateBlogPost, data, loading, error };
}
