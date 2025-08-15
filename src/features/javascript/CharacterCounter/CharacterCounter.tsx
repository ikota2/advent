import { type ChangeEvent, useState } from 'react';

import FeatureName from '@/shared/ui/featureName/featureName';

export const CharacterCounter = () => {
  const [text, setText] = useState('');
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <>
      <FeatureName />
      <input
        type="text"
        value={text}
        onChange={handleChange}
        name="input-text"
        placeholder={'type something'}
      />
      <p>{text.length > 0 ? text.length : '0'} characters</p>
    </>
  );
};
