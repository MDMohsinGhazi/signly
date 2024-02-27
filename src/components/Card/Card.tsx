"use client";

import React, { useRef } from "react";
import { toPng } from "html-to-image";

interface PropsInterface {
  text: string;
  fontName: string;
}

const Card: React.FC<PropsInterface> = ({ text, fontName }) => {
  const signRef = useRef<HTMLDivElement>(null);

  const pngDownload = async () => {
    try {
      if (signRef.current) {
        const dataUrl = await toPng(signRef.current);
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "image.png";
        link.click();
      }
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  }

  return (
    <div
      className="flex flex-col justify-between w-96 h-96 border border-gray-400 rounded-xl p-6"
      style={{ fontFamily: "lobsster" }}
    >
      <p className={`text-gray-400 font-semibold text-xl font-${fontName}`}>
        {capitalizeWords(fontName).replace(/([a-z])([A-Z])/g, "$1 $2")}
      </p>
      <div className={`text-center text-xl font-${fontName}`} ref={signRef}>
        {text}
      </div>
      <button
        onClick={pngDownload}
        className="px-4 py-2 font-semibold bg-primarily text-white rounded-3xl disabled:opacity-45"
      >
        Download
      </button>
    </div>
  );
};

export default Card;
