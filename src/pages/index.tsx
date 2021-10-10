import Head from "next/head";
import Link from 'next/link'
import { useContext } from "react";
import { Dashboard } from "../components/Dashboard";
import { Header } from "../components/Header";
import { Context } from "../context/context";

export default function Home() {
  const { weather } = useContext(Context)
  console.log(weather)
  return (
    <>
      <Head>
        <title>Weather Music</title>
      </Head>
      <Header>
            <h1>Encontre a playlist <br/>ideal para o clima do seu dia! :)</h1>
            <div>
              {
                weather
                ? 
                  <div>
                    <p>{weather.name}</p>
                    <span>{weather.main.temp}<sup>&deg;C</sup></span>
                  </div>
                :
                  ''
              }
              <Link href='/playlists'>
                Minhas playlists
              </Link>
            </div>
      </Header>
      <Dashboard />
    </>
  )
}
