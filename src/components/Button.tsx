import { ComponentPropsWithoutRef } from "react";

type ButtonSize = "default" | "small";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  size?: ButtonSize;
}

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-base",
  small: "px-4 py-2 text-sm",
};

export function Button({
  size = "default",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-lg bg-primary font-medium text-white hover:bg-primary/90 transition-colors ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
