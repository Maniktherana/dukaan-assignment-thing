import * as React from "react";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative">
        <Search
          size="16px"
          className="text-[#808080] absolute inset-y-[12px] left-3 flex items-center pointer-events-none"
        />
        <input
          type={type}
          className={cn(
            "text-[#808080] text-[15px] h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
