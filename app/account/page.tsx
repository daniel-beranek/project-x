import { LoginForm } from '@/lib/components/LoginForm';
import { RegisterForm } from '@/lib/components/RegisterForm';

const Page: React.FC = () => {
	return (
		<div className="container mx-auto">
			<h1 className="text-center text-3xl font-bold">Profile</h1>
			<div className="my-5">
				<LoginForm />
				<hr className="my-5" />
				<RegisterForm />
			</div>
		</div>
	);
};

export default Page;
