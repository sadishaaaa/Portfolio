"use client";
import { LinkProps } from "next/link";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LinkType {
  url: string;
  title: string;
  // Add any other properties if needed
}
interface NavLinkProps {
  link: LinkType; // Assuming LinkProps is the type for your link object
}

const NavLink: React.FC<NavLinkProps> = ({ link }) => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <Link
      className={`rounded p-1 ${
        pathName === link.url && "bg-black text-white"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
