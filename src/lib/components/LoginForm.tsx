'use client';

import { useForm } from 'react-hook-form';
import validator from 'validator';

import { useSupabase } from '../supabase/supabaseProvider';

type FormValues = {
	email: string;
	password: string;
};

export const LoginForm: React.FC = () => {
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
			<h2 className="text-2xl font-bold">Login</h2>
			<form
				className="flex flex-col gap-2 bg-sky-100 p-5 rounded-lg"
				// TODO: Add validator.normalizeEmail()
				onSubmit={handleSubmit(async ({ email, password }) => {
					const res = await supabase.auth.signInWithPassword({
						email,
						password,
					});
					console.log(res);
				})}
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
				<input
					type="password"
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

				<button type="submit" className="border rounded-md p-2 bg-sky-300">
					Submit
				</button>
			</form>
			<br />
			<div className="space-x-3">
				<button
					onClick={async (): Promise<void> => {
						const session = await supabase.auth.getSession();
						console.log(session);
					}}
					type="button"
					className="border-4 border-sky-300 rounded-md p-2"
				>
					Check session
				</button>
				<button
					onClick={async (): Promise<void> => {
						await supabase.auth.signOut();
					}}
					type="button"
					className="border-4 border-sky-300 rounded-md p-2"
				>
					Log Out
				</button>
				<button
					onClick={async (): Promise<void> => {
						// TODO: handle error when user does not provide email access during authorization
						const res = await supabase.auth.signInWithOAuth({
							provider: 'facebook',
						});
						console.log(res.data, res.error);
					}}
					type="button"
					className="border-4 border-sky-300 rounded-md p-2"
				>
					Log In With Facebook
				</button>
				<button
					onClick={async (): Promise<void> => {
						const res = await supabase.auth.signInWithOAuth({
							provider: 'google',
						});
						console.log(res.data, res.error);
					}}
					type="button"
					className="border-4 border-sky-300 rounded-md p-2"
				>
					Log In With Google
				</button>
			</div>
		</div>
	);
};
