import { Link } from 'react-router-dom';
import { Episode } from '../../types';

interface EpisodeCardProps extends Episode {}
export function EpisodeCard({ id, name, air_date, episode, characters }: EpisodeCardProps) {
  return (
    <Link to={`/episodes/${id}`}>
      <div className='bg-gray-600 rounded-xl p-3 hover:scale-105 transform transition duration-400'>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Air Date:</strong> {air_date}
        </p>
        <p>
          <strong>Episode:</strong> {episode}
        </p>
        <p>
          <strong>Characters:</strong> {characters.length}
        </p>
      </div>
    </Link>
  );
}
