import React from 'react';

type Tone = 'stable' | 'preview' | 'planned';

export default function BindingBadge({label, tone = 'preview'}: {label: string; tone?: Tone}) {
  return <span className={`asterBadge asterBadge--${tone}`}>{label}</span>;
}
