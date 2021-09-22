import { Box } from '@chakra-ui/react';
import Link from 'next/link';

export default function Logo(): JSX.Element {
  return (
    <Link href="/">
      <a href="/">
        <Box fontSize="3xl" color="primary">
          Bitswired
        </Box>
      </a>
    </Link>
  );
}
