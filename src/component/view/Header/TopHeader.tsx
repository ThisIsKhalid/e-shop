import {
  FaFacebook,
  FaInstagram,
  FaRegArrowAltCircleRight,
  FaYoutube,
} from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";

export default function TopHeader() {
  return (
    <div className="h-8 bg-gray-800 text-white ">
      <div className="h-full px-5 md:px-10">
        <div className="h-full flex items-center justify-between gap-3 text-primary font-medium">
          <div className="flex items-center gap-1 group cursor-pointer">
            <FaBoltLightning />
            <span className="text-[8px] md:text-xs">
              EXCLUSIVE T-SHIRTS ON SALE | Limited time only
            </span>
            <FaRegArrowAltCircleRight className="ml-1 group-hover:ml-3 transition-all" />
          </div>
          <div className="flex items-center gap-3 text-white/80">
            <p className="text-xs hidden md:flex">
              {new Intl.DateTimeFormat("en-US", {
                weekday: "short",
                month: "short",
                day: "2-digit",
                year: "numeric",
              }).format(new Date())}
            </p>
            <div className="text-xs md:text-base">
              <FaFacebook />
            </div>
            <div className="text-xs md:text-base">
              <FaYoutube />
            </div>
            <div className="text-xs md:text-base">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
