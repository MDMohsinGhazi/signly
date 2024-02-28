import { useState, useEffect, useRef } from "react";

interface Size {
  width: number;
  height: number;
}

export const useElementSize = (): {
  size: Size;
  divRef: React.MutableRefObject<HTMLDivElement | null>;
} => {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  const handleResize = () => {
    const { width, height } = divRef.current!.getBoundingClientRect();
    setSize({ width, height });
  };

  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { size, divRef };
};
