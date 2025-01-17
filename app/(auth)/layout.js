
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Tamal Vai js",
  description: "Generated By Tamal Vai js",
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
