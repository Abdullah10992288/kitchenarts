"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function NavLinks() {
  const [hover, setHover] = useState("");
  const [active, setActive] = useState("home");
  const { data: session } = useSession();
  return (
    <div className="flex max-[840px]:flex-col min-[840px]:gap-10 gap-7 items-center justify-center bg-transparent">
      <NavLink
        title="Home"
        hover={hover}
        setHover={setHover}
        active={active}
        setActive={setActive}
        LinkRef="/"
      />
      <NavLink
        title="Menu"
        hover={hover}
        setHover={setHover}
        active={active}
        setActive={setActive}
        LinkRef="#MenuSection"
      />
      <NavLink
        title="About"
        hover={hover}
        setHover={setHover}
        active={active}
        setActive={setActive}
        LinkRef="#AboutSection"
      />
      <NavLink
        title="Contact"
        hover={hover}
        setHover={setHover}
        active={active}
        setActive={setActive}
        LinkRef="#ContactSection"
      />
      <NavLink
        title="Subscribe"
        hover={hover}
        setHover={setHover}
        active={active}
        setActive={setActive}
        LinkRef="#SubscribeSection"
      />
      {session && (
        <NavLink
          title="Dashboard"
          hover={hover}
          setHover={setHover}
          active={active}
          setActive={setActive}
          LinkRef="/dashboard"
        />
      )}
    </div>
  );
}

const NavLink = ({
  setHover,
  hover,
  setActive,
  active,
  title,
  LinkRef,
}: {
  setHover: React.Dispatch<React.SetStateAction<string>>;
  hover: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
  active: string;
  title: string;
  LinkRef: string;
}) => {
  return (
    <Link
      href={LinkRef}
      onMouseEnter={() => setHover(title)}
      onMouseLeave={() => setHover("")}
      onClick={() => {
        setActive(title);
      }}
      className={`bg-transparent font-black flex flex-col items-center gap-1 transition-colors transition-0.8 tracking-wider text-[18px] hover:text-[#856B39]`}
    >
      <p className="bg-transparent">{title}</p>
      <div
        className={`h-2 bg-transparent w-2 transition-colors transition-1 bg-none max-[840px]:hidden rounded-full ${
          hover === title && "bg-[#856B39] block"
        }`}
      />
    </Link>
  );
};
