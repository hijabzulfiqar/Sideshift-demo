import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SideShift - Book a Demo",
  description: "SideShift - The UGC Platform for Brands. Book a demo today.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
