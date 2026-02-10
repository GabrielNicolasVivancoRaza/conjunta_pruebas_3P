export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        }, 
        rules: {
            semi: ['error', 'always'],
            'no-unused-vars': 'error',
            quotes: ['error', 'single']
        },
    }
];