import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./components/clientLayout";

export const metadata: Metadata = {
  title: "Axiatix — Modern IT Solutions",
  description: "Enterprise technology services, security, cloud & more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
