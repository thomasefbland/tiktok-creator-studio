/**
 * @param {import("lib/nextauth").TikTokProvider} options
 * @example
 *
 * ```js
 * // pages/api/auth/[...nextauth].js
 * import TikTok from `nextauth/tiktok-provider`
 * ...
 * providers: [
 *   TikTokProvider({
 *     clientId: process.env.TIKTOK_CLIENT_ID,
 *     clientSecret: process.env.TIKTOK_CLIENT_SECRET
 *   })
 * ]
 * ...
 *
 * // pages/index
 * import { signIn } from "next-auth/react"
 * ...
 * <button onClick={() => signIn("tiktok")}>
 *   Sign in
 * </button>
 * ...
 * ```
 * *Resources:*
 * - [NextAuth.js Documentation](https://next-auth.js.org/providers/dropbox)
 * - [Dropbox Documentation](https://developers.dropbox.com/oauth-guide)
 * - [Configuration](https://www.dropbox.com/developers/apps)
 */
/** @type {import(".").OAuthProvider} */
export default function TikTokProvider(options: Partial<import("./oauth").OAuthConfig<any>>): import("./oauth").OAuthConfig<any>;
