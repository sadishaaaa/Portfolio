"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

type Props = {};
export const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/contact", title: "Contact" },
];
const Nav = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 w-1/3">
        {/* LINKS */}
        {links.map((link, i) => (
          <NavLink key={i} link={link} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        {/* LOGO */}
        <Link
          href="/"
          className="text-md bg-black rounded-md p-1 font-semibold flex items-center hover:bg-gray-700"
        >
          <span className="text-white mr-1">Sadisha</span>
          <span className="w-20 h-8 rounded bg-orange-500 text-black items-center flex justify-center">
            Shrestha
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3 justify-end">
        {/* SOCIALS */}
        <Link href="">
          <img src="/github.png" alt="github" height={24} width={24} />
        </Link>
        <Link href="">
          <img src="/linkedin.png" alt="linkedin" height={24} width={24} />
        </Link>
        <Link href="">
          <img src="/instagram.png" alt="instagram" height={24} width={24} />
        </Link>
        <Link href="">
          <img src="/facebook.png" alt="facebook" height={24} width={24} />
        </Link>
      </div>
      {/* <!-- Mobile menu button --> */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* {!MENU LIST} */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link, i) => (
              <Link key={i} href={link.url}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
