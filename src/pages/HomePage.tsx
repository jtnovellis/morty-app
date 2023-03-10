import { CharacterCard, Pagination } from '../components';
import { Loading } from '../components';
import { ErrorPage } from './ErrorPage';
import { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';

export function HomePage() {
  const [page, setPage] = useState(1);
  const { data, loading, error, hasNextPage, hasPreviousPage } = useCharacters({ page });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage />;
  }

  function increment() {
    setPage((prev) => prev + 1);
  }
  function decrement() {
    setPage((prev) => prev - 1);
  }

  return (
    <div className='flex flex-col'>
      <section className='grid grid-cols-1 py-10 gap-8 sm:grid-cols-2'>
        {data?.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </section>
      <Pagination
        next={hasNextPage}
        previous={hasPreviousPage}
        page={page}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
}
