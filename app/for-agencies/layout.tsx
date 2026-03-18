import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UGC Platform for Agencies | Multi-Client Management | SideShift",
  description:
    "Scale creator programs across clients. White-label ready, automated payments, cross-client analytics. Trusted by Plutus Media, EVO Marketing, Seen Marketing, Pebble, and more.",
};

export default function ForAgenciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
