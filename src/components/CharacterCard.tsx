import { Character } from '../../types';
import { Link } from 'react-router-dom';
import { HeartIcon, LinkIcon } from '@heroicons/react/24/outline';

interface CharacterCardProps extends Character {}
export function CharacterCard({
  id,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
  image,
  episode,
  url,
  created,
}: CharacterCardProps) {
  const color =
    status === 'Alive' ? 'text-green-500' : status === 'Dead' ? 'text-red-500' : 'text-gray-500';

  return (
    <article className='flex max-h-48 bg-gray-600 rounded-lg'>
      <div>
        <img src={image} alt={name} className='w-full h-full object-cover rounded-l-lg' />
      </div>
      <div className='px-4 py-2 flex-1'>
        <h2 className={`font-bold text-2xl`}>{name}</h2>
        <div className='flex items-center gap-3'>
          <span className={`font-bold text-4xl ${color}`}>•</span>
          <span>{status}</span>
          {' - '}
          <span>{species}</span>
        </div>
        <p className='flex flex-col mt-2'>
          <span className='text-gray-400'>Location:</span>
          {location.name}
        </p>
      </div>
      <div className='flex flex-col justify-end mt-3 text-blue-500 gap-5 p-3'>
        <button className='transform transition duration-500 hover:scale-125'>
          <HeartIcon className='w-6' />
        </button>
        <Link
          to={`/characters/${id}`}
          className='transform transition duration-500 hover:scale-125'
        >
          <LinkIcon className='w-6' />
        </Link>
      </div>
    </article>
  );
}
