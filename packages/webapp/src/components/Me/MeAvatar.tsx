import { Avatar, AvatarProps } from '@chakra-ui/react';
import urlBuilder from 'utils/static-urls';

const idUrl = urlBuilder('', 'me/jimzer-id-photo.webp');

export type MeAvatarProps = AvatarProps;

export default function MeAvatar(props: MeAvatarProps): JSX.Element {
  return <Avatar {...props} zIndex={0} name="Jimi Vaubien" src={idUrl} />;
}
