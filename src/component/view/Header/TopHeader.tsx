import {
  FaFacebook,
  FaInstagram,
  FaRegArrowAltCircleRight,
  FaYoutube,
} from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";

export default function TopHeader() {
  return (
    <div className="h-8 bg-gray-900 text-white px-10">
      <div className="h-full flex items-center justify-between gap-3 text-primary font-medium">
        <div className="flex items-center gap-1">
          <FaBoltLightning />
          <span>EXCLUSIVE T-SHIRTS ON SALE | Limited time only</span>
          <FaRegArrowAltCircleRight />
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xl">
            <FaFacebook />
          </div>
          <div className="text-xl">
            <FaYoutube />
          </div>
          <div className="text-xl">
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}
