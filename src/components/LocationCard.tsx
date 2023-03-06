import { Link } from 'react-router-dom';
import { LocationType } from '../../types';

interface LocationCardProps extends LocationType {}

export function LocationCard({ id, name, type, dimension, residents }: LocationCardProps) {
  return (
    <Link to={`/locations/${id}`}>
      <div className='bg-gray-600 rounded-xl p-3 hover:scale-105 transform transition duration-400'>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Type:</strong> {type}
        </p>
        <p>
          <strong>Dimension:</strong> {dimension}
        </p>
        <p>
          <strong>Residents:</strong> {residents.length}
        </p>
      </div>
    </Link>
  );
}
