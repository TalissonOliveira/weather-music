import { createContext, useEffect, useState } from 'react'
import { WeatherInfos, TrackProps, Playlist } from '../interfaces/interfaces'

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

export const AppProvider = ({ children }) => {
    const [weather, setWeather] = useState<WeatherInfos>()
    const [playlists, setPlaylists] = useState<Playlist[]>([])
    const [tracks, setTracks] = useState<TrackProps[]>([])
    const [playlist, setPlaylist] = useState<Playlist>()
    const [category, setCategory] = useState('')

    useEffect(() => {
        const parsedPlaylists = JSON.parse(localStorage.getItem('playlists'))
        if (!parsedPlaylists) return
        setPlaylists(parsedPlaylists?.reverse())
    }, [])

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