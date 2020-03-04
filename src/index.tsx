import { useEffect, useRef } from 'react';

type Callback<T> = (previousValues: T) => void;

function useEffectWithPrevious<T extends readonly any[]>(callback: Callback<T>, dependencies: T) {
  const refs = useRef(Array(dependencies.length).fill(null))

  useEffect(
    () => {
      callback(refs.current as unknown as T);

      dependencies.forEach((dependency, i) => {
        refs.current[i] = dependency;
      });
    },
    dependencies
  );

  return null;
};

export default useEffectWithPrevious;