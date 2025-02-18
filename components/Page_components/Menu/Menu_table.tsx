"use client";
import {
  DeleteMenuItemFromId,
  GetMenu,
} from "@/components/Actions/MenuActions";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

export default function Menu_table() {
  const [items, setItems] = useState("happyhour");
  const [menuitems, setMenuitems] = useState<[object]>();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchmenu = async () => {
      const menu = await GetMenu({ items });
      setMenuitems(menu);
    };
    fetchmenu();
  }, [items]);

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        ease: [0.76, 0, 0.24, 1],
        duration: 1.5,
      }}
      id="MenuSection"
      className="mt-[5%] px-3 sm:px-9 max-w-[2500px] w-full"
    >
      <div className="flex flex-col justify-center gap-3 items-center">
        <div className="flex flex-col items-center gap-5">
          <h2 className="font-bold text-[30px] uppercase sm:text-[50px] flex text-center xl:text-[60px] playfair_display text-[#856B39]">
            Menu
          </h2>
          {/* Buttons  */}
          <div className="flex items-center gap-4 justify-center sm:gap-8 flex-wrap">
            <button
              onClick={() => setItems("happyhour")}
              className={`text-[18px] uppercase font-semibold tracking-wider py-1.5 rounded-full border px-4 hover:text-[#856B39] ${
                items == "happyhour"
                  ? "border-[#856B39] px-6 text-[#856B39]"
                  : "text-[#AD9A74] border-[#AD9A74]"
              }`}
            >
              Happy Hour
            </button>
            <button
              onClick={() => setItems("snacks")}
              className={`text-[18px] uppercase font-semibold tracking-wider py-1.5 rounded-full border px-4 ${
                items == "snacks"
                  ? "border-[#856B39] px-6 text-[#856B39]"
                  : "text-[#AD9A74] border-[#AD9A74]"
              }`}
            >
              Snacks
            </button>
            <button
              onClick={() => setItems("tacos")}
              className={`text-[18px] uppercase font-semibold tracking-wider py-1.5 rounded-full border px-4 ${
                items == "tacos"
                  ? "border-[#856B39] px-6 text-[#856B39]"
                  : "text-[#AD9A74] border-[#AD9A74]"
              }`}
            >
              Tacos
            </button>
            <button
              onClick={() => setItems("fries")}
              className={`text-[18px] uppercase font-semibold tracking-wider py-1.5 rounded-full border px-4 ${
                items == "fries"
                  ? "border-[#856B39] px-6 text-[#856B39]"
                  : "text-[#AD9A74] border-[#AD9A74]"
              }`}
            >
              Fries
            </button>
            <button
              onClick={() => setItems("burgersandwiches")}
              className={`text-[18px] uppercase font-semibold tracking-wider py-1.5 rounded-full border px-4 ${
                items == "burgersandwiches"
                  ? "border-[#856B39] px-6 text-[#856B39]"
                  : "text-[#AD9A74] border-[#AD9A74]"
              }`}
            >
              Burger & Sandwiches
            </button>
            <button
              onClick={() => setItems("salads")}
              className={`text-[18px] uppercase font-semibold tracking-wider py-1.5 rounded-full border px-4 ${
                items == "salads"
                  ? "border-[#856B39] px-6 text-[#856B39]"
                  : "text-[#AD9A74] border-[#AD9A74]"
              }`}
            >
              Salads
            </button>
            <button
              onClick={() => setItems("ricebowls")}
              className={`text-[18px] uppercase font-semibold tracking-wider py-1.5 rounded-full border px-4 ${
                items == "ricebowls"
                  ? "border-[#856B39] px-6 text-[#856B39]"
                  : "text-[#AD9A74] border-[#AD9A74]"
              }`}
            >
              Rice Bowls
            </button>
          </div>
        </div>
        {/* MEnu Items  */}
        <div className="flex items-center py-6 justify-center gap-x-12 gap-y-5 flex-wrap">
          {menuitems?.map((data: any) => (
            <div key={data._id} className="max-w-[800px] py-3 my-1">
              <div className="w-full h-[1px] bg-[#AD9A74]" />
              <div className="flex flex-col justify-center gap-1 px-2 sm:px-4 py-2 rounded-lg">
                <h2 className="uppercase flex items-center gap-1 text-[20px] text-[#856B39]">
                  {data.title}
                </h2>
                <p className="text-[#AD9A74] text-[18px] px-1">
                  {data.descryption}
                </p>
                <p className="text-[#856B39] text-[18px] px-1">{data.price}</p>
                {session && (
                  <form action={DeleteMenuItemFromId}>
                    <input type="hidden" name="id" value={data._id} />
                    <button className="bg-[#9c3a3a] text-gray-300 p-3 sm:px-7 py-1.5 sm:py-2.5 text-[20px] uppercase tracking-wide font-semibold rounded-lg hover:bg-[#7f4f4f]">
                      Delete
                    </button>
                  </form>
                )}
              </div>
              <div className="w-full h-[1px] bg-[#AD9A74]" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
