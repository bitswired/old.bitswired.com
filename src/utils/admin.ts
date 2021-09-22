/* eslint-disable unicorn/no-abusive-eslint-disable */
import matter from 'gray-matter';

// eslint-disable-next-line
const fs = require('fs').promises;
// eslint-disable-next-line
const path = require('path');

const CONTENT_PATH = path.join(process.cwd(), 'src/content');

export async function getAllPosts() {
  const posts = await fs.readdir(CONTENT_PATH);

  const tasks = posts.map(async (p: any) => {
    const fullpath = path.join(CONTENT_PATH, p);
    const fileContents = await fs.readFile(fullpath, 'utf8');
    const { data, content } = matter(fileContents);
    return { data, content };
  });
  return await (await Promise.all(tasks)).filter((x: any) => x.data.published);
}
