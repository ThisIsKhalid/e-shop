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

      <div className="flex items-center justify-between py-3 px-10 border border-red-400">
        <h1 className="text-4xl font-bold text-primary">FashionBazar</h1>

        <div>
          <Form<FormValues> onSubmit={onSubmit}>
            {({ register }) => (
              <div>
                <Input
                  {...register("searchInfo", {
                    required: "This field is required",
                  })}
                />
                <Input type="submit" />
              </div>
            )}
          </Form>
        </div>

        <div>
          <button>Login</button>
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
