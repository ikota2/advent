import { useState } from 'react';

import { Layout } from '../../../app/layout/index.js';
import FeatureName from '../../../shared/ui/featureName/featureName';

export const CharacterCounter = () => {
	const [text, setText] = useState('');
	function handleChange(e) {
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
