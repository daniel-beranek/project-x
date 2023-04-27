'use client';

import { useForm } from 'react-hook-form';

import { useSupabase } from '../supabase/supabaseProvider';

type FormValues = {
	password: string;
};

export const ResetPassword: React.FC = () => {
	const { supabase } = useSupabase();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		mode: 'onChange',
	});

	return (
		<div>
			<h2 className="text-2xl font-bold">(Re)Set Password</h2>
			<form
				onSubmit={handleSubmit(async ({ password }) => {
					const res = await supabase.auth.updateUser({
						password,
					});

					console.log(res);
				})}
				className="flex flex-col gap-2 bg-orange-100 p-5 rounded-lg"
			>
				<input
					type="password"
					formNoValidate
					placeholder="Password"
					className="border rounded-md p-2"
					{...register('password', {
						required: 'Field is required',
					})}
				/>
				<p>
					Form messages:{' '}
					<span className="font-bold">{errors.password?.message}</span>
				</p>
				<button type="submit" className="border rounded-md p-2 bg-orange-300">
					Submit
				</button>
			</form>
			<br />
			<button
				onClick={async (): Promise<void> => {
					const session = await supabase.auth.getSession();
					const resetPassword = await supabase.auth.resetPasswordForEmail(
						session.data.session?.user.email || '',
						{ redirectTo: 'http://localhost:8008/account' }
					);
					console.log(resetPassword, session.data.session?.user.email);
				}}
				type="button"
				className="border-4 border-orange-300 rounded-md p-2"
			>
				Reset Password
			</button>
		</div>
	);
};
