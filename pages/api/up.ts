import { getAuth } from "@clerk/nextjs/server";
import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { v4 as uuidv4 } from "uuid";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const body = request.body;
  const { userId: clerk } = getAuth(request);

  const { subject, url } = body;

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  if (!url.includes("quizlet.com")) {
    throw new Error("Quizlet URL is required");
  }
  const client = await db.connect();

  const quizlets =
    await client.sql`INSERT INTO QUIZLETS (url, clerk, subject, created, id)
  VALUES (
    ${url}, ${clerk}, ${subject}, ${formattedDate}, ${uuidv4()})
  RETURNING *;`;
  return response.status(200).json({ quizlets });
}
