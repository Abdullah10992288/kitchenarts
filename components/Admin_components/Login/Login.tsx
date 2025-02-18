"use client";
import Button from "@/components/Page_components/Button/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const HandelLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError("All Fields Are Required!");
      return;
    }
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res && !res.ok) {
        setError("Invalid Credentials");
        return;
      }
      router.push(`${process.env.SITE_URL}/dashboard`);
    } catch (error) {
      console.log(error);
      throw new Error("Failed To Upload Admin!");
    }
  };
  return (
    <form
      onSubmit={HandelLogin}
      className="border-4 p-4 sm:p-6 border-[#856B39] w-full max-w-[600px] gap-5 py-5 flex flex-col items-center justify-center"
    >
      <h2 className="font-bold text-[30px] sm:text-[50px] text-[#856B39]">
        Login
      </h2>
      <input
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        className="px-3 text-[18px] w-full text-white p-2 border border-[#AD9A74] rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-[#856B39]"
        name="email"
        type="email"
      />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="px-3 text-[18px] w-full text-white p-2 border border-[#AD9A74] rounded-md outline-none ring-2 ring-blue-500/0 focus:ring-[#856B39]"
        name="password"
        type="password"
      />
      {error && <h2 className="text-red-300">{error}</h2>}
      <button type="submit">
        <Button title="Login" />
      </button>
    </form>
  );
}
