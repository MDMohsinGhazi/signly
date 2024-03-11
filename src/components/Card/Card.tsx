"use client";

import React, { useRef } from "react";
import { toPng } from "html-to-image";
import {
  Kalam,
  Qwigley,
  Bad_Script,
  Bilbo,
  Caveat,
  Covered_By_Your_Grace,
  Dancing_Script,
  Gochi_Hand,
  Great_Vibes,
  Handlee,
  Just_Another_Hand,
  Sacramento,
} from "next/font/google";

interface PropsInterface {
  text: string;
  fontName: string;
  color: string;
}

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
});

const qwigley = Qwigley({
  subsets: ["latin"],
  weight: ["400"],
});
const badScript = Bad_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const bilbo = Bilbo({
  subsets: ["latin"],
  weight: ["400"],
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400"],
});
const coveredByYourGrace = Covered_By_Your_Grace({
  subsets: ["latin"],
  weight: ["400"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});

const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

const handlee = Handlee({
  subsets: ["latin"],
  weight: ["400"],
});

const justAnotherHand = Just_Another_Hand({
  subsets: ["latin"],
  weight: ["400"],
});

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
});

const Card: React.FC<PropsInterface> = ({ text, fontName, color }) => {
  const signRef = useRef<HTMLDivElement>(null);

  const fontMap: Record<string, any> = {
    badScript: badScript,
    bilbo: bilbo,
    caveat: caveat,
    coveredByYourGrace: coveredByYourGrace,
    dancingScript: dancingScript,
    gochiHand: gochiHand,
    greatVibes: greatVibes,
    handlee: handlee,
    justAnotherHand: justAnotherHand,
    sacramento: sacramento,
    kalam: kalam,
    qwigley: qwigley,
  };

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
    <div className="flex flex-col justify-between w-96 h-96 border border-gray-400 rounded-xl p-6 font-badScript">
      <p className={`text-gray-400 font-semibold text-xl`}>
        {capitalizeWords(fontName).replace(/([a-z])([A-Z])/g, "$1 $2")}
      </p>
      <div
        className={`text-center text-3xl `}
        style={{ ...fontMap[fontName]?.style, color: color }}
        ref={signRef}
      >
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
