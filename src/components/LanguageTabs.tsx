import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export type LanguageKey = 'python' | 'rust' | 'jvm' | 'dotnet' | 'go' | 'javascript';

type Props = {
  children: React.ReactNode;
  defaultValue?: LanguageKey;
  values?: {value: LanguageKey; label: string}[];
};

const defaultValues: Props['values'] = [
  {value: 'python', label: 'Python'},
  {value: 'rust', label: 'Rust'},
  {value: 'jvm', label: 'JVM'},
  {value: 'dotnet', label: '.NET'},
  {value: 'go', label: 'Go'},
  {value: 'javascript', label: 'JavaScript'},
];

export default function LanguageTabs({children, defaultValue = 'python', values = defaultValues}: Props) {
  return (
    <Tabs groupId="language" defaultValue={defaultValue} values={values}>
      {children}
    </Tabs>
  );
}

export {TabItem};
