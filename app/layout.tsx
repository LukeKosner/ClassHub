import "./globals.css";
import { ClerkProvider, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export const metadata = {
  title: "QuizletHub",
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
              <h1 className="text-2xl">QuizletHub</h1>
            </Link>
            <SignedIn>
              <div className="flex flex-row items-center space-x-3">
                <Link
                  href="/form"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-xl"
                >
                  Add a Quizlet
                </Link>
                <UserButton />
              </div>
            </SignedIn>
          </div>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
