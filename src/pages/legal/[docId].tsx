import styles from "../../styles/Legal.module.scss";

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { HOST_BASE_URL } from "../../../lib/utils/constants";

import MarkdownIt from "markdown-it";
import Head from "next/head";
const md = new MarkdownIt({ html: true });

const paths = [{ params: { docId: "terms-of-service" } }, { params: { docId: "privacy-policy" } }, { params: { docId: "cookies-policy" } }];

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  doc: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { docId } = context.params as Params;
  let docText;
  let prettyTitle;
  if (docId && typeof docId === "string") {
    prettyTitle = "";
    for (const word of docId.split("-")) {
      prettyTitle += word[0].toUpperCase();
      for (let i = 1; i < word.length; i++) {
        prettyTitle += word[i];
      }
      prettyTitle += " ";
    }
    const resp = await fetch(`${HOST_BASE_URL}/legal/${docId}.md`);
    docText = await resp.text();
  }

  return {
    props: {
      docText,
      docId,
      prettyTitle,
    },
  };
};

const Legal: NextPage = ({ docText, docId, prettyTitle }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const title = `${prettyTitle} / Creator Studio`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.container}>
        <h3>Legal</h3>
        <div className={styles.main_container}>
          <aside className={styles.sidebar_container}>
            <ul className={styles.sidebar_wrapper}>
              {paths.map((path) => {
                return (
                  <li key={path.params.docId} className={path.params.docId === docId ? styles.sidebar_option + " active" : styles.sidebar_option}>
                    <p>
                      <Link href={`/legal/${path.params.docId}`}>
                        <a>{path.params.docId.replaceAll("-", " ")}</a>
                      </Link>
                    </p>
                  </li>
                );
              })}
            </ul>
          </aside>
          <article className={styles.doc_container} dangerouslySetInnerHTML={{ __html: md.render(docText) }}></article>
        </div>
      </div>
    </>
  );
};

export default Legal;
