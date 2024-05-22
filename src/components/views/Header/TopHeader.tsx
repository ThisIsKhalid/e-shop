import { BsFacebook, BsFillTelephoneInboundFill, BsLinkedin, BsYoutube } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

export default function TopHeader() {
  return (
    <section className="bg-primaryColor">
      <div className="container flex items-center justify-between py-1">
        <div className="flex items-center gap-4">
          <BsFacebook className="h-4 w-4 text-white/90" />
          <BsLinkedin className="h-4 w-4 text-white/90" />
          <BsYoutube className="h-5 w-5 text-white/90" />
        </div>
        <div className="flex items-center gap-4">
          <BsFillTelephoneInboundFill className="h-[14px] w-[14px] text-white/90" />
          <HiMail className="h-5 w-5 text-white/90" />
        </div>
      </div>
    </section>
  );
}
