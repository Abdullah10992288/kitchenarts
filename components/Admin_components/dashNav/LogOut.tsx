"use client";
import { signOut } from "next-auth/react";

export default function LogOut() {
  return (
    <button
      onClick={() => signOut()}
      className="font-bold w-full flex text-center justify-center items-center sm:text-[20px] border-2 hover:border-[#856B39] border-[#AD9A74] py-2 px-4 max-sm:px-2 rounded-full text-[#AD9A74] hover:text-[#856B39]"
    >
      Log Out
    </button>
  );
}
