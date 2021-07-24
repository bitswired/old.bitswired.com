const BASE_IMG_OPTI = 'https://statics.bitswired.com/images-opti';

export default function resolveStaticAsset(type: string, asset: string): string {
  switch (type) {
    case 'general':
      return `${BASE_IMG_OPTI}/general/${asset}.webp`;
    case 'me':
      return `${BASE_IMG_OPTI}/me/${asset}.webp`;
    case 'blog':
      return `${BASE_IMG_OPTI}/${asset}@blog.webp`;
    default:
      throw new Error('Invalid asset type');
  }
}

export const IMAGE_HOME = resolveStaticAsset('general', 'home');

export const IMAGE_HOME_MOBILE = resolveStaticAsset('general', 'home-mobile');

export const IMAGE_WIREUP = resolveStaticAsset('general', 'wireup');

export const IMAGE_ME = resolveStaticAsset('me', 'jimzer-id-photo');
