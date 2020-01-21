import { useEffect, useMemo, useRef } from 'react';

type Callback<T> = (previousValues: T) => void;

// @ts-ignore
function useEffectWithPrevious<T, S>(callback: Callback<S>, dependencies: S) {
  const isArray = useMemo(() => Array.isArray(dependencies), []);

  const refs = useRef((
    () => (
      isArray ?
      Array((dependencies as unknown as []).length).fill(null) :
      null
    )
  )());

  useEffect(() => {
    if(isArray) {
      (dependencies as unknown as []).forEach((dependency, i) => {
        (refs.current as [])[i] = dependency;
      })
    } else {
      (refs.current as unknown as S) = dependencies;
    }
  });

  return callback(dependencies);
}