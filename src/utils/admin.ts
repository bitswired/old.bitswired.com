/* eslint-disable unicorn/no-abusive-eslint-disable */
import JoiDate from '@joi/date';
import { Meta } from '@storybook/react';
import glob from 'glob-promise';
import * as JoiImport from 'joi';

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

export async function getAllPosts(): Promise<Meta[]> {
  const paths = await glob(`${CONTENT_PATH}/**/*meta.json`);

  const tasks = paths.map(async (path) => {
    const meta = await fs.readFile(path);
    return JSON.parse(meta);
  });

  return await Promise.all(tasks);
}

export function getFeaturedPost(metas: Meta[]) {
  return metas.slice(0, 3);
}
