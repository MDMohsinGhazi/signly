import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  purge: {
    safelist: [
      "font-badScript",
      "font-bilbo",
      "font-caveat",
      "font-coveredByYourGrace",
      "font-dancingScript",
      "font-gochiHand",
      "font-greatVibes",
      "font-handlee",
      "font-justAnotherHand",
      "font-kalam",
      "font-qwigley",
      "font-sacramento",
    ],
  },
  theme: {
    extend: {
      colors: {
        primarily: "#1da1f2",
      },
      fontFamily: {
        badScript: ["Bad Script", "cursive"],
        bilbo: ["Bilbo Swash Caps", "cursive"],
        caveat: ["Caveat", "cursive"],
        coveredByYourGrace: ["Covered By Your Grace", "cursive"],
        dancingScript: ["Dancing Script", "cursive"],
        gochiHand: ["Gochi Hand", "cursive"],
        greatVibes: ["Great Vibes", "cursive"],
        handlee: ["Handlee", "cursive"],
        justAnotherHand: ["Just Another Hand", "cursive"],
        kalam: ["Kalam", "cursive"],
        qwigley: ["Qwigley", "cursive"],
        sacramento: ["Sacramento", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
