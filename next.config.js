/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./src/lib/locales/i18n.ts');

module.exports = withNextIntl({
	experimental: {
		appDir: true,
	},
});
