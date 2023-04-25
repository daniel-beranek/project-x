'use client';

import { useForm } from 'react-hook-form';
import validator from 'validator';

type FormValues = {
	email: string;
	password: string;
};

export const LoginForm: React.FC = () => {
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
				onSubmit={handleSubmit((data) => console.log(data))}
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
		</div>
	);
};
