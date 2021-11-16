import React, { Fragment } from 'react';
import { AlbumItem } from '../../model';
import classes from './Album.module.scss';

export default function Album(props: { album: AlbumItem }) {
  return (
    <div className={classes.container}>
      <div/>
      <div className={classes.list}>
        {
          (props.album.song || []).map((song, index) => (
            <Fragment key={song.id}>
              <span>{index}</span>
              <span>{song.title}</span>
            </Fragment>
          ))
        }
      </div>
      <div/>
    </div>
  )
}
