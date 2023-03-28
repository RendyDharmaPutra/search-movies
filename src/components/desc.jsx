'use client';
import { Card, CardHeader, CardBody, Typography, Breadcrumbs } from '@material-tailwind/react';

export default function Desc(props) {
  return (
    <Card className="my-5  overflow-hidden bg-gray-50 shadow-gray-400 shadow-sm">
      <CardHeader floated={false} shadow={false} color="transparent" className="p-3 m-0 rounded-none">
        <Breadcrumbs separator="|" className="">
          <h1 className="opacity-80">{props.data.Rated}</h1>
          <h1 className="opacity-80">{props.data.Year}</h1>
        </Breadcrumbs>
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="black">
          {props.data.Title} ({props.data.Year})
        </Typography>
        <Typography variant="lead" color="black" className="mt-3 font-normal text-lg">
          Writer - {props.data.Writer}
        </Typography>
        <Typography variant="lead" color="black" className="mt-3 font-normal text-lg">
          Actor - {props.data.Actors}
        </Typography>
        <Typography variant="lead" color="black" className="mt-3 font-normal text-lg">
          Genre - {props.data.Genre} | Duration - {props.data.Runtime}
        </Typography>
        <Typography variant="lead" color="black" className="mt-3 font-normal text-lg">
          Release - {props.data.Released} | DVD - {props.data.DVD}
        </Typography>
      </CardBody>
    </Card>
  );
}
