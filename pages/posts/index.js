import { getSortedPostsData } from "../../lib/posts";
import Layout from "../../components/layout";
import NavBar from "../../components/nav-bar";
import List from "../../components/list";

export default function Posts({ allPostsData }) {
  return (
    <>
      <NavBar />
      <Layout>
        <List data={allPostsData} heading="Blog Posts" link="/posts/" />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
