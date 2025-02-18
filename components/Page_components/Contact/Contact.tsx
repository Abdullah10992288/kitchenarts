import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ConatactForm from "./Form";
import Link from "next/link";
import ImageAnimation from "@/components/Animations/ImageAnimation";

export default function Contact() {
  return (
    <section
      id="ContactSection"
      className="text-white px-9 max-sm:px-3 sm:py-3 sm:mt-0 min-[1520px]:mt-[200px]"
    >
      <div className="flex items-center justify-center gap-5 sm:gap-12 flex-wrap py-5">
        <ImageAnimation>
          <div className="relative max-[339px]:border-none max-[339px]:p-0 border-2 sm:border-4 p-2 sm:p-6 rounded-lg border-[#856B39] flex flex-col gap-[30px] max-sm:mt-0 max-[1240px]:mt-[230px]">
            <div className="flex items-center">
              <h2 className="text-[#856B39] text-[30px] min-[415px]:text-[40px] sm:text-[50px] font-bold max-w-[400px] uppercase">
                Contact
              </h2>
            </div>
            <div className="flex flex-col gap-8 p-3">
              <div className="flex gap-3">
                <PlaceIcon className="text-[#856B39] text-[40px]" />
                <p className="font-bold text-[18px] sm:text-[25px] max-w-[500px]">
                  1510 South Main Street Las Vegas, NV 89104 Located inside of
                  <span className="text-[#856B39]">Able Baker Brewing</span>
                </p>
              </div>
              <div className="flex gap-3">
                <AccessTimeIcon className="text-[#856B39] text-[40px]" />
                <div className="font-bold text-[18px] sm:text-[25px]">
                  <div className="flex items-center gap-1">
                    <h2 className="text-[#AD9A74]">Sun-Thurs:</h2>
                    <h2>11:30am-11pm</h2>
                  </div>
                  <div className="flex items-center gap-1">
                    <h2 className="text-[#AD9A74]">Fri-Sat:</h2>
                    <h2>1:30am-Midnight</h2>
                  </div>
                </div>
              </div>
              <Link
                href={"mailto:abdullahazhar1099@gmail.com"}
                className="gap-3 overflow-hidden flex items-center"
              >
                <AlternateEmailIcon className="text-[#856B39] text-[40px]" />
                <p className="font-bold text-[18px] text-[#856B39] sm:text-[25px] max-w-[500px]">
                  Mail
                </p>
              </Link>
              <div className="flex items-center gap-3">
                <ChatBubbleOutlineIcon className="text-[#856B39] text-[40px]" />
                <p className="font-bold text-[18px] text-[#AD9A74] sm:text-[25px] max-w-[500px]">
                  Message Us
                </p>
              </div>
            </div>
            <ConatactForm />
          </div>
        </ImageAnimation>
        <ImageAnimation delay={0}>
          <div className="border-2 max-[339px]:border-none max-[339px]:p-0 sm:border-4 p-2 sm:p-6 border-[#856B39] rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206252.80376121335!2d-115.33980981205276!3d36.1251644615951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2s!4v1738761766780!5m2!1sen!2s"
              width="1200"
              height="600"
              className="w-auto sm:w-[500px] md:w-[700px] xl:w-[700px] 2xl:w-[900px] rounded-lg max-sm:h-[400px]"
              loading="lazy"
            ></iframe>
          </div>
        </ImageAnimation>
      </div>
    </section>
  );
}
