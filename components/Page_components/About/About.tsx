import ImageAnimation from "@/components/Animations/ImageAnimation";
import TextAnimation from "@/components/Animations/TextAnimation";
import aboutmain from "@/public/About-Large-Snacks.jpg";
import about from "@/public/About-Vertical-Wings.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section id="AboutSection" className="text-white px-9 max-sm:px-3 pt-8">
      <div className="flex items-center max-[1240px]:flex-col justify-center gap-10 sm:gap-[100px]">
        <div className="relative flex items-center justify-center flex-col">
          <ImageAnimation styles="overflow-hidden">
            <Image
              src={aboutmain}
              alt="image"
              width={1000}
              height={1000}
              className="object-cover rounded-lg"
            />
          </ImageAnimation>
          <ImageAnimation styles="overflow-hidden absolute -bottom-[300px] mx-[100px] max-sm:hidden">
            <Image
              src={about}
              alt="image"
              width={600}
              height={600}
              className="object-cover max-h-[500px] rounded-lg"
            />
          </ImageAnimation>
        </div>
        <div className="relative flex flex-col gap-[30px] max-sm:mt-0 max-[1240px]:mt-[230px]">
          <div className="w-[250px] max-[1240px]:hidden h-2 bg-[#AD9A74] absolute right-[105%] top-12" />
          <div className="flex items-center">
            <TextAnimation
              heading="Perfect Pint Partners"
              styles="text-[#856B39] text-[30px] min-[415px]:text-[40px] sm:text-[50px] font-bold max-w-[400px] uppercase"
            />
          </div>
          <div className="flex gap-5 flex-col py-5">
            <TextAnimation
              heading="When we opened in June 2017, our vision was to create an unassuming watering hole for the locals. In a town with
            endless options for bars and lounges, we found it challenging to
            find a friendly bar with a solid craft beer list, good food, and
            non-gaming/non-smoking. Our friendly service in a clean and welcoming
            setting has helped us earn the reputation among the locals as one of
            the best hidden gems in Las Vegas."
              styles="text-[25px] max-w-[650px]"
            />

            <TextAnimation
              heading="Kitchen Arts is the culmination of giving our best to the community by providing great food, service, and atmosphere. Our collaboration project in Navad allows us another opportunity to create a memorable setting for you to catch up with friends and make new ones over tasty bites and a refreshing beer."
              styles="text-[25px] max-w-[650px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
