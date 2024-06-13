import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "04 - Rick and Morty Acticity",
  description: "Developed by Ozner Leyva",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  )
}
