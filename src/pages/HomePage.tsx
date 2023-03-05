import { CharacterCard } from '../components';
import { useCharacters } from '../hooks/useCharacters';

export function HomePage() {
  const { data } = useCharacters();

  return (
    <section className='grid grid-cols-1 py-10 gap-8 sm:grid-cols-2'>
      {data?.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </section>
  );
}
