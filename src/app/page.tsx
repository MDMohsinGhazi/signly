"use client";
import { NavCard } from "@/components";
import React from "react";
import { cards } from "@/constant";

const Home = () => {
  return (
    <div className="flex items-center justify-center mt-20  md:mt-56">
      <div className="flex flex-col md:flex-row gap-8 mx-4 mb-8">
        {cards.map((d) => (
          <NavCard
            img={d.img.src}
            title={d.title}
            desc={d.desc}
            path={d.path}
            pathDesc={d.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
