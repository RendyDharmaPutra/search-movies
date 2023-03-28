'use client';
import { Card, CardHeader } from '@material-tailwind/react';
import Image from 'next/image';

export default function Thumb(props) {
  return (
    <Card shadow={true} className="group/card shadow-gray-600 shadow-md relative grid h-[27rem] w-full max-w-[19rem] xl:max-w-[21rem] xl:h-[29rem] items-center justify-center overflow-hidden ">
      <CardHeader id="bg" floated={false} shadow={false} color="transparent" className="absolute inset-0 m-0 h-full w-full rounded-none ">
        <Image src={props.img} alt="ui/ux review check" className="h-full w-full bg-cover bg-center" width={336} height={464} />

        <div className="group-hover/card:from-black/60 group-hover/card:via-black/20 to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 transition-all" />
      </CardHeader>
    </Card>
  );
}
