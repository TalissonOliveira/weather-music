import { PlaylistTrack } from '../PlaylistTrack/index'
import { Track, ResponseToken, ResponsePlaylist } from '../../interfaces/interfaces'
import { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { S_IFDIR } from 'constants'

interface ShowTracksProps {
    weather: {
        main: {
            temp: number
        }
        name: string
    }
}

interface ResponsePlaylistTrack {
    items: Track[]
}

export function ShowTracks({ weather }: ShowTracksProps) {
    const [token, setToken] = useState('')
    const [tracks, setTracks] = useState<Track[]>([])
    const [category, setCategory] = useState('')

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

    // Definir categoria
    useEffect(() => {
        if (weather !== undefined) {
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
                const responsePlaylists: AxiosResponse<ResponsePlaylist> = await axios(
                    `https://api.spotify.com/v1/browse/categories/${category}/playlists`, headerOptions
                )

                const responsePlaylistTracks: AxiosResponse<ResponsePlaylistTrack> = await axios(
                    `https://api.spotify.com/v1/playlists/${responsePlaylists.data.playlists.items[0].id}/tracks?limit=20`, headerOptions
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

    return (
        <div>
        {
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
        }
        </div>
    )
}