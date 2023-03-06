import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
interface PaginationProps {
  next: boolean;
  previous: boolean;
  page: number;
  increment: () => void;
  decrement: () => void;
}
export function Pagination({ next, previous, page, increment, decrement }: PaginationProps) {
  return (
    <div className='bg-gray-600 rounded-lg flex items-center mb-10 gap-3 justify-around mx-auto p-2 mx'>
      <button
        className={`rounded-lg p-2 ${!previous ? 'bg-gray-500' : 'bg-blue-500'}`}
        onClick={decrement}
        disabled={!previous}
      >
        <ChevronLeftIcon className='w-6' />
      </button>
      <span className='px-4 py-2 bg-gray-500 rounded-lg'>{page}</span>
      <button
        className={`rounded-lg p-2 ${!next ? 'bg-gray-500' : 'bg-blue-500'}`}
        onClick={increment}
        disabled={!next}
      >
        <ChevronRightIcon className='w-6' />
      </button>
    </div>
  );
}
