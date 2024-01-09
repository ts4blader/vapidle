import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { type VariantProps } from "class-variance-authority"
import { cn } from "utils/helper"
import { buttonVariants } from "./variant"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      const Comp = asChild ? Slot : "button"

      return (
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          type={props.type || "button"}
          ref={ref}
          {...props}
        />
      )
    }
  )
)
Button.displayName = "Button"

export { Button }
