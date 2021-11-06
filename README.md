<div align="center">
  <h1>jest-extended-plus</h1>

🃏💪➕

Additional more Jest matchers

</div>

<hr />

## What

It is a matcher collection which is a further extension of [jest-extended](https://github.com/jest-community/jest-extended) and is recommended to be used together with `jest-extended`.

## Installation

With npm:

```sh
npm i --save-dev jest-extended-plus
```

With yarn:

```sh
yarn add -D jest-extended-plus
```

## Setup

Note that `jest-extended-plus` only supports Jest version 24 and newer.

```javascript
// ./testSetup.js

// add all jest-extended-plus matchers
import * as matchers from 'jest-extended-plus'
expect.extend(matchers)

// or just add specific matchers
import { toEqualOneOf } from 'jest-extended-plus'
expect.extend({ toEqualOneOf })
```

Add your setup script to your Jest `setupFilesAfterEnv` configuration. [See for help](https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array)

```json
"jest": {
  "setupFilesAfterEnv": ["./testSetup.js"]
}
```

To automatically extend `expect` with all matchers, you can use

```json
"jest": {
  "setupFilesAfterEnv": ["jest-extended-plus/all"]
}
```

### Typescript

If your editor does not recognise the custom `jest-extended-plus` matchers, add a `global.d.ts` file to your project with:

```ts
import 'jest-extended-plus'
```

You must update your `tsconfig.json` to include the new `global.d.ts` file in the `files` property like so:

```json
{
  "compilerOptions": {
    ...
  },
  ...
  "files": ["global.d.ts"]
}
```

Also note that when adding this for the first time this affects which files are compiled by the TypeScript compiler and you might need to add the `include` property as well. See the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more details.

If the above import syntax does not work, replace it with the following:

```ts
/// <reference types="jest-extended-plus" />
```

## API

### .toEqualOneOf([members])

Use `.toEqualOneOf` when checking if a value equal to a member of a given `Array`.

```ts
test('passes when value is in given array', () => {
  expect(1).toEqualOneOf([expect.any(Number), null])
  expect(undefined).not.toEqualOneOf([expect.any(Number), null])
})
```

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check
[issues](https://github.com/TomokiMiyauci/utterances-component/issues).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/tomoki_miyauci">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license

[demo]: https://img.shields.io/badge/demo-%F0%9F%9A%80-green
