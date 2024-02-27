"use client";
import React, { useState, useEffect } from "react";
import { Card, ColorPicker } from "@/components";
import { useSpring, animated } from "react-spring";
import { ClearIcon } from "@/assets";
import { font } from "@/constant";

const TypeSignature = () => {
  const [color, setColor] = useState("#000");
  const [text, setText] = useState("");
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (text) {
        setShowCards(true);
      } else {
        setShowCards(false);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [text]);

  const springConfig = { tension: 125, friction: 20, delay: 200 };

  const cardsAnimations = font.map((fontName, index) =>
    useSpring({
      opacity: text ? 1 : 0,
      transform: text ? "translateY(0)" : "translateY(20px)",
      from: { opacity: 0, transform: "translateY(20px)" },
      config: springConfig,
      delay: text ? index * 400 : 0,
    })
  );

  return (
    <div className="flex flex-col gap-4 items-center justify-center m-auto mt-20">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primarily p-8">
          Type your signature
        </h1>
        <input
          className="text-3xl outline-none rounded-full border-[1px] px-8 py-2 font-semibold border-gray-400 focus:border-black"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={20}
          spellCheck={false}
        />
        <div className="flex gap-8 self-center">
          <ColorPicker color={color} setColor={setColor} />
          <button
            className="flex items-center gap-2 px-4 py-2 border-[1px] border-gray-200 rounded-3xl hover:border-primarily"
            onClick={() => setText("")}
          >
            <img className="h-6 w-6" src={ClearIcon.src} alt="x" />
            <span>Clear</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-8 mx-auto max-w-7xl md:max-5xl my-36">
        {font.map((fontName, index) => (
          <animated.div key={fontName} style={cardsAnimations[index]}>
            <Card fontName={fontName} text={text} />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default TypeSignature;
