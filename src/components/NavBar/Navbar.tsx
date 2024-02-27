"use client";

import React from "react";
import NavLink from "./NavLink";
import { Logo, HomeIcon } from "@/assets";
import Link from "next/link";

const Navbar = () => {
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="flex justify-between max-w-7xl m-auto p-3">
      <div onClick={reload} className="w-20 ">
        <img src={Logo.src} alt="logo" />
      </div>
      <div>
        <Link className="text-primarily font-semibold" key={"home"} href={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
