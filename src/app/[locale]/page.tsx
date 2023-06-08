import { cookies, headers } from 'next/headers';

import type { Database } from '@/lib/supabase/db.types';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';

const Page = async (): Promise<JSX.Element> => {
	const supabase = createServerComponentSupabaseClient<Database>({
		headers,
		cookies,
	});

	const res = await supabase.from('posts').select('*');
	return (
		<div>
			Home
			<pre className="container mx-auto">{JSON.stringify(res, null, 2)}</pre>
		</div>
	);
};

export default Page;
