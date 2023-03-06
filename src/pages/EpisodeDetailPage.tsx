import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Episode } from '../../types';
import { getEpisodeById } from '../services/episodes';
import { Loading } from '../components';
import { ErrorPage } from './ErrorPage';
import { api } from '../services/api';

export function EpisodeDetailPage() {
  const { id } = useParams();
  const [episode, setEpisode] = useState<Episode | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const episode = await getEpisodeById(id as string);
        const chars = await Promise.all(
          episode.characters.map(async (url: string) => {
            const { data } = await api.get(url);
            return { name: data.name, image: data.image, id: data.id };
          })
        );
        episode.characters = chars;
        setEpisode(episode);
      } catch (_) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <section className='py-10 bg-gray-600 rounded-lg px-1'>
      <div className='p-3'>
        <p>
          <strong>Name:</strong> {episode?.name}
        </p>
        <p>
          <strong>Air Date:</strong> {episode?.air_date}
        </p>
        <p>
          <strong>Episode:</strong> {episode?.episode}
        </p>
      </div>
      <div className='border border-t border-gray-300 my-6' />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {episode?.characters.map((char) => (
          <Link to={`/characters/${char.id}`} key={char.id}>
            <div className='bg-gray-800 flex gap-3 items-center rounded-xl p-3 hover:scale-105 transform transition duration-400'>
              <img src={char.image} alt={char.name} className='rounded-full w-20' />
              <p>{char.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
