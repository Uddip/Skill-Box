import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-gray-800 shadow-md py-5 px-5 md:px-10">
      {/* left - Logo/Link to Home */}
      <div className="relative flex items-center h-10 my-auto w-32">
        <div className="cursor-pointer p-2 bg-transparent hover:shadow-md">
          <p className="inline text-2xl bold text-gray-100">Skill</p>
          <p className="inline text-2xl bold text-purple-500">Box</p>
        </div>
      </div>

      {/* middle - Search */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm" >
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 focus:placeholder-gray-800" 
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right - Options */}
      <div className="flex items-center justify-end text-gray-500">
        <div className="hidden md:flex md:h-10 md:w-32 md:rounded-full md:items-center md:justify-center hover:bg-gray-100 cursor-pointer">
          <p className="">Become a host</p>
        </div>
        <button type="button" className=" h-10 w-10 mr-1 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-100">
          <GlobeAltIcon className="h-5" />
        </button>

        {/* Menu */}
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />

          {/* Profile - View profile as others see it */}
          {/* My Account - Change account preferences/details */}
          {/* Settings - Change site settings */}
          {/* Log Out */}
        </div>
      </div>
    </header>
  )
}

export default Header
