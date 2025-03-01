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
    <nav className="p-3">
      <div className="text-white bg-[#252525] flex items-center w-full justify-center gap-10 p-2 z-50 rounded-full">
        <div className="flex items-center justify-center gap-3 bg-transparent">
          <button
            onClick={() => setMenu(!menu)}
            className="min-[840px]:hidden bg-transparent"
          >
            {menu ? (
              <RestaurantMenuIcon
                fontSize="large"
                className=" font-bold bg-transparent"
              />
            ) : (
              <MenuIcon fontSize="large" className="bg-transparent font-bold" />
            )}
          </button>
          <Link href={"/"} className="bg-transparent">
            <Image
              src={Logo}
              alt="logo"
              width={200}
              height={200}
              className="rounded-full bg-transparent max-h-[90px] max-w-[90px] min-[840px]:max-h-[60px] min-[840px]:max-w-[60px] w-full h-full object-cover"
              priority
            />
          </Link>
          {menu && (
            <div className="absolute bg-[#252525] min-[840px]:bg-transparent top-[75px] left-3 px-8 py-7 rounded-lg border border-[#856B39] flex items-center justify-center">
              <NavLinks />
            </div>
          )}
        </div>
        <div className="flex bg-transparent justify-between max-[840px]:justify-end items-center w-full">
          <div className="max-[840px]:hidden bg-transparent">
            <NavLinks />
          </div>
          <Link
            href={"#ContactSection"}
            className="bg-transparent uppercase bg-black h-[40px] sm:h-[60px] rounded-full flex items-center justify-center text-center px-5 sm:px-8 font-bold transition-colors  transition-0.8 tracking-wider text-[18px] hover:text-[#856B39]"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
