module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint/eslint-plugin', '@typescript-eslint', 'unused-imports'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  root: true,
  env: {
    node: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }], // T[]禁止、Array<T>の書き方にする
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'], // classでgetter,setterを使用しない
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'], // objectのkey,valueの型で、Record<string, unknown>の書き方を禁止
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never'
      }
    ], // asで型付けを禁止(type assertion禁止)
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'], // interface禁止、typeのみ使用可
    '@typescript-eslint/dot-notation': ['error'], // objectのkeyを指定する時、できるだけドットを使用する
    '@typescript-eslint/lines-between-class-members': ['error'], // classのメンバに改行を強制
    '@typescript-eslint/member-ordering': ['error', { default: ['constructor', 'field', 'signature', 'method'] }], // classのメンバの宣言順を強制
    '@typescript-eslint/method-signature-style': ['error', 'property'], // functionの型をアロー関数で書く: func(arg: boolean): void -> func: (arg: boolean) => void
    '@typescript-eslint/no-explicit-any': 'error', // anyの禁止
    '@typescript-eslint/no-for-in-array': 'error', // Arrayでfor inを使うことを禁止
    '@typescript-eslint/no-implicit-any-catch': 'error', // catch((e)=>{})のeがanyになるのを防ぐ: unknownを使う
    '@typescript-eslint/no-inferrable-types': 'off', // 明示的に型が分かる変数でも型を付ける
    '@typescript-eslint/no-loss-of-precision': 'error', // number型の上限値(64ビット浮動小数点)超えた値を代入すると
    '@typescript-eslint/no-namespace': 'error', // namespace使用禁止
    '@typescript-eslint/no-shadow': ['error'], // スコープ外に存在する変数と同じ名前の変数を宣言するとエラー
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error', // boolean型の不要な比較を禁止（if(bool === true)など）
    '@typescript-eslint/no-unnecessary-condition': 'warn', // 不要なif文を禁止
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'error', // for(let i... でiを使用してない場合は for of を使うように強制
    '@typescript-eslint/prefer-includes': 'error', // indexOf使用禁止: includesを使う
    '@typescript-eslint/prefer-string-starts-ends-with': 'error', // 文字列が特定の文字列で開始するか終了するかを確認する時、startsWith/endsWithの使用を強制
    '@typescript-eslint/strict-boolean-expressions': 'warn', // booleanが予想されるif文での非booleanの使用を禁止する
    '@typescript-eslint/typedef': [
      'error',
      {
        memberVariableDeclaration: true // メンバ変数
      }
    ], // 型付けを強制
    'default-case': 'error', // switch文では必ずdefaultケースを作成すること
    eqeqeq: 'error', // 型を含めた比較演算子(===)を利用すること
    'id-blacklist': 'error', //ブラックリストとして定義された名前は利用しないこと（"data", "err", "e", "cb", "callback"等）
    'max-depth': 'error', // ネストできるブロック深さは4つ以内とすること
    'no-catch-shadow': 'error', // catch句の外側で定義された変数をcatch句のエラー変数にしないこと
    'no-div-regex': 'error', // 正規表現内の構文で使われる文字列はスラッシュでエスケープすること
    'no-else-return': 'error', // return を含む if文中 に不要な else 文を作らないこと
    'no-lonely-if': 'error', // else ブロック内に単独の if文 を記述しないこと
    'no-loop-func': 'error', // ループ内においてブロック変数を利用する関数定義を行わないこと
    'no-mixed-spaces-and-tabs': 'error', // インデントにタブと空白を混在させないこと
    'no-nested-ternary': 'error', // 3項演算子をネストさせないこと
    'no-proto': 'error', // __proto__ を使用しないこと
    'no-trailing-spaces': 'error', // 行末に不要な空白を残さないこと
    'no-useless-concat': 'error', // 無駄な文字列結合は行わないこと
    'object-shorthand': 'error', // オブジェクト定義時にショートハンドが利用できる場合は利用すること
    'prefer-arrow-callback': 'error', // コールバックにはアロー関数を利用すること
    'prefer-template': 'error', //	文字列結合の代わりにテンプレートリテラルが利用すること
    yoda: 'error', // ヨーダ記法で書かないこと
    'unused-imports/no-unused-imports': 'warn', // 未使用のimport
    'unused-imports/no-unused-vars': ['warn'], // 未使用の変数
    'jest/expect-expect': ['off']
  }
}
