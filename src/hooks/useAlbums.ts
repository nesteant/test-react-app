import { useEffect, useState } from 'react';
import { AlbumListResponse, AlbumsList } from '../model';

export const useAlbums = () => {
  let [albums, setAlbums] = useState<AlbumsList>({
    album: []
  });
  useEffect(() => {
    fetch('http://demo.subsonic.org/rest/getAlbumList2.view?u=guest&p=guest&f=json&c=1&v=1.16.1&type=newest')
      .then(async response => {
        let body: AlbumListResponse = await response.json();
        const albumList = body['subsonic-response'].albumList2;
        setAlbums(albumList);
      });
  }, []);
  return [albums];
}
