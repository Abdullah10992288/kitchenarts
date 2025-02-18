"use client";
import Link from "next/link";
import Logo from "@/public/logo.png";
import Button from "../Button/Button";
import NavLinks from "./NavLinks";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="text-white flex items-center w-full justify-center gap-10 py-4 px-9 max-sm:px-3 z-50">
      <div className="flex items-center justify-center gap-3">
        <button onClick={() => setMenu(!menu)} className="min-[840px]:hidden">
          {menu ? (
            <RestaurantMenuIcon fontSize="large" className=" font-bold" />
          ) : (
            <MenuIcon fontSize="large" className=" font-bold" />
          )}
        </button>
        <Link href={"/"}>
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            className="rounded-full min-[840px]:max-w-[60px] max-w-[45px] max-h-[45px] min-[840px]:max-h-[60px] object-cover"
            priority
          />
        </Link>
        {menu && (
          <div className="absolute top-[75px] left-3 px-8 py-7 rounded-lg border border-[#856B39]">
            <NavLinks />
          </div>
        )}
      </div>
      <div className="flex justify-between max-[840px]:justify-end items-center w-full">
        <div className="max-[840px]:hidden">
          <NavLinks />
        </div>
        <Link href={"#ContactSection"}>
          <Button title="Contact" />
        </Link>
      </div>
    </nav>
  );
}
