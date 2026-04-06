import React from 'react';

export default function StatusBadge({children}: {children: React.ReactNode}) {
  return <span className="asterStatus">{children}</span>;
}
