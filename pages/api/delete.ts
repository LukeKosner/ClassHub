import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { getAuth } from "@clerk/nextjs/server";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { userId: clerk } = getAuth(request);

  const id = Array.isArray(request.query.id)
    ? request.query.id[0]
    : request.query.id;

  const client = await db.connect();

  const find =
    await client.sql`SELECT * FROM QUIZLETS WHERE id = ${id} AND clerk = ${clerk};`;

  console.log(id, clerk);
  console.log(find.rows.length);

  const quizlets =
    await client.sql`DELETE FROM QUIZLETS WHERE id = ${id} AND clerk = ${clerk} RETURNING *;`;
  return response.status(200).json({ quizlets });
}
