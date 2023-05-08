"use client";

import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    url: "",
    subject: "computer science",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/up", formData);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-2xl font-bold mb-2">Add a Quizlet</h3>
      <div className="mb-4">
        <label htmlFor="url" className="block text-gray-700 font-bold mb-2">
          URL:
        </label>
        <input
          required
          type="text"
          id="url"
          name="url"
          value={formData.url}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
          Subject:
        </label>
        <select
          required
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
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
      <div className="flex justify-center">
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </div>
    </form>
  );
}
