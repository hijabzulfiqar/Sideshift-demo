'use client';

import Link, { type LinkProps } from 'next/link';
import {
  forwardRef,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react';
import { appendAttributionToUrl } from '@/lib/attribution';

type TrackedLinkProps = Omit<LinkProps, 'href'> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
    children?: ReactNode;
  };

const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  function TrackedLink({ href, children, ...rest }, ref) {
    const [finalHref, setFinalHref] = useState(href);

    useEffect(() => {
      setFinalHref(appendAttributionToUrl(href));
    }, [href]);

    return (
      <Link href={finalHref} ref={ref} {...rest}>
        {children}
      </Link>
    );
  },
);

export default TrackedLink;