import Layout from "../../components/layout";
import NavBar from "../../components/nav-bar";
import IndividualPost from "../../components/post";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <>
      <NavBar />
      <Layout>
        <IndividualPost postData={postData} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
