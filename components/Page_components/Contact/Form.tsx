"use client";
import React, { useState } from "react";
import Button from "../Button/Button";
import { AddContact } from "@/components/Actions/ContactActions";

export default function ConatactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contacted, setContacted] = useState(false);

  const HandelContact = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!name || !email || !message) {
      alert("All Fields Are Required!");
      return;
    }
    await AddContact({ email, name, message });
    setContacted(true);
  };
  if (contacted) {
    return (
      <h2 className="font-bold text-[25px] sm:text-[40px] flex text-center">
        Message Sent!
      </h2>
    );
  }
  return (
    <form onSubmit={HandelContact} className="w-auto flex flex-col gap-6">
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        className="px-3 text-[18px] w-full text-white p-2 border border-[#AD9A74] rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-[#856B39]"
        name="name"
        type="text"
      />
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        className="px-3 text-[18px] w-full text-white p-2 border border-[#AD9A74] rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-[#856B39]"
        name="email"
        type="email"
      />
      <textarea
        rows={4}
        placeholder="message"
        onChange={(e) => setMessage(e.target.value)}
        className="px-3 text-[18px] w-full text-white p-2 border border-[#AD9A74] rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-[#856B39]"
        name="message"
      />
      <button type="submit" className="w-full">
        <Button title="Send" />
      </button>
    </form>
  );
}
