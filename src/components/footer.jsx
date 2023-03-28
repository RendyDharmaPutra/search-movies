'use client';
import { Typography } from '@material-tailwind/react';

export default function Footer() {
  return (
    <div className="mt-auto p-4 w-full bg-gray-50  text-center ">
      <Typography variant="lead" color="gray">
        <span className="font-bold">©2023 • Search Movies</span> by <span className="font-bold text-blue-500">Archilst</span>
      </Typography>
    </div>
  );
}
