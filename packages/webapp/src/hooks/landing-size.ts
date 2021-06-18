import { useMediaQuery } from '@chakra-ui/react';

export default function (): SizeVariant {
  const [sm, md] = useMediaQuery(['(max-width: 1199px)', '(max-width: 1669px)']);

  //console.log(sm, md, !md);

  if (sm) return 'sm';
  return md ? 'md' : 'lg';
}
