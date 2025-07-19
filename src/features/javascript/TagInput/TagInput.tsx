import {
  type ChangeEvent,
  type FC,
  type KeyboardEvent,
  type MouseEvent,
  useState,
} from 'react';

import { Layout } from '@/app/layout';
import FeatureName from '@/shared/ui/featureName/featureName';
import classes from './tag-input.module.css';

export const TagInput: FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTag = (text: string): void => {
    const trimmed = text.trim();
    if (!tags.includes(trimmed) && trimmed.length > 0) {
      setTags([...tags, trimmed]);
    }
    setInputValue('');
  };

  const removeTag = (indexToRemove: number): void => {
    setTags(tags.filter((_, i) => i !== indexToRemove));
  };

  const handleRemove =
    (index: number) =>
    (e: MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      removeTag(index);
    };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === ' ' && inputValue.trim()) {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags.length - 1);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  return (
    <Layout>
      <FeatureName />
      <div className={classes.tagInputContainer}>
        {tags.map((tag, index) => (
          <div key={tag} className={classes.tagItem}>
            <span className={classes.tagText}>{tag}</span>
            <button
              type="button"
              onClick={handleRemove(index)}
              className={classes.deleteButton}
              aria-label={`Remove ${tag} tag`}
            >
              <span>×</span>
            </button>
          </div>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? 'Type tags...' : ''}
          className={classes.input}
        />
      </div>
    </Layout>
  );
};
