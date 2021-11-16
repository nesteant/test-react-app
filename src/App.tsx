import React, { useState } from 'react';
import './App.scss';
import Album from './features/album/Album';
import Gallery from './features/gallery/Gallery';
import { useAlbum } from './hooks/useAlbum';
import { AlbumItem } from './model';

function App() {

  const [album, setAlbum] = useState<AlbumItem>({} as any);
  const [fetchAlbum] = useAlbum(setAlbum);

  const onSelectAlbum = (id: string) => {
    fetchAlbum(id);
  }

  return (
    <div className="App">
      <Gallery onSelectAlbum={(id) => onSelectAlbum(id)}/>
      <Album album={album}/>
    </div>
  );
}

export default App;
