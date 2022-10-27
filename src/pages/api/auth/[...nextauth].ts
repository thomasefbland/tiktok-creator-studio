import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "tiktok",
      name: "TikTok",
      type: "oauth",
      clientId: process.env.TIKTOK_CLIENT_KEY,
      clientSecret: process.env.TIKTOK_CLIENT_SECRET,
      authorization: {
        url: "https://www.tiktok.com/auth/authorize/",
        params: {
          scope: "user.info.basic,video.list,video.upload",
          response_type: "code",
          client_key: process.env.TIKTOK_CLIENT_KEY,
        },
      },
      token: {
        url: "https://open-api.tiktok.com/oauth/access_token/",
        params: {
          client_key: process.env.TIKTOK_CLIENT_KEY,
          client_secret: process.env.TIKTOK_CLIENT_SECRET,
          grant_type: "authorization_code",
        },
      },
      userinfo: "https://open-api.tiktok.com/user/info/",
      profile(profile) {
        return {
          profile: profile,
          id: profile.open_id,
        };
      },
      checks: ["state"],
    },
  ],

  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
