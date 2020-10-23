module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'arrow-parens': 0,
        'generator-star-spacing': 0,
        indent: 0,
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'never'
        }],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
            ignores: []
        }],
        'vue/require-default-prop': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1
        }],
        '@typescript-eslint/interface-name-prefix': 2,
        '@typescript-eslint/no-extraneous-class': 2,
        '@typescript-eslint/no-parameter-properties': 2,
        '@typescript-eslint/no-require-imports': 2,
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [2, {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: false
        }],
        '@typescript-eslint/type-annotation-spacing': 2
    },

    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],

            env: {
                jest: true
            }
        },
        {
            files: ['*.vue'],
            rules: {
                '@typescript-eslint/indent': 0
            }
        },
        {
            files: ['*.spec.ts'],
            rules: {
                'no-unused-expressions': 0
            }
        }
    ]
}
