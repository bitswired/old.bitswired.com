interface Route {
  path: string;
  name: string;
}

interface BlogPostMeta {
  title: string;
  description: string;
  image: string;
  readMinutes: number;
  category: string;
  tags: string[];
  slug: string;
  published: boolean;
  datePublished: string;
  dateModified: string;
  images: string[];
}

type CodeLanguage = 'tsx' | 'jsx' | 'ts' | 'js' | 'python';
