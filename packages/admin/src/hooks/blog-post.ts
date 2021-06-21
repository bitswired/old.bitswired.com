import { ApolloError, useMutation, useQuery } from '@apollo/client';
import {
  CoreBlogPostFields,
  CreateBlogPostInput,
  GetBlogPosts,
  Mutations,
  Queries,
  UpdateBlogPostInput
} from '@bitswired-web/graphql';
import { toast } from 'react-toastify';

interface HookCommon {
  loading: boolean;
  error: ApolloError;
}

interface UseGetBlogPosts extends HookCommon {
  blogPosts: CoreBlogPostFields[];
}

export function useGetBlogPosts(id?: number): UseGetBlogPosts {
  const variables = id ? { where: { _eq: { id } } } : undefined;

  const { data, loading, error } = useQuery<GetBlogPosts>(Queries.GET_BLOGPOSTS, {
    variables
  });

  const blogPosts: CoreBlogPostFields[] | undefined = data?.blogPosts;

  return { blogPosts, loading, error };
}

interface UseCreateBlogPosts extends HookCommon {
  createBlogPost: (blogPost: CreateBlogPostInput) => void;
  data: any;
}

export function useCreateBlogPost(): UseCreateBlogPosts {
  const [mutate, { data, loading, error }] = useMutation(Mutations.CREATE_BLOGPOST, {
    refetchQueries: [{ query: Queries.GET_BLOGPOSTS }],
    onError: (error_) => {
      toast.error(error_.graphQLErrors.map((x) => x.message).join('\n'));
    }
  });

  const createBlogPost = (blogPost: CreateBlogPostInput) => {
    mutate({ variables: { blogPost } });
  };

  return { createBlogPost, data, loading, error };
}

interface UseUpdateBlogPosts extends HookCommon {
  updateBlogPost: (blogPost: UpdateBlogPostInput) => void;
  data: any;
}

export function useUpdateBlogPost(): UseUpdateBlogPosts {
  const [mutate, { data, loading, error }] = useMutation(Mutations.UPDATE_BLOGPOST, {
    refetchQueries: [{ query: Queries.GET_BLOGPOSTS }]
  });

  const updateBlogPost = (blogPost: UpdateBlogPostInput) => {
    mutate({ variables: { blogPost } });
  };

  return { updateBlogPost, data, loading, error };
}
