import ImageAnimation from "@/components/Animations/ImageAnimation";
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="overflow-hidden text-white px-9 max-sm:px-3 pt-8">
      <ImageAnimation>
        <div className="flex items-center justify-center flex-col gap-5 pb-5">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Logo"
              width={400}
              height={400}
              className="rounded-full opacity-60"
            />
          </Link>
          <h2 className="font-bold opacity-80 text-[20px] flex text-center sm:text-[25px]">
            © 2024 Kitchen Arts. All Rights Reserved.
          </h2>
        </div>
      </ImageAnimation>
    </section>
  );
}
