import React, { useState } from 'react';
import classes from './tag-input.module.css';
import { Layout } from '../../../app/layout/index.js';
import FeatureName from '../../../shared/ui/featureName/featureName.jsx';

export const TagInput = () => {
	const [tags, setTags] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const addTag = (text) => {
		const trimmed = text.trim();
		if (!tags.includes(trimmed) && trimmed.length > 0) {
			setTags([...tags, trimmed]);
		}
		setInputValue('');
	};
	const removeTag = (indexToRemove) => {
		setTags(tags.filter((_, i) => i !== indexToRemove));
	};
	const handleRemove = (index) => (e) => {
		e.stopPropagation();
		removeTag(index);
	};
	const handleKeyDown = (e) => {
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

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
		<Layout>
			<FeatureName />
			<div className={classes.tagInputContainer}>
				{tags.map((tag, index) => (
					<div key={index} className={classes.tagItem}>
						<span className={classes.tagText}>{tag}</span>
						<button
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
