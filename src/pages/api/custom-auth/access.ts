import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { cors, runMiddleware } from "../../../../lib/utils/cors";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);
  const { code, state } = req.query;
  const { csrfState } = req.cookies;

  if (state !== csrfState) {
    res.status(422).json({ message: "Invalid State" });
    return;
  }

  let url_access_token = "https://open-api.tiktok.com/oauth/access_token/";
  url_access_token += `?client_key=${process.env.TIKTOK_CLIENT_KEY}`;
  url_access_token += `&client_secret=${process.env.TIKTOK_CLIENT_SECRET}`;
  url_access_token += "&code=" + code;
  url_access_token += "&grant_type=authorization_code";

  const resp = await fetch(url_access_token, { method: "POST" });
  const json = await resp.json();
  res.status(200).json(json);
}
