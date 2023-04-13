const path = require('path');

const buildTscCommand = (filenames) => {
	const relativeFilenames = filenames.map((filename) =>
		path.relative(process.cwd(), filename)
	);

	const ignoredFilenames = [
		'.editorconfig',
		'.eslintrc.js',
		'.lintstagedrc.js',
		'next.config.js',
		'postcss.config.js',
		'tailwind.config.js',
	];

	const filesToTypeCheck = relativeFilenames.filter(
		(name) => !ignoredFilenames.includes(name)
	);

	return `tsc-files -p ./tsconfig.json --pretty ${filesToTypeCheck.join(' ')}`;
};

module.exports = {
	'*.{js,jsx,ts,tsx}': [
		'prettier --write',
		'eslint --ext .ts,.tsx,.js,.jsx',
		buildTscCommand,
	],
};
