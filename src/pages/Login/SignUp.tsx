import { Link } from "react-router-dom";
import Button from "../../component/ui/Button/Button";
import Form from "../../component/ui/Form/Form";
import Input from "../../component/ui/Input/Input";
import { FaHome } from "react-icons/fa";

type FormValues = {
  name: string;
  email: string;
  number: string;
  password: string;
  re_password: string;
};

const SignUp = () => {
  const onSubmit = (data: FormValues) => console.log(data);
  return (
    <div className="signinbg px-5 py-10">
      <div className="main_container h-screen flex items-center justify-center">
        <div className="xl:w-[40%] lg:w-[60%] md:w-3/4 w-full bg-gray-100 md:px-10 px-2 md:py-16 py-5 rounded-md shadow-md relative">
          <Link to="/" className="absolute top-3 right-3">
            <FaHome className="md:text-4xl text-2xl" />
          </Link>

          <h1 className="text-3xl font-bold mb-2 text-center uppercase">
            Sign Up
          </h1>
          <p className="text-gray-500 mb-7 text-center text-base">
            Already have an account?{" "}
            <Link
              to="/signin"
              className=" text-blue-500 font-medium hover:underline  underline-offset-4"
            >
              Sign In
            </Link>
          </p>

          <Form<FormValues> onSubmit={onSubmit}>
            {({ register, formState: { errors } }) => (
              <div className="flex flex-col gap-5">
                <Input
                  {...register("name", {
                    required: "This field is required",
                  })}
                  type="text"
                  className="bg-inherit"
                  placeholder="Enter your name..."
                  error={errors.name?.message}
                  label="Name"
                />

                <Input
                  {...register("email", {
                    required: "This field is required",
                  })}
                  type="email"
                  className="bg-inherit"
                  placeholder="Enter your email..."
                  error={errors.email?.message}
                  label="Email"
                />

                <Input
                  {...register("number", {
                    required: "This field is required",
                  })}
                  type="text"
                  className="bg-inherit"
                  placeholder="Enter your phone number..."
                  error={errors.number?.message}
                  label="Phone Number"
                />
                <Input
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  type="password"
                  className="bg-inherit"
                  placeholder="Enter your password..."
                  error={errors.password?.message}
                  label="Password"
                />

                <Input
                  {...register("re_password", {
                    required: "This field is required",
                  })}
                  type="password"
                  className="bg-inherit"
                  placeholder="Re-enter your password..."
                  error={errors.re_password?.message}
                  label="Re-enter Password"
                />

                <Button type="submit" className="h-12" variant="outline">
                  Sign Up
                </Button>
              </div>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
