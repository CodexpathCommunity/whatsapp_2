import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Whatsapp_2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </>
  );
}
