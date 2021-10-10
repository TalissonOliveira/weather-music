export interface WeatherInfos {
    main: {
        temp: number
    }
    name: string
}

export interface ResponseToken {
    access_token: string
}

export interface PlaylistId {
    id: string
}

export interface ResponsePlaylist {
    playlists: {
        items: PlaylistId[]
    }
}

export interface ResponsePlaylistTrack {
    items: Playlist[]
}

export interface ImageAlbum {
    url: string
}

export interface Album {
    images: ImageAlbum[]
}

export interface SoundTrack {
    album: Album
}

export interface Track {
    track: SoundTrack[]
}

export interface ExternalUrls {
    spotify: string
}

export interface Artists {
    name: string
    external_urls: ExternalUrls
}

export interface Playlist {
    album: Album
    artists: Artists
    explicit: boolean
    external_urls: ExternalUrls
    name: string
    preview_url: string | null
}

export interface TrackProps {
    track: Playlist
}