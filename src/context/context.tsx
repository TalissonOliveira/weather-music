import { createContext, useEffect, useState } from 'react'
import { WeatherInfos, TrackProps } from '../interfaces/interfaces'

interface Playlist {
    tracks: TrackProps[]
    date: Date
    category: string
    temperature: WeatherInfos,
    city: String
}

interface ContextValue {
    playlists: Playlist[]
    setPlaylists: (value: any) => void
    tracks: TrackProps[]
    setTracks: (value: any) => void
    weather: WeatherInfos
    setWeather: (value: any) => void
    playlist: Playlist
    setPlaylist: (value: any) => void
    category: string
    setCategory: (value: any) => void
}

export const Context = createContext<ContextValue | undefined>(void 0)

export const TrackProvider = ({ children }) => {
    const [weather, setWeather] = useState<WeatherInfos>()
    const [playlists, setPlaylists] = useState<Playlist[]>(testNullLocalStorage())
    const [tracks, setTracks] = useState<TrackProps[]>([])
    const [playlist, setPlaylist] = useState<Playlist>()
    const [category, setCategory] = useState('')

    useEffect(() => {
        localStorage.setItem('playlists', '[]')
        function getPlaylistsFromLocalStorage() {
            const parsedPlaylists = JSON.parse(localStorage.getItem('playlists'))
            setPlaylists(parsedPlaylists?.reverse())
        }
        getPlaylistsFromLocalStorage()
    }, [])

    function testNullLocalStorage() {
        if (typeof window !== 'undefined') {
            const playlist = JSON.parse(localStorage.getItem('playlists'))
            if (playlist !== null ) {
                return playlist?.reverse()
            }
            return []
        }
    }

    return (
        <Context.Provider value={{
                playlists,
                setPlaylists,
                tracks,
                setTracks,
                weather,
                setWeather,
                setPlaylist,
                playlist,
                category,
                setCategory
        }}>
            {children}
        </Context.Provider>
    )
}