module.exports = {
    trailingComma: 'es5',
    printWidth: 120,
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    bracketSpacing: false,
    overrides: [
        {
            files: ['*.json', '*.scss'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
