import Link, { LinkProps } from 'next/link';

interface InternalLinkProps extends LinkProps {
  children: JSX.Element | string;
}

export default function InternalLink(props: InternalLinkProps): JSX.Element {
  return (
    <Link {...props} scroll={false}>
      {props.children}
    </Link>
  );
}
