'use client';

import { Card, CardBody, Typography } from '@material-tailwind/react';
import Link from 'next/link';

export default function Error(props) {
  return (
    <Card className="max-w-[30rem] overflow-hidden text-center bg-red-400 shadow-2xl shadow-red-700">
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          Film tidak ditemukan!
        </Typography>
        {props.desc === true ? (
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            <Link href="/" className="underline hover:underline-offset-4 transition-all">
              Silahkan Kembali ke halaman utama!
            </Link>
          </Typography>
        ) : (
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            Silahkan masukkan judul film dengan tepat!
          </Typography>
        )}
      </CardBody>
    </Card>
  );
}
