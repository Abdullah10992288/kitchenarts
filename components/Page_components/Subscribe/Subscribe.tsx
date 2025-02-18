import subscribe from "@/public/subscribe.jpg";
import Image from "next/image";
import SubscribeForm from "./SubscribeForm";
import ImageAnimation from "@/components/Animations/ImageAnimation";

export default function Subscribe() {
  return (
    <ImageAnimation>
      <section
        id="SubscribeSection"
        className="text-white px-9 max-sm:px-3 py-8"
      >
        <div className="relative flex items-center justify-center">
          <Image
            src={subscribe}
            alt="Image"
            width={1500}
            height={600}
            className="max-h-[800px] object-cover rounded-lg max-sm:hidden"
          />
          <div className="rounded-lg sm:absolute">
            <div className="bg-[#232323] p-[20px] md:p-[40px] lg:p-[90px] rounded-lg flex items-center justify-center flex-col gap-6">
              <h2 className="flex text-center bg-[#232323] text-[30px] sm:text-[50px] font-black items-center justify-center">
                Join Our Mailing List
              </h2>
              <p className="flex text-center bg-[#232323] items-center justify-center max-w-[500px] font-bold text-[20px] sm:text-[25px]">
                Sign up for our newsletter and learn about special events and
                promotions before we announce them anywhere else!
              </p>
              <SubscribeForm />
            </div>
          </div>
        </div>
      </section>
    </ImageAnimation>
  );
}
