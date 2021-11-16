export enum Methods {
  album = 'album',
  albumList2 = 'albumList2',
}

export type SubsonicResponse<T> = {
  'subsonic-response': {
    [key in Methods]: T
  }
}

export interface AlbumsList {
  album: Array<{
    name: string;
    id: string;
    created: string;
    starred: string;
    artist: string;
    year: string;
  }>
}

export interface AlbumListResponse extends SubsonicResponse<AlbumsList> {
}


export interface AlbumItemResponse extends SubsonicResponse<AlbumItem> {
}

export interface Song {
  id: string,
  parent: '261',
  isDir: false,
  title: 'Tokyomatrix 3000',
  // album: 'Robot Wars',
  // artist: 'Binärpilot',
  // track: 1,
  // year: 2007,
  // genre: 'Electronic',
  // coverArt: '261',
  // size: 4569216,
  // contentType: 'audio/mpeg',
  // suffix: 'mp3',
  // duration: 285,
  // bitRate: 128,
  // path: 'Binaerpilot/Robot Wars/01_binaerpilot_-_tokyomatrix_3000.mp3',
  // userRating: 5,
  // averageRating: 5,
  // playCount: 7772,
  // created: '2017-03-12T11:08:03.000Z',
  // albumId: '29',
  // artistId: '15',
  // type: 'music',
  // bookmarkPosition: 8150
}

export interface AlbumItem {
  id: string;
  artistId: string;
  createdAt: string;
  song: Array<Song>;
  // "id": "29",
  // "name": "Robot Wars",
  // "artist": "Binärpilot",
  // "artistId": "15",
  // "coverArt": "al-29",
  // "songCount": 6,
  // "duration": 1678,
  // "playCount": 22670,
  // "created": "2017-03-12T11:08:04.000Z",
  // "starred": "2021-10-05T19:51:49.477Z",
  // "year": 2007,
  // "genre": "Electronic",
}
