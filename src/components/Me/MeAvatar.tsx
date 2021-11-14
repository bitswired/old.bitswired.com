import { Avatar, AvatarProps } from '@chakra-ui/avatar';
import { IMAGE_ME } from 'utils/static-urls';

export type MeAvatarProps = AvatarProps;

export default function MeAvatar(props: MeAvatarProps): JSX.Element {
  return <Avatar {...props} zIndex={0} name="Jimi Vaubien" src={IMAGE_ME} />;
}
