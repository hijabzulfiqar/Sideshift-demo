import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { PostHogProvider } from "./providers/PostHogProvider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SideShift - Start Your Free Trial",
  description: "SideShift - The UGC Platform for Brands. Start your free trial today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to iClosed for faster calendar loading */}
        <link rel="preconnect" href="https://app.iclosed.io" />
        <link rel="dns-prefetch" href="https://app.iclosed.io" />
      </head>
      <body
        className={`${geistSans.variable} relative z-0 flex min-h-screen flex-col font-sans antialiased`}
      >
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u999wrrqw0");
            `,
          }}
        />
        <PostHogProvider>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
