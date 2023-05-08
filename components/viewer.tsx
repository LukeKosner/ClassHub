"use client";

import { useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import { UUID } from "crypto";
import axios from "axios";
import { useAuth } from "@clerk/nextjs";

type Quizlet = {
  name: string;
  subject: string;
  url: string;
  clerk: string;
  created: string;
  id: UUID;
  user: string;
};

export default function Viewer(params: any): JSX.Element {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");

  const { userId } = useAuth();

  const data = params.data;

  function deleteQuizlet(id: UUID) {
    axios
      .delete(`/api/delete?id=${id}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
        }
      })
      .catch((err) => {
        throw Error(err.message);
      });

    window.location.reload();
  }

  const rows = data
    .filter((quizlet: Quizlet) =>
      quizlet.name.toLowerCase().includes(query.toLowerCase())
    )
    .filter((quizlet: Quizlet) =>
      quizlet.subject.toLowerCase().includes(subject.toLowerCase())
    );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">Search</h2>
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 h-12 focus:ring-blue-400"
            placeholder="Search for a Quizlet"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">Subject</h2>
          <select
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:ring-2 h-12 focus:ring-blue-400"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">All</option>
            <option value="computer science">Computer Science</option>
            <option value="history">History</option>
            <option value="biology">Biology</option>
            <option value="advanced geometry">Advanced Geometry</option>
            <option value="core geometry">Core Geometry</option>
            <option value="latin">Latin</option>
            <option value="advanced spanish">Advanced Spanish</option>
            <option value="core spanish">Core Spanish</option>
            <option value="french">French</option>
            <option value="chinese">Chinese</option>
            <option value="english">English</option>
            <option value="greek">Greek</option>
          </select>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {rows.map((quizlet: Quizlet) => (
          <div
            key={quizlet.name}
            className="bg-white rounded-lg shadow-md p-4 space-y-2 flex flex-col"
          >
            <h2 className="text-lg font-bold">{quizlet.name}</h2>
            <p className="text-sm text-gray-600 ">
              {quizlet.subject
                .toLowerCase()
                .split(" ")
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join(" ")}
            </p>
            <p className="text-sm text-gray-600 ">Created by {quizlet.user}</p>

            <Link
              href={quizlet.url}
              className="bg-blue-500 hover:bg-blue-700 rounded-lg text-white font-bold p-2 text-center"
            >
              Study Now
            </Link>

            {quizlet.clerk === userId && (
              <button
                className="bg-red-500 hover:bg-red-700 rounded-lg text-white font-bold p-2 text-center"
                onClick={() => deleteQuizlet(quizlet.id)}
              >
                Delete
              </button>
            )}
          </div>
        ))}
        {rows.length === 0 && (
          <div className="w-screen text-gray-600 text-lg">
            <p>No results found...</p>
          </div>
        )}
      </div>
    </div>
  );
}
