module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		// disallow parameter object manipulation except for specific exclusions
		'no-param-reassign': ['error', {
			props: true,
			ignorePropertyModificationsFor: [
				'state', // for vuex state
				'acc', // for reduce accumulators
				'e' // for e.returnvalue
			]
		}],
		'no-tabs': 0,
		'indent': ['error', 'tab'],
		'import/no-extraneous-dependencies': 0,
		'max-len': 0,
		'no-shadow': 0,
		'no-plusplus': 0,
		'func-names': ['warn', 'as-needed'],
		'no-underscore-dangle': 0,
		'no-useless-escape': 0,
		'linebreak-style': 0,
		'radix': 0,
		'prefer-destructuring': 0,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
			],
			env: {
				mocha: true,
			},
		},
	],
};
