module.exports = {
	extends: [
		"plugin:@typescript-eslint/recommended",
		"@nuxtjs/eslint-config-typescript",
		"plugin:vue/recommended",
		"plugin:prettier/recommended",
	],
	rules: {
		"no-console": ["warn", { allow: ["warn", "error"] }],
		"vue/no-v-html": 0,
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"no-use-before-define": "off",
		"vue/attribute-hyphenation": "off",
		"vue/multi-word-component-names": "off",
		"@typescript-eslint/no-use-before-define": ["error"],
		"no-empty-function": "off",
		"@typescript-eslint/no-empty-function": ["error"],
	},
};
