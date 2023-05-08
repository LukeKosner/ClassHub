import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import clerk from "@clerk/clerk-sdk-node";
import Xray from "x-ray";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const client = await db.connect();
  const xray = Xray();

  const quizlets = await client.sql`SELECT * FROM Quizlets;`;

  const quizletsArray = await Promise.all(
    quizlets.rows.map(async (quizlet) => {
      const user = await clerk.users.getUser(quizlet.clerk);
      const title = await new Promise((resolve, reject) => {
        xray(
          quizlet.url,
          "#setPageSetIntroWrapper > div > div > div.SetPage-setTitle > div.SetPage-titleWrapper > h1"
        )((err: Error, title: string) => {
          if (err) reject(err);
          else resolve(title);
        });
      });
      return {
        id: quizlet.id,
        url: quizlet.url,
        name: title,
        subject: quizlet.subject,
        created: quizlet.created,
        clerk: quizlet.clerk,
        user: user.firstName + " " + user.lastName,
      };
    })
  );

  return response.status(200).json(quizletsArray);
}
