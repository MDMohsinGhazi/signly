"use client";
import React, { useState, useEffect, useRef } from "react";
import { HexColorPicker } from "react-colorful";
interface PropsInterface {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorPicker: React.FC<PropsInterface> = ({ color, setColor }) => {
  const [show, setShow] = useState(false);
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={divRef}>
      <div
        className="flex items-center gap-2 px-4 py-2 border-[1px] border-gray-200 rounded-3xl hover:border-primarily"
        onClick={() => setShow((prev) => !prev)}
      >
        <div
          className="w-4 h-4 rounded-[50%]"
          style={{ backgroundColor: color }}
        ></div>
        <div>{color}</div>
      </div>
      {show && (
        <div className="absolute bottom-12">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
