import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cn from "../../../lib/cn";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium focus:outline-none uppercase rounded transition-colors duration-300";

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-black ",
    secondary: "bg-secondary text-black/80 hover:text-white hover:bg-primary",
  };

  const sizeStyles = {
    sm: "px-2.5 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-lg",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
