import { useState } from 'react';
import { EpisodeCard } from '../components/EpisodeCard';
import { useEpisodes } from '../hooks/useEpisodes';
import { Loading, Pagination } from '../components';
import { ErrorPage } from './ErrorPage';

export function EpisodesPage() {
  const [page, setPage] = useState(1);
  const { data, loading, error, hasNextPage, hasPreviousPage } = useEpisodes({ page });

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
        {data?.map((episode) => (
          <EpisodeCard key={episode.id} {...episode} />
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
