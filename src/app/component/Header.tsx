import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-10 lg:px-20 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/image/logo.svg" alt="Furniro" width={120} height={40} />
      </div>
      <nav className="hidden md:flex space-x-8 text-gray-700 font-medium ml-24 ">
        
           <Link href={"/home"} className='hover:text-[#B88E2F]'>Home</Link>
           <Link href={"/shop"} className='hover:text-[#B88E2F]'>Shop</Link>
           <Link href={"/blog"} className='hover:text-[#B88E2F]'>Blog</Link>
          <Link href={"/contact"} className='hover:text-[#B88E2F]'>Contact</Link>
        
        
      </nav>
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-[#B88E2F]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="text-gray-700 hover:text-red-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <button className="text-gray-700 hover:text-[#B88E2F]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>
        <button className="text-gray-700 hover:text-[#B88E2F]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h -6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;