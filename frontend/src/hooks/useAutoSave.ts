// src/hooks/useAutoSave.ts
import { useEffect, useRef } from 'react';
import { UseFormWatch } from 'react-hook-form';

export const useAutoSave = <T extends object>(
  watch: UseFormWatch<T>,
  onSave: (data: Partial<T>) => void,
  delay: number = 1000
) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const subscription = watch((data) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        onSave(data);
      }, delay);
    });

    return () => {
      subscription.unsubscribe();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [watch, onSave, delay]);
};
