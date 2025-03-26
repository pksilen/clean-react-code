import eslint from '@eslint/js';
import vitestPlugin from '@vitest/eslint-plugin';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import playwrightPlugin from 'eslint-plugin-playwright';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import * as regexpPlugin from 'eslint-plugin-regexp';
import testingLibraryPlugin from 'eslint-plugin-testing-library';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  { ignores: ['dist'] },
  {
    ...jsxA11yPlugin.flatConfigs.recommended,
    extends: [
      eslint.configs.recommended,
      regexpPlugin.configs['flat/recommended'],
      ...tsEslint.configs.strictTypeChecked,
      ...tsEslint.configs.stylisticTypeChecked
    ],
    files: ['src/**/*.{ts,tsx}', 'integration-tests/**/*.spec.ts'],
    languageOptions: {
      ...jsxA11yPlugin.flatConfigs.recommended.languageOptions,
      ecmaVersion: 2020,
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin
    },
    settings: { react: { version: '19.0' } },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'class-methods-use-this': 'error',
      complexity: 'error',
      'consistent-return': 'error',
      curly: 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'dot-notation': 'error',
      eqeqeq: 'error',
      'func-style': ['error', 'expression'],
      'guard-for-in': 'error',
      'logical-assignment-operators': 'error',
      'max-classes-per-file': ['error', 1],
      'max-depth': ['error', 3],
      'max-lines': ['error', 250],
      'max-nested-callbacks': ['error', 2],
      'max-statements': ['error', 9],
      'new-cap': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-await-in-loop': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-case-declarations': 'error',
      'no-console': 'error',
      'no-constructor-return': 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-invalid-this': 'error',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-param-reassign': 'error',
      'no-plusplus': 'error',
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-template-curly-in-string': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-expressions': 'error',
      'no-useless-assignment': 'error',
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': 'error',
      'object-shorthand': 'error',
      'one-var': ['error', 'never'],
      'operator-assignment': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-exponentiation-operator': 'error',
      'prefer-named-capture-group': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-regex-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      radix: 'error',
      'require-atomic-updates': 'error',
      'require-await': 'error',
      'sort-keys': 'error',
      'symbol-description': 'error',
      yoda: 'error',
      'react/checked-requires-onchange-or-readonly': 'error',
      'react/forward-ref-uses-ref': 'error',
      'react/function-component-definition': [
        'error',
        { namedComponents: 'arrow-function' }
      ],
      'react/hook-use-state': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-no-constructed-context-values': 'error',
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-props-no-spread-multi': 'error',
      'react/jsx-sort-props': 'error',
      'react/no-array-index-key': 'error',
      'react/no-danger': 'error',
      'react/no-multi-comp': 'error',
      'react/no-object-type-as-default-prop': 'error',
      'react/no-unstable-nested-components': 'error',
      'react/prefer-read-only-props': 'error',
      'react/self-closing-comp': 'error',
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/max-params': ['error', { max: 3 }],
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/no-confusing-void-expression': [
        'error',
        { ignoreArrowShorthand: true }
      ],
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-magic-numbers': [
        'error',
        { ignore: [0, 1, 2, 3, 5, 10, 100] }
      ],
      '@typescript-eslint/no-unnecessary-parameter-property-assignment':
        'error',
      '@typescript-eslint/no-unsafe-type-assertion': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/prefer-destructuring': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-readonly-parameter-types': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error'
    }
  },
  {
    extends: [testingLibraryPlugin.configs['flat/react']],
    files: ['src/**/*.test.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      'testing-library': testingLibraryPlugin,
      vitest: vitestPlugin
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
      'testing-library/prefer-explicit-assert': 'error',
      'testing-library/prefer-query-matchers': 'error',
      'testing-library/prefer-user-event': 'error',
      'vitest/consistent-test-it': ['error', { fn: 'it' }],
      'vitest/max-expects': ['error', { max: 2 }],
      'vitest/no-alias-methods': 'error',
      'vitest/no-conditional-expect': 'error',
      'vitest/no-conditional-in-test': 'error',
      'vitest/no-conditional-tests': 'error',
      'vitest/no-disabled-tests': 'error',
      'vitest/no-duplicate-hooks': 'error',
      'vitest/no-focused-tests': 'error',
      'vitest/no-standalone-expect': 'error',
      'vitest/no-test-return-statement': 'error',
      'vitest/prefer-called-with': 'error',
      'vitest/prefer-comparison-matcher': 'error',
      'vitest/prefer-each': 'error',
      'vitest/prefer-equality-matcher': 'error',
      'vitest/prefer-expect-assertions': 'error',
      'vitest/prefer-expect-resolves': 'error',
      'vitest/prefer-hooks-in-order': 'error',
      'vitest/prefer-hooks-on-top': 'error',
      'vitest/prefer-mock-promise-shorthand': 'error',
      'vitest/prefer-spy-on': 'error',
      'vitest/prefer-strict-boolean-matchers': 'error',
      'vitest/prefer-strict-equal': 'error',
      'vitest/prefer-to-be': 'error',
      'vitest/prefer-to-be-object': 'error',
      'vitest/prefer-to-contain': 'error',
      'vitest/prefer-to-have-length': 'error',
      'vitest/prefer-todo': 'error',
      'vitest/prefer-vi-mocked': 'error',
      'vitest/require-hook': 'error',
      'vitest/require-mock-type-parameters': 'error',
      'vitest/require-to-throw-message': 'error'
    }
  },
  {
    ...playwrightPlugin.configs['flat/recommended'],
    files: ['integration-tests/**/*.spec.ts'],
    rules: {
      ...playwrightPlugin.configs['flat/recommended'].rules,
      'playwright/max-expects': [
        'error',
        {
          max: 2
        }
      ],
      'playwright/no-commented-out-tests': 'error',
      'playwright/no-duplicate-hooks': 'error',
      'playwright/no-get-by-title': 'error',
      'playwright/no-nth-methods': 'error',
      'playwright/no-raw-locators': 'error',
      'playwright/no-slowed-test': 'error',
      'playwright/prefer-comparison-matcher': 'error',
      'playwright/prefer-equality-matcher': 'error',
      'playwright/prefer-hooks-in-order': 'error',
      'playwright/prefer-hooks-on-top': 'error',
      'playwright/prefer-lowercase-title': 'error',
      'playwright/prefer-native-locators': 'error',
      'playwright/prefer-locator': 'error',
      'playwright/prefer-strict-equal': 'error',
      'playwright/prefer-to-be': 'error',
      'playwright/prefer-to-contain': 'error',
      'playwright/prefer-to-have-count': 'error',
      'playwright/prefer-to-have-length': 'error',
      'playwright/require-hook': 'error',
      'playwright/require-to-throw-message': 'error',
      'playwright/require-top-level-describe': 'error',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off'
    }
  }
);
