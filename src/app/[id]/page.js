'use client';
import useSWR from 'swr';
import Error from '@/components/error';
import Thumb from '@/components/thumb';
import Desc from '@/components/desc';
import SubDesc from '@/components/sub';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Detail({ params }) {
  const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=37642a8&i=${params.id}&plot=full`, fetcher);

  return (
    <div className="relative p-6 flex flex-col items-center xl:flex-row xl:justify-around ">
      {data && data.Response !== 'False' ? (
        <>
          <Thumb img={data.Poster} />

          <div className="flex flex-col max-w-[24rem] md:min-w-[46rem] md:max-w-[46rem] lg:min-w-[56rem] lg:max-w-[56rem] xl:min-w-[56rem] xl:max-w-[56rem] ">
            <Desc data={data} />

            <SubDesc data={data} />
          </div>
        </>
      ) : (
        <>
          <Error desc={true} />
        </>
      )}
      {/* <h1>{params.id}</h1>
      <h1>{JSON.stringify(data)}</h1> */}
    </div>
  );
}
