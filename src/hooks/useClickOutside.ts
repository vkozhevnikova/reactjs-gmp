import { RefObject, useEffect } from 'react';

type TEvent = MouseEvent | TouchEvent;
type THandler = (event: TEvent) => void;

const MOUSEDOWN = 'mousedown';
const TOUCHSTART = 'touchstart';
const events = [MOUSEDOWN, TOUCHSTART];

const useClickOutside = (ref: RefObject<HTMLElement>, handler: THandler) => {
  useEffect(() => {
    const listener = (event: TEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    events.forEach(event => {
      document.addEventListener(event, listener);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, listener);
      });
    };
  }, [ref, handler]);
};

export default useClickOutside;
