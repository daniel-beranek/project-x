'use client';

import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import type { SupabaseClient } from '@supabase/auth-helpers-nextjs';

import { useContextRequired } from '../hooks/useContextRequired';
import type { Database } from './db.types';

type SupabaseContext = {
	supabase: SupabaseClient<Database>;
};

type ProviderProps = {
	children: React.ReactNode;
};

type UseSupabase = () => SupabaseContext;

export const SupabaseContext = createContext<SupabaseContext | undefined>(
	undefined
);

export const SupabaseProvider: React.FC<ProviderProps> = ({ children }) => {
	const [supabase] = useState(() => createBrowserSupabaseClient());
	const router = useRouter();

	useEffect(() => {
		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange(() => {
			router.refresh();
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [router, supabase]);

	return (
		<SupabaseContext.Provider value={{ supabase }}>
			{children}
		</SupabaseContext.Provider>
	);
};

export const useSupabase: UseSupabase = () =>
	useContextRequired(SupabaseContext);
