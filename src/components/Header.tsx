import { useState } from 'react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import Logo from '../assets/icon-144x144.png';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <header className='bg-gray-700 fixed top-0 w-full z-10'>
        <nav className='hidden sm:flex justify-between items-center px-4 py-3 mx-auto max-w-6xl'>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='w-16' />
          </Link>
          <ul className='flex gap-8 px-4 font-bold items-start'>
            <li className=' hover:bg-blue-500 rounded-lg p-2'>
              <Link to='/'>Home</Link>
            </li>
            <li className=' hover:bg-blue-500 rounded-lg p-2'>
              <Link to='/episodes'>Episodes</Link>
            </li>
            <li className=' hover:bg-blue-500 rounded-lg p-2'>
              <Link to='/locations'>Locations</Link>
            </li>
          </ul>
          <div className='flex items-center justify-between gap-4'>
            <Link
              to='/login'
              className='bg-blue-500 hover:bg-blue-700 font-bold px-3 py-2 rounded-lg'
            >
              Login
            </Link>
            <div className='relative'>
              <span className='absolute bg-blue-500 top-0 right-0 rounded-full w-5 h-5 flex items-center justify-center'>
                0
              </span>
              <Link to='/user/favorites'>
                <HeartIcon className='w-12' />
              </Link>
            </div>
          </div>
        </nav>
        <nav className='flex sm:hidden justify-between items-center px-4 py-3'>
          <Link to='/'>
            <img src={Logo} alt='Logo' className='w-16' />
          </Link>
          <button onClick={handleClick}>
            <Bars3Icon className='w-10' />
          </button>
        </nav>
      </header>

      {isOpen && (
        <div className='absolute top-0 w-full h-full bg-gray-700'>
          <div className='flex items-center justify-between px-4 py-3'>
            <Link to='/'>
              <img src={Logo} alt='Logo' className='w-16' />
            </Link>
            <button onClick={handleClick}>
              <XMarkIcon className='w-10' />
            </button>
          </div>
          <ul className='flex gap-8 flex-col px-4 mt-10 font-bold items-start'>
            <li className=' hover:bg-blue-500 rounded-lg p-2'>
              <Link to='/'>Home</Link>
            </li>
            <li className=' hover:bg-blue-500 rounded-lg p-2'>
              <Link to='/episodes'>Episodes</Link>
            </li>
            <li className=' hover:bg-blue-500 rounded-lg p-2'>
              <Link to='/locations'>Locations</Link>
            </li>
          </ul>
          <div className='flex items-center justify-between mt-12 px-4 gap-10'>
            <Link
              to='/login'
              className='flex-1 bg-blue-500 hover:bg-blue-700 font-bold px-3 py-2 rounded-lg text-center'
            >
              Login
            </Link>
            <div className='relative'>
              <span className='absolute bg-blue-500 top-0 right-0 rounded-full w-5 h-5 flex items-center justify-center'>
                0
              </span>
              <Link to='/user/favorites'>
                <HeartIcon className='w-12' />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
