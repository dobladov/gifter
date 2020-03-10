module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "camelcase": "off",
        "react/jsx-filename-extension": [0],
        "import/no-unresolved": "off",
        "import/extensions": "off",
        'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx', '.css'] }],
        "jsx-a11y/control-has-associated-label": "off",
        "no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "varsIgnorePattern": "[I]\\w+"
            }
        ]
    }
};