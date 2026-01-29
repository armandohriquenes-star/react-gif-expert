
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

interface imgProps {
  id: any,
  title: any,
  url: any;
}
export const GridGifs = ({ category }: any) => {

  const { images, isLoading } = useFetchGifs(category);



  return (
    <>
      <h3> {category} </h3>
      {
        isLoading && (<p>Cargando...</p>)
      }
      <div className='card-grid'>
        {
          images.map((image: imgProps) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  );
};
