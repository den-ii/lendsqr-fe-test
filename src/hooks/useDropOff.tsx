import React from "react";

export default function useDropoff(callback: any) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (e: any) => {
      e.stopPropagation();
      if (!ref.current?.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [ref]);

  return ref;
}
