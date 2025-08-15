import { useRef, useEffect, useState } from 'react';
import classes from './resizable-text-area.module.css';
import FeatureName from '@/shared/ui/featureName/featureName';

export const ResizableTextArea: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState('');

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';

    const scrollHeight = textarea.scrollHeight;
    const style = window.getComputedStyle(textarea);
    const lineHeight = parseFloat(style.lineHeight) || 20;
    const paddingTop = parseFloat(style.paddingTop) || 0;
    const paddingBottom = parseFloat(style.paddingBottom) || 0;

    const contentHeight = scrollHeight - paddingTop - paddingBottom;
    const lines = Math.max(1, Math.ceil(contentHeight / lineHeight));
    const clampedLines = Math.max(1, Math.min(10, lines));

    const newHeight = clampedLines * lineHeight + paddingTop + paddingBottom;
    textarea.style.height = `${newHeight}px`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    requestAnimationFrame(adjustHeight);
  };

  useEffect(() => {
    requestAnimationFrame(adjustHeight);
  }, [value]);

  return (
    <>
      <FeatureName />
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        className={classes.textarea}
      />
    </>
  );
};
