import { useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import Form from "../../ui/Form/Form";
import Input from "../../ui/Input/Input";
import ShopDropdown from "./ShopDropdown";
import TopHeader from "./TopHeader";

type FormValues = {
  searchInfo: string;
};

const Header = () => {
  const [menuBtn, setMenuBtn] = useState(false);

  const onSubmit = (data: FormValues) => console.log(data.searchInfo);

  return (
    <div className="">
      <TopHeader />

      <div className="flex items-center justify-between py-4 lg:py-0 md:px-10 px-5 bg-gray-50">
        <div className="flex items-center md:gap-5 gap-3">
          <img
            src="./icons/app.png"
            alt=""
            className={`md:h-9 md:w-9 h-7 w-7 cursor-pointer ${
              menuBtn
                ? "rotate-180 transition-all duration-300 ease-in-out"
                : "-rotate-0 transition-all duration-300 ease-in-out"
            }`}
            onClick={() => setMenuBtn(!menuBtn)}
          />
          <Link to="/" className="md:text-3xl text-2xl font-bold text-black ">
            FashionBazar
          </Link>
        </div>

        <div className="hidden lg:flex">
          <ShopDropdown />
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:flex">
            <Form<FormValues> onSubmit={onSubmit}>
              {({ register }) => (
                <div className="">
                  <Input
                    {...register("searchInfo", {
                      required: "This field is required",
                    })}
                    className="w-48 lg:w-60 xl:w-96 bg-gray-50 "
                    placeholder="Search for products..."
                  />
                </div>
              )}
            </Form>

            <CiSearch className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl" />
          </div>

          <CiHeart className="w-6 md:w-7 h-6 md:h-7 cursor-pointer ml-0 md:ml-5" />
          <div className="relative">
            <CiShoppingCart className="w-6 md:w-7 h-6 md:h-7 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-secondary rounded-full h-5 w-5 text-center text-sm">
              5
            </span>
          </div>
          <div className="cursor-pointer">
            <img src="./icons/user.png" alt="" className="w-5 md:w-6 h-5 md:h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

//  <Form<FormValues> onSubmit={onSubmit}>
//    {({ register, formState: { errors } }) => (
//      <div>
//        <Input
//          {...register("searchInfo", {
//            required: "This field is required",
//          })}
//          error={errors.searchInfo?.message}
//        />
//        <Input type="submit" />
//      </div>
//    )}
//  </Form>;
