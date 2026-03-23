import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richards hub - Professional CV Editing Service",
  description: "Transform your CV into a powerful tool. Professional CV editing and optimization service created by Mbuyelo Nyathi with instant WhatsApp payment. Honoring Richard's legacy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
