# use-effect-with-previous

> A layer over useEffect that provides previous values of dependencies.

[![NPM](https://img.shields.io/npm/v/use-effect-with-previous.svg)](https://www.npmjs.com/package/use-effect-with-previous)

## Install

```bash
npm install --save use-effect-with-previous
```

## Usage

```js
import React, { useState } from 'react'
import useEffectWithPrevious from 'use-effect-with-previous'

const Example = () => {
  const [ state, setState ] = useState(1);
  const [ anotherState, setAnotherState ] = useState(2);

  useEffectWithPrevious(
    previousState => {
      // Compare previous and current state.
    },
    state
  );

  useEffectWithPrevious(
    ([previousState, previousAnotherState]) => {
      // Dependencies can be array of state.
    },
    [state, anotherState]
  );
}
```

## License

MIT © [juangabrieldev](https://github.com/juangabrieldev)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
