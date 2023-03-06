import { useUser } from '../hooks/useUser';
import { Link } from 'react-router-dom';

export function FavoritesPage() {
  const { currentUser, currentFavorites, deleteFavorite } = useUser();

  return (
    <section className='flex flex-col'>
      <h1 className='text-4xl font-bold text-center'>Favorites</h1>

      <div className='flex items-center gap-4'>
        <div className='border border-white flex-1' />
        <h2 className='text-4xl font-bold text-end'>{currentUser?.name}</h2>
      </div>
      {currentFavorites?.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {currentFavorites?.map((favorite) => (
            <article className='flex max-h-48 bg-gray-600 rounded-lg' key={favorite.id}>
              <div>
                <img
                  src={favorite.character.image}
                  alt={favorite.character.name}
                  className='w-full h-full object-cover rounded-l-lg'
                />
              </div>
              <div className='px-4 py-2 flex flex-1 flex-col justify-between'>
                <h2 className={`font-bold text-2xl`}>{favorite.character.name}</h2>
                <Link to={`/characters/${favorite.character.id}`}>More detail</Link>
                <button
                  className='text-red-500 font-bold'
                  onClick={() => {
                    deleteFavorite(favorite.id);
                    window.location.reload();
                  }}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-2xl font-bold'>You don't have any favorites yet</h2>
          <p className='text-gray-400'>Go to the home page and add some!</p>
        </div>
      )}
    </section>
  );
}
