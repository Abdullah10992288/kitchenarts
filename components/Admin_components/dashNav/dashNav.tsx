import Link from "next/link";
import LogOut from "./LogOut";

export default function DashNav() {
  return (
    <div className="px-3 sm:px-9">
      <div className="flex gap-2 sm:gap-3 border border-[#856B39] max-sm:border-none sm:p-2 rounded-full">
        <Link
          className="font-bold w-full flex text-center justify-center items-center sm:text-[20px] border-2 hover:border-[#856B39] border-[#AD9A74] py-2 px-4 max-sm:px-2 rounded-full text-[#AD9A74] hover:text-[#856B39]"
          href={"/dashboard/subscribers"}
        >
          Subscribers
        </Link>
        <Link
          className="font-bold w-full flex text-center justify-center items-center sm:text-[20px] border-2 hover:border-[#856B39] border-[#AD9A74] py-2 px-4 max-sm:px-2 rounded-full text-[#AD9A74] hover:text-[#856B39]"
          href={"/dashboard/menu"}
        >
          Menu
        </Link>
        <LogOut />
      </div>
    </div>
  );
}
