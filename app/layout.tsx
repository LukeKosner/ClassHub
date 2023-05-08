import "./globals.css";
import { ClerkProvider, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export const metadata = {
  title: "GovHub",
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
        <main className="min-h-screen bg-gray-200 text-black dark:bg-gray-900 dark:text-white p-5">
          <div
            id="header"
            className="h-12 flex flex-row items-center justify-between"
          >
            <Link href="/">
              <h1 className="text-2xl">GovHub</h1>
            </Link>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          {children}
          <div id="footer" className="mt-3 flex flex-row items-center">
            <p className="text-lg">&copy; 2023 - Student Government.</p>
          </div>
        </main>
      </html>
    </ClerkProvider>
  );
}
