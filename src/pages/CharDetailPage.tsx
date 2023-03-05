import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Character } from '../../types';
import { getCharacterById } from '../services/characters';

export function CharDetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getCharacterById(id as string);
        setCharacter(data);
      } catch (e: any) {
        setError(e.message as string);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const color =
    character?.status === 'Alive'
      ? 'text-green-500'
      : character?.status === 'Dead'
      ? 'text-red-500'
      : 'text-gray-500';

  if (loading) {
    return <div className='text-center font-bold text-xl mt-28'>Loading...</div>;
  }

  if (error) {
    return <div className='text-center font-bold text-xl mt-28'>Something went wrong: {error}</div>;
  }

  return (
    <section className='bg-gray-600 rounded-lg px-1'>
      <div className='flex justify-between items-start p-5'>
        <div className='flex'>
          <img src={character?.image} alt={character?.name} className='rounded-full w-28' />
          <div className='ml-5'>
            <h2 className='font-bold text-2xl'>{character?.name}</h2>
            <div className='flex items-center gap-3'>
              <span className={`font-bold text-4xl ${color}`}>•</span>
              <span>{character?.species}</span>
            </div>
          </div>
        </div>
        <button className='transform transition duration-500 hover:scale-125'>
          <HeartIcon className='w-10' />
        </button>
      </div>
      <div className='border border-t border-gray-300 my-6' />
      <h1 className='font-bold text-4xl p-3'>Information</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 px-4 py-6'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <span className='text-gray-400'>Status:</span>
            <p>{character?.status}</p>
          </div>
          <div className='flex flex-col'>
            <span className='text-gray-400'>Location:</span>
            <p>{character?.location.name}</p>
          </div>
          <div className='flex flex-col'>
            <span className='text-gray-400'>Type:</span>
            <p>{character?.type || 'N/A'}</p>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <span className='text-gray-400'>Last seen:</span>
            <p>{character?.location.name}</p>
          </div>
          <div className='flex flex-col'>
            <span className='text-gray-400'>Gender:</span>
            <p>{character?.gender || 'N/A'}</p>
          </div>
          <div className='flex flex-col'>
            <span className='text-gray-400'>Origin:</span>
            <p>{character?.origin.name || 'N/A'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
