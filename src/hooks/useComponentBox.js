import { useCallback, useEffect, useState } from 'react';

const getBox = (ref) => ref?.current?.getBoundingClientRect() || {};

export const useComponentBox = (ref) => {
  const [componentBox, setComponentBox] = useState(getBox(ref));

  const handleResize = useCallback(() => {
    if (ref.current) setComponentBox(getBox(ref));
  }, [ref]);

  useEffect(() => {
    const refCurrent = ref.current;
    if (!refCurrent) {
      return;
    }

    handleResize();

    // @ts-ignore
    if (typeof ResizeObserver === 'function') {
      // @ts-ignore
      let resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(refCurrent);

      return () => {
        resizeObserver.disconnect(refCurrent);
        resizeObserver = null;
      };
    }
    window.addEventListener('componentResize', handleResize);

    return () => {
      window.removeEventListener('componentResize', handleResize);
    };
  }, [ref, handleResize]);

  return componentBox;
};
