function TikTokProvider(options) {
  return {
    id: "tiktok",
    name: "TikTok",
    type: "oauth",
    version: "2.0",
    authorization: {
      url: "https://www.tiktok.com/auth/authorize/",
      params: {
        scope: "user.info.basic,video.list,video.upload",
        response_type: "code",
        client_key: clientId,
      },
    },
    token: {
      url: "https://open-api.tiktok.com/oauth/access_token/",
      params: {
        client_key: clientId,
        client_secret: clientSecret,
        grant_type: "authorization_code",
      },
    },
    // This will not be used to build the profile, we want to handle that through the access_token response instead, by manually taking over the profile function. We will set userinfo to nothing and isToken to true
    userinfo: "https://open.tiktokapis.com/v2/user/info/",
    // idToken: true,

    profile(profile) {
      return {
        id: profile.open_id,
        name: profile.display_name,
        image: profile.avatar_url,
      };
    },

    checks: ["state"],
    options,
  };
}

export default TikTokProvider;
