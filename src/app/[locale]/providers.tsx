'use client';

import { NextUIProvider } from '@nextui-org/react';

import { SupabaseProvider } from '@lib/supabase/supabaseProvider';
import type { ProvidersProps } from './types';

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
	return (
		<SupabaseProvider>
			<NextUIProvider>{children}</NextUIProvider>
		</SupabaseProvider>
	);
};
