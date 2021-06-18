const BASE_IMG_OPTI = 'https://bitswired.fra1.digitaloceanspaces.com/images-opti';

export default function (type: string, asset: string): string {
  return type === 'blog' ? `${BASE_IMG_OPTI}/${asset}@blog.webp` : `${BASE_IMG_OPTI}/${asset}`;
}
