import "./globals.css";
import {
  ClerkProvider,
  UserButton,
  SignedIn,
  SignedOut,
  currentUser,
} from "@clerk/nextjs";
import Link from "next/link";

export const metadata = {
  title: "GovHub",
  description: "From Luke Kosner",
};

export default async function RootLayout({
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
            className="h-12 flex flex-row items-center justify-between px-5 pt-8 pb-3"
          >
            <Link href="/">
              <h1 className="text-2xl">GovHub</h1>
            </Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {children}
          <div id="footer" className="mt-3 flex flex-row items-center p-5">
            <p className="text-lg">&copy; 2023 - GovHub</p>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
