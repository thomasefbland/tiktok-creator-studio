import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Link href={"/"}>
        <a className="footer-logo">
          <Image
            src="/logo/logo_dark_mode.svg"
            width={300}
            height={60}
            layout={"fixed"}
            alt={"Creator Studio for TikTok Logo"}
          />
        </a>
      </Link>
      <div className="footer-links">
        <div className="footer-links-column">
          <h2>Legal</h2>
          <ul className="footer-links-list">
            <li>
              <Link href={`/legal/terms-of-service`}>
                <a>Terms Of Service</a>
              </Link>
            </li>
            <li>
              <Link href={`/legal/privacy-policy`}>
                <a>Privacy Policy</a>
              </Link>
            </li>
            <li>
              <Link href={`/legal/cookies-policy`}>
                <a>Cookies Policy</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-links-column">
          <h2>Resources</h2>
          <ul className="footer-links-list">
            <li>
              <Link href={`/contact`}>
                <a>Contact Us</a>
              </Link>
            </li>
            <a href="https://developers.tiktok.com" target="blank">
              <li className="powered-by-developer-option">
                <span>Powered By</span>
                <div className="powered-by-developer-logo">
                  <Image
                    className="developers-logo"
                    src="/tt4d_logo_darkmode-dc980949bb46d153359147614b2c42c5.svg"
                    width={140}
                    height={30}
                    layout={"fixed"}
                    alt={"TikTok Developer API Logo"}
                  />
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
