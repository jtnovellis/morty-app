import { useState } from 'react';
import { Pagination, Loading, LocationCard } from '../components';
import { useLocations } from '../hooks/useLocations';
import { ErrorPage } from './ErrorPage';

export function LocationPage() {
  const [page, setPage] = useState(1);
  const { data, loading, error, hasNextPage, hasPreviousPage } = useLocations({ page });

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
      <section className='grid grid-cols-1 md:grid-cols-2 gap-6 py-10'>
        {data?.map((location) => (
          <LocationCard key={location.id} {...location} />
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
