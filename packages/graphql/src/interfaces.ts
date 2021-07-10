/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateBlogPost
// ====================================================

export interface CreateBlogPost_createBlogPost_tags {
  __typename: "Tag";
  id: number;
  name: string;
}

export interface CreateBlogPost_createBlogPost {
  __typename: "BlogPost";
  id: number;
  title: string;
  body: string | null;
  description: string | null;
  image: string | null;
  slug: string | null;
  published: boolean;
  publishedAt: any | null;
  createdAt: any;
  updatedAt: any;
  tags: CreateBlogPost_createBlogPost_tags[] | null;
}

export interface CreateBlogPost {
  createBlogPost: CreateBlogPost_createBlogPost;
}

export interface CreateBlogPostVariables {
  blogPost: CreateBlogPostInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateBlogPost
// ====================================================

export interface UpdateBlogPost_updateBlogPost_tags {
  __typename: "Tag";
  id: number;
  name: string;
}

export interface UpdateBlogPost_updateBlogPost {
  __typename: "BlogPost";
  id: number;
  title: string;
  body: string | null;
  description: string | null;
  image: string | null;
  slug: string | null;
  published: boolean;
  publishedAt: any | null;
  createdAt: any;
  updatedAt: any;
  tags: UpdateBlogPost_updateBlogPost_tags[] | null;
}

export interface UpdateBlogPost {
  updateBlogPost: UpdateBlogPost_updateBlogPost;
}

export interface UpdateBlogPostVariables {
  blogPost: UpdateBlogPostInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateContact
// ====================================================

export interface CreateContact_createContact {
  __typename: "Contact";
  email: string;
  firstName: string | null;
  lastName: string | null;
}

export interface CreateContact {
  createContact: CreateContact_createContact;
}

export interface CreateContactVariables {
  contact: CreateContactInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTag
// ====================================================

export interface CreateTag_createTag {
  __typename: "Tag";
  id: number;
  name: string;
  createdAt: any;
  updatedAt: any;
}

export interface CreateTag {
  createTag: CreateTag_createTag;
}

export interface CreateTagVariables {
  tag: CreateTagInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateTag
// ====================================================

export interface UpdateTag_updateTag {
  __typename: "Tag";
  id: number;
  name: string;
  createdAt: any;
  updatedAt: any;
}

export interface UpdateTag {
  updateTag: UpdateTag_updateTag;
}

export interface UpdateTagVariables {
  tag: UpdateTagInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBlogPosts
// ====================================================

export interface GetBlogPosts_blogPosts_tags {
  __typename: "Tag";
  id: number;
  name: string;
}

export interface GetBlogPosts_blogPosts {
  __typename: "BlogPost";
  id: number;
  title: string;
  body: string | null;
  description: string | null;
  image: string | null;
  slug: string | null;
  published: boolean;
  publishedAt: any | null;
  createdAt: any;
  updatedAt: any;
  tags: GetBlogPosts_blogPosts_tags[] | null;
}

export interface GetBlogPosts {
  blogPosts: GetBlogPosts_blogPosts[];
}

export interface GetBlogPostsVariables {
  where?: WhereBlogPostInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTags
// ====================================================

export interface GetTags_tags {
  __typename: "Tag";
  id: number;
  name: string;
  createdAt: any;
  updatedAt: any;
}

export interface GetTags {
  tags: GetTags_tags[];
}

export interface GetTagsVariables {
  where?: WhereTagInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreBlogPostFields
// ====================================================

export interface CoreBlogPostFields_tags {
  __typename: "Tag";
  id: number;
  name: string;
}

export interface CoreBlogPostFields {
  __typename: "BlogPost";
  id: number;
  title: string;
  body: string | null;
  description: string | null;
  image: string | null;
  slug: string | null;
  published: boolean;
  publishedAt: any | null;
  createdAt: any;
  updatedAt: any;
  tags: CoreBlogPostFields_tags[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreContactFields
// ====================================================

export interface CoreContactFields {
  __typename: "Contact";
  email: string;
  firstName: string | null;
  lastName: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CoreTagFields
// ====================================================

export interface CoreTagFields {
  __typename: "Tag";
  id: number;
  name: string;
  createdAt: any;
  updatedAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateBlogPostInput {
  title: string;
}

export interface CreateContactInput {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
}

export interface CreateTagInput {
  name: string;
}

export interface OmitObjectType {
  body?: string | null;
  createdAt?: any | null;
  description?: string | null;
  id?: number | null;
  image?: string | null;
  published?: boolean | null;
  publishedAt?: any | null;
  slug?: string | null;
  title?: string | null;
  updatedAt?: any | null;
}

export interface UpdateBlogPostInput {
  body?: string | null;
  description?: string | null;
  id: number;
  image?: string | null;
  published?: boolean | null;
  publishedAt?: any | null;
  slug?: string | null;
  tags?: number[] | null;
  title?: string | null;
}

export interface UpdateTagInput {
  id: number;
  name: string;
}

export interface WhereBlogPostInput {
  _eq?: OmitObjectType | null;
}

export interface WhereTagInput {
  _eq?: WhereTagPartial | null;
}

export interface WhereTagPartial {
  createdAt?: any | null;
  id?: number | null;
  name?: string | null;
  updatedAt?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
