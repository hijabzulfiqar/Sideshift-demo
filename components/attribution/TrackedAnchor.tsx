'use client';

import {
  forwardRef,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
} from 'react';
import { appendAttributionToUrl } from '@/lib/attribution';

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

const TrackedAnchor = forwardRef<HTMLAnchorElement, TrackedAnchorProps>(
  function TrackedAnchor({ href, children, ...rest }, ref) {
    const [finalHref, setFinalHref] = useState(href);

    useEffect(() => {
      setFinalHref(appendAttributionToUrl(href));
    }, [href]);

    return (
      <a href={finalHref} ref={ref} {...rest}>
        {children}
      </a>
    );
  },
);

export default TrackedAnchor;