import type { NextMiddleware } from 'next/server';
import { NextResponse } from 'next/server';

import type { Database } from '@/lib/supabase/db.types';
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import createMiddleware from 'next-intl/middleware';

export const middleware: NextMiddleware = async (req) => {
	const pathnameStartsWith_next = req.nextUrl.pathname.startsWith('/_next');
	const pathnameStartsWithApi = req.nextUrl.pathname.startsWith('/api');

	let res: NextResponse;
	if (pathnameStartsWithApi || pathnameStartsWith_next) {
		res = NextResponse.next();
	} else {
		const nextIntlMiddleware = createMiddleware({
			locales: ['cs', 'en'],
			defaultLocale: 'cs',
		});

		res = nextIntlMiddleware(req);
	}

	const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
	await supabase.auth.getSession();

	return res;
};
