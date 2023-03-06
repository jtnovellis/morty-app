import { useState, useEffect } from 'react';
import { getLocations } from '../services/locations';
import { LocationType } from '../../types';

export function useLocations({ page = 1 }) {
  const [data, setData] = useState<LocationType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const locations = await getLocations(page);
        setData(locations.results);
        setHasNextPage(locations.info.next !== null);
        setHasPreviousPage(locations.info.prev !== null);
      } catch (_) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);

  return { data, loading, error, hasNextPage, hasPreviousPage };
}
