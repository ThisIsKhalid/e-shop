import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import Form from "../../ui/Form/Form";
import Input from "../../ui/Input/Input";
import TopHeader from "./TopHeader";

type FormValues = {
  searchInfo: string;
};

const Header = () => {
  const onSubmit = (data: FormValues) => console.log(data.searchInfo);

  return (
    <div className="">
      <TopHeader />

      <div className="flex items-center justify-between py-4 px-10 bg-gray-50">
        <div>
          <h1 className="text-4xl font-bold text-primary">FashionBazar</h1>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Form<FormValues> onSubmit={onSubmit}>
              {({ register }) => (
                <div className="">
                  <Input
                    {...register("searchInfo", {
                      required: "This field is required",
                    })}
                    className="w-96 bg-gray-50 "
                    placeholder="Search for products..."
                  />
                </div>
              )}
            </Form>

            <CiSearch className="absolute top-1/2 -translate-y-1/2 right-5 text-2xl" />
          </div>

          <CiHeart className="text-3xl cursor-pointer ml-5" />
          <div className="relative mr-5">
            <CiShoppingCart className="text-3xl cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-secondary rounded-full h-5 w-5 text-center text-sm">
              5
            </span>
          </div>
          <button className="py-2 px-4 bg-primary text-white rounded">
            Login
          </button>
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
