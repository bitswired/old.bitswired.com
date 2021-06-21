import { ApolloError, useMutation, useQuery } from '@apollo/client';
import {
  CoreTagFields,
  CreateTagInput,
  GetTags,
  Mutations,
  Queries,
  UpdateTagInput
} from '@bitswired-web/graphql';

interface HookCommon {
  loading: boolean;
  error: ApolloError;
}

interface UseGetTags extends HookCommon {
  tags: CoreTagFields[];
}

export function useGetTags(id?: number): UseGetTags {
  const variables = id ? { where: { _eq: { id } } } : undefined;

  const { data, loading, error } = useQuery<GetTags>(Queries.GET_TAGS, { variables });

  const tags: CoreTagFields[] | undefined = data?.tags;

  return { tags, loading, error };
}

interface UseCreateTag extends HookCommon {
  createTag: (tag: CreateTagInput) => void;
  data: any;
}

export function useCreateTag(): UseCreateTag {
  const [mutate, { data, loading, error }] = useMutation(Mutations.CREATE_TAG, {
    refetchQueries: [{ query: Queries.GET_TAGS }]
  });

  const createTag = (tag: CreateTagInput) => {
    mutate({ variables: { tag } });
  };

  return { createTag, data, loading, error };
}

interface UseUpdateTag extends HookCommon {
  updateTag: (tag: CreateTagInput) => void;
  data: any;
}

export function useUpdateTag(): UseUpdateTag {
  const [mutate, { data, loading, error }] = useMutation(Mutations.UPDATE_TAG, {
    refetchQueries: [{ query: Queries.GET_TAGS }]
  });

  const updateTag = (tag: UpdateTagInput) => {
    mutate({ variables: { tag } });
  };

  return { updateTag, data, loading, error };
}
