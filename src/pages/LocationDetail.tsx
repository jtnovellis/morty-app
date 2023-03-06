import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { LocationType } from '../../types';
import { Loading } from '../components';
import { ErrorPage } from './ErrorPage';
import { getLocationById } from '../services/locations';
import { api } from '../services/api';

export function LocationDetailPage() {
  const { id } = useParams();
  const [location, setLocation] = useState<LocationType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const location = await getLocationById(id as string);
        const residents = await Promise.all(
          location.residents.map(async (url: string) => {
            const { data } = await api.get(url);
            return { name: data.name, image: data.image, id: data.id };
          })
        );
        location.residents = residents;
        setLocation(location);
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
          <strong>Name:</strong> {location?.name}
        </p>
        <p>
          <strong>Type:</strong> {location?.type}
        </p>
        <p>
          <strong>location:</strong> {location?.dimension}
        </p>
        <p>
          <strong>Residents:</strong> {location?.residents.length}
        </p>
      </div>
      <div className='border border-t border-gray-300 my-6' />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {location?.residents.map((char) => (
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
