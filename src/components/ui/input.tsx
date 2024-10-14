import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconRight?: React.ReactNode;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, iconRight, containerClassName, ...props }, ref) => {
    return (
      <div className={cn("flex bg-white items-center px-6 rounded-xl h-16 gap-2 w-full", containerClassName)}>
        <input
          type={type}
          className={cn(
            "flex h-full w-full rounded-md bg-transparent text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 focus-visible:out focus:ring-0 focus:outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
        {iconRight}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }