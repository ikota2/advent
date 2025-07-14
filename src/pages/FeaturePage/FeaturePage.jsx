import { Layout } from '../../app/layout';
import { Cards } from '../../shared/ui/cards';
import { getFeatureData } from '../../features/config/featuresCfg.jsx';

export const FeaturePage = ({ featureKey }) => {
	const featureData = getFeatureData(featureKey);
	if (!featureData) {
		return (
			<Layout>
				<div>Feature not found</div>
			</Layout>
		);
	}
	return (
		<Layout>
			<Cards paths={featureData.items} />
		</Layout>
	);
};
