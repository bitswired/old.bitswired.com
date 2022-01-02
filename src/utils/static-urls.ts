const BASE_IMG_OPTI = 'https://statics.bitswired.com/images-opti';

export default function resolveStaticAsset(type: string, asset: string): string {
  switch (type) {
    case 'general':
      return `${BASE_IMG_OPTI}/general/${asset}.webp`;
    case 'me':
      return `${BASE_IMG_OPTI}/me/${asset}@960.webp`;
    default:
      throw new Error('Invalid asset type');
  }
}

export const VIDEO_HOME = 'https://statics.bitswired.com/videos/home.mp4';

export const IMAGE_HOME = resolveStaticAsset('general', 'home');

export const IMAGE_HOME_MOBILE = resolveStaticAsset('general', 'home-mobile');

export const IMAGE_WIREUP = resolveStaticAsset('general', 'wireup');

export const IMAGE_ME = resolveStaticAsset('me', 'jimzer-id-photo');

export function getResponsiveSet(src: string): string {
  const widths = [400, 640, 960, 1280, 1920, 2560];
  const srcSet = widths.map((w) => {
    const idx = src.lastIndexOf('.');
    const left = src.slice(0, idx);
    const right = src.slice(idx + 1, src.length);
    return `${left}@${w}.${right} ${w}w`;
  });

  return srcSet.join(',\n');
}
