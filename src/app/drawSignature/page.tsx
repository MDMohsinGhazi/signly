"use client";
import React, { useState, useEffect, useRef } from "react";
const saveSvgAsPng = require("save-svg-as-png");
import { SignatureCanvas, ColorPicker, Range } from "@/components";

const DrawSignature = () => {
  const [color, setColor] = useState("#000");
  const [width, setWidth] = useState(2);
  const [angal, setAngal] = useState(0);
  const [scale, setScale] = useState(1);
  const [isEmpty, setEmpty] = useState(true);
  const [key, setKey] = useState(true);
  const svgRef = useRef<any>(null);

  const handleDownloadPNG = () => {
    const svgElement = svgRef.current;
    saveSvgAsPng.saveSvgAsPng(svgElement, "signature.png", { scale: scale });
  };

  const clearHandler = () => {
    setKey(!key);
    setEmpty(true);
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center m-auto mt-20">
      <h1 className="text-4xl font-bold text-primarily p-8">
        Draw your eSignature here
      </h1>
      <SignatureCanvas
        key={`${key}`}
        svgRef={svgRef}
        height={300}
        width={700}
        color={color}
        stockWidth={width}
        angle={angal}
        isEmpty={setEmpty}
      />
      <div className="flex gap-8 items-center">
        <ColorPicker color={color} setColor={setColor} />
        <Range
          label="Width"
          min={2}
          max={20}
          step={2}
          value={width}
          onChange={setWidth}
        />
        <Range
          label="Scale"
          min={1}
          max={16}
          step={1}
          value={scale}
          onChange={setScale}
        />
      </div>
      <div className="flex gap-10 mt-10">
        <button
          className="px-4 py-2 font-bold text-lg border-2 border-primarily rounded-3xl text-primarily"
          onClick={clearHandler}
        >
          Clear and draw again
        </button>
        <button
          className="px-4 py-2 font-bold text-lg bg-primarily text-white rounded-3xl disabled:opacity-45"
          onClick={handleDownloadPNG}
          disabled={isEmpty}
        >
          Download eSignature
        </button>
      </div>
    </div>
  );
};

export default DrawSignature;
