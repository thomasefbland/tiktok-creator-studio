import { serialize } from "cookie";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { HOST_BASE_URL } from "../../../lib/utils/constants";

const UserCard = () => {
  const fetchData = async () => {
    // const csrfState = Math.random().toString(36).substring(2);
    // const cookieValue = serialize("csrfState", csrfState, { maxAge: 60000 });

    // let url = "https://www.tiktok.com/auth/authorize/";
    // url += `?client_key=${process.env.TIKTOK_CLIENT_KEY}`;
    // url += "&scope=user.info.basic,video.list,video.upload";
    // url += "&response_type=code";
    // url += "&redirect_uri=https://creatorstudio.vercel.app/api/custom-auth/access";
    // url += "&state=" + csrfState;

    // const resp = await fetch(url, { headers: { "Set-Cookie": cookieValue, "Access-Control-Allow-Origin": "*" } });
    // console.log(resp);

    const resp = await fetch(`${HOST_BASE_URL}/api/custom-auth/authorize`, { headers: { "Access-Control-Allow-Origin": "*" } });
    console.log(resp);
  };

  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="menu-button">We Are Signed in!</div>
      </>
    );
  }
  return (
    <div className="menu-button" onClick={() => signIn()}>
      {/* // <div className="menu-button" onClick={() => fetchData()}> */}
      Log in with TikTok
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div className="header-logo-wrapper">
        <Link href={"/"}>
          <a className="header-logo">
            <Image src="/logo/logo2_light_mode.svg" layout={"fill"} alt={"Creator Studio Logo"} />
          </a>
        </Link>
      </div>
      <nav>
        <button className="create-button">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
            <g>
              <path d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"></path>
            </g>
          </svg>
          <span>Create</span>
        </button>
        <UserCard />
      </nav>
    </header>
  );
};

export default Header;
