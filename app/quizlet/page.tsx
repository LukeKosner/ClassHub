"use client";

import Viewer from "@/components/viewer";
import Form from "@/components/form";
import useSWR from "swr";
import axios from "axios";

export default function Home(): JSX.Element {
  const { data, error } = useSWR("/api/load", (url) =>
    axios.get(url).then((res) => res.data)
  );

  if (error) {
    throw Error(error.message);
  }

  if (!data) {
    return (
      <div className="h-screen flex">
        <p className="m-auto">Loading...</p>
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
