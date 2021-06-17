import { useMutation, useQuery } from '@apollo/client';
import {
  CoreTagFields,
  CreateTagInput,
  GetTags,
  Mutations,
  Queries,
  UpdateTagInput
} from '@bitswired-web/graphql';

export function useGetTags(id?: number) {
  const variables = id ? { where: { _eq: { id } } } : undefined;
  console.log(variables);

  const { data, loading, error } = useQuery<GetTags>(Queries.GET_TAGS, { variables });

  const tags: CoreTagFields[] | undefined = data?.tags;

  return { tags, loading, error };
}

export function useCreateTag() {
  const [mutate, { data, loading, error }] = useMutation(Mutations.CREATE_TAG, {
    refetchQueries: [{ query: Queries.GET_TAGS }]
  });

  const createTag = (tag: CreateTagInput) => {
    mutate({ variables: { tag } });
  };

  return { createTag, data, loading, error };
}

export function useUpdateTag() {
  const [mutate, { data, loading, error }] = useMutation(Mutations.UPDATE_TAG, {
    refetchQueries: [{ query: Queries.GET_TAGS }]
  });

  const updateTag = (tag: UpdateTagInput) => {
    mutate({ variables: { tag } });
  };

  return { updateTag, data, loading, error };
}
