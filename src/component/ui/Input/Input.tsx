import React from "react";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => (
    <div>
      <input
        ref={ref}
        {...props}
        className={`border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded p-2 w-full`}
      />
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  )
);

export default Input;
