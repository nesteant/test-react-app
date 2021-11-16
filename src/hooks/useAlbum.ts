import { AlbumItem, AlbumItemResponse } from '../model';

export const useAlbum = (setAlbum: (album: AlbumItem) => void) => {

  const fetchAlbum = async (id: string) => {
    const response = await fetch(`http://demo.subsonic.org/rest/getAlbum.view?u=guest&p=guest&f=json&c=1&v=1.16.1&id=${id}`)
    const body: AlbumItemResponse = await response.json();
    const album = body['subsonic-response'].album;
    // setAlbum(album);
    setAlbum(album);
  };

  return [fetchAlbum];
};
