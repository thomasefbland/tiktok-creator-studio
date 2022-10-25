import NextAuth from "next-auth/next";
import TikTokProvider from "../../../../lib/nextauth/tiktok-provider";

export const authOptions = {
    providers: [
        TikTokProvider({
            clientId: process.env.NEXTAUTH_TIKTOK_CLIENT_KEY,
            clientSecret: process.env.NEXTAUTH_TIKTOK_CLIENT_SECRET
        })
    ]
}