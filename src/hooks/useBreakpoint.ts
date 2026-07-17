import { useState, useEffect } from "react";
import { BREAKPOINTS } from "@/lib/constants";

type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Returns true when the viewport width is at or above the given breakpoint.
 *
 * @example
 * const isDesktop = useBreakpoint("lg");
 */
export function useBreakpoint(bp: Breakpoint): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${BREAKPOINTS[bp]}px)`);
    setMatches(mq.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [bp]);

  return matches;
}
