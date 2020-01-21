import { DependencyList, useEffect, useRef } from 'react';

type Callback<T> = (previousValues: T) => void;

function useEffectWithPrevious(callback: Callback<DependencyList>, dependencies: DependencyList) {
  const refs = useRef(Array(dependencies.length).fill(null))

  useEffect(
    () => {
      callback(
        dependencies.length === 1 ?
        refs.current[0] :
        refs.current
      );

      dependencies.forEach((dependency, i) => {
        refs.current[i] = dependency;
      })
    },
    dependencies
  );

  return null;
}

export default useEffectWithPrevious;