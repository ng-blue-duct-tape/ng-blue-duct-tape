module.exports = {
  extends: ['stylelint-config-rational-order', 'stylelint-config-prettier'],
  plugins: [
    'stylelint-scss',
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
    'stylelint-prettier',
  ],
  rules: {
    'prettier/prettier': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'selector-max-id': 2,
    'comment-no-empty': true,
    'declaration-block-no-duplicate-properties': true,
    'block-no-empty': [
      true,
      {
        ignore: ['comments'],
      },
    ],
    // 'no-descending-specificity': [
    //   true,
    //   {
    //     ignore: ['selectors-within-list'],
    //   },
    // ],
    'no-extra-semicolons': true,
    'color-no-invalid-hex': true,
    'number-no-trailing-zeros': true,
    'length-zero-no-unit': true,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute', 'class', 'id'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['box-orient'],
      },
    ],
    'max-nesting-depth': [
      5,
      {
        ignore: ['blockless-at-rules', 'pseudo-classes'],
      },
    ],
    indentation: 2,
    'color-named': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'unit-case': 'lower',
    'color-hex-case': 'lower',
    'number-leading-zero': 'always',
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['/^[-+][\\d$(]/'],
      },
    ],
    'font-family-no-duplicate-names': true,
    'string-quotes': 'single',
    'selector-max-compound-selectors': 6,
    'function-calc-no-unspaced-operator': true,
    'declaration-block-semicolon-newline-after': 'always',
    'block-opening-brace-space-before': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-after': [
      'always',
      {
        ignoreAtRules: ['if', 'else'],
      },
    ],
    'declaration-bang-space-after': 'never',
    'declaration-colon-space-after': 'always',
    'max-empty-lines': 1,
    'scss/at-else-empty-line-before': 'never',
  },
};
