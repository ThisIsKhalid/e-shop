import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BsCart2 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import TopHeader from "./TopHeader";
import { RiMenu4Fill } from "react-icons/ri";

const Header = () => {
  return (
    <section>
      <TopHeader />

      <div className="bg-white">
        <div className="container py-5 flex items-center justify-between gap-10">
          <div className="flex-1">
            <span className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
              E-shop
            </span>
          </div>
          <div className="hidden md:flex flex-1">
            <Input
              type="text"
              placeholder="Search product..."
              className="border-primary"
            />
          </div>
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center justify-between gap-2">
              <GoHeart className="h-5 w-5" />
              <p className="sm:flex hidden">Wishlist</p>
            </div>
            <div className="flex items-center justify-between gap-2 relative">
              <BsCart2 className="h-5 w-5" />
              <p className="absolute -top-4 left-3 text-white bg-primaryColor px-2 py-[3px] rounded-full text-xs">
                9
              </p>
              <p className="sm:flex hidden">$200</p>
            </div>
            <Button className="md:flex hidden">Log In</Button>
            <div className="border p-[2px] border-primary rounded-md flex md:hidden">
              <RiMenu4Fill className="h-5 w-5 text-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
