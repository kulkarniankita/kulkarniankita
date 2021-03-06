import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import clsx from "classnames";

const name = "Haii! I'm Ankita Kulkarni ✨";
export const siteTitle = "Ankita Kulkarni 💜";

export default function Layout({ children, home, title }) {
  return (
    <div
      className={clsx(styles.container, "dark:bg-lightgrey dark:text-white")}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {home && (
        <header className={clsx(styles.header, "dark:text-white")}>
          <>
            <Image
              priority
              src="/images/me.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1
              className={clsx(
                utilStyles.heading2Xl,
                "block text-indigo-600 xl:inline"
              )}
            >
              {name}
            </h1>
          </>
        </header>
      )}
      {title && (
        <h1
          className={clsx(
            utilStyles.heading2Xl,
            "block text-indigo-600 xl:inline"
          )}
        >
          {title}
        </h1>
      )}
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
