import Head from "next/head";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Weather Music</title>
      </Head>
      <Header />
      <Dashboard />
    </>
  )
}
