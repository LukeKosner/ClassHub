"use client"; // Error components must be Client components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="bg-blue-900 text-white p-8 min-h-screen flex flex-col">
      <h2 className="text-4xl font-bold">A problem has been detected</h2>
      <p className="mb-auto text-lg mb-4">Error message: {error.message}</p>

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="bg-white text-blue-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Restart
      </button>
    </div>
  );
}
