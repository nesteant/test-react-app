import { useRef } from 'react';
import { useAlbums } from '../../hooks/useAlbums';
import classes from './Gallery.module.scss';

type Props = { onSelectAlbum: (id: string) => void };

export default function Gallery(props: Props) {
  const [albumList] = useAlbums();
  const containerRef = useRef<HTMLElement>();
  const scrollLeft = () => {

    if (containerRef.current!.scrollLeft < 220) {
      containerRef.current!.scrollLeft = containerRef.current!.scrollWidth;
    } else {
      containerRef.current!.scrollLeft -= 220;
    }

  }
  const scrollRight = () => {
    const htmlElement = containerRef.current!;
    let scrollDiff = htmlElement.scrollWidth - htmlElement.scrollLeft;
    console.log(htmlElement.scrollLeft, htmlElement.scrollWidth, scrollDiff)
    const containerWidth = htmlElement.offsetWidth;
    if (scrollDiff - containerWidth < 220) {
      htmlElement.scrollLeft = 0;
    } else {
      htmlElement.scrollLeft += 220;
    }
  }

  return (
    <div className={classes.gallery}>
      <div className={`${classes.arrow} left`} onClick={e => scrollLeft()}>&lArr;</div>
      <div className={classes.container} ref={containerRef as any}>
        {
          albumList.album.map(item => (
            <div className={classes.album} key={item.id} onClick={e => props.onSelectAlbum(item.id)}>
              {item.name}
            </div>
          ))
        }
      </div>
      <div className={`${classes.arrow} right`} onClick={e => scrollRight()}>&rArr;</div>
    </div>
  );
}
