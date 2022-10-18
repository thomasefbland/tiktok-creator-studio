import styles from "../styles/Home.module.scss";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/common/Button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Creator Studio</title>
      </Head>
      <main>
        <section className={styles.section_1}>
          <div className={styles.section_copy_wrapper}>
            <h2 className={styles.section_copy_headline}>Allow your Editors to Upload</h2>
            <h3 className={styles.section_copy_subheadline}>Seamlessly & Securely</h3>
            <p className={styles.section_copy_blurb}>Without sharing login credentials.</p>
            <Button>Get Started</Button>
          </div>
          <div className={styles.section_image_wrapper}>
            <img src={"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png"} width={400} height={300}></img>
          </div>
        </section>
        <section className={styles.section_2}>
          <div className={styles.card_container}>
            <div className={styles.card_icon_wrapper}>
              <Image alt="https://www.flaticon.com/free-icons/clock created by Freepik" src={"/a7mgu-v0h4f.svg"} layout={"fill"} />
            </div>
            <div className={styles.card_caption_wrapper}>
              <h3>Fast.</h3>
              <p>
                Immediately invite Editors with a secure <em>Magic Link</em>
              </p>
            </div>
          </div>
          <div className={styles.card_container}>
            <div className={styles.card_icon_wrapper}>
              <Image alt="https://www.flaticon.com/free-icons/right-click created by Smashicons" src={"/anb1o-ja2zh.svg"} layout={"fill"} />
            </div>
            <div className={styles.card_caption_wrapper}>
              <h3>Easy.</h3>
              <p>
                One click <em>Log in with TikTok</em> to get started right away
              </p>
            </div>
          </div>
          <div className={styles.card_container}>
            <div className={styles.card_icon_wrapper}>
              <Image alt="https://www.flaticon.com/free-icons/protect created by Ghozi Muhtarom" src={"/a3zmf-km00t.svg"} layout={"fill"} />
            </div>
            <div className={styles.card_caption_wrapper}>
              <h3>Secure.</h3>
              <p>Signed, prefixed cookies to protect your account</p>
            </div>
          </div>
        </section>
        <section className={styles.section_3}>
          <div className={styles.cards_wrapper}>
            <div className={styles.card_container + " " + styles.data_policy_card}>
              <div className={styles.card_heading_wrapper}>
                <h3>Revoke Access</h3>
                <h4>At Any Time, No Questions Asked</h4>
              </div>
              <div className={styles.card_image_wrapper}>
                <Image src={"/27a445684cbc228f33a4786560ab8998_00001.png"} layout={"fill"} />
              </div>
              <div className={styles.card_blurb_wrapper}>
                <p>
                  Manage permissions for individual editors, or remove them entirely with a single click.Revoke our access to your account, and <strong>delete</strong> all of your
                  stored data at any moment. To learn more about how we handle your information, see our Privacy Policy.
                </p>
              </div>
              <div className={styles.card_cta_buttons_wrapper}>
                <Button>Revoke Access</Button>
                <Button link="/legal/privacy-policy">Privacy Policy</Button>
              </div>
            </div>

            <div className={styles.card_container + " " + styles.security_card}>
              <div className={styles.card_heading_wrapper}>
                <h3>Securely Managed</h3>
                <h4>With Official Access Tokens</h4>
              </div>
              <div className={styles.card_image_wrapper}>
                <Image src={"/27a445684cbc228f33a4786560ab8998_00001.png"} layout={"fill"} />
              </div>
              <div className={styles.card_blurb_wrapper}>
                <p>
                  We never have access to your account login credentials. Instead, we use the official TikTok for Developers API to perform actions on your behalf. Using the latest
                  web standards and technologies, access to your account is secured at all times. See the official developers api documentation below.
                </p>
              </div>
              <div className={styles.card_cta_buttons_wrapper}>
                <a href="https://developers.tiktok.com/doc/overview/">
                  <Button>Learn More</Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
