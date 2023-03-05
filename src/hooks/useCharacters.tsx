import { useState, useEffect } from 'react';
import { Character } from '../../types';
import { getCharacters } from '../services/characters';

export function useCharacters() {
  const [data, setData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getCharacters();
        setData(data.results);
      } catch (e: any) {
        setError(e.message as string);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, loading, error };
}
