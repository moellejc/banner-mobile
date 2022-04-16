import { useEffect, useRef } from "react";

interface ICallback {
  (): void;
}

export function useInterval(callback: ICallback, delay: number) {
  const savedCallback = useRef<ICallback | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [callback, delay]);
}
