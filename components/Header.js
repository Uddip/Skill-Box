import Image from "next/image";
import Link from "next/link";
import {
  SearchIcon,
  UserCircleIcon,
  BellIcon,
  ChatAlt2Icon,
} from "@heroicons/react/solid";
import {
  PencilIcon,
  CogIcon,
  LogoutIcon,
  DesktopComputerIcon,
  LoginIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { signIn, signOut /*useSession*/ } from "next-auth/react";
import AccountDropDown from "./AccountDropDown";

// Dummy notification list
const notifications = [
  {
    name: "Friend Request",
    description: "You have a pending friend request",
    href: "##",
    icon: IconOne,
  },
  {
    name: "New Video",
    description: "Someone you follow posted a new skill video",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "Message",
    description: "New message from your skill buddy",
    href: "##",
    icon: IconThree,
  },
];

function Header() {
  const router = useRouter();
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");

  async function logoutUser() {
    setError("");

    try {
      await logout();
      router.push("/");
    } catch {
      setError("Failed to log out");
    }
  }

  // const { data: session } = useSession();

  // console.log(session);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-gray-800 shadow-md py-5 px-5 md:px-10">
      {/* Logo/Link to Home */}
      <div className="relative flex items-center h-10 my-auto w-32">
        <Link href="/">
          <div className="cursor-pointer p-2 bg-transparent hover:shadow-md">
            <p className="inline text-2xl font-bold text-gray-100">Skill</p>
            <p className="inline text-2xl font-bold text-purple-500">Box</p>
          </div>
        </Link>
      </div>

      {/* Search */}
      <div className="relative flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow px-4 bg-transparent outline-none text-sm text-gray-100 placeholder-gray-400 focus:placeholder-gray-800"
          type="text"
          placeholder="Start your search"
        />
        <button className="hidden md:inline md:mr-2 h-8 w-8 bg-purple-500 text-gray-100 rounded-full cursor-pointer ">
          <SearchIcon className="h-8 p-2" />
        </button>
      </div>

      {/* Options */}
      {currentUser ? (
        <div className="flex items-center justify-end text-gray-500">
          {/* Upload Media */}
          <button
            type="button"
            className="h-10 w-10 mr-1 rounded-full items-center justify-center bg-transparent hover:bg-gray-100"
          >
            <UploadIcon className="h-8 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-100" />
          </button>

          {/* Chat Message */}
          <button
            type="button"
            className="h-10 w-10 mr-1 rounded-full flex items-center justify-center bg-transparent hover:bg-gray-100"
          >
            <Link href="/chat">
              <ChatAlt2Icon className="h-8" />
            </Link>
          </button>

          {/* Notifications */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                  ${open ? "" : "text-opacity-90"}
                   group px-2 py-2 ml-1 rounded-full inline-flex items-center justify-center text-base font-medium hover:bg-gray-100 outline-none`}
                >
                  <BellIcon className="h-7" />
                  <span className="flex absolute h-5 w-4 -top-0 -right-0">
                    <span className="absolute inline-flex rounded-full h-3 w-3 bg-purple-500 "></span>
                  </span>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-3/4 left-1/4 sm:px-0">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-2 ring-gray-600 ring-opacity-50">
                      <div className="relative grid gap-8 bg-gray-800 p-7">
                        {notifications.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-700 hover:text-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                          >
                            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-purple-400 sm:h-12 sm:w-12">
                              <item.icon aria-hidden="true" />
                            </div>
                            <div className="ml-4 flex flex-col text-left">
                              <p className="text-sm font-medium text-white mb-1">
                                {item.name}
                              </p>
                              <p className="text-sm">{item.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                      <div className="p-4 bg-gray-800">
                        <Link href="/settings/notifications">
                          <div className="cursor-pointer flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-700 bg-gray-800 hover:text-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                            <span className="flex items-center">
                              <span className="text-sm font-medium text-white">
                                <CogIcon
                                  className="inline w-5 h-5 mr-2 text-purple-400"
                                  aria-hidden="true"
                                />
                                Notification Settings
                              </span>
                            </span>
                          </div>
                        </Link>
                        <Link href="/notifications">
                          <div className="cursor-pointer flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-700 bg-gray-800 hover:text-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50">
                            <span className="flex items-center">
                              <DesktopComputerIcon
                                className="inline w-5 h-5 mr-2 text-purple-400"
                                aria-hidden="true"
                              />
                              <span className="text-sm font-medium text-white">
                                Go to Notifications
                              </span>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          {/* User Menu */}
          {/* <AccountDropDown /> */}
          <Menu as="div" className="relative inline-block text-left mr-1 ml-2">
            <div>
              <Menu.Button className="flex items-center space-x-2 rounded-full cursor-pointer hover:text-gray-100 outline-none">
                {/* {session ? (
                <>
                  <img
                    onClick={signOut}
                    src={session.user.image}
                    alt="profile pic"
                    className=" h-9 w-9 rounded-full cursor-pointer object-cover"
                  />
                </>
              ) : (
              )} */}
                <UserCircleIcon className="h-10" />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-56 my-2 origin-top-right bg-gray-800 divide-y divide-gray-600 rounded-md shadow-lg ring-2 ring-gray-600 ring-opacity-50 focus:outline-none">
                {/* Profile & Settings */}
                <div className="px-1 py-1">
                  <Link href="/profile">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-gray-700 text-white" : "text-white"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <PencilIcon
                              className="w-5 h-5 mr-2 text-purple-400"
                              aria-hidden="true"
                            />
                          ) : (
                            <PencilIcon
                              className="w-5 h-5 mr-2 text-purple-400"
                              aria-hidden="true"
                            />
                          )}
                          Profile
                        </button>
                      )}
                    </Menu.Item>
                  </Link>
                  <Link href="/settings/general">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-gray-700 text-white" : "text-white"
                          } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <CogIcon
                              className="w-5 h-5 mr-2 text-purple-400"
                              aria-hidden="true"
                            />
                          ) : (
                            <CogIcon
                              className="w-5 h-5 mr-2 text-purple-400"
                              aria-hidden="true"
                            />
                          )}
                          Settings
                        </button>
                      )}
                    </Menu.Item>
                  </Link>
                </div>

                {/* Login/Logout */}
                <div className="px-1 py-1">
                  <Menu.Item>
                    <div
                      onClick={logoutUser}
                      className="p-2 flex w-full text-sm hover:bg-gray-700 text-white rounded-md cursor-pointer"
                    >
                      <LogoutIcon
                        className="w-5 h-5 mr-2 text-purple-400"
                        aria-hidden="true"
                      />
                      <p>Logout</p>
                    </div>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <div className="flex items-center justify-end text-gray-500">
          <Link href="/auth/signin">
            <div className="flex items-center justify-center p-1 w-2/4 h-full md:w-28 md:h-12 text-sm font-bold select-none border-2 border-purple-600 hover:bg-purple-600  active:bg-purple-800 active:border-purple-800 active:scale-95 transition transform duration-150 text-gray-200 rounded-md cursor-pointer">
              <p>Login</p>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

function IconOne() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
      />
    </svg>
  );
}
