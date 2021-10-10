import { PlaylistTrack } from '../PlaylistTrack/index'
import { ResponsePlaylistTrack, ResponseToken, ResponsePlaylist } from '../../interfaces/interfaces'
import { useContext, useEffect, useState } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Context } from '../../context/context'
import { apiSpotify } from '../../services/api'

export function ShowTracks() {
    const [token, setToken] = useState('')
    const { weather, tracks, setTracks, setPlaylist, setPlaylists, setCategory, category } = useContext(Context)

    useEffect(() => {
        function getPlaylistsFromLocalStorage() {
            const parsedPlaylists = JSON.parse(localStorage.getItem('playlists'))
            setPlaylists(parsedPlaylists)
        }
        getPlaylistsFromLocalStorage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // Obter token spotify
    useEffect(() => {
        const authorizationHeadersOptions: AxiosRequestConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${btoa(process.env.NEXT_PUBLIC_CLIENT_ID+':'+process.env.NEXT_PUBLIC_CLIENT_SECRET)}`,
            },
            data: 'grant_type=client_credentials'
        }
        axios('https://accounts.spotify.com/api/token', authorizationHeadersOptions)
            .then((responseToken: AxiosResponse<ResponseToken>) => setToken(responseToken.data.access_token))
    }, [])

    useEffect(() => {
        console.log(weather)
        if (weather) {
            if (weather.main.temp >= 32) {
                setCategory('rock')
            } else if (weather.main.temp < 32 && weather.main.temp >= 24) {
                setCategory('pop')
            } else if (weather.main.temp < 24 && weather.main.temp >= 16) {
                setCategory('classical')
            } else {
                setCategory('focus')
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weather])

    // Buscar playlist
    useEffect(() => {
        async function requests() {
            const headerOptions: AxiosRequestConfig = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }

            try {
                const responsePlaylists: AxiosResponse<ResponsePlaylist> = await apiSpotify(
                    `browse/categories/${category}/playlists`, headerOptions
                )

                const responsePlaylistTracks: AxiosResponse<ResponsePlaylistTrack> = await apiSpotify(
                    `playlists/${responsePlaylists.data.playlists.items[0].id}/tracks?limit=20`, headerOptions
                )

                setTracks(responsePlaylistTracks.data.items)
                
                console.log(responsePlaylistTracks.data.items)
            } catch (error) {
                console.log(error)
            }
        }
        requests()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    useEffect(() => {
        const newPlaylist = {
            tracks,
            date: new Date(),
            temperature: weather?.main.temp,
            category: category,
            city: weather?.name
        }
        setPlaylist(newPlaylist)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tracks])

    return (
        <div>
        {tracks.length !== 0 ?
            tracks.map(({ track }) => {
                return (
                    <PlaylistTrack
                        key={track.name}
                        name={track.name}
                        artists={track.artists}
                        album={track.album}
                        external_urls={track.external_urls}
                        explicit={track.explicit}
                        preview_url={track.preview_url}
                    />
                )
            })
            :
            <p>Nada por enquanto.<br/>Escolha uma cidade para começar!</p>
        }
        </div>
    )
}