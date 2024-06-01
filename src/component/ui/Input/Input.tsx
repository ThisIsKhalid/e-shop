import React from "react";
import cn from "../../../lib/cn";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: string;
  label?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, label, className, ...props }, ref) => {
    const inputClasses = cn(
      "border rounded p-2 w-full focus:outline-gray-900 focus:ring-0 placeholder:text-sm text-base h-12",
      {
        "border-red-500": error,
        "border-gray-500": !error,
      },
      className
    );

    return (
      <div className="">
        {label && <label className="text-sm">{label}</label>}
        <input ref={ref} className={inputClasses} {...props} />
        {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
      </div>
    );
  }
);
export default Input;
