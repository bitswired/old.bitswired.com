interface Route {
  path: string;
  name: string;
}

interface BlogPostMeta {
  title: string;
  image: string;
  tags: string[];
  slug: string;
  published: boolean;
}
