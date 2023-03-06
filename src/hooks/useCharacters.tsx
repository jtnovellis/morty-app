import { useState, useEffect } from 'react';
import { Character } from '../../types';
import { getCharacters } from '../services/characters';

export function useCharacters({ page = 1 }) {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getCharacters(page);
        setData(data.results);
        setHasNextPage(data.info.next !== null);
        setHasPreviousPage(data.info.prev !== null);
      } catch (e: any) {
        setError(e.message as string);
      } finally {
        setLoading(false);
      }
    })();
  }, [page]);

  return { data, loading, error, hasNextPage, hasPreviousPage };
}
