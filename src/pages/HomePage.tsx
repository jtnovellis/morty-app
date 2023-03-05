import { CharacterCard } from '../components';
import { useCharacters } from '../hooks/useCharacters';
import { Loading } from '../components';
import { ErrorPage } from './ErrorPage';

export function HomePage() {
  const { data, loading, error } = useCharacters();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <section className='grid grid-cols-1 py-10 gap-8 sm:grid-cols-2'>
      {data?.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </section>
  );
}
