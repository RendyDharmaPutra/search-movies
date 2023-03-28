'use client';
import { Button, IconButton, Input } from '@material-tailwind/react';
import { useState } from 'react';
import Movies from './movies';

export default function Home() {
  const [query, setQuery] = useState('');

  const onSearch = (e) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };

  return (
    <div className="p-4">
      <form className="p-4 flex flex-row  sm:max-w-[22rem] bg-gray-50 rounded-lg shadow-gray-400 shadow-sm " onSubmit={onSearch}>
        <Input variant="standard" label="Search Movie" className="max-w-[12rem] sm:max-w-[16rem]" />

        <Button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{' '}
          </svg>
        </Button>
      </form>
      {query && <Movies query={query} />}
    </div>
  );
}
