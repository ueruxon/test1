const path = require('path');

module.exports = {
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    plugins: ['cumul8', 'react', 'import', 'jsx-a11y'],
    env: {
        browser: true
    },
    globals: {
        document: false
    },
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false
            }
        ],
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true
            }
        ],
        'class-methods-use-this': [
            'error',
            {
                exceptMethods: [
                    'render',
                    'getInitialState',
                    'getDefaultProps',
                    'componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'componentDidUpdate',
                    'componentWillUnmount'
                ]
            }
        ],
        indent: 0
    },
    settings: {
        'import/resolver': 'webpack'
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    }
};
