import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
  src: [
    {
      path: "./fonts/MaShanZheng-Regular.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/NotoSerifSC-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/NotoSerifSC-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/NotoSerifSC-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/NotoSerifSC-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NotoSerifSC-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/NotoSerifSC-Black.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/NotoSerifSC-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/NotoSerifSC-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

const zhiMangXing = localFont({
  src: [
    {
      path: "./fonts/ZhiMangXing-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-zhi-mang-xing",
})

export const metadata: Metadata = {
  title: "FLFE Blog",
  description: "我的老博客",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${workSans.variable} ${zhiMangXing.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
