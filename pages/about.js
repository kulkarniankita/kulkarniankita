import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import NavBar from "../components/nav-bar";
import { getConfData } from "../lib/posts";
import List from "../components/list";

export default function About({ confData }) {
  return (
    <>
      <NavBar />
      <Layout title="About me">
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingSm}>
          <p>
            Haii! I'm Ankita Kulkarni ✨ I'm a Tech Lead at Loblaw Digital.
            Prior to that, I was a Solution Architect at Rangle.io and IBM,
            Canada, Cloud Garage where I built several web and mobile
            applications using artificial intelligence, modern JavaScript, and
            native languages 🚀.
          </p>
          <p>
            I have been working in the industry for the past 7 years! I live in
            Toronto, Canada but I'm originally from Mumbai, India. I love
            building, architecting and scaling web and mobile apps :)
          </p>
          <p>
            When I'm not behind the screen, I love trying wine from different
            regions 🍷 & making pour over coffee ☕. I also have been playing
            Trampoline Dodgeball from Jan 2015 which I'm really proud of
          </p>

          <p>
            I have given a lot of conference talks worldwide about front-end in
            React and React Native, scaling mobile apps, accessibility,
            humanizing code reviews and more. If you would like me to give a
            talk at your conference, please reach out and we can chat!
          </p>
        </section>
        <List data={confData} heading="Conferences" formatType="MMMM, yyyy" />
      </Layout>
    </>
  );
}

export async function getStaticProps({}) {
  const confData = await getConfData();
  return {
    props: {
      confData,
    },
  };
}
