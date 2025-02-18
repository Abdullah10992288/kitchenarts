import sandwich from "@/public/Hero-Horizontal.jpg";
import burger from "@/public/Hero-Vertical.jpg";
import Image from "next/image";
import Heading from "./Heading";
import ImageAnimation from "@/components/Animations/ImageAnimation";
import TextAnimation from "@/components/Animations/TextAnimation";

export default function Hero() {
  return (
    <section className="text-white px-9 max-sm:px-3 sm:py-3 max-w-[2500px] w-full">
      <div className="flex max-[1185px]:flex-col items-center justify-center gap-10">
        <ImageAnimation styles="min-[1185px]:max-w-[45%] overflow-hidden">
          <Image
            src={burger}
            alt="Img"
            width={1000}
            height={1000}
            className="object-cover w-full h-full rounded-lg max-h-[900px]"
          />
        </ImageAnimation>
        <Heading />
      </div>
      <div className="flex items-center justify-center gap-[10%] max-[1461px]:flex-col py-6 max-[1185px]:mt-6">
        <div className="border-y-[7px] overflow-hidden border-[#856B39]">
          <TextAnimation
            heading="Serving Tasty Bites Since 2019"
            styles="max-w-[400px] text-[30px] sm:text-[50px] flex text-center font-bold"
          />
        </div>
        <div className="max-w-[1000px] py-4">
          <ImageAnimation styles="overflow-hidden">
            <Image
              src={sandwich}
              alt="Image"
              width={2000}
              height={2000}
              className="object-cover rounded-lg"
            />
          </ImageAnimation>
        </div>
      </div>
    </section>
  );
}
