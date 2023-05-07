import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import clerk from "@clerk/clerk-sdk-node";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const client = await db.connect();

  const quizlets = await client.sql`SELECT * FROM Quizlets;`;

  const quizletsArray = await Promise.all(
    quizlets.rows.map(async (quizlet) => {
      const user = await clerk.users.getUser(quizlet.clerk);
      return {
        id: quizlet.id,
        name: quizlet.name,
        url: quizlet.url,
        subject: quizlet.subject,
        created: quizlet.created,
        clerk: quizlet.clerk,
        user: user.firstName + " " + user.lastName,
      };
    })
  );

  return response.status(200).json(quizletsArray);
}
