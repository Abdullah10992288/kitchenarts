import menu1 from "@/public/Burger-Beer.jpg";
import menu2 from "@/public/Banh-Mi.jpg";
import Image from "next/image";
import Menu_table from "./Menu_table";
import ImageAnimation from "@/components/Animations/ImageAnimation";
import TextAnimation from "@/components/Animations/TextAnimation";

export default function Menu() {
  return (
    <section className="text-white px-9 max-sm:px-3 pt-8">
      <div className="flex items-center max-[1240px]:flex-col justify-center gap-10 sm:gap-[100px]">
        <div className="max-w-[600px]">
          <ImageAnimation styles="overflow-hidden">
            <Image
              src={menu1}
              alt="image"
              width={1000}
              height={1000}
              className="object-cover rounded-lg"
            />
          </ImageAnimation>
        </div>
        <div className="relative flex flex-col gap-[60px]">
          <div className="w-[250px] max-[1240px]:hidden h-2 bg-[#AD9A74] absolute right-[105%] top-12" />
          <div className="flex items-center">
            <TextAnimation
              heading="Perfect Pint Partners"
              styles="text-[#856B39] text-[30px] min-[415px]:text-[40px] sm:text-[50px] font-bold max-w-[400px] uppercase"
            />
            <ImageAnimation styles="overflow-hidden max-w-[100px]">
              <Image
                src={menu2}
                alt="image"
                width={1000}
                height={1000}
                className="object-cover rounded-lg"
              />
            </ImageAnimation>
          </div>
          <div className="flex gap-5 flex-col py-5">
            <TextAnimation
              heading="Our menu features foodie-friendly street and finger foods for you to pair with the perfect pint. We feature many classic pub favorites while incorporating subtle but unique Southeast Asian flavors to give your taste buds a wake up call."
              styles="text-[25px] max-w-[650px]"
            />
            <TextAnimation
              heading="Our small bites are perfect for sharing while
              our sandwiches are hearty enough to satisfy the insatiable. You
              can enjoy our food the same whether you’re here for a quick lunch
              or enjoying a casual night out with friends and family. Be present
              and talk to each other!"
              styles="text-[25px] max-w-[650px]"
            />
          </div>
        </div>
      </div>
      <Menu_table />
    </section>
  );
}
