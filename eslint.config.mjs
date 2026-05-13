import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import jestPlugin from 'eslint-plugin-jest'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import globals from 'globals'

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'src/generated/**', 'coverage/**', 'eslint.config.mjs']
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module'
      },
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPlugin,
      jest: jestPlugin,
      'unused-imports': unusedImportsPlugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...jestPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',

      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
      '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never'
        }
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/dot-notation': ['error'],
      '@typescript-eslint/member-ordering': ['error', { default: ['constructor', 'field', 'signature', 'method'] }],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-shadow': ['error'],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'warn',
      'default-case': 'error',
      eqeqeq: 'error',
      'id-blacklist': 'error',
      'max-depth': 'error',
      'no-div-regex': 'error',
      'no-else-return': 'error',
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-loss-of-precision': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-nested-ternary': 'error',
      'no-proto': 'error',
      'no-trailing-spaces': 'error',
      'no-useless-concat': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      yoda: 'error',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': ['warn'],
      'jest/expect-expect': ['off']
    }
  }
]
