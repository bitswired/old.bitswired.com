const BASE_IMG_OPTI = 'https://bitswired.fra1.digitaloceanspaces.com/images-opti';

export default function resolveStaticAsset(type: string, asset: string): string {
  return type === 'blog' ? `${BASE_IMG_OPTI}/${asset}@blog.webp` : `${BASE_IMG_OPTI}/${asset}`;
}

export const IMAGE_HOME = resolveStaticAsset('', 'home.webp');

export const IMAGE_HOME_MOBILE = resolveStaticAsset('', 'virtual-reality.webp');

export const IMAGE_WIREUP = resolveStaticAsset('', 'wireup.webp');
