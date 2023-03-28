'use client';
import { Card, CardHeader, CardBody, Typography, Chip } from '@material-tailwind/react';
import Link from 'next/link';

export default function Movie(props) {
  return (
    <Card shadow={true} className="group/card  shadow-gray-600 shadow-md my-4 relative grid h-[26rem] w-full max-w-[18rem] items-end justify-center overflow-hidden">
      <CardHeader id="bg" floated={false} shadow={false} color="transparent" className="absolute inset-0 m-0 h-full w-full rounded-none ">
        <img src={props.movie.Poster} alt="Poster" className="h-full w-full bg-center bg-cover" />

        <div className="group-hover/card:from-black/70 group-hover/card:via-black/30 to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 transition-all" />
      </CardHeader>
      <CardBody className="flex flex-col w-[18rem] invisible group-hover/card:visible relative py-6 px-6 md:px-8 ">
        <Typography variant="h2" color="white" className="mb-4 font-bold text-xl leading-[1.5]">
          <Link href={`/${props.movie.imdbID}`} className="hover:text-blue-800 transition-all ">
            {props.movie.Title} ({props.movie.Year})
          </Link>
        </Typography>
        <Chip value={props.movie.Type} className="w-[4.5rem] text-center" />
      </CardBody>
    </Card>
  );
}
