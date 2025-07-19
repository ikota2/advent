import { type ChangeEvent, useState } from 'react';

import { Layout } from '@/app/layout';
import FeatureName from '@/shared/ui/featureName/featureName';

export const CharacterCounter = () => {
  const [text, setText] = useState('');
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <Layout>
      <FeatureName />
      <input
        type="text"
        value={text}
        onChange={handleChange}
        name="input-text"
        placeholder={'type something'}
      />
      <p>{text.length > 0 ? text.length : '0'} characters</p>
    </Layout>
  );
};
