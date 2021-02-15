import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";
import NavBar from "../components/nav-bar";
import List from "../components/list";

export default function Home({ allPostsData }) {
  return (
    <>
      <NavBar />
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingSm}>
          <p>
            Haii! I'm Ankita Kulkarni ✨ I'm a Tech Lead at Loblaw Digital. I
            have been working in the industry for the past 7 years! I love
            building, architecting and scaling web and mobile apps :)
            <br />
            When I'm not behind the screen, I love trying wine from different
            regions 🍷 & making pour over coffee ☕
          </p>
        </section>
        <List data={allPostsData} link="/posts" heading="Latest blog posts" />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().slice(0, 4);
  return {
    props: {
      allPostsData,
    },
  };
}
