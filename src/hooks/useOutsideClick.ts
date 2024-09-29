import { useEffect, type RefObject } from "react";

type Handler = (event: MouseEvent) => void;

export function useOutsideClick(ref: RefObject<HTMLElement>, handler: Handler) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handler]);
}
