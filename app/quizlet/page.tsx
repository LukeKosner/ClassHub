"use client";

import Viewer from "@/components/viewer";
import Form from "@/components/form";
import useSWR from "swr";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

export default function Home(): JSX.Element {
  const { isLoaded, isSignedIn, user } = useUser();

  const { data, error } = useSWR("/api/load", (url) =>
    axios.get(url).then((res) => res.data)
  );

  if (error) {
    throw Error(error.message);
  }

  if (!data || !isLoaded || !isSignedIn) {
    return (
      <div className="h-screen flex">
        <p className="m-auto">Loading...</p>
      </div>
    );
  }

  if (
    !user.primaryEmailAddress?.emailAddress.endsWith("@collegiateschool.org")
  ) {
    return (
      <div className="h-screen flex">
        <p className="m-auto">
          You are not authorized to view this page. Please sign in with your
          Collegiate email.
        </p>
      </div>
    );
  }
  return (
    <div className="h-screen flex flex-col m-8 space-y-3">
      <Viewer data={data} />
      <hr className="border-gray-300" />
      <Form />
    </div>
  );
}
