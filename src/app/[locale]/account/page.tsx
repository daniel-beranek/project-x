import type { NextPage } from 'next';

import { LoginForm } from '@/lib/components/LoginForm';
import { RegisterForm } from '@/lib/components/RegisterForm';
import { ResetPassword } from '@/lib/components/ResetPassword';

const Page: NextPage = () => {
	return (
		<div className="container mx-auto">
			<h1 className="text-center text-3xl font-bold">Profile</h1>
			<div className="my-5">
				<LoginForm />
				<hr className="my-5" />
				<RegisterForm />
				<hr className="my-5" />
			</div>
			<ResetPassword />
			<hr className="my-5" />
		</div>
	);
};

export default Page;
