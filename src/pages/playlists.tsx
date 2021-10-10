import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header';
import { ShowPlaylists } from '../components/ShowPlaylists'

export default function Playlists() {
    return (
        <>
            <Head>
                <title>Playlists salvas</title>
            </Head>
            <Header>
                <h1>Veja suas playlists salvas</h1>
                <Link href={'/'}>
                    Voltar
                </Link>
            </Header>
            <ShowPlaylists />
        </>
    )
}