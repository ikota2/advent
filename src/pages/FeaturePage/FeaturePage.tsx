import { Layout } from '@/app/layout';
import { getFeatureData } from '@/features/config';
import type { FeatureKey } from '@/shared/types';
import { Cards } from '@/shared/ui/cards';
import type { FC } from 'react';

interface FeaturePageProps {
  featureKey: FeatureKey;
}

export const FeaturePage: FC<FeaturePageProps> = ({ featureKey }) => {
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
