import type { Metadata } from "next";
import { Inter} from "next/font/google";
import {NuqsAdapter} from "nuqs/adapters/next/app";
import { Toaster } from "sonner";
import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const inter = Inter ({
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "QuillShare",
  description: "Created by Manan Patel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <NuqsAdapter>
          <ConvexClientProvider>
            <Toaster/>
            {children}
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
