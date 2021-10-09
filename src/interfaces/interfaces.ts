export interface ResponseData {
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

export interface ImageAlbum {
    url: string
}

export interface Artists {
    name: string
    external_urls: {
        spotify: string
    }
}

export interface Track {
    track: {
        album: {
            images: ImageAlbum[]
        }
        artists: Artists[]
        explicit: boolean
        external_urls: {
            spotify: string
        }
        name: string
        preview_url: string | null
    }
}

