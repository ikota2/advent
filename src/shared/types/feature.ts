// src/types/feature.ts

import type { ComponentType } from 'react';

export interface FeatureItem {
  day: number;
  name: string;
  component: ComponentType;
  isAble: boolean;
  path: string;
}

export interface FeatureCategory {
  title: string;
  key: string;
  component: ComponentType;
  items: FeatureItem[];
}

export interface FeaturesConfig {
  [key: string]: FeatureCategory;
}

export interface FeatureDisplayData {
  title: string;
  items: Array<{
    name: string;
    isAble: boolean;
    path: string;
  }>;
}

// Input types for creating features (before path is added)
export interface FeatureItemInput {
  day: number;
  name: string;
  component: ComponentType;
  isAble: boolean;
}

// Utility type for the feature config keys
export type FeatureCategoryKey = 'js' | 'css';
