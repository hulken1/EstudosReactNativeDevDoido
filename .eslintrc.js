module.exports = {
    "env": {
        "commonjs": true,
        "es2020": true,
        "node": true
    },
    "extends": ["eslint:recommended", "prettier"],
    "parserOptions": {
        "ecmaVersion": 11
    },
    parser: 'babel-eslint',
    "rules": {
        'import/prefer-default-export': 'off'
    }
};
