import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export type LanguageKey = 'python' | 'typescript';

type Props = {
  children: React.ReactNode;
  defaultValue?: LanguageKey;
  values?: {value: LanguageKey; label: string}[];
};

const defaultValues: Props['values'] = [
  {value: 'python', label: 'Python'},
  {value: 'typescript', label: 'TypeScript'},
];

export default function LanguageTabs({children, defaultValue = 'python', values = defaultValues}: Props) {
  return (
    <Tabs groupId="language" defaultValue={defaultValue} values={values}>
      {children}
    </Tabs>
  );
}

export {TabItem};
