import React from "react";
import Link from "next/link";
import { DrawIcon } from "@/assets";

interface PropsInterface {
  img: any;
  title: string;
  desc: string;
  path: string;
  pathDesc: string;
}

const NavCard: React.FC<PropsInterface> = ({
  img,
  title,
  desc,
  path,
  pathDesc,
}) => {
  return (
    <div className="w-[540px] bg-primarily text-white flex flex-col items-center gap-4 p-12 rounded-lg">
      <img
        className="w-20 aspect-square bg-white  rounded-lg"
        src={img}
        alt=""
      />
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-2xl font-medium text-center flex-1">{desc}</p>
      <Link
        className="bg-white text-primarily px-8 py-2 rounded-3xl border-2 border-solid hover:border-white hover:bg-primarily hover:text-white transition-colors duration-200 delay-100"
        key={path}
        href={path}
      >
        {pathDesc}
      </Link>
    </div>
  );
};

export default NavCard;
