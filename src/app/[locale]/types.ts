import type { ReactNode } from 'react';

export type LayoutProps = {
	children: ReactNode;
	params?: Record<string, string | string[]>;
};
