const BASE_IMG_OPTI =
  "https://bitswired.fra1.digitaloceanspaces.com/images-opti";

export default function (type: string, asset: string) {
  if (type === "blog") {
    return `${BASE_IMG_OPTI}/${asset}@blog.webp`;
  } else {
    return `${BASE_IMG_OPTI}/${asset}`;
  }
}
