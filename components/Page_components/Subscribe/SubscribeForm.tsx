"use client";
import { useState } from "react";
import Button from "../Button/Button";
import { AddSubscriber } from "@/components/Actions/SubscribeActions";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const HandleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) {
      alert("Email Required!");
      return;
    }
    await AddSubscriber({ email });
    setSubscribed(true);
  };
  if (subscribed) {
    return (
      <h2 className="text-[40px] bg-[#232323] max-sm:text-[25px] font-bold uppercase">
        Subscribed!
      </h2>
    );
  }
  return (
    <form
      onSubmit={HandleSubscribe}
      className="flex w-full bg-[#232323] items-center justify-center flex-col gap-6 max-w-[450px]"
    >
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        className="px-3 text-[18px] w-full text-white p-2 border border-[#AD9A74] rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-[#856B39]"
        name="email"
        type="email"
      />
      <button type="submit">
        <Button title="Subscribe" />
      </button>
    </form>
  );
}
