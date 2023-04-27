import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import type { Database } from '@/lib/supabase/db.types';
import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';

type Middleware = (req: NextRequest) => Promise<NextResponse>;

export const middleware: Middleware = async (req) => {
	const res = NextResponse.next();
	const supabase = createMiddlewareSupabaseClient<Database>({ req, res });
	await supabase.auth.getSession();
	return res;
};
