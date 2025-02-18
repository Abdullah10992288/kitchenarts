"use client";
import { AddMenu } from "@/components/Actions/MenuActions";
import Button from "@/components/Page_components/Button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashMenuForm() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [descryption, setDescryption] = useState("");
  const [price, setPrice] = useState("");

  const router = useRouter();
  const HandelMenu = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!title || !descryption || !price || !type) {
      alert("All Field Are Required!");
      return;
    }
    await AddMenu({ title, descryption, price, type });
    router.refresh();
  };
  return (
    <form onSubmit={HandelMenu} className="flex flex-col gap-5">
      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        className="px-3 text-[18px] w-full text-white p-2 border border-[#AD9A74] rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-[#856B39]"
        name="title"
        type="text"
      />
      <textarea
        rows={3}
        placeholder="descryption"
        onChange={(e) => setDescryption(e.target.value)}
        className="px-3 text-[18px] w-full text-white p-2 border border-[#AD9A74] rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-[#856B39]"
        name="descryption"
      />
      <div className="flex items-center max-md:flex-col justify-center gap-5">
        <input
          placeholder="Type"
          onChange={(e) => setType(e.target.value)}
          className="px-3 text-[18px] w-full text-white p-2 border border-[#AD9A74] rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-[#856B39]"
          name="type"
          type="text"
        />
        <input
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          className="inputNumber px-3 text-[18px] w-full text-white p-2 border border-[#AD9A74] rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-[#856B39]"
          name="price"
          type="number"
        />
        <button type="submit" className="">
          <Button title="Add" />
        </button>
      </div>
    </form>
  );
}
