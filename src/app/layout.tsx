import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "KY Holidays | Premium Travel Agency Hyderabad",
  description:
    "KY Holidays is a premium travel agency in Hyderabad for India tour packages, Kashmir packages, Manali packages, Do Dham Yatra, Goa trips, family tours, spiritual packages, and budget travel packages.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/ky-logo.png",
  },
  openGraph: {
    title: "KY Holidays | Premium Travel Agency Hyderabad",
    description:
      "Plan India trips, Kashmir packages, Manali packages, Do Dham Yatra, Goa trips, family tours, spiritual packages, and budget travel packages with KY Holidays.",
    images: [
      {
        url: "/ky-logo.png",
        width: 1200,
        height: 630,
        alt: "KY Holidays",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KY Holidays | Premium Travel Agency Hyderabad",
    description:
      "Plan premium India trips, family tours, spiritual packages, and budget travel packages with KY Holidays.",
    images: ["/ky-logo.png"],
  },
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
