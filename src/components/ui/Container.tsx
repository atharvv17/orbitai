
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "small" | "default" | "large" | "full";
}

export const Container = ({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 relative",
        {
          "max-w-5xl": size === "small",
          "max-w-7xl": size === "default",
          "max-w-screen-2xl": size === "large",
          "max-w-none": size === "full",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
