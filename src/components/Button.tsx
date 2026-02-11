import { ComponentPropsWithoutRef } from "react";

type ButtonSize = "default" | "small" | "large";
type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const sizeClasses: Record<ButtonSize, string> = {
  small: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary hover:bg-primary/90 font-medium",
  secondary: "bg-white text-primary hover:bg-white/90 font-medium",
};

export function Button({
  size = "default",
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
