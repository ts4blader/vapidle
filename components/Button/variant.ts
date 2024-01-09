import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-semibold focus-visible:outline outline-primary-200 outline-offset-2 focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-70 active:opacity-100",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-sm",
        outline:
          "border-[2px] text-primary border-current shadow-sm",
        ghost: "hover:bg-primary-100",
      },
      size: {
        // relative
        sm: "h-8 px-3 py-1 text-xs",
        md: "h-9 px-4 py-2 text-sm",
        lg: "h-10 py-2 px-8",

        // square
        28: "h-7 w-7",
        32: "h-8 w-8",
        36: "h-9 w-9",
        40: "h-10 w-10",
        48: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export { buttonVariants }