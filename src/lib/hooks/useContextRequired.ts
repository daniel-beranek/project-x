import { useContext } from 'react';
import type { Context } from 'react';

export const useContextRequired = <T>(context: Context<T>): NonNullable<T> => {
	const requiredContext = useContext(context);
	if (requiredContext === undefined || requiredContext === null) {
		throw new Error(
			`[${context.displayName}] Context is not active, make sure to use it inside a Provider.`
		);
	}

	return requiredContext;
};
