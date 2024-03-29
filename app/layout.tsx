import type { Metadata } from "next"
import { Poppins as MainFont } from "next/font/google"
import "styles/globals.css"
import { cn } from "utils/helper"

const font = MainFont({
  subsets: ["latin"],
  variable: "--main-font",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          font.className,
          font.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
