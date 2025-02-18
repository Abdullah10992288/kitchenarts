import With from "@/public/with.png";
import Image from "next/image";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ImageAnimation from "@/components/Animations/ImageAnimation";
import TextAnimation from "@/components/Animations/TextAnimation";

export default function heading() {
  return (
    <div className="flex flex-col gap-8 min-[1185px]:gap-[100px]">
      <div className="p-3 flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 sm:gap-6 justify-center">
          <TextAnimation
            heading="Good Times"
            styles="min-[1690px]:text-[120px] sm:text-[80px] text-[30px] min-[405px]:text-[50px] leading-tight text-[#AD9A74] font-black min-[1185px]:flex min-[1185px]:text-center"
          />
          <ImageAnimation styles="bg-[#AD9A74] p-2 rounded-3xl overflow-hidden">
            <Image
              src={With}
              alt="img"
              width={100}
              height={100}
              className="bg-[#AD9A74] w-full h-full min-[1690px]:max-w-[100px] min-[1690px]:max-h-[100px] sm:max-w-[50px] sm:max-h-[50px] min-[405px]:max-w-[30px] min-[405px]:max-h-[30px] object-cover max-w-[25px] max-h-[25px]"
            />
          </ImageAnimation>
        </div>
        <TextAnimation
          delay={0.5}
          heading="Great Friends"
          styles="min-[1690px]:text-[120px] sm:text-[80px] text-[30px] min-[405px]:text-[50px] leading-tight text-[#AD9A74] font-black min-[1185px]:flex min-[1185px]:text-center"
        />
      </div>
      <div className="flex flex-col gap-8 p-3">
        <div className="flex gap-3 overflow-hidden">
          <PlaceIcon className="text-[#856B39] text-[40px]" />
          <ImageAnimation delay={0.5}>
            <p className="font-bold text-[18px] sm:text-[25px] max-w-[500px]">
              1510 South Main Street Las Vegas, NV 89104 Located inside of
              <span className="text-[#856B39]">Able Baker Brewing</span>
            </p>
          </ImageAnimation>
        </div>
        <div className="flex gap-3">
          <AccessTimeIcon className="text-[#856B39] text-[40px]" />
          <div className="font-bold text-[18px] sm:text-[25px] overflow-hidden">
            <ImageAnimation delay={0.7} styles="flex items-center gap-1">
              <h2 className="text-[#AD9A74]">Sun-Thurs:</h2>
              <h2>11:30am-11pm</h2>
            </ImageAnimation>
            <ImageAnimation delay={0.9} styles="flex items-center gap-1">
              <h2 className="text-[#AD9A74]">Fri-Sat:</h2>
              <h2>1:30am-Midnight</h2>
            </ImageAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
