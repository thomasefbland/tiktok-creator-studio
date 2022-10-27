import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { cors, runMiddleware } from "../../../../lib/utils/cors";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await runMiddleware(req, res, cors);

  const csrfState = Math.random().toString(36).substring(2);
  res.setHeader("Set-Cookie", serialize("csrfState", csrfState, { maxAge: 60000 }));

  let url = "https://www.tiktok.com/auth/authorize/";
  url += `?client_key=${process.env.TIKTOK_CLIENT_KEY}`;
  url += "&scope=user.info.basic,video.list,video.upload";
  url += "&response_type=code";
  url += "&redirect_uri=https://creatorstudio.vercel.app/api/custom-auth/access";
  url += "&state=" + csrfState;

  res.redirect(url);
}
