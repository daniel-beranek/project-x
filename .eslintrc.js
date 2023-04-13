/** @type {import("eslint").Linter.Config}*/

module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@next/next/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
		ecmaFeatures: { jsx: true },
	},
	plugins: ['@typescript-eslint'],
	root: true,
	rules: {
		'@typescript-eslint/consistent-type-imports': 'error',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
		linkComponents: [{ name: 'Link', linkAttribute: 'to' }],
		'import/resolver': {
			node: {
				moduleDirectory: ['node_modules', '.'],
			},
		},
	},
};
