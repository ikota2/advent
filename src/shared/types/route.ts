import type { ComponentType, ReactNode } from 'react';

export interface RouteConfig {
  path: string;
  component: ComponentType;
  crumb: ReactNode;
}

export type RouteList = RouteConfig[];
