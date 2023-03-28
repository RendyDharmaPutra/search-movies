import Movie from '@/components/card';
import Error from '@/components/error';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Movies(props) {
  const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=37642a8&s=${props.query}`, fetcher);
  return (
    <div className="p-3 my-5 flex flex-wrap justify-around ">
      {data &&
        data.Response === 'True' &&
        data.Search.map((movie) => {
          return <Movie movie={movie} />;
        })}

      {data && data.Response === 'False' && <Error desc={false} />}
    </div>
  );
}
