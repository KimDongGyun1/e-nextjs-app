import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>WEB!</title>
      </Head>
      <Layout>
        <h2>Welcome</h2>
        Hello, World!
      </Layout>
    </>
  );
}
