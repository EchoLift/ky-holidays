import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KY Holidays | Premium Travel Agency Hyderabad",
  description:
    "KY Holidays is a premium travel agency in Hyderabad for India tour packages, Kashmir packages, Manali packages, Do Dham Yatra, Goa trips, family tours, spiritual packages, and budget travel packages.",
  keywords: [
    "Travel agency Hyderabad",
    "India tour packages",
    "Budget travel packages",
    "Honeymoon packages",
    "Kashmir packages",
    "Manali packages",
    "Do Dham Yatra",
    "Goa packages",
    "Family tours",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
