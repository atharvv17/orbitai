
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
      primary: "orbit-gradient-bg text-orbit-cosmos-400 hover:opacity-90 shadow-sm",
      secondary: "bg-orbit-purple-600 text-orbit-yellow-100 hover:bg-orbit-purple-700",
      outline: "bg-transparent border border-orbit-orange-500 text-orbit-orange-500 hover:bg-orbit-orange-500/10",
      ghost: "bg-transparent text-orbit-orange-500 hover:bg-orbit-orange-500/10",
      link: "bg-transparent text-orbit-orange-500 hover:underline p-0 h-auto",
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
            "after:absolute after:inset-0 after:bg-orbit-yellow-100/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity":
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
