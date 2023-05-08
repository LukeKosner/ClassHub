import "./globals.css";
import { ClerkProvider, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export const metadata = {
  title: "ClassHub",
  description: "From Luke Kosner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen bg-gray-200 text-black dark:bg-gray-900 dark:text-white">
          <div
            id="header"
            className="h-12 flex flex-row items-center justify-between bg-gray-800 text-white py-8 px-4"
          >
            <Link href="/">
              <h1 className="text-2xl">ClassHub</h1>
            </Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {children}
          <div className="h-12 flex flex-row items-center justify-between bg-gray-800 text-white py-8 px-4">
            <p>© 2023 Luke Kosner</p>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
