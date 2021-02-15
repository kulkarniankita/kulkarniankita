import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Date from "../../components/date";
import { getConfData } from "../../lib/posts";
import Layout from "../../components/layout";
import NavBar from "../../components/nav-bar";
import List from "../../components/list";

export default function Conferences({ confData }) {
  return (
    <>
      <NavBar />
      <Layout>
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
