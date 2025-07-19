import type { ReactNode } from 'react';

export type FeatureKey = 'js' | 'css';

export interface BaseProps {
  className?: string;
  children?: ReactNode;
}

export interface FeaturePageProps {
  featureKey: FeatureKey;
}

// Utility types
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
