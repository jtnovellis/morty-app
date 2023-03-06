import { useState, useEffect } from 'react';
import { getEpisodes } from '../services/episodes';
import { Episode } from '../../types';

export function useEpisodes({ page = 1 }) {
  const [data, setData] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const epidoses = await getEpisodes(page);
        setData(epidoses.results);
        setHasNextPage(epidoses.info.next !== null);
        setHasPreviousPage(epidoses.info.prev !== null);
      } catch (_) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading, error, hasNextPage, hasPreviousPage };
}
