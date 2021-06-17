module.exports = {
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    '@typescript-eslint/no-explicit-any': [0],
    'indent': [1, 2],
    'vue/script-indent': [1, 2,
      {
        'baseIndent': 0
      }
    ],
    'vue/html-indent': [1, 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }]
  },
}
