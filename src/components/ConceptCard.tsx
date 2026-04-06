import React from 'react';
import Link from '@docusaurus/Link';

export default function ConceptCard({title, href, children}: {title: string; href: string; children: React.ReactNode}) {
  return (
    <Link className="asterCard" to={href}>
      <div className="asterCard__title">{title}</div>
      <div className="asterCard__body">{children}</div>
    </Link>
  );
}
