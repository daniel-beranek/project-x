'use client';

import { useForm } from 'react-hook-form';
import validator from 'validator';

import { useSupabase } from '../supabase/supabaseProvider';

type FormValues = {
	email: string;
};

export const RegisterForm: React.FC = () => {
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
			<h2 className="text-2xl font-bold">Register</h2>
			<form
				// TODO: Add validator.normalizeEmail()
				onSubmit={handleSubmit(async ({ email }) => {
					const res = await supabase.auth.signInWithOtp({ email });

					console.log(res);
				})}
				className="flex flex-col gap-2 bg-green-100 p-5 rounded-lg"
			>
				<div>Google Provider</div>
				<div>Facebook Provider</div>
				<div>?Apple? Provider</div>
				<input
					type="email"
					formNoValidate
					placeholder="Email"
					className="border rounded-md p-2"
					{...register('email', {
						required: 'Field is required',
						validate: (value) => validator.isEmail(value) || 'Invalid email',
					})}
				/>
				<p>
					Form messages:{' '}
					<span className="font-bold">{errors.email?.message}</span>
				</p>
				<button type="submit" className="border rounded-md p-2 bg-green-300">
					Submit
				</button>
			</form>
		</div>
	);
};
