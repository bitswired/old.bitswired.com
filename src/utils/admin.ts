/* eslint-disable unicorn/no-abusive-eslint-disable */
import JoiDate from '@joi/date';
import matter from 'gray-matter';
import * as JoiImport from 'joi';
import _ from 'lodash';

// eslint-disable-next-line
const fs = require('fs').promises;
// eslint-disable-next-line
const path = require('path');

const Joi = JoiImport.extend(JoiDate);

const CONTENT_PATH = path.join(process.cwd(), 'src/content');

const metaSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  readMinutes: Joi.number().required(),
  image: Joi.string().uri().required(),
  tags: Joi.array().items(Joi.string()).required(),
  category: Joi.string().required(),
  slug: Joi.string().required(),
  published: Joi.boolean().required(),
  datePublished: Joi.date().format('YYYY-MM-DD').raw().required(),
  dateModified: Joi.date().format('YYYY-MM-DD').raw().required(),
  images: Joi.array().items(Joi.string()).required()
});

interface ParsedPost {
  meta: any;
  content: any;
  data: any;
}

export async function getAllPosts(): Promise<ParsedPost[]> {
  return []
  const posts = await fs.readdir(CONTENT_PATH);

  const tasks: Promise<ParsedPost>[] = posts.map(async (p: any) => {
    const fullpath = path.join(CONTENT_PATH, p);

    const mdxPath = `${fullpath}/index.mdx`;
    const dataPath = `${fullpath}/data.json`;

    const postData = JSON.parse(await fs.readFile(dataPath, 'utf8'));

    const fileContents = await fs.readFile(mdxPath, 'utf8');
    const { data, content } = matter(fileContents);
    const d = metaSchema.validate(data, { convert: true });
    if (d.error) throw new Error(d.error);

    return { meta: d.value, content, data: postData };
  });

  return _.chain(await Promise.all(tasks))
    .filter((x) => x.meta.published)
    .sortBy((x) => Date.parse(x.meta.datePublished))
    .value();
}

export function getFeaturedPost(parsedPosts: ParsedPost[]) {
  return parsedPosts.slice(0, 3).map((x) => x.meta);
}
