import { cookies, headers } from 'next/headers';

import { Button } from '@nextui-org/button';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '@lib/supabase/db.types';

const Page = async (): Promise<JSX.Element> => {
	const supabase = createServerComponentSupabaseClient<Database>({
		headers,
		cookies,
	});

	const res = await supabase.from('posts').select('*');
	return (
		<div>
			Home
			<Button color="primary" className="mx-5">
				hello nextui
			</Button>
			<pre className="container mx-auto">{JSON.stringify(res, null, 2)}</pre>
		</div>
	);
};

export default Page;
