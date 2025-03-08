
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import React from "react";

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "default" | "lg" | "icon";
  asChild?: boolean;
  className?: string;
}

export const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, variant = "primary", size = "default", className, asChild, ...props }, ref) => {
    const baseStyles = "font-medium transition-all duration-200 ease-in-out relative overflow-hidden group";
    
    const variantStyles = {
      primary: "bg-orbit-blue-600 text-white hover:bg-orbit-blue-700 shadow-sm",
      secondary: "bg-orbit-gray-100 text-orbit-gray-900 hover:bg-orbit-gray-200",
      outline: "bg-transparent border border-orbit-blue-600 text-orbit-blue-600 hover:bg-orbit-blue-50",
      ghost: "bg-transparent text-orbit-blue-600 hover:bg-orbit-blue-50",
      link: "bg-transparent text-orbit-blue-600 hover:underline p-0 h-auto",
    };
    
    const sizeStyles = {
      sm: "text-sm px-3 py-1.5 rounded-md",
      default: "px-5 py-2.5 rounded-lg",
      lg: "text-lg px-7 py-3 rounded-lg",
      icon: "p-2 rounded-full",
    };
    
    return (
      <Button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          {
            "after:absolute after:inset-0 after:bg-white/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity":
              variant === "primary" && !asChild,
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </Button>
    );
  }
);

CustomButton.displayName = "CustomButton";
