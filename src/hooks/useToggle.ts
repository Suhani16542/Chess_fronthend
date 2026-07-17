import { useState, useCallback } from "react";

/**
 * Manages a boolean toggle state with convenient helpers.
 *
 * @example
 * const [isOpen, open, close, toggle] = useToggle(false);
 */
export function useToggle(
  initial = false
): [boolean, () => void, () => void, () => void] {
  const [state, setState] = useState(initial);

  const open = useCallback(() => setState(true), []);
  const close = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState((s) => !s), []);

  return [state, open, close, toggle];
}
