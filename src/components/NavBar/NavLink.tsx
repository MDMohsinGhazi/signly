"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface PropsInterface {
  key: string;
  title: string;
  path: string;
}

const NavLink: React.FC<PropsInterface> = ({ key, title, path }) => {
  const pathName = usePathname();

  return (
    <Link key={key} href={path}>
      {title}
    </Link>
  );
};

export default NavLink;
