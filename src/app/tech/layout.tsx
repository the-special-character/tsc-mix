import type { Metadata } from "next";
import { builder } from "@builder.io/sdk";
import localFont from "next/font/local";
import "./globals.css";
import { RenderBuilderContent } from "@/components/builder";
import Navbar from "@/components/Navbar";

type SetionProps = {
  urlPath: string;
};

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const FooterSection = async ({ urlPath }: SetionProps) => {
  const builderModelName = "footer-section";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise();

  return <RenderBuilderContent content={content} model={builderModelName} />;
};

const ContactFormSection = async ({ urlPath }: SetionProps) => {
  const builderModelName = "contact-form";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath,
      },
    })
    .toPromise();

  return <RenderBuilderContent content={content} model={builderModelName} />;
};

export default function TechLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const urlPath = "/";
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar />
      {children}
      <ContactFormSection urlPath={urlPath} />
      <FooterSection urlPath={urlPath} />
    </main>
  );
}
