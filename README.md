# use-effect-with-previous

> A layer over useEffect that provides previous values of dependencies.

[![NPM](https://img.shields.io/npm/v/use-effect-with-previous.svg)](https://www.npmjs.com/package/use-effect-with-previous) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-effect-with-previous
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-effect-with-previous'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [juangabrieldev](https://github.com/juangabrieldev)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
