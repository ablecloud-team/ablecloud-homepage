import { EffectCallback, useCallback, useMemo, useRef } from 'react';

import { debounce } from '@/utils/common';

import { useMountEffect } from '../utils';

type Destructor = Exclude<ReturnType<EffectCallback>, void>;

type ScrollEventKey = string;

interface ScrollEventOptions {}

export function useScrollEvent() {
  const prevScrollPosition = useRef(0);
  const callbackList = useRef<
    Record<
      ScrollEventKey,
      { offset: number; callback: EffectCallback; options?: ScrollEventOptions }
    >
  >({});
  const clearList = useRef<Record<ScrollEventKey, Destructor>>({});

  const cleanupScrollEvent = useCallback((key: string) => {
    if (clearList.current[key] !== undefined) {
      // console.log('cleanup scroll event', key);
      clearList.current[key]();
      delete clearList.current[key];
    }
  }, []);

  const removeScrollEvent = useCallback((key: string) => {
    cleanupScrollEvent(key);
    delete callbackList.current[key];
  }, []);

  const addScrollEvent = useCallback(
    (key: string, offset: number, callback: EffectCallback, options?: ScrollEventOptions) => {
      callbackList.current[key] = { offset, callback, options };

      const htmlElement = document.querySelector('html');
      if (htmlElement !== null) {
        // console.log('htmlElement', htmlElement);
        triggerScrollEvent(getScrollPosition(htmlElement), key, offset, callback);
      }

      return () => removeScrollEvent(key);
    },
    [],
  );

  const triggerScrollEvent = useCallback(
    (currentScrollPosition: number, key: string, offset: number, callback: EffectCallback) => {
      if (offset <= currentScrollPosition && clearList.current[key] === undefined) {
        // console.log('trigger scroll event', key, callback);
        const cleanup = callback() ?? (() => {});
        clearList.current[key] = cleanup;
      } else if (offset > currentScrollPosition) {
        cleanupScrollEvent(key);
      }
    },
    [],
  );

  const triggerScrollEvents = useCallback((currentScrollPosition: number) => {
    for (const [key, { offset, callback }] of Object.entries(callbackList.current)) {
      triggerScrollEvent(currentScrollPosition, key, offset, callback);
    }

    prevScrollPosition.current = currentScrollPosition;
  }, []);

  const debouncedTriggerScrollEvents = useMemo(
    () => debounce(triggerScrollEvents, 15),
    [triggerScrollEvents],
  );

  const scrollEventHandler = useCallback<EventListener>(
    e => {
      const { scrollingElement } = e.target as Document;
      if (scrollingElement === null) return;

      debouncedTriggerScrollEvents(getScrollPosition(scrollingElement));
    },
    [debouncedTriggerScrollEvents],
  );

  useMountEffect(() => {
    document.addEventListener('scroll', scrollEventHandler);

    return () => document.removeEventListener('scroll', scrollEventHandler);
  });

  useMountEffect(() => {
    const htmlElement = document.querySelector('html');
    if (htmlElement === null) return;

    triggerScrollEvents(getScrollPosition(htmlElement));
  });

  return {
    addScrollEvent,
    removeScrollEvent,
  };
}

const getScrollPosition = (scrollingElement: Element) => {
  const { scrollTop, clientHeight } = scrollingElement;
  const currentScrollPosition = scrollTop + clientHeight;

  return currentScrollPosition;
};
