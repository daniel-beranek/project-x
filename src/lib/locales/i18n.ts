import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
	formats: undefined,
	getMessageFallback: (): string => 'Missing translation',
	messages: (await import(`./messages/${locale}.json`)).default,
	now: undefined,
	timeZone: undefined,
}));
